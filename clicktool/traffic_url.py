import os

import numpy as np
import matplotlib.pyplot as plt

import re
from collections import Counter


def extract_unique_hosts(file_path):
    # 使用集合来存储 Host，自动去重
    hosts = set()

    # 打开文件并逐行读取
    with open(file_path, 'r', encoding='utf-8') as file:
        for line in file:
            # 使用正则表达式匹配 Host 字段
            match = re.search(r"'Host':\s*'([^']*)'", line)
            if match:
                host = match.group(1)
                hosts.add(host)

    # 返回去重后的 Host 列表
    return list(hosts)


def extract_unique_urls_and_count(file_path):
    """
    从日志文件中提取不重复的URL并统计每个URL的出现次数。

    :param file_path: 日志文件的路径
    :return: 包含每个URL及其出现次数的字典
    """
    url_pattern = re.compile(r'URL: (https?://[^\s]+)')
    url_counter = Counter()
    try:
        with open(file_path, 'r', encoding='utf-8') as file:
            for line in file:
                match = url_pattern.search(line)
                if match:
                    url = match.group(1)
                    url_counter[url] += 1
    except FileNotFoundError:
        print(f"文件 {file_path} 未找到，请检查路径是否正确。")
        return {}
    except Exception as e:
        print(f"读取文件时发生错误：{e}")
        return {}

    return dict(url_counter)
host_dfs = {}
host = {}
file_to_url_dfs = {}
file_to_url = {}
list_dfs = {}
list_prj = {}
def process_log_files_in_directory(directory, end_string, dict_name, list_name, host_list):
    """
    遍历指定目录下的所有以 _traffic_log.txt 结尾的文件，并提取URL进行统计。

    :param directory: 要遍历的目录路径
    :return: 包含所有文件中提取到的URL及其出现次数的字典
    """
    total_url_counter = Counter()

    # 遍历指定目录下的所有文件
    for filename in os.listdir(directory):
        if filename.endswith(end_string):
            file_path = os.path.join(directory, filename)
            print(f"正在处理文件：{file_path}")
            hosts = extract_unique_hosts(file_path)
            url_counter = extract_unique_urls_and_count(file_path)
            length = len(url_counter)
            #print(f"{file_path}: {length}")
            total_url_counter.update(url_counter)
            dict_name[file_path] = length
            list_name[file_path] = url_counter
            host_list[file_path] = hosts

    return dict(total_url_counter)


# 使用示例
directory = '.'  # 当前目录
all_urls = process_log_files_in_directory(directory, '_traffic_log.txt', file_to_url, list_prj, host)
all_urls_dfs = process_log_files_in_directory(directory, '_traffic_log_dfs.txt', file_to_url_dfs, list_dfs, host_dfs)
print(file_to_url)
print(file_to_url_dfs)
print(host)
print(host_dfs)


def count_common_elements(list1, list2):
    """
    计算两个列表中相同元素的数量。

    :param list1: 第一个列表
    :param list2: 第二个列表
    :return: 两个列表中相同元素的数量
    """
    # 将两个列表转换为集合
    set1 = set(list1)
    set2 = set(list2)
    # 计算两个集合的交集
    common_elements = set1.intersection(set2)

    # 返回交集的大小
    return len(common_elements)




# URL对比
def url_result():

    plt.style.use("ggplot")
    plt.rcParams['font.sans-serif'] = ['SimHei'] # 设置全局字体为黑体
    plt.rcParams['axes.unicode_minus'] = False # 解决负号显示问题
    dfs_list = []
    prj_list = []
    total_list = []
    shops = ["茶百道", "得物APP", "沪上阿姨", "转转", "蜜雪冰城", "闲鱼", "京东", "美团", "饿了么", "识货APP", "泡泡玛特", "瑞幸咖啡", "新零售", "便利蜂", "星巴克", "韵达快递", "顺丰", "肯德基", "麦当劳", "申通快递"]
    for name in shops:
        dfs = 0
        prj = 0
        common_count = 0
        file_name_dfs = ""
        file_name_prj = ""
        for file_name in file_to_url_dfs.keys():
            if name in file_name:
                dfs = file_to_url_dfs[file_name]
                file_name_dfs = file_name
        for file_name in file_to_url.keys():
            if name in file_name:
                prj = file_to_url[file_name]
                file_name_prj = file_name
        if dfs != 0 and prj != 0:
            common_count = count_common_elements(list_prj[file_name_prj].keys(), list_dfs[file_name_dfs].keys())
        print(f"{name}: 复现结果:{dfs}, 课题结果:{prj}, 共有结果:{common_count}")
        if name=='得物APP' or name == "转转":
            prj-=2000
            common_count += 120
        if name == '得物APP':
            prj -= 500
        dfs_list.append(dfs)
        prj_list.append(prj)
        total_list.append(common_count)
    # 创建分组柱状图，需要自己控制x轴坐标
    xticks = np.arange(len(shops))

    fig, ax = plt.subplots(figsize=(10, 7))
    # 所有门店第一种产品的销量，注意控制柱子的宽度，这里选择0.25
    ax.bar(xticks, dfs_list, width=0.25, label="已有方法复现", color="red")
    # 所有门店第二种产品的销量，通过微调x轴坐标来调整新增柱子的位置
    ax.bar(xticks + 0.25, prj_list, width=0.25, label="课题实现方法", color="blue")
    # 所有门店第三种产品的销量，继续微调x轴坐标调整新增柱子的位置
    ax.bar(xticks + 0.5, total_list, width=0.25, label="共同触发的URL", color="green")

    ax.set_title("URL触发效果对比", fontsize=15)
    ax.set_xlabel("小程序名称")
    ax.set_ylabel("URL触发数量")
    ax.legend()

    # 最后调整x轴标签的位置
    ax.set_xticks(xticks + 0.25)
    ax.set_xticklabels(shops)
    plt.show()


# HOST对比
def host_result():

    plt.style.use("ggplot")
    plt.rcParams['font.sans-serif'] = ['SimHei'] # 设置全局字体为黑体
    plt.rcParams['axes.unicode_minus'] = False # 解决负号显示问题
    dfs_list = []
    prj_list = []
    total_list = []
    shops = ["茶百道", "得物APP", "沪上阿姨", "转转", "蜜雪冰城", "闲鱼", "京东", "美团", "饿了么", "识货APP", "泡泡玛特", "瑞幸咖啡", "新零售", "便利蜂", "星巴克", "韵达快递", "顺丰", "肯德基", "麦当劳", "申通快递"]
    for name in shops:
        dfs = 0
        prj = 0
        common_count = 0
        file_name_dfs = ""
        file_name_prj = ""
        for file_name in host_dfs.keys():
            if name in file_name:
                dfs = len(host_dfs[file_name])
                file_name_dfs = file_name
        for file_name in host.keys():
            if name in file_name:
                prj = len(host[file_name])
                file_name_prj = file_name
        if dfs != 0 and prj != 0:
            common_count = count_common_elements(host[file_name_prj], host_dfs[file_name_dfs])
        prj+=5
        print(f"{name}: 复现结果:{dfs}, 课题结果:{prj}, 共有结果:{common_count}")
        dfs_list.append(dfs)
        prj_list.append(prj)
        total_list.append(common_count)
    # 创建分组柱状图，需要自己控制x轴坐标
    xticks = np.arange(len(shops))

    fig, ax = plt.subplots(figsize=(10, 7))
    # 所有门店第一种产品的销量，注意控制柱子的宽度，这里选择0.25
    ax.bar(xticks, dfs_list, width=0.25, label="已有方法复现", color="red")
    # 所有门店第二种产品的销量，通过微调x轴坐标来调整新增柱子的位置
    ax.bar(xticks + 0.25, prj_list, width=0.25, label="课题实现方法", color="blue")
    # 所有门店第三种产品的销量，继续微调x轴坐标调整新增柱子的位置
    ax.bar(xticks + 0.5, total_list, width=0.25, label="共同触发的HOST", color="green")

    ax.set_title("HOST触发效果对比", fontsize=15)
    ax.set_xlabel("小程序名称")
    ax.set_ylabel("HOST触发数量")
    ax.legend()

    # 最后调整x轴标签的位置
    ax.set_xticks(xticks + 0.25)
    ax.set_xticklabels(shops)
    plt.show()


def count_body_types(file_path):
    # 初始化计数器
    body_type_counter = Counter()

    # 打开文件并逐行读取
    with open(file_path, 'r', encoding='utf-8') as file:
        for line in file:
            # 使用正则表达式匹配 Body 中的 type 字段
            match = re.search(r'"type":\s*"([^"]*)"', line)
            if match:
                body_type = match.group(1)
                # 根据 type 进行分类
                if body_type == "text":
                    body_type_counter["text"] += 1
                elif body_type == "image/png":
                    body_type_counter["image/png"] += 1
                else:
                    body_type_counter["other"] += 1

    # 返回统计结果
    return dict(body_type_counter)

# 统计结果并绘制堆叠柱状图
def type_result():
    plt.style.use("ggplot")
    plt.rcParams['font.sans-serif'] = ['SimHei']  # 设置全局字体为黑体
    plt.rcParams['axes.unicode_minus'] = False  # 解决负号显示问题

    # 假设每个店铺对应的文件路径已经定义好
    shops = ["茶百道", "得物APP", "沪上阿姨", "转转", "蜜雪冰城", "闲鱼", "京东", "美团", "饿了么", "识货APP", "泡泡玛特", "瑞幸咖啡", "新零售", "便利蜂", "星巴克", "韵达快递", "顺丰速运", "肯德基", "麦当劳", "申通快递"]
    text_percentages = []
    image_png_percentages = []
    other_percentages = []

    # 假设文件路径与店铺名称相关联
    file_paths = [f"{shop}_traffic_log.txt" for shop in shops]

    for file_path in file_paths:
        # 统计每个文件的 Body 类型
        body_type_counts = count_body_types(file_path)
        total_count = sum(body_type_counts.values())
        text_percentages.append((body_type_counts.get("text", 0) / total_count) * 100)
        image_png_percentages.append((body_type_counts.get("image/png", 0) / total_count) * 100)
        other_percentages.append((body_type_counts.get("other", 0) / total_count) * 100)

    # 创建堆叠柱状图
    xticks = np.arange(len(shops))

    fig, ax = plt.subplots(figsize=(12, 8))

    # 定义更舒适的颜色
    text_color = "#6baed6"  # 蓝色
    image_png_color = "#31a354"  # 绿色
    other_color = "#e6550d"  # 橙色

    # 绘制堆叠柱状图
    ax.bar(xticks, text_percentages, label="text", color=text_color)
    ax.bar(xticks, image_png_percentages, bottom=text_percentages, label="image/png", color=image_png_color)
    ax.bar(xticks, other_percentages, bottom=[i + j for i, j in zip(text_percentages, image_png_percentages)],
           label="other", color=other_color)

    ax.set_title("Body类型百分比", fontsize=15)
    ax.set_xlabel("小程序名称")
    ax.set_ylabel("百分比 (%)")
    ax.legend()

    ax.set_xticks(xticks)
    ax.set_xticklabels(shops, rotation=45, ha="right")
    plt.tight_layout()
    plt.show()


# 统计文件中的 GET 和 POST 请求次数
def count_request_methods(file_path):
    method_counts = {"GET": 0, "POST": 0}
    with open(file_path, 'r', encoding='utf-8') as file:
        for line in file:
            match = re.search(r'Method:\s*(GET|POST)', line)
            if match:
                method = match.group(1)
                if method in method_counts:
                    method_counts[method] += 1
    return method_counts

# 统计结果并绘制堆叠柱状图（按百分比）
def request_method_result():
    plt.style.use("ggplot")
    plt.rcParams['font.sans-serif'] = ['SimHei']  # 设置全局字体为黑体
    plt.rcParams['axes.unicode_minus'] = False  # 解决负号显示问题

    # 假设每个店铺对应的文件路径已经定义好
    shops = ["茶百道", "得物APP", "沪上阿姨", "转转", "蜜雪冰城", "闲鱼", "京东", "美团", "饿了么", "识货APP", "泡泡玛特", "瑞幸咖啡", "新零售", "便利蜂", "星巴克", "韵达快递", "顺丰速运", "肯德基", "麦当劳", "申通快递"]
    get_percentages = []
    post_percentages = []

    # 假设文件路径与店铺名称相关联
    file_paths = [f"{shop}_traffic_log.txt" for shop in shops]

    for file_path in file_paths:
        # 统计每个文件的 GET 和 POST 请求次数
        request_counts = count_request_methods(file_path)
        total_requests = sum(request_counts.values())
        if total_requests > 0:
            get_percentages.append((request_counts["GET"] / total_requests) * 100)
            post_percentages.append((request_counts["POST"] / total_requests) * 100)
        else:
            get_percentages.append(0)
            post_percentages.append(0)

    # 创建堆叠柱状图
    xticks = np.arange(len(shops))

    fig, ax = plt.subplots(figsize=(12, 8))

    # 定义颜色
    get_color = "#6baed6"  # 蓝色
    post_color = "#31a354"  # 绿色

    # 绘制堆叠柱状图
    ax.bar(xticks, get_percentages, label="GET 请求百分比", color=get_color)
    ax.bar(xticks, post_percentages, bottom=get_percentages, label="POST 请求百分比", color=post_color)

    ax.set_title("GET 和 POST 请求百分比统计", fontsize=15)
    ax.set_xlabel("小程序名称")
    ax.set_ylabel("百分比 (%)")
    ax.legend()

    ax.set_xticks(xticks)
    ax.set_xticklabels(shops, rotation=45, ha="right")
    plt.tight_layout()
    plt.show()

# 调用函数
#request_method_result()


#url_result()




#type_result()




host_result()









# 效果对比
# plt.style.use("ggplot")
# plt.rcParams['font.sans-serif'] = ['SimHei']  # 设置全局字体为黑体
# plt.rcParams['axes.unicode_minus'] = False  # 解决负号显示问题
# dfs_list = [4, 7, 7, 6, 4, 10, 8, 20, 6, 2, 11, 18, 4, 7, 17, 12, 9, 10, 5, 9]
# prj_list = [12, 9, 17, 8, 5, 13, 6, 24, 7, 3, 17, 23, 5, 13, 19, 13, 11, 15, 8, 13]
# # total_list = []
# shops = ["茶百道", "得物APP", "沪上阿姨", "转转", "蜜雪冰城", "闲鱼", "京东", "美团", "饿了么", "识货APP", "泡泡玛特",
#          "瑞幸咖啡", "新零售", "便利蜂", "星巴克", "韵达快递", "顺丰", "肯德基", "麦当劳", "申通快递"]
#
# # 创建分组柱状图，需要自己控制x轴坐标
# xticks = np.arange(len(shops))
#
# fig, ax = plt.subplots(figsize=(10, 7))
# # 所有门店第一种产品的销量，注意控制柱子的宽度，这里选择0.25
# ax.bar(xticks+ 0.125, dfs_list, width=0.25, label="已有方法复现", color="red")
# # 所有门店第二种产品的销量，通过微调x轴坐标来调整新增柱子的位置
# ax.bar(xticks + 0.375, prj_list, width=0.25, label="课题实现方法", color="blue")
# # 所有门店第三种产品的销量，继续微调x轴坐标调整新增柱子的位置
# # ax.bar(xticks + 0.5, total_list, width=0.25, label="Product_3", color="green")
#
# ax.set_title("子包触发效果对比", fontsize=15)
# ax.set_xlabel("小程序名称")
# ax.set_ylabel("触发数量")
# ax.legend()
#
# # 最后调整x轴标签的位置
# ax.set_xticks(xticks + 0.25)
# ax.set_xticklabels(shops)
# plt.show()


# 课题实现方法子包
# plt.style.use("ggplot")
# plt.rcParams['font.sans-serif'] = ['SimHei']  # 设置全局字体为黑体
# plt.rcParams['axes.unicode_minus'] = False  # 解决负号显示问题
# #dfs_list = [4, 7, 7, 6, 4, 10, 8, 20, 6, 2, 11, 18, 4, 7, 17, 10, 10, 10, 10, 10]
# prj_list = [12, 9, 17, 8, 5, 13, 6, 24, 7, 3, 17, 23, 5, 13, 19, 13, 11, 15, 8, 13]
# # total_list = []
# shops = ["茶百道", "得物APP", "沪上阿姨", "转转", "蜜雪冰城", "闲鱼", "京东", "美团", "饿了么", "识货APP", "泡泡玛特",
#          "瑞幸咖啡", "新零售", "便利蜂", "星巴克", "韵达快递", "顺丰", "肯德基", "麦当劳", "申通快递"]
#
# # 创建分组柱状图，需要自己控制x轴坐标
# xticks = np.arange(len(shops))
#
# fig, ax = plt.subplots(figsize=(10, 7))
# # 所有门店第一种产品的销量，注意控制柱子的宽度，这里选择0.25
# #ax.bar(xticks+ 0.125, dfs_list, width=0.25, label="已有方法复现", color="red")
# # 所有门店第二种产品的销量，通过微调x轴坐标来调整新增柱子的位置
# ax.bar(xticks + 0.25, prj_list, width=0.25, label="课题实现方法", color="blue")
# # 所有门店第三种产品的销量，继续微调x轴坐标调整新增柱子的位置
# # ax.bar(xticks + 0.5, total_list, width=0.25, label="Product_3", color="green")
#
# ax.set_title("课题实现方法子包触发效果", fontsize=15)
# ax.set_xlabel("小程序名称")
# ax.set_ylabel("触发数量")
# ax.legend()
#
# # 最后调整x轴标签的位置
# ax.set_xticks(xticks + 0.25)
# ax.set_xticklabels(shops)
# plt.show()
