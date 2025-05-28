import math
import os
from testpng import *
from lxml import etree
from clicktool.core.device_connector import connect_device

"""
xml类,用于辅助yolo+ocr点击，排除一些重复ui组件


"""

xml_dict = {}  # 页面-xml树结构


class Ui:
    """
    xml_ui类
    """

    def __init__(self, ui_class, bounds, clickable, enabled, visible):
        self.ui_class = ui_class
        self.bound = self.bounds_to_position(bounds)
        self.clickable = clickable
        self.enabled = enabled
        self.visible = visible
        self.has_click = False

    def bounds_to_position(self, bounds_string):
        """
        将xml文件中的bounds字符串转化为实际可用的坐标（string to int）
        """
        bounds_text = bounds_string.replace("[", "").replace("]", " ").replace(",", " ")
        bounds = bounds_text.split(" ")
        y1 = int(bounds[0])
        x1 = int(bounds[1])
        y2 = int(bounds[2])
        x2 = int(bounds[3])
        position = [x1, x2, y1, y2]
        return position


class XmlAnalyser:
    """
    xml类,负责存放ui以及相关函数（比较ui,xml文件解析等）
    """

    def __init__(self, root):
        self.uis_dict = {}  # 类型(str)- ui列表(list)
        self.root = root
        self.text_list = []
        self.image_list = []
        self.get_all_text()
        self.get_all_image_bounds()

    def get_all_text(self):
        text_list = []
        results_1 = self.root.xpath('.//*[@class="android.widget.TextView"]')
        for result in results_1:
            text = result.get('text')
            text_list.append(text)
        self.text_list = text_list

    def get_all_image_bounds(self):
        image_list = []
        results_1 = self.root.xpath('.//*[@class="android.widget.Image"]')
        for result in results_1:
            bounds_text = result.get('bounds')
            position = bounds_to_position(bounds_text)
            image_list.append(position)
        self.image_list = image_list

    def search_class(self, ui_class='"android.widget.Image"'):
        """
        按照类搜索ui并放入当前页面列表
        """
        uis = []
        self.uis_dict[ui_class] = uis
        results = self.root.xpath(f'.//*[@class={ui_class}]')
        for result in results:
            bounds_text = result.get('bounds')
            clickable = result.get('clickable')
            enabled = result.get('enabled')
            visible = result.get('visible')
            ui = Ui(ui_class, bounds_text, clickable, enabled, visible)
            self.uis_dict[ui_class].append(ui)
            # print(f"Tag: {result.tag}, Text: {result.get('text')}, Bounds: {result.get('bounds')}")

    def found_click_position(self, click_x, click_y, ui_class='"android.widget.Image"'):
        """
        根据页面点击位置寻找对应ui
        click_x = (box[0] + box[2]) // 2
        click_y = (box[1] + box[3]) // 2
        roi = img[box[1]:box[3], box[0]:box[2]]
        """
        uis = self.uis_dict[ui_class]
        for ui in uis:
            if (ui.bound[2] < click_x < ui.bound[3]) and (ui.bound[0] < click_y < ui.bound[1]):
                print("在范围之内：", f"{ui.bound[0]}<{click_y}<{ui.bound[1]}", f"{ui.bound[2]}<{click_x}<{ui.bound[3]}")
                return True

        return False

    def found_click_position2(self, click_x, click_y, ui_class='"android.widget.Image"'):
        """
        根据页面点击位置寻找对应ui
        固定ui区域
        """
        uis = self.uis_dict[ui_class]
        ui = uis[0]
        if (ui.bound[2] < click_x < ui.bound[3]) and (ui.bound[0] < click_y < ui.bound[1]):
            print("在范围之内：", f"{ui.bound[0]}<{click_y}<{ui.bound[1]}", f"{ui.bound[2]}<{click_x}<{ui.bound[3]}")
            return True

        return False

    def compare_ui_similarity(self, xml_ui_1: Ui, xml_ui_2: Ui):
        """
        比较两个ui之间的区别，如果部分关键字相同以及所占面积相似，则认为是同类型组件
        """
        if xml_ui_1.ui_class == xml_ui_2.ui_class and xml_ui_1.clickable == xml_ui_2.clickable and xml_ui_1.enabled == xml_ui_2.enabled and xml_ui_1.visible == xml_ui_2.visible:
            square1 = (xml_ui_1.position[1] - xml_ui_1.position[0]) * (xml_ui_1.position[3] - xml_ui_1.position[2])
            square2 = (xml_ui_2.position[1] - xml_ui_2.position[0]) * (xml_ui_2.position[3] - xml_ui_2.position[2])
            if 1.1 > float(square1) / float(square2) > 0.9:
                print("面积近似")
                return True
        else:
            return False
        return False


def bounds_to_position(bounds_string):
    """
    将xml文件中的bounds字符串转化为实际可用的坐标（string to int）
    """
    bounds_text = bounds_string.replace("[", "").replace("]", " ").replace(",", " ")
    bounds = bounds_text.split(" ")
    y1 = int(bounds[0])
    x1 = int(bounds[1])
    y2 = int(bounds[2])
    x2 = int(bounds[3])
    position = [x1, x2, y1, y2]
    return position


def get_page_xml(device, page_path):
    """
    获取当前页面的xml信息并存放到字典中
    """
    os.makedirs(page_path, exist_ok=True)
    xml_dump = device.dump_hierarchy()
    with open(f"{page_path}/ut_dump.xml", "w", encoding="utf-8") as f:
        f.write(xml_dump)
    tree = etree.parse(f"{page_path}/ut_dump.xml")
    root = tree.getroot()
    xml = XmlAnalyser(root)
    xml_dict[page_path] = xml
    return root


def compare_xml_by_text(xml1: XmlAnalyser, xml2: XmlAnalyser):
    """
    比较xml文件的文本信息
    """
    text_list_1 = []
    results_1 = xml1.root.xpath('.//*[@class="android.widget.TextView"]')
    for result in results_1:
        text = result.get('text')
        text_list_1.append(text)
    print(text_list_1)
    text_list_2 = []
    results_2 = xml2.root.xpath('.//*[@class="android.widget.TextView"]')
    for result in results_2:
        text = result.get('text')
        text_list_2.append(text)
    print(text_list_2)
    count = 0
    for item in text_list_1:
        if item in text_list_2:
            count += 1
    rate = float(count / len(text_list_1))
    print("文本覆盖率:", rate)
    return rate


def compare_xml_by_image_position(xml1: XmlAnalyser, xml2: XmlAnalyser):
    """
    通过xml的图片ui布局判断页面之间的关系
    """
    image_list_1 = []
    results_1 = xml1.root.xpath('.//*[@class="android.widget.Image"]')
    for result in results_1:
        bounds_text = result.get('bounds')
        position = bounds_to_position(bounds_text)
        image_list_1.append(position)
    print(image_list_1)
    image_list_2 = []
    results_2 = xml2.root.xpath('.//*[@class="android.widget.Image"]')
    for result in results_2:
        bounds_text = result.get('bounds')
        position = bounds_to_position(bounds_text)
        image_list_2.append(position)
    print(image_list_2)
    count = 0
    for item_1 in image_list_1:
        center_position_1 = [float(item_1[0] + item_1[1]) / 2, float(item_1[2] + item_1[3]) / 2]
        square_1 = float((item_1[1] - item_1[0]) * (item_1[3] - item_1[2]))
        for item_2 in image_list_2:
            center_position_2 = [float(item_2[0] + item_2[1]) / 2, float(item_2[2] + item_2[3]) / 2]
            square_2 = float((item_2[1] - item_2[0]) * (item_2[3] - item_2[2]))
            center_distance = math.sqrt(
                (center_position_2[0] - center_position_1[0]) ** 2 + (center_position_2[1] - center_position_1[1]) ** 2)
            if center_distance < 50 and 1.1 > float(square_1) / float(square_2) > 0.9:
                count += 1
                break  # 找到适配元素后直接匹配下一个ui
    rate = float(count / len(image_list_1))
    print("图片覆盖率:", rate)
    return rate


def compare_xml(xml1: XmlAnalyser, xml2: XmlAnalyser):
    """
    判断页面是否是从同一个tabbar触发的，通过比对xml中文本的内容（A页面包含B页面的文本内容）来判断页面关系
    """
    text_rate = compare_xml_by_text(xml1, xml2)
    image_rate = compare_xml_by_image_position(xml1, xml2)
    if text_rate > 0.7 and image_rate > 0.7:
        print(f"父子页面关系, text_rate:{text_rate}, image_text{image_rate}.")
        return True
    else:
        print(f"独立tabbar页面关系, text_rate:{text_rate}, image_rate:{image_rate}")
        return False


"""
##################################################################测试区######################################################################################################################################################
"""

"""点击位置ui匹配测试"""


def test_prcess():
    folder = "testpage.png"
    device = connect_device()
    get_page_xml(device, folder)
    xml = xml_dict[folder]
    xml.search_class(ui_class='"android.widget.Image"')
    xmluis = xml.uis_dict['"android.widget.Image"']

    xmlui = xmluis[0]
    device.screenshot(f"{folder}/testpage.png")
    img = cv2.imread(f"{folder}/testpage.png")
    print(xmlui.bound)
    roi = img[xmlui.bound[0]:xmlui.bound[1], xmlui.bound[2]:xmlui.bound[3]]
    cv2.imwrite(f"{folder}/testroi.png", roi)

    model = YOLO('../best.pt')
    results = model(f"{folder}/testpage.png")

    test_list = []
    for result in results:
        boxes = result.boxes
        for box in boxes:
            xmin, ymin, xmax, ymax = map(int, box.xyxy[0].tolist())
            class_id = int(box.cls)  # 类别 ID
            label = result.names[class_id]  # 类别名称
            confidence = box.conf.item()  # 置信度
            test_list.append(
                {'box': (xmin, ymin, xmax, ymax), 'label': label, 'path': 'initial.png', 'confidence': confidence})

    img = cv2.imread(f"{folder}/testpage.png")
    for item in test_list:
        box = item['box']
        click_x = (box[0] + box[2]) // 2
        click_y = (box[1] + box[3]) // 2
        flag = xml.found_click_position2(click_x=click_x, click_y=click_y)
        if flag:
            roi = img[box[1]:box[3], box[0]:box[2]]
            cv2.imwrite(f"{folder}/testroi_{click_x}_{click_y}.png", roi)


if __name__ == '__main__':
    """页面相似度测试"""
    time_now = time.time()
    device = connect_device()

    # 获取当前页面的xml
    xml_dump = device.dump_hierarchy()
    with open(f"ut_dump{time_now}.xml", "w", encoding="utf-8") as f:
        f.write(xml_dump)
    tree = etree.parse(f"ut_dump{time_now}.xml")
    root1 = tree.getroot()
    current_xml = XmlAnalyser(root1)

    # 获取得物首页页面
    tree = etree.parse("ut_dump_chabaidao_initialpage.xml")
    root2 = tree.getroot()
    compared_xml = XmlAnalyser(root2)
    compare_xml(compared_xml, current_xml)
