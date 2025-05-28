"""
作为对比的点击方法:
1. bfs 2. dfs 3.课题设计方法阉割版
4. miniscope
"""
import json
from core.xml_utils import save_formatted_xml, parse_bounds
from core.device_connector import is_within_mini_program
from core.common import *
from lxml import etree
from termcolor import colored
from configure.settings import *
from paddleocr import PaddleOCR
from PIL import Image

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
    #exit(1)


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


def traverse_and_click_single_bfs(device, timeout, depth=2):
    """
    对比方法:广度优先
    仅对页面进行yolo+ocr进行点击,不做其他处理
    """


def traverse_and_click_single_dfs(device, timeout):
    """
    对比方法:深度优先
    """
    start_time = time.time()
    global clicked_elements, blocked_areas, keywords
    model = YOLO('best.pt')
    pages = []
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
    image_map['initial.png'] = image_map['initial.png']
    page_index = 0
    # 循环遍历页面
    print("页面初始化完成，进行循环遍历", "#" * 10)
    while True:
        # if not is_within_mini_program(device):
        #     handle_exit_from_mini_program()
        #     break
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
            count = count + 1
            current_page.save(new_image_path)
            pages.append(new_image_path)
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
            image_map[new_image_path] = image_map[new_image_path]
            page_index = len(pages) - 1  # 跳转到新页面
            current_page = new_image_path
            current_elements = image_map[current_page]
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
        print("正在处理---页面", current_elements[1]['path'], "------------" * 14, )

        # 遍历元素
        for i, element in enumerate(current_elements):
            element_key = (element['box'], element['label'], element['path'])
            # 处理未被点击的元素
            if element_key not in clicked_elements:
                print("正在处理元素", i, "|||||" * 4)
                box = element['box']
                # if element['box'][1] < 250:
                #     # 保存输入图像
                #     timestamp = int(time.time())  # 使用时间戳作为文件名
                #     image_path = f"up_test\\test_image_{timestamp}_{element['path']}.png"
                #     img = cv2.imread(element['path'])
                #     cv2.imwrite(image_path, img[box[1]:box[3], box[0]:box[2]])
                #     print("顶部无关元素.....")
                #     # 已点击
                #     clicked_elements.add(element_key)
                #     continue

                label = element['label']
                print("元素标签:", label)
                img = cv2.imread(element['path'])
                roi = img[box[1]:box[3], box[0]:box[2]]
                if roi is None or roi.size == 0:
                    print("ROI 区域无效，跳过 OCR 识别")
                    clicked_elements.add(element_key)
                    continue
                # result = ocr_recognize_text(roi)
                # print("元素扫描结果:", result)
                '''
                第一轮先对特定标签进行遍历，3/23 逻辑需要重新修改
                '''
                # 计算点击坐标
                click_x = (box[0] + box[2]) // 2
                click_y = (box[1] + box[3]) // 2

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
                    new_image_path = f'page_{count}.png'
                    count = count + 1
                    print("new page")
                    new_image.save(new_image_path)
                    pages.append(new_image_path)
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
                    image_map[new_image_path] = image_map[new_image_path]
                    page_index = len(pages) - 1  # 跳转到新页面
                    break  # 退出当前页面的元素遍历

            else:
                print("元素", i, "已经被点击过")
