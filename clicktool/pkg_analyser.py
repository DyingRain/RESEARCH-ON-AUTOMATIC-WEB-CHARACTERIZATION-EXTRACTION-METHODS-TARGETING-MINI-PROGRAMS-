import json
# 注意，不仅需要pip，还需要额外安装软件
from graphviz import Digraph
import os
import shutil


class Page:
    def __init__(self, path, root_path, describe):
        self.path = path
        self.root_path = root_path
        self.describe = describe  # 页面描述


class Special:
    def __init__(self, path):
        self.path = path
        self.function_dict = {}  # 函数——函数所在的页面路径


class Pages:
    def __init__(self, path, root_path, type):
        self.path = path
        self.root_path = root_path
        self.page_dict = {}  # 子页面路径-子页面类
        self.function_dict = {}  # 函数——函数所在的页面
        self.type = type  # 页面类别，子包/主包


class SubPkg:
    def __init__(self, root_path):
        self.root_path = root_path
        self.pages_dict = {}  # 页面路径——页面类
        self.function_dict = {}  # 函数——函数所在的页面


class MainPkg:
    def __init__(self, root_path):
        self.root_path = root_path
        self.pages_list = {}
        self.page = {}


class PkgAnalyzer:

    def __init__(self, miniapp_path):
        self.miniapp_path = miniapp_path
        self.name = miniapp_path.split('/')[-1]
        self.spkg = {}  # 子包路径——子包类
        self.pages = {}  # 页面路径——页面类
        self.page = {}  # 子页面路径——子页面类
        self.index_page = None
        self.tabBars = {}  # 导航栏路径——子页面类
        self.js_list = []
        self.function = []
        self.special = {}
        self.entry = ''
        self.analyse(miniapp_path)

    """
    绘制层次树状图
    """

    def draw_graph(self, save_path):
        g = Digraph('G', filename=save_path, encoding='utf-8')
        # 设置全局属性，增加层级间距
        g.attr(ranksep='4')
        # g.attr(fontname='SimHei', encoding='utf-8')  # 改为系统中的中文字体
        # g.node_attr.update(fontname='SimHei')  # 设置节点字体
        # g.edge_attr.update(fontname='SimHei')  # 设置边字体
        """
        创建节点
        """
        g.node('Miniapp', label='Miniapp', color="green", style="filled", fontsize="20")
        for pages_path in self.pages.keys():
            if self.pages[pages_path].type == "spkg":
                g.node(pages_path, label=pages_path, color=".7 .3 1.0", style="filled", fontsize="20")
            if self.pages[pages_path].type == "tabbar":
                if pages_path == self.entry:
                    print(self.entry)
                    print("找到首页", pages_path)
                    g.node(pages_path, label=pages_path, color="green", style="filled", fontsize="20")
                else:

                    g.node(pages_path, label=pages_path, color="yellow", style="filled", fontsize="20")
            else:
                g.node(pages_path, label=pages_path)
        # for special in self.special.keys():
        # g.node(special, label=special, color="red", fontsize="20")
        """
        创建边  ps:对于未被注册的js文件要额外处理
        """
        for pages_path in self.pages.keys():
            if self.pages[pages_path].function_dict:
                for key in self.pages[pages_path].function_dict.keys():
                    if self.pages[pages_path].function_dict[key] in self.special.keys():
                        pass
                        #print("不过关")
                        # g.edge(self.pages[pages_path].function_dict[key], pages_path, label=key, color="red",
                        # fontsize="15")
                    else:
                        for pages_path2 in self.pages.keys():
                            if self.pages[pages_path].function_dict[key].startswith(pages_path2):
                                g.edge(pages_path2, pages_path, label=key, fontsize="15")

        for tab_path in self.tabBars.keys():
            g.edge('Miniapp', self.tabBars[tab_path].root_path, fontsize="15", color="green")

        g.view()

    '''
    解析配置文件
    '''

    def analyse_config(self, miniapp_path):
        if os.path.exists(os.path.join(miniapp_path, 'app-config.json')):
            with open(os.path.join(miniapp_path, 'app-config.json'), 'r', encoding='utf-8') as fp:
                app_config = json.load(fp)
                app_config_keys = {i.lower(): i for i in app_config.keys()}
                print("配置项:", app_config_keys.keys())
                # 处理页面与子页面
                if "pages" in app_config_keys.keys():
                    if "entrypagepath" in app_config_keys.keys():
                        self.entry = app_config[app_config_keys["entrypagepath"]].split(".html")[0]

                    # 页面索引初始化
                    for pages in app_config[app_config_keys['pages']]:
                        self.pages[pages] = Pages(pages, '', "default")
                    # 寻找子页面与页面的对应
                    if "page" in app_config_keys.keys():
                        for page_path in app_config[app_config_keys['page']].keys():
                            for pages_path in self.pages.keys():
                                if page_path.startswith(pages_path):
                                    item = app_config[app_config_keys['page']][page_path]
                                    litem = item["window"]
                                    describe = None
                                    if 'navigationBarTitleText' in litem.keys():
                                        describe = litem['navigationBarTitleText']
                                    self.page[page_path] = Page(page_path, pages_path, describe)
                                    self.pages[pages_path].page_dict[page_path] = Page(page_path, pages_path, describe)
                    # 处理子包
                    if "subpackages" in app_config_keys.keys():
                        # 记录子包根路径
                        for spkg in app_config[app_config_keys['subpackages']]:
                            root_path = spkg["root"]
                            self.spkg[root_path] = SubPkg(root_path)

                        # 子包添加页面根路径
                        for pages_path in self.pages.keys():
                            for spkg_path in self.spkg.keys():
                                if pages_path.startswith(spkg_path):
                                    self.pages[pages_path].type = "spkg"
                                    self.pages[pages_path].root_path = spkg_path
                                    self.spkg[spkg_path].pages_dict[pages_path] = self.pages[pages_path]

                    # 处理导航栏
                    if "tabbar" in app_config_keys.keys():
                        tabbar = app_config[app_config_keys["tabbar"]]
                        bar_list = tabbar["list"]
                        for item in bar_list:
                            for pages_path in self.pages.keys():
                                if item["pagePath"].startswith(pages_path):
                                    self.tabBars[item["pagePath"]] = Page(item["pagePath"], pages_path, item["text"])
                                    self.pages[pages_path].type = "tabbar"

                else:
                    print("解析失败")
        else:
            print("配置文件不存在")

    @staticmethod
    def find_all_occurrences(main_string, sub_string):
        start = 0
        positions = []
        while True:
            pos = main_string.find(sub_string, start)
            if pos == -1:
                break
            positions.append(pos)
            start = pos + 1
        return positions

    """
     解析单个子页面的js文件寻找可能的跳转函数
     2025/3/11 对于一些没有被注册的组件（common/vender.js）进行处理  由于js文件进行了部分混淆，实际能提取到的函数信息有限，目前实现页面间的跳转关系，但是具体如何跳转
     以及对应的函数的解析还存在困难
    """

    def analyse_page_js(self, page_path):
        # print(page_path)
        if os.path.exists(page_path):
            flist = {}
            with open(page_path, 'r', encoding='utf-8') as fp:
                js = fp.read()
                path = page_path.split('\\', 1)[1]
                path = path.replace("\\", "/")

                flag = 0
                is_page = 0
                # 从所有页面找
                for pages_path in self.pages.keys():
                    if path.startswith(pages_path):
                        is_page = 1  # 该js为页面文件
                    positions = self.find_all_occurrences(js, "/" + pages_path)

                    if positions:
                        flag = 1
                        for pos in positions:
                            func_pos = js[0:pos + 1].rfind(": function")
                            cur = func_pos
                            while js[cur] != ' ':
                                cur -= 1
                            function_name = js[cur + 1:func_pos]
                            # 函数触发子包路径
                            flist[function_name] = pages_path
                            # 函数——其所在文件
                            self.pages[pages_path].function_dict[function_name] = path
                            if self.pages[pages_path].root_path != '':
                                self.spkg[self.pages[pages_path].root_path].pages_dict[pages_path] = self.pages[
                                    pages_path]
                if is_page and flag:
                    print(path, ":该js为页面文件")
                if is_page == 0 and flag == 1:
                    print(path, ":该js未被注册")
                    self.special[path] = Special(path)

            return flist
        else:
            print("页面对应js文件不存在")
            return None

    def analyse(self, miniapp_path):
        self.analyse_config(miniapp_path)
        # 从所有js文件（包括没有被注册的文件）
        for home, dirs, files in os.walk(miniapp_path):
            for filename in files:
                if filename.endswith(".js") and not filename.startswith("app"):
                    js_path = os.path.join(home, filename)
                    self.analyse_page_js(js_path)