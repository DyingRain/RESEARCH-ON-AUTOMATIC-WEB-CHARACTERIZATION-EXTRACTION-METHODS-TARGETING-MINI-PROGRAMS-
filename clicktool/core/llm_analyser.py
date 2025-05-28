from langchain_openai import ChatOpenAI
from paddleocr import PaddleOCR
from pkg_analyser import PkgAnalyzer
from clicktool.core.xml_analyser import *
from ultralytics import YOLO

llm_api = ChatOpenAI(base_url="https://api.nuwaapi.com/v1",
                     api_key="sk-wugAKJoXSJXVuN9oZX2xv0TO7wUsa3mhpVm8MKroCjkjG8BA"
                     #api_key="sk-4mIbTta7cQnKIvUPu9PbMDmOmA6z2SUfwQ3DJYzZyYiKAqFk"
)
llm_api2 = ChatOpenAI(
                     api_key="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"
)
# ocr_engine = PaddleOCR(use_angle_cls=True, lang="ch")  # 使用中文模型
#
#
# def ocr_recognize_text(image):
#     """
#     使用 PaddleOCR 识别图像中的文字。
#
#     参数:
#         image: NumPy 数组格式的图像（RGB 格式）。
#
#     返回:
#         results: 列表，每个元素是一个元组 (text, box)，其中 text 是识别到的文字，box 是边界框坐标 (x1, y1, x2, y2)。
#     """
#     timestamp = int(time.time())  # 使用时间戳作为文件名
#     image_path = f"input_image_{timestamp}.png"
#
#     # 保存输入图像
#     cv2.imwrite(image_path, image)
#     print(f"输入图像已保存到: {image_path}")
#     # 将图像转换为 PaddleOCR 需要的格式
#     image_rgb = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)  # 确保图像是 RGB 格式
#     results = ocr_engine.ocr(image_rgb, cls=True)  # 调用 OCR 识别
#     # print("results:")
#     # print(results)
#     if results is None or results[0] is None:
#         print("OCR 识别失败，返回空结果")
#         return ""
#     # 解析 OCR 结果
#     ocr_results = ""
#     for line in results[0]:
#         # 提取边界框和文本信息
#         # print(line)
#         box = line[0]  # 边界框坐标，格式为 [[x1, y1], [x2, y2], [x3, y3], [x4, y4]]
#         text = line[1][0]  # 识别到的文字
#
#         try:
#             # 将边界框坐标转换为数值类型
#             x_coords = [float(point[0]) for point in box]
#             y_coords = [float(point[1]) for point in box]
#
#             # 计算边界框的最小和最大坐标
#             x1, x2 = min(x_coords), max(x_coords)
#             y1, y2 = min(y_coords), max(y_coords)
#
#             # 将结果添加到列表中
#             ocr_results = ocr_results + text
#         except (ValueError, TypeError) as e:
#             print(f"Error parsing box coordinates: {e}")
#             print(f"box: {box}")
#             continue  # 跳过当前 OCR 结果
#
#     print(ocr_results)
#     return ocr_results
#

def analysis_wxapkg(file_path="../wxapkg/project_file"):
    # 解析静态代码获得路由图
    pkg_analyser = PkgAnalyzer(file_path)
    pkg_analyser.draw_graph("test")
    click_graph = pkg_analyser.graph
    cursor = click_graph.initial_page
    tabbars = click_graph.tabbars
    tabbars.append(cursor)
    tabbar_info = {}
    for tabbar in tabbars:
        # print(click_graph.nodes[tabbar])
        tabbar_info[tabbar] = click_graph.nodes[tabbar]
    print(tabbar_info)
    return tabbar_info


# def get_current_page_xml():
#     # 手机屏幕当前页面
#     device = connect_device()
#     xml_dump = device.dump_hierarchy()
#     with open(f"locate_test.xml", "w", encoding="utf-8") as f:
#         f.write(xml_dump)
#     tree = etree.parse(f"locate_test.xml")
#     root = tree.getroot()
#     xml = XmlAnalyser(root)
#     # print(xml.image_list)
#
#     print(xml.text_list)
#     return xml.text_list


def match_tabbar(tabbar_info, text_list):
    """
    tabbar匹配
    """
    tabbar_prompt = """
    - Role: 小程序页面匹配专家
    - Background: 用户需要根据提供的tabbar名称列表以及其触发的子页面列表和手机当前小程序页面的xml文件内容列表，确定当前页面对应的tabbar。用户已经提供了两个列表，需要通过内容匹配来找到对应的tabbar。
    - Profile: 你是一位精通小程序开发和页面内容匹配的专家，能够快速分析列表中的数据，并找到页面内容与tabbar名称之间的关联。
    - Skills: 你具备数据处理、文本匹配、逻辑分析和快速决策的能力，能够准确地从大量文本中提取关键信息，并进行有效的匹配。
    - Goals: 根据提供的两个列表，分析并确定当前页面对应的tabbar名称。
    - Constrains: 仅基于提供的两个列表进行分析，不引入任何外部数据或假设。仅回答tabbar名称，答案不需要包含原因等分析过程
    - OutputFormat: 输出当前页面对应的tabbar名称。
    - Workflow:
      1. 遍历tabbar名称列表，提取每个tabbar名称的关键部分以及其会触发的子页面。
      2. 遍历页面内容列表，提取页面的关键信息，如页面标题、功能描述等。
      3. 对比页面内容与tabbar名称的关键部分，通过分析名称的语义找到最匹配的tabbar。
      4. 仅回答页面路径，答案不需要包含原因等分析过程。例如: Answer: pages/index/index
    - Examples:
      -例1:
      tabbar列表: {'pages/tabmine/tabmine': 节点:pages/tabmine/tabmine, 下一节点:{'account/ShippingAddressPage', 'order/buyer/orderList', 'clear/pages/orderHistory/orderHistory', 'account/MyCashPage', 'pages/tabmine/tabmine', 'notice/NoticeListPage', 'account/MyCouponPage', 'account/PrivacySettingPage', 'product/mySubscription/mySubscription', 'product/myCollect/myCollect'}, 类型:tabbar, 'pages/identify/index': 节点:pages/identify/index, 下一节点:{'identify/pages/classificationV2/index', 'account/MyCouponPage', 'pages/identify/index', 'identify/pages/web/web', 'identify/pages/offlinepublish/index', 'identify/pages/identifylist/index', 'identify/pages/publish/index'}, 类型:tabbar, 'pages/index/index': 节点:pages/index/index, 下一节点:{'pages/index/index'}, 类型:initial_page}
      页面文本列表: ['10:54', '得物App', '得物er-X9X8K8W5', '购买', '全部订单', '待付款', '待发货', '待收货', '我的想要', '39', '我的订阅', '3', '账户', '', '卡券', '1', '地址管理', '消息通知', '关注服务号', '客服中心', '购买', ' 鉴别', '我']
      页面内容列表中包含了'账户'、'卡券'和'地址管理'等关键词，这些与tabbar名称'pages/tabmine/tabmine'中的'account/MyCashPage'、'account/MyCouponPage'和'account/ShippingAddressPage'相对应，符合页面内容与tabbar名称的关联。
      Answer: pages/tabmine/tabmine
      -例2:
      tabbar列表: {'pages/tabmine/tabmine': 节点:pages/tabmine/tabmine, 下一节点:{'account/PrivacySettingPage', 'account/MyCashPage', 'account/MyCouponPage', 'account/ShippingAddressPage', 'product/myCollect/myCollect', 'notice/NoticeListPage', 'pages/tabmine/tabmine', 'product/mySubscription/mySubscription', 'clear/pages/orderHistory/orderHistory', 'order/buyer/orderList'}, 类型:tabbar, 'pages/identify/index': 节点:pages/identify/index, 下一节点:{'identify/pages/web/web', 'identify/pages/publish/index', 'account/MyCouponPage', 'pages/identify/index', 'identify/pages/identifylist/index', 'identify/pages/offlinepublish/index', 'identify/pages/classificationV2/index'}, 类型:tabbar, 'pages/index/index': 节点:pages/index/index, 下一节点:{'pages/index/index'}, 类型:initial_page}
      页面文本列表: ['10:56', '得物App', '搜索单品', '推荐', '鞋类', '潮服', '女装', '饰品', '包袋', '数码', '【蛇年开好运&到手两件】超值福利 时尚轻奢 奇遇美好 tkb 粉丝惊喜回馈 项链戒指手链耳饰 檀木 合金 S925银 锆石 男女同款情侣款', '¥', '109', '5000+人付款', '穆之天空 手表表带 小米适用 19CM 硅胶材质 适用于小米手环9/8/NFC腕带户外运动防水防汗男女款创意替换舒适佩戴透气智能手表配件手表表带', '¥', '42', '5000+人付款', '村上隆Takashi Murakami 《Doraemon Wow 》 限量版画 65.5*57.3cm 装饰画', '¥', '9999', '24人付款', 'LiNing李宁 赤兔6pro 体测体考 稳定支撑 柔软鞋面 能量反弹中底减震防滑耐磨 低帮 马拉松跑步鞋 男款 白色', '¥', '292', '40万+人付款', '购买', ' 鉴别', '我']
      页面内容列表中包含了'推荐'、'鞋类'、'潮服'等关键词，这些与tabbar名称'pages/index/index'中的'pages/index/index'相对应，符合页面内容与tabbar名称的关联。
      Answer: pages/index/index
      -例3:
      tabbar列表: {'pages/tabmine/tabmine': 节点:pages/tabmine/tabmine, 下一节点:{'product/myCollect/myCollect', 'account/PrivacySettingPage', 'account/ShippingAddressPage', 'account/MyCashPage', 'pages/tabmine/tabmine', 'product/mySubscription/mySubscription', 'clear/pages/orderHistory/orderHistory', 'order/buyer/orderList', 'account/MyCouponPage', 'notice/NoticeListPage'}, 类型:tabbar, 'pages/identify/index': 节点:pages/identify/index, 下一节点:{'identify/pages/classificationV2/index', 'identify/pages/web/web', 'identify/pages/publish/index', 'pages/identify/index', 'identify/pages/offlinepublish/index', 'identify/pages/identifylist/index', 'account/MyCouponPage'}, 类型:tabbar, 'pages/index/index': 节点:pages/index/index, 下一节点:{'pages/index/index'}, 类型:initial_page}
      页面文本列表: ['得物App', '品类多样 专业鉴别 快速准确', '', '累计鉴别超过', '902,881,238', '1.选择品类 > 2.拍照鉴别', '免费鉴别', '', 'AJ球鞋鉴别', '热门款潮鞋', 'COACH鉴别', '经典款箱包', '在线鉴别师', '查看全部44位', '', '正鞋队长柯南', '实战', '累计鉴别80w+', '目暮Sir', '实战', '累计鉴别78w+', '不变小樱', 'NIKE', '累计鉴别39w+', '奶啤一杯倒_', 'muscle', '累计鉴别91w+', '鉴别券', '免费权益 折扣优惠', '我的鉴别', '鉴别记录 都在这里', '购买', ' 鉴别', '我', '10:58']
      页面内容列表中包含了'AJ球鞋鉴别'、'COACH鉴别'、'在线鉴别师'等关键词，这些与tabbar名称'pages/identify/index'中的'identify/pages/classificationV2/index'、'identify/pages/web/web'和'identify/pages/publish/index'相对应，符合页面内容与tabbar名称的关联。
      Answer: pages/identify/index
      
    - Initialization: 在第一次对话中，请直接输出以下问题的答案："""
    answer = llm_api2.invoke(tabbar_prompt + f"tabbar名称列表：{tabbar_info}.页面文本列表：{text_list}").content
    if "Answer: " in answer:
        answer = answer.split("Answer: ")[1]
    #print(answer)
    return answer


def page_brief(page_text_list):
    prompt = """
    - Role: 小程序页面功能分析专家和用户界面交互顾问
    - Background: 用户需要根据小程序页面的文本内容判断该页面的功能，这通常是为了优化用户体验、进行界面设计评估或功能测试。用户提供的文本内容以列表形式呈现，需要通过分析这些文本内容来推断页面的核心功能。
    - Profile: 你是一位资深的小程序功能分析专家，对用户界面设计、交互逻辑以及用户体验有深入的理解和丰富的实践经验。你擅长通过文本内容分析来推断页面功能。
    - Skills: 你具备网页设计原理、用户交互分析、文本内容解读以及逻辑推理的综合能力，能够从文本内容中提取关键信息，结合常见的页面功能模式，准确判断页面的功能。
    - Goals: 通过分析提供的文本内容，准确判断小程序页面的功能，并提供简要的功能描述。
    - Constrains: 仅根据提供的文本内容进行分析，不依赖外部链接或视觉元素，确保分析结果基于文本逻辑和常见功能模式。
    - OutputFormat: 功能描述文本，包括页面功能的简要总结。
    - Workflow:
      1. 仔细阅读并解析提供的文本内容列表，提取关键信息。
      2. 根据提取的信息，结合常见的小程序页面功能模式，进行逻辑推理，判断页面功能。
      3. 提供功能描述，确保描述清晰、逻辑严谨。
    - Examples:
      - 例子1：文本内容：['13:03', '得物App', '搜索单品', '推荐', '鞋类', '潮服', '女装', '饰品', '包袋', '数码', '【蛇年开好运&到手两件】超值福利 时尚轻奢 奇遇美好 tkb 粉丝惊喜回馈 项链戒指手链耳饰 檀木 合金 S925银 锆石 男女同款情侣款', '¥', '109', '5000+人付款', '穆之天空 手表表带 小米适用 19CM 硅胶材质 适用于小米手环9/8/NFC腕带户外运动防水防汗男女款创意替换舒适佩戴透气智能手表配件手表表带', '¥', '42', '5000+人付款', '村上隆Takashi Murakami 《Doraemon Wow 》 限量版画 65.5*57.3cm 装饰画', '¥', '9999', '24人付款', 'LiNing李宁 赤兔6pro 体测体考 稳定支撑 柔软鞋面 能量反弹中底减震防滑耐磨 低帮 马拉松跑步鞋 男款 白色', '¥', '292', '40万+人付款', '购买', ' 鉴别', '我']
        功能描述：该页面是一个在线购物页面，用户可以搜索单品、浏览推荐的商品分类（鞋类、潮服、女装、饰品、包袋、数码）、购买商品和查看商品详情。页面上展示了多个商品信息，包括商品名称、价格以及购买人数，用户可以通过点击购买按钮进行购买操作。
      - 例子2：文本内容：['得物App', '品类多样 专业鉴别 快速准确', '', '累计鉴别超过', '902,988,867', '1.选择品类 > 2.拍照鉴别', '免费鉴别', '', 'AJ球鞋鉴别', '热门款潮鞋', 'COACH鉴别', '经典款箱包', '在线鉴别师', '查看全部45位', '', '紫金小飞侠', '专注Air Jordan', '累计鉴别107w+', '气球锅锅y', 'NIKE', '累计鉴别40w+', '柠檬修狗', 'AJ', '累计鉴别40w+', '一个看表的人', '工作需要', '累计鉴别3w+', '鉴别券', '免费权益 折扣优惠', '我的鉴别', '鉴别记录 都在这里', '购买', ' 鉴别', '我', '13:04']
        功能描述：该页面是一个在线商品鉴别页面，用户可以选择不同品类进行鉴别，包括AJ球鞋、COACH箱包等热门品牌，也可以通过拍照进行商品鉴别。页面提供免费鉴别服务，用户可以查看鉴别师信息以及鉴别记录。同时用户还可以获取鉴别券和享受优惠折扣。
      - 例子3： 文本内容：['13:06', '得物App', '得物er-X9X8K8W5', '购买', '全部订单', '待付款', '待发货', '待收货', '我的想要', '39', '我的订阅', '3', '账户', '', '卡券', '1', '地址管理', '消息通知', '关注服务号', '客服中心', '购买', ' 鉴别', '我']
        功能描述：该页面是一个用户个人中心页面，用户可以查看自己的全部订单情况（包括待付款、待发货、待收货）、管理收藏商品（我的想要）、查看订阅内容、管理账户信息、查看卡券、管理收货地址、接收消息通知、关注服务号以及联系客服中心。用户还可以进行购买操作和商品鉴别。
    - Initialization: 在第一次对话中，请根据以下文本内容直接输出页面的功能描述：
    
    """
    result = llm_api2.invoke(prompt + f"页面文本内容：{page_text_list}。").content
    return result


def judge_clickable(page_description, ui_text, ):
    """
    评估yolo扫描元素
    """
    prompt = """
    - Role: 小程序页面分析专家
    - Background: 用户需要根据小程序的页面描述和UI组件的文本内容，判断点击该UI组件是否会触发页面跳转。这种需求通常出现在小程序开发或功能测试阶段，需要对页面逻辑和UI组件的交互机制有清晰的理解。
    - Profile: 你是一位专注于小程序开发和页面交互分析的资深专家，对小程序的架构设计、页面跳转逻辑以及UI组件的事件处理机制有着深刻的理解和丰富的实践经验。
    - Skills: 你具备小程序开发框架的深入知识，能够熟练分析代码逻辑、事件绑定以及页面跳转规则，同时具备良好的逻辑推理能力，能够通过UI组件的文本内容和页面描述推断其行为。
    - Goals: 根据提供的小程序当前页面描述和UI组件的文本内容，准确判断点击该UI组件是否会触发页面跳转，并以JSON格式输出结果。
    - Constrains: 仅基于当前页面描述和UI组件的文本内容进行判断，不涉及实际代码审查或运行测试。
    - OutputFormat: 输出内容为JSON格式，包含一个键`result`，其值为`"yes"`（会触发页面跳转）或`"no"`（不会触发页面跳转）例如: {"result": "yes"}
    - Workflow:
      1. 分析页面描述，确定页面的整体功能和布局。
      2. 检查UI组件的文本内容，识别其功能提示或行为暗示。
      3. 根据UI组件的文本内容和页面描述，结合小程序的常见交互模式，判断点击该组件是否会触发页面跳转。
    - Examples:
      - 例子1：
        - 页面描述：该页面是一个在线购物页面，用户可以搜索单品、浏览推荐的商品分类（鞋类、潮服、女装、饰品、包袋、数码）、购买商品和查看商品详情。页面上展示了多个商品信息，包括商品名称、价格以及购买人数，用户可以通过点击购买按钮进行购买操作。
        - UI组件文本内容：“立即购买”
        - Answer: {"result": "yes"}
      - 例子2：
        - 页面描述：该页面是一个用户个人中心页面，用户可以查看个人信息、订单历史和收藏夹内容。页面上有一个“编辑资料”按钮。
        - UI组件文本内容：“编辑资料”
        - Answer: {"result": "yes"}
      - 例子3：
        - 页面描述：该页面是一个新闻阅读页面，用户可以浏览新闻文章、评论和点赞。页面上有一个“点赞”按钮。
        - UI组件文本内容：“点赞”
        - Answer: {"result": "no"}
    - Initialization: 在第一次对话中，请直接给出下面当前ui文本内容的答案:
    """
    result = llm_api2.invoke(prompt + f"当前页面描述：{page_description}。当前ui文本内容：{ui_text}").content
    if "{" in result:
        result = result.split("{")[1]
        result = "{"+result
        result = result.split("}")[0]
        result = result + "}"
        # print(answer)
    return result



if __name__ == '__main__':
    result = '"购买操作" -> {"result": "yes"}aasdjado我死'
    if "{" in result:
        result = result.split("{")[1]
        result = "{"+result
        result = result.split("}")[0]
        result = result + "}"
    print(result)
        # print(answer)
#
#     # # 解析静态代码获得路由图
#     # pkg_analyser = PkgAnalyzer("../wxapkg/project_file")
#     # pkg_analyser.draw_graph("test")
#     # click_graph = pkg_analyser.graph
#     # cursor = click_graph.initial_page
#     # tabbars = click_graph.tabbars
#     # tabbars.append(cursor)
#     # tabbar_info = {}
#     # sub_page_list = []
#     # for tabbar in tabbars:
#     #     # print(click_graph.nodes[tabbar])
#     #     tabbar_info[tabbar] = click_graph.nodes[tabbar]
#     #     sub_page_list += click_graph.nodes[tabbar].next_nodes
#     # #print(tabbar_info)
#     # sub_page_list = set(sub_page_list)
#     # print(click_graph.nodes[cursor].next_nodes)
#     # print(match_subpage(click_graph.nodes[cursor].next_nodes, get_current_page_xml()))
#     # print(judge_clickable(current_page, ui_text, sub_pages))
#     print(page_brief(get_current_page_xml()))
#
#     device = connect_device()
#     folder = "testpage.png"
#     device.screenshot(f"{folder}/testpage.png")
#     img = cv2.imread(f"{folder}/testpage.png")
#     model = YOLO('../best.pt')
#     results = model(f"{folder}/testpage.png")
#
#     test_list = []
#     for result in results:
#         boxes = result.boxes
#         for box in boxes:
#             xmin, ymin, xmax, ymax = map(int, box.xyxy[0].tolist())
#             class_id = int(box.cls)  # 类别 ID
#             label = result.names[class_id]  # 类别名称
#             confidence = box.conf.item()  # 置信度
#             test_list.append(
#                 {'box': (xmin, ymin, xmax, ymax), 'label': label, 'path': 'initial.png', 'confidence': confidence})
#     img = cv2.imread(f"{folder}/testpage.png")
#     text_list = get_current_page_xml()
#     brief = page_brief(text_list)
#     for item in test_list:
#         box = item['box']
#         click_x = (box[0] + box[2]) // 2
#         click_y = (box[1] + box[3]) // 2
#         roi = img[box[1]:box[3], box[0]:box[2]]
#         cv2.imwrite(f"{folder}/testroi_{click_x}_{click_y}.png", roi)
#         result = ocr_recognize_text(roi)
#         print(judge_clickable(page_description=brief, ui_text=result))
