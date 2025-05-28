import json
from core.xml_utils import save_formatted_xml, parse_bounds
from core.device_connector import is_within_mini_program
from core.common import *
from lxml import etree
from termcolor import colored
from configure.keywords import keywords
from time import sleep
import xml.etree.ElementTree as ET
import re
from configure.settings import *
from core.comparison_utils import compare_xml_similarity
from paddleocr import PaddleOCR
import cv2
import numpy as np
import imagehash
from PIL import Image
from PIL import ImageChops
import traceback
import time
from collections import deque
import traceback  # 导入 traceback 模块

from clicktool.core.llm_analyser import judge_clickable, page_brief
from clicktool.core.xml_analyser import XmlAnalyser, compare_xml_by_image_position_2

# from llmanalysis import LLMAnalysis

# 初始化 PaddleOCR
ocr_engine = PaddleOCR(use_angle_cls=True, lang="ch")  # 使用中文模型
print("OCR 引擎初始化成功")
import time


def ocr_recognize_text(image):
    """
    使用 PaddleOCR 识别图像中的文字。
    
    参数:
        image: NumPy 数组格式的图像（RGB 格式）。
    
    返回:
        results: 列表，每个元素是一个元组 (text, box)，其中 text 是识别到的文字，box 是边界框坐标 (x1, y1, x2, y2)。
    """
    timestamp = int(time.time())  # 使用时间戳作为文件名
    image_path = f"input_image_{timestamp}.png"

    # 保存输入图像
    cv2.imwrite(image_path, image)
    print(f"输入图像已保存到: {image_path}")
    # 将图像转换为 PaddleOCR 需要的格式
    image_rgb = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)  # 确保图像是 RGB 格式
    results = ocr_engine.ocr(image_rgb, cls=True)  # 调用 OCR 识别
    # print("results:")
    # print(results)
    if results is None or results[0] is None:
        print("OCR 识别失败，返回空结果")
        return ""
    # 解析 OCR 结果
    ocr_results = ""
    for line in results[0]:
        # 提取边界框和文本信息
        # print(line)
        box = line[0]  # 边界框坐标，格式为 [[x1, y1], [x2, y2], [x3, y3], [x4, y4]]
        text = line[1][0]  # 识别到的文字

        try:
            # 将边界框坐标转换为数值类型
            x_coords = [float(point[0]) for point in box]
            y_coords = [float(point[1]) for point in box]

            # 计算边界框的最小和最大坐标
            x1, x2 = min(x_coords), max(x_coords)
            y1, y2 = min(y_coords), max(y_coords)

            # 将结果添加到列表中
            ocr_results = ocr_results + text
        except (ValueError, TypeError) as e:
            print(f"Error parsing box coordinates: {e}")
            print(f"box: {box}")
            continue  # 跳过当前 OCR 结果

    print(ocr_results)
    return ocr_results


def is_text_box(text):
    """
    判断识别到的文字是否为文本框。
    
    参数:
        text: 识别到的文字。
    
    返回:
        bool: 如果是文本框返回 True，否则返回 False。
    """
    # 定义文本框关键词（可以根据需求扩展）
    global keywords

    # 判断文本是否包含关键词
    for keyword in keywords:
        if keyword in text:
            return True
    return False


def handle_exit_from_mini_program():
    print(colored("Detected exit from mini program. Returning...", "red"))
    exit(1)


def should_click_node(checkable, clickable, text, bounds):
    global keywords
    return (
            (checkable == "true" or clickable == "true" or any(keyword in text for keyword in keywords))
            and bounds
    )


def click_node(node, device):
    coords = parse_bounds(node.attrib.get("bounds", ""))
    if not coords:
        return

    x, y = coords[0] + (coords[2] - coords[0]) // 2, coords[1] + (coords[3] - coords[1]) // 2
    print(colored(f"Clicking at coordinates: ({x}, {y})", "green"))
    device.click(x, y)
    device.click(x, y)


def is_point_in_blocked_area(clickx, clicky, blocked_areas):
    """
    判断一个点是否在任何一个 blocked_area 内

    参数:
    - clickx: 点击点的 x 坐标
    - clicky: 点击点的 y 坐标
    - blocked_areas: 被屏蔽的区域列表，每个区域是一个四元组 (x1, y1, x2, y2)

    返回:
    - True: 如果点在任意一个 blocked_area 内
    - False: 如果点不在任何 blocked_area 内
    """
    for bx1, by1, bx2, by2 in blocked_areas:
        if bx1 <= clickx <= bx2 and by1 <= clicky <= by2:
            return True
    return False


import cv2
import numpy as np
from yolov5 import YOLOv5  # 引入YOLOv5模型


def images_are_same(image1, image2, threshold=0.85):
    """
    比较两张图片是否相同。
    :param image1: 第一张图片（NumPy 数组）
    :param image2: 第二张图片（NumPy 数组）
    :param threshold: 相似度阈值，默认 0.9
    :return: True 如果图片相同，否则 False
    """
    if image1.shape != image2.shape:
        return False
    # 计算图像差异
    diff = cv2.absdiff(image1, image2)
    non_zero_count = np.count_nonzero(diff)
    total_pixels = image1.size
    similarity = 1 - (non_zero_count / total_pixels)
    # print("相似度", similarity)
    return similarity >= threshold


def crop_status_bar(image, status_bar_height=300):
    """
    裁剪掉图片的顶部状态栏
    :param image: PIL.Image 对象
    :param status_bar_height: 状态栏的高度（根据实际情况调整）
    :return: 裁剪后的图片
    2025/3/18 重写裁剪参数，适配当前机型
    """
    border_height = 250  # 假设下方边框高度为250像素
    width, height = image.size
    crop_area = (0, status_bar_height, width, height - border_height)

    return image.crop(crop_area)


def compare_images(img1, img2):
    """
    比较两张图片是否相同（忽略顶部状态栏）
    :param img1_path: 第一张图片的路径
    :param img2_path: 第二张图片的路径
    :return: 如果图片相同返回 True，否则返回 False
    """
    # 打开图片并裁剪掉状态栏

    img1_cropped = crop_status_bar(img1)
    img2_cropped = crop_status_bar(img2)

    # 确保图片模式一致，例如都为 RGB
    if img1_cropped.mode != img2_cropped.mode:
        img2_cropped = img2_cropped.convert(img1_cropped.mode)

    # 转换为 NumPy 数组
    img1_array = np.array(img1_cropped)
    img2_array = np.array(img2_cropped)

    # 比较裁剪后的图片
    return images_are_same(img1_array, img2_array)


def sort_elements(elements, clickable_labels=['Image', 'Icon', 'CheckedTextView', 'TextButton']):
    """
    按照'label'值对元素进行排序，可点击的元素优先，并且按照clickable_labels的顺序排序。

    参数:
    elements (list): 包含元素的列表，每个元素是一个字典，包含'box', 'label', 'path'等键。
    clickable_labels (list): 包含可点击元素'label'值的列表，顺序表示优先级。

    返回:
    list: 排序后的元素列表。
    """
    # 创建一个优先级字典，可点击的label按顺序分配优先级，不可点击的分配较高优先级
    elements.sort(key=lambda x: (x['box'][1] + x['box'][3]) // 2, reverse=False)
    priority = {label: idx for idx, label in enumerate(clickable_labels)}
    max_priority = len(clickable_labels)

    def sort_key(element):
        # 如果'label'在优先级字典中，返回其优先级，否则返回max_priority加上元素的索引
        # 这样可以保持不可点击元素的相对顺序
        label = element['label']
        return (priority.get(label, max_priority), label)

    # 使用sorted函数和自定义的键函数进行排序
    sorted_elements = sorted(elements, key=sort_key)

    return sorted_elements


def sort_elements_old(elements, clickable_labels=['Image', 'Icon', 'CheckedTextView', 'TextButton']):
    """
    按照'label'值对元素进行排序，可点击的元素优先，并且按照clickable_labels的顺序排序。

    参数:
    elements (list): 包含元素的列表，每个元素是一个字典，包含'box', 'label', 'path'等键。
    clickable_labels (list): 包含可点击元素'label'值的列表，顺序表示优先级。

    返回:
    list: 排序后的元素列表。
    """
    # 创建一个优先级字典，可点击的label按顺序分配优先级，不可点击的分配较高优先级
    priority = {label: idx for idx, label in enumerate(clickable_labels)}
    max_priority = len(clickable_labels)

    def sort_key(element):
        # 如果'label'在优先级字典中，返回其优先级，否则返回max_priority加上元素的索引
        # 这样可以保持不可点击元素的相对顺序
        label = element['label']
        return (priority.get(label, max_priority), label)

    # 使用sorted函数和自定义的键函数进行排序
    sorted_elements = sorted(elements, key=sort_key)

    return sorted_elements


from ultralytics import YOLO
import cv2  # 导入 OpenCV
import numpy as nps

'''
施工区############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################
'''


def traverse_and_click_422(device, timeout):
    """
    这里是主要需要修改的地方，把判断点击的策略优化一下，调用大模型接口并结合页面对应的路径和触发函数来判断

    """
    page_description = {}
    xml_list = {}
    start_time = time.time()
    global clicked_elements, blocked_areas, keywords
    model = YOLO('best.pt')
    pages = []
    negative_score = {}
    positive_score = {}
    image_map = {}
    clicked_elements = set()
    count = 1
    # 截取初始页面
    device.reset_uiautomator()
    """疑难杂症：自动点击触发新进程后无法获取当前页面的xml.疑似是bug，网上没有解决方法，经测试，重启ut后有效"""
    time.sleep(4)
    current_image = device.screenshot()
    current_image.save('initial.png')
    pages.append('initial.png')
    image_map['initial.png'] = []
    # 获取首页的xml
    xml_dump = device.dump_hierarchy()
    xml_dump = device.dump_hierarchy()
    with open("initial.png" + ".xml", "w", encoding="utf-8") as f:
        f.write(xml_dump)
    tree = etree.parse("initial.png" + ".xml")
    root = tree.getroot()
    current_xml = XmlAnalyser(root)
    page_description['initial.png'] = page_brief(current_xml.text_list)
    # 第一次检测并保存结果

    results = model(r'initial.png')
    print('初始化第一张结果:', results)
    for result in results:
        boxes = result.boxes
        for box in boxes:
            xmin, ymin, xmax, ymax = map(int, box.xyxy[0].tolist())
            class_id = int(box.cls)  # 类别 ID
            label = result.names[class_id]  # 类别名称
            confidence = box.conf.item()  # 置信度
            image_map['initial.png'].append(
                {'box': (xmin, ymin, xmax, ymax), 'label': label, 'path': 'initial.png', 'confidence': confidence})
            negative_score['initial.png'] = 0
            positive_score['initial.png'] = 0
    image_map['initial.png'] = sort_elements(image_map['initial.png'])
    xml_list['initial.png'] = current_xml
    page_index = 0

    # 循环遍历页面
    while True:
        # 判断是否超时
        if time.time() - start_time > timeout:
            print("页面探索超出设定时间，强制结束！")
            return

        # 处理当前页面
        current_page = device.screenshot()
        new_page = True
        for page in pages:
            if compare_images(Image.open(page), current_page):
                current_page = page
                current_elements = image_map[current_page]
                page_index = pages.index(page)
                new_page = False
                break
        if new_page:
            new_image_path = f'page_{count}.png'
            negative_score[new_image_path] = 0
            positive_score[new_image_path] = 0
            count = count + 1
            current_page.save(new_image_path)
            pages.append(new_image_path)
            # 获取首页的xml
            device.reset_uiautomator()
            """疑难杂症：自动点击触发新进程后无法获取当前页面的xml.疑似是bug，网上没有解决方法，经测试，重启ut后有效"""
            time.sleep(4)
            new_xml_dump = device.dump_hierarchy()
            new_xml_dump = device.dump_hierarchy()
            with open(new_image_path + ".xml", "w", encoding="utf-8") as f:
                f.write(new_xml_dump)
            new_tree = etree.parse(new_image_path + ".xml")
            new_root = new_tree.getroot()
            current_xml = XmlAnalyser(new_root)
            page_description[new_image_path] = page_brief(current_xml.text_list)
            # 检测新页面的元素
            new_results = model(new_image_path)
            image_map[new_image_path] = []
            for result in new_results:
                boxes = result.boxes
                for box in boxes:
                    xmin, ymin, xmax, ymax = map(int, box.xyxy[0].tolist())
                    class_id = int(box.cls)  # 类别 ID
                    label = result.names[class_id]  # 类别名称
                    confidence = box.conf.item()  # 置信度
                    image_map[new_image_path].append(
                        {'box': (xmin, ymin, xmax, ymax), 'label': label, 'path': (new_image_path),
                         'confidence': confidence})
            image_map[new_image_path] = sort_elements(image_map[new_image_path])
            page_index = len(pages) - 1  # 跳转到新页面
            current_page = new_image_path
            current_elements = image_map[current_page]
            xml_list[new_image_path] = current_xml
        HasAllClicked = True
        for element in current_elements:
            element_key = (element['box'], element['label'], element['path'])
            if element_key not in clicked_elements:
                HasAllClicked = False
                break
        if HasAllClicked:
            print("页面已全部点击，回退到上一个页面")
            device.press('back')
            time.sleep(8)
            if not is_within_mini_program(device):
                handle_exit_from_mini_program()
                break
            continue
        # 初始化大模型 正式遍历当前页面元素
        # testchat = LLMAnalysis("http://chatapi.littlewheat.com/v1",
        #                        "sk-naTJw4Gk24l3qZwQN3f0FBqpMz9lQ57FwOrvXERmNvOK5VJx")
        print("------------" * 17)
        print("正在处理---页面", current_elements[1]['path'], "------------" * 14)
        print(f"页面描述：{page_description[current_elements[1]['path']]}")
        # 遍历元素
        for i, element in enumerate(current_elements):
            element_key = (element['box'], element['label'], element['path'])
            # 处理未被点击的元素
            if element_key not in clicked_elements:
                print("正在处理元素", i, "|||||" * 4)
                # 根据评分判断是否强制停止遍历
                # 首页强制遍历全部内容
                if element['path'] == 'initial.png':
                    negative_score[element['path']] = 0
                if negative_score[element['path']] > 7:
                    if positive_score[element['path']] > 4:
                        print("当前页面含有较多页面点击元素，建议全部遍历......")
                    else:
                        print("当前页面无效内容过多，强制跳过检测......")
                        clicked_elements.add(element_key)
                        continue
                box = element['box']
                # 判断元素置信度，小于阈值跳过处理
                confidence = element['confidence']
                if element['box'][1] < 250:
                    # 保存输入图像
                    timestamp = int(time.time())  # 使用时间戳作为文件名
                    image_path = f"up_test\\test_image_{timestamp}_{element['path']}.png"
                    img = cv2.imread(element['path'])
                    cv2.imwrite(image_path, img[box[1]:box[3], box[0]:box[2]])
                    print("顶部无关元素.....")
                    # 已点击
                    clicked_elements.add(element_key)
                    continue
                # if confidence < 0.7:
                #     print("置信度过低.....:", confidence)
                #     negative_score[element['path']] += 1
                #     # 保存输入图像
                #     timestamp = int(time.time())  # 使用时间戳作为文件名
                #     image_path = f"low_confidence_test\\{timestamp}_{element['path']}.png"
                #     img = cv2.imread(element['path'])
                #     cv2.imwrite(image_path, img[box[1]:box[3], box[0]:box[2]])
                #
                #     # 已点击
                #     clicked_elements.add(element_key)
                #     continue
                # 顶部元素排除(小程序退出按钮，标题等)

                # 正式处理元素
                box = element['box']
                label = element['label']
                confidence = element['confidence']
                print("元素标签:", label)
                # print("元素置信度:", confidence)
                img = cv2.imread(element['path'])
                roi = img[box[1]:box[3], box[0]:box[2]]
                if roi is None or roi.size == 0:
                    print("ROI 区域无效，跳过 OCR 识别")
                    clicked_elements.add(element_key)
                    continue
                result = ocr_recognize_text(roi)
                # print("元素扫描结果:", result)
                '''
                第一轮先对特定标签进行遍历，3/23 逻辑需要重新修改
                '''
                # 跳过背景图片
                # if label == 'BackgroundImage':
                #     print("跳过执行")
                #     clicked_elements.add(element_key)
                #     continue
                if label == 'Text':
                    # 交付大模型分析
                    result2 = judge_clickable(page_description[current_page], result)
                    print("交付大模型分析结果:", result2)
                    # 可能会没有结果，进行额外分析
                    if not result2:
                        print("大模型分析结果解析失败....")
                        clicked_elements.add(element_key)
                        continue

                    # 大模型评估判断 Text
                    result2 = json.loads(result2)
                    if result2["result"] != 'yes':
                        print("经评估，文本无跳转，跳过执行")
                        negative_score[element['path']] += 1
                        clicked_elements.add(element_key)
                        continue

                # 计算点击坐标
                click_x = (box[0] + box[2]) // 2
                click_y = (box[1] + box[3]) // 2

                if xml_list[current_page].judge_if_click_repeat_type_ui(click_x, click_y,
                                                                        ui_class='"android.widget.Image"'):
                    clicked_elements.add(element_key)
                    continue

                # 文本确认框可能左边有确认框，因此会从最右边稍微挪一点
                if label == "CheckedTextView":
                    click_y = (box[1] + box[3]) // 2
                    click_x = box[0] + 5
                if is_point_in_blocked_area(click_x, click_y, blocked_areas):
                    clicked_elements.add(element_key)
                    continue

                # 确定要点击，处理点击后的逻辑
                device.click(click_x, click_y)
                print(f"click on{click_x},{click_y} on {element['path']}")
                clicked_elements.add(element_key)
                # 等待页面加载
                time.sleep(8)

                # 截取新页面
                new_image = device.screenshot()
                if compare_images(new_image, Image.open(current_page)):
                    print("Not change after click")
                    # 点击无变化 -1分
                    negative_score[element['path']] += 1
                    continue
                # 检查新页面是否与已有页面相同
                new_page_found = True

                """
                 判断完是先前的页面后依然处理当前页面的元素，导致页面错位
                """
                for page in pages:
                    if page != current_page and compare_images(Image.open(page), new_image):
                        print("page discovered before")
                        new_page_found = False
                        break

                if not new_page_found:
                    break

                if new_page_found:
                    # 找到新页面+1分
                    positive_score[element['path']] += 1
                    new_image_path = f'page_{count}.png'
                    negative_score[new_image_path] = 0
                    positive_score[new_image_path] = 0
                    count = count + 1
                    print("new page")
                    new_image.save(new_image_path)
                    pages.append(new_image_path)
                    # 获取首页的xml
                    device.reset_uiautomator()
                    """疑难杂症：自动点击触发新进程后无法获取当前页面的xml.疑似是bug，网上没有解决方法，经测试，重启ut后有效"""
                    time.sleep(4)
                    new_xml_dump = device.dump_hierarchy()
                    new_xml_dump = device.dump_hierarchy()
                    with open(new_image_path + ".xml", "w", encoding="utf-8") as f:
                        f.write(new_xml_dump)
                    new_tree = etree.parse(new_image_path + ".xml")
                    new_root = new_tree.getroot()
                    current_xml = XmlAnalyser(new_root)
                    page_description[new_image_path] = page_brief(current_xml.text_list)
                    # 检测新页面的元素
                    new_results = model(new_image_path)
                    image_map[new_image_path] = []
                    for result in new_results:
                        boxes = result.boxes
                        for box in boxes:
                            xmin, ymin, xmax, ymax = map(int, box.xyxy[0].tolist())
                            class_id = int(box.cls)  # 类别 ID
                            label = result.names[class_id]  # 类别名称
                            confidence = box.conf.item()  # 置信
                            image_map[new_image_path].append(
                                {'box': (xmin, ymin, xmax, ymax), 'label': label, 'path': (new_image_path),
                                 'confidence': confidence})
                    image_map[new_image_path] = sort_elements(image_map[new_image_path])
                    xml_list[new_image_path] = current_xml
                    page_index = len(pages) - 1  # 跳转到新页面
                    break  # 退出当前页面的元素遍历

            else:
                print("元素", i, "已经被点击过")


def traverse_and_click_423(device, timeout, depth=2):
    """
    这里是主要需要修改的地方，把判断点击的策略优化一下，调用大模型接口并结合页面对应的路径和触发函数来判断

    """
    page_depth = {}
    page_description = {}
    xml_list = {}
    start_time = time.time()
    global clicked_elements, blocked_areas, keywords
    model = YOLO('best.pt')
    pages = []
    negative_score = {}
    positive_score = {}
    image_map = {}
    clicked_elements = set()
    count = 1
    # 截取初始页面
    device.reset_uiautomator()
    """疑难杂症：自动点击触发新进程后无法获取当前页面的xml.疑似是bug，网上没有解决方法，经测试，重启ut后有效"""
    time.sleep(4)
    current_image = device.screenshot()
    current_image.save('initial.png')
    pages.append('initial.png')
    image_map['initial.png'] = []
    # 获取首页的xml
    xml_dump = device.dump_hierarchy()
    xml_dump = device.dump_hierarchy()
    with open("initial.png" + ".xml", "w", encoding="utf-8") as f:
        f.write(xml_dump)
    tree = etree.parse("initial.png" + ".xml")
    root = tree.getroot()
    current_xml = XmlAnalyser(root)
    page_description['initial.png'] = page_brief(current_xml.text_list)
    # 第一次检测并保存结果

    results = model(r'initial.png')
    print('初始化第一张结果:', results)
    for result in results:
        boxes = result.boxes
        for box in boxes:
            xmin, ymin, xmax, ymax = map(int, box.xyxy[0].tolist())
            class_id = int(box.cls)  # 类别 ID
            label = result.names[class_id]  # 类别名称
            confidence = box.conf.item()  # 置信度
            image_map['initial.png'].append(
                {'box': (xmin, ymin, xmax, ymax), 'label': label, 'path': 'initial.png', 'confidence': confidence})
            negative_score['initial.png'] = 0
            positive_score['initial.png'] = 0
    image_map['initial.png'] = sort_elements(image_map['initial.png'])
    xml_list['initial.png'] = current_xml
    page_index = 0
    page_depth['initial.png'] = 0
    pre_page = 'initial.png'
    # 循环遍历页面
    while True:
        # 判断是否超时
        if time.time() - start_time > timeout:
            print("页面探索超出设定时间，强制结束！")
            return
        # 处理当前页面
        current_page = device.screenshot()
        new_page = True
        for page in pages:
            if compare_images(Image.open(page), current_page):
                current_page = page
                current_elements = image_map[current_page]
                page_index = pages.index(page)
                pre_page = current_page
                new_page = False
                break
        if new_page:
            new_image_path = f'page_{count}.png'
            negative_score[new_image_path] = 0
            positive_score[new_image_path] = 0
            count = count + 1
            current_page.save(new_image_path)
            pages.append(new_image_path)
            # 获取首页的xml
            device.reset_uiautomator()
            """疑难杂症：自动点击触发新进程后无法获取当前页面的xml.疑似是bug，网上没有解决方法，经测试，重启ut后有效"""
            time.sleep(4)
            new_xml_dump = device.dump_hierarchy()
            new_xml_dump = device.dump_hierarchy()
            with open(new_image_path + ".xml", "w", encoding="utf-8") as f:
                f.write(new_xml_dump)
            new_tree = etree.parse(new_image_path + ".xml")
            new_root = new_tree.getroot()
            current_xml = XmlAnalyser(new_root)
            page_description[new_image_path] = page_brief(current_xml.text_list)
            # 检测新页面的元素
            new_results = model(new_image_path)
            image_map[new_image_path] = []
            for result in new_results:
                boxes = result.boxes
                for box in boxes:
                    xmin, ymin, xmax, ymax = map(int, box.xyxy[0].tolist())
                    class_id = int(box.cls)  # 类别 ID
                    label = result.names[class_id]  # 类别名称
                    confidence = box.conf.item()  # 置信度
                    image_map[new_image_path].append(
                        {'box': (xmin, ymin, xmax, ymax), 'label': label, 'path': (new_image_path),
                         'confidence': confidence})
            image_map[new_image_path] = sort_elements(image_map[new_image_path])
            page_index = len(pages) - 1  # 跳转到新页面
            current_page = new_image_path
            current_elements = image_map[current_page]
            # 比较页面关系
            judge = compare_xml_by_image_position_2(current_xml, xml_list[pre_page])
            if judge == "dependent":
                print("独立tabbar深度不变")
                page_depth[new_image_path] = page_depth[pre_page]
            else:
                page_depth[new_image_path] = page_depth[pre_page] + 1
            xml_list[new_image_path] = current_xml
            pre_page = new_image_path
        HasAllClicked = True
        for element in current_elements:
            element_key = (element['box'], element['label'], element['path'])
            if element_key not in clicked_elements:
                HasAllClicked = False
                break
        if page_depth[current_page] > depth:
            print(f"达到最大设定深度{depth}")
            device.press('back')
            time.sleep(4)
            if not is_within_mini_program(device):
                handle_exit_from_mini_program()
                break
            continue

        if HasAllClicked:
            print("页面已全部点击，回退到上一个页面")
            device.press('back')
            time.sleep(8)
            if not is_within_mini_program(device):
                handle_exit_from_mini_program()
                break
            continue
        # 初始化大模型 正式遍历当前页面元素
        # testchat = LLMAnalysis("http://chatapi.littlewheat.com/v1",
        #                        "sk-naTJw4Gk24l3qZwQN3f0FBqpMz9lQ57FwOrvXERmNvOK5VJx")
        print("------------" * 17)
        print("正在处理---页面", current_elements[1]['path'], "------------" * 14,
              f"当前深度:{page_depth[current_page]}")
        print(f"页面描述：{page_description[current_elements[1]['path']]}")

        # 遍历元素
        for i, element in enumerate(current_elements):
            element_key = (element['box'], element['label'], element['path'])
            # 处理未被点击的元素
            if element_key not in clicked_elements:
                print("正在处理元素", i, "|||||" * 4)
                # 根据评分判断是否强制停止遍历
                # 首页强制遍历全部内容
                # if element['path'] == 'initial.png':
                #     negative_score[element['path']] = 0
                # if negative_score[element['path']] > 7:
                #     if positive_score[element['path']] > 4:
                #         print("当前页面含有较多页面点击元素，建议全部遍历......")
                #     else:
                #         print("当前页面无效内容过多，强制跳过检测......")
                #         clicked_elements.add(element_key)
                #         continue
                box = element['box']
                # 判断元素置信度，小于阈值跳过处理
                confidence = element['confidence']
                if element['box'][1] < 250:
                    # 保存输入图像
                    timestamp = int(time.time())  # 使用时间戳作为文件名
                    image_path = f"up_test\\test_image_{timestamp}_{element['path']}.png"
                    img = cv2.imread(element['path'])
                    cv2.imwrite(image_path, img[box[1]:box[3], box[0]:box[2]])
                    print("顶部无关元素.....")
                    # 已点击
                    clicked_elements.add(element_key)
                    continue
                # if confidence < 0.7:
                #     print("置信度过低.....:", confidence)
                #     negative_score[element['path']] += 1
                #     # 保存输入图像
                #     timestamp = int(time.time())  # 使用时间戳作为文件名
                #     image_path = f"low_confidence_test\\{timestamp}_{element['path']}.png"
                #     img = cv2.imread(element['path'])
                #     cv2.imwrite(image_path, img[box[1]:box[3], box[0]:box[2]])
                #
                #     # 已点击
                #     clicked_elements.add(element_key)
                #     continue
                # 顶部元素排除(小程序退出按钮，标题等)

                # 正式处理元素
                box = element['box']
                label = element['label']
                confidence = element['confidence']
                print("元素标签:", label)
                print("元素置信度:", confidence)
                img = cv2.imread(element['path'])
                roi = img[box[1]:box[3], box[0]:box[2]]
                if roi is None or roi.size == 0:
                    print("ROI 区域无效，跳过 OCR 识别")
                    clicked_elements.add(element_key)
                    continue
                result = ocr_recognize_text(roi)
                # print("元素扫描结果:", result)
                '''
                第一轮先对特定标签进行遍历，3/23 逻辑需要重新修改
                '''
                # 跳过背景图片
                # if label == 'BackgroundImage':
                #     print("跳过执行")
                #     clicked_elements.add(element_key)
                #     continue
                if label == 'Text':
                    # 交付大模型分析
                    result2 = judge_clickable(page_description[current_page], result)
                    print("交付大模型分析结果:", result2)
                    # 可能会没有结果，进行额外分析
                    if not result2:
                        print("大模型分析结果解析失败....")
                        clicked_elements.add(element_key)
                        continue

                    # 大模型评估判断 Text
                    result2 = json.loads(result2)
                    if result2["result"] != 'yes':
                        print("经评估，文本无跳转，跳过执行")
                        negative_score[element['path']] += 1
                        clicked_elements.add(element_key)
                        continue

                # 计算点击坐标
                click_x = (box[0] + box[2]) // 2
                click_y = (box[1] + box[3]) // 2

                if xml_list[current_page].judge_if_click_repeat_type_ui(click_x, click_y,
                                                                        ui_class='"android.widget.Image"'):
                    clicked_elements.add(element_key)
                    continue

                # 文本确认框可能左边有确认框，因此会从最右边稍微挪一点
                if label == "CheckedTextView":
                    click_y = (box[1] + box[3]) // 2
                    click_x = box[0] + 5
                if is_point_in_blocked_area(click_x, click_y, blocked_areas):
                    clicked_elements.add(element_key)
                    continue

                # 确定要点击，处理点击后的逻辑
                device.click(click_x, click_y)
                print(f"click on{click_x},{click_y} on {element['path']}")
                clicked_elements.add(element_key)
                # 等待页面加载
                time.sleep(5)

                # 截取新页面
                new_image = device.screenshot()
                if compare_images(new_image, Image.open(current_page)):
                    print("Not change after click")
                    # 点击无变化 -1分
                    negative_score[element['path']] += 1
                    continue
                # 检查新页面是否与已有页面相同
                new_page_found = True

                """
                 判断完是先前的页面后依然处理当前页面的元素，导致页面错位
                """
                for page in pages:
                    if page != current_page and compare_images(Image.open(page), new_image):
                        print("page discovered before")
                        pre_page = page
                        new_page_found = False
                        break

                if not new_page_found:
                    break

                if new_page_found:
                    # 找到新页面+1分
                    positive_score[element['path']] += 1
                    new_image_path = f'page_{count}.png'
                    # 先判断是否达到深度(得物优惠券页面存在闪退bug,停留一段时间会闪退)
                    page_depth[new_image_path] = page_depth[pre_page] + 1
                    if page_depth[current_page] > depth:
                        print(f"达到最大设定深度{depth}")
                        device.press('back')
                        time.sleep(4)
                        if not is_within_mini_program(device):
                            handle_exit_from_mini_program()
                            break
                        continue
                    # 获取首页的xml
                    device.reset_uiautomator()
                    """疑难杂症：自动点击触发新进程后无法获取当前页面的xml.疑似是bug，网上没有解决方法，经测试，重启ut后有效"""
                    time.sleep(2)
                    new_xml_dump = device.dump_hierarchy()
                    new_xml_dump = device.dump_hierarchy()
                    with open(new_image_path + ".xml", "w", encoding="utf-8") as f:
                        f.write(new_xml_dump)
                    new_tree = etree.parse(new_image_path + ".xml")
                    new_root = new_tree.getroot()
                    current_xml = XmlAnalyser(new_root)
                    if current_xml.status == 'error':
                        print("页面元素异常，跳过处理！！！")
                        device.press('back')
                        time.sleep(4)
                        if not is_within_mini_program(device):
                            handle_exit_from_mini_program()
                            break
                        continue
                    negative_score[new_image_path] = 0
                    positive_score[new_image_path] = 0
                    count = count + 1
                    print("new page")
                    new_image.save(new_image_path)
                    pages.append(new_image_path)

                    page_description[new_image_path] = page_brief(current_xml.text_list)
                    # 检测新页面的元素
                    new_results = model(new_image_path)
                    image_map[new_image_path] = []
                    for result in new_results:
                        boxes = result.boxes
                        for box in boxes:
                            xmin, ymin, xmax, ymax = map(int, box.xyxy[0].tolist())
                            class_id = int(box.cls)  # 类别 ID
                            label = result.names[class_id]  # 类别名称
                            confidence = box.conf.item()  # 置信
                            image_map[new_image_path].append(
                                {'box': (xmin, ymin, xmax, ymax), 'label': label, 'path': (new_image_path),
                                 'confidence': confidence})
                    image_map[new_image_path] = sort_elements(image_map[new_image_path])
                    # 比较页面关系
                    judge = compare_xml_by_image_position_2(current_xml, xml_list[pre_page])
                    if judge == "dependent":
                        print("独立tabbar深度不变")
                        page_depth[new_image_path] = page_depth[pre_page]
                    else:
                        page_depth[new_image_path] = page_depth[pre_page] + 1
                    xml_list[new_image_path] = current_xml
                    pre_page = new_image_path
                    page_index = len(pages) - 1  # 跳转到新页面
                    break  # 退出当前页面的元素遍历

            else:
                print("元素", i, "已经被点击过")
