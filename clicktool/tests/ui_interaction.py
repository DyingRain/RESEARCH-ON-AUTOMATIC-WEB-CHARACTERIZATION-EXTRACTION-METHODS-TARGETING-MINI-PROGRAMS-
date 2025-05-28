from core.xml_utils import save_formatted_xml, parse_bounds
from core.device_connector import is_within_mini_program
from core.common import *
from termcolor import colored 
from configure.keywords import keywords
from time import sleep
import xml.etree.ElementTree as ET
import re
from configure.settings import *
from core.comparison_utils import compare_xml_similarity
from paddleocr import PaddleOCR
import traceback  # 导入 traceback 模块
# 初始化 PaddleOCR
ocr_engine = PaddleOCR(use_angle_cls=True, lang="ch")  # 使用中文模型
import time
def ocr_recognize_text(image):
    """
    使用 PaddleOCR 识别图像中的文字。
    
    参数:
        image: NumPy 数组格式的图像（RGB 格式）。
    
    返回:
        results: 列表，每个元素是一个元组 (text, box)，其中 text 是识别到的文字，box 是边界框坐标 (x1, y1, x2, y2)。
    """
    # 将图像转换为 PaddleOCR 需要的格式
    image_rgb = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)  # 确保图像是 RGB 格式
    results = ocr_engine.ocr(image_rgb, cls=True)  # 调用 OCR 识别
    print("results:")
    print(results)
    
    # 解析 OCR 结果
    ocr_results = []
    for line in results[0]:
        # 提取边界框和文本信息
        print(line)
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
            ocr_results.append((text, (x1, y1, x2, y2)))
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
    return True
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
def images_are_same(image1, image2, threshold=0.99):
    """
    比较两张图片是否相同。
    :param image1: 第一张图片（NumPy 数组）
    :param image2: 第二张图片（NumPy 数组）
    :param threshold: 相似度阈值，默认 0.99
    :return: True 如果图片相同，否则 False
    """
    if image1.shape != image2.shape:
        return False
    # 计算图像差异
    diff = cv2.absdiff(image1, image2)
    non_zero_count = np.count_nonzero(diff)
    total_pixels = image1.size
    similarity = 1 - (non_zero_count / total_pixels)
    return similarity >= threshold
def is_relevant_object(confidence, class_id):
    if confidence >0.2:
    # 可以根据置信度或者类别ID来筛选目标
        return True
    return False
def traverse_and_click(initial_xml, device):
    global clicked_elements, blocked_areas, keywords
     # 备份初始的 keywords
    initial_keywords = keywords.copy()
    # 使用一个变量来保存当前的 XML 数据
    current_xml = initial_xml
    clicked_elements=set()
    depth = 0
    failure=0
    while True:  # 控制最大深度
        # 保存当前页面的 XML
                # 当递归层数是 5 的倍数时，复原 keywords
        if depth > 0 and depth % 5 == 0:
            keywords = initial_keywords.copy()
            print(colored(f"Depth {depth}: Restored keywords to initial state.", "blue"))
        save_current_screen(current_xml, depth)

        # 检查是否在小程序内
        if not is_within_mini_program(device):
            handle_exit_from_mini_program()
            break

        # 用于存储过滤后的节点
        valid_nodes = []

        # 解析当前 XML 数据
        try:
            local_tree = ET.ElementTree(ET.fromstring(current_xml))
            root = local_tree.getroot()
            if root is not None:
                for node in root.iter():
                    # 过滤不符合条件的节点
                    resource_id = node.attrib.get("resource-id", "")
                    text = node.attrib.get("text", "")
                    clickable = node.attrib.get("clickable", "false")
                    bounds = node.attrib.get("bounds", "")
                    checkable = node.attrib.get("checkable", "false")

                    # 过滤已经点击过的元素
                    element_hash = hash_node_attributes(node)
                    if element_hash in clicked_elements:
                        print(colored(f"Skipping clicked element: {resource_id} | {text}", "yellow"))
                        continue

                    # 过滤禁止区域的元素
                    if bounds and is_within_blocked_area(bounds, blocked_areas):
                        print(colored(f"Skipping element in blocked area: {bounds}", "yellow"))
                        continue

                    if should_click_node(checkable, clickable, text, bounds):
                        print(colored(f"Found clickable element: {resource_id} | {text}", "green"))
                        valid_nodes.append(node)
            else:
                print(colored("Invalid XML structure. Skipping traversal.", "red"))
                break
        except Exception as e:
            print(colored(f"Error traversing XML: {e}", "red"))
            break

        # 处理有效节点
        try:
            # 优先检查关键词或可点击按钮
            keyword_node_found = False
            for node in valid_nodes:
                text = node.attrib.get("text", "")
                if any(keyword in text for keyword in keywords):
                    # 点击包含关键词的节点
                    print(colored(f"Clicking keyword node: {text}", "blue"))
                    # 点击前截屏
                    pre_click_screenshot = device.screenshot()
                    pre_click_image = np.array(pre_click_screenshot)
                    click_node(node, device)
                    keyword_node_found = True
                    break

            if keyword_node_found:
                # 等待 3 秒，点击后截屏
                time.sleep(3)
                post_click_screenshot = device.screenshot()
                post_click_image = np.array(post_click_screenshot)

                # 比较点击前后的图片
                if not images_are_same(pre_click_image, post_click_image):
                    print(colored("Page updated after click. Continuing traversal.", "green"))
                    current_xml = device.dump_hierarchy()
                    depth += 1
                else:

                    print(colored("Page did not update after click. Skipping to next element.", "yellow"))
                    clicked_elements.add(hash_node_attributes(node))  # 标记为已点击
                continue

            # 如果没有关键词节点，检查是否有其他可点击按钮
            if valid_nodes:
                # 点击第一个可点击按钮
                node = valid_nodes[0]
                print(colored(f"Clicking first clickable node: {node.attrib.get('text', '')}", "blue"))
                # 点击前截屏
                pre_click_screenshot = device.screenshot()
                pre_click_image = np.array(pre_click_screenshot)
                click_node(node, device)
                # 等待 3 秒，点击后截屏
                time.sleep(3)
                post_click_screenshot = device.screenshot()
                post_click_image = np.array(post_click_screenshot)

                # 比较点击前后的图片
                if not images_are_same(pre_click_image, post_click_image):
                    print(colored("Page updated after click. Continuing traversal.", "green"))
                    clicked_elements.add(hash_node_attributes(node))  # 标记为已点击
                    current_xml = device.dump_hierarchy()
                    depth += 1
                    continue
                else:
                    
                    print(colored("Page did not update after click. Skipping to next element.", "yellow"))
                    clicked_elements.add(hash_node_attributes(node))  # 标记为已点击


            # 如果没有关键词或可点击按钮，优先使用 OCR 定位文本框
            print(colored("No keyword or clickable node found. Using OCR to locate text boxes.", "yellow"))
            screenshot = device.screenshot()
            screenshot_np = np.array(screenshot)
            screenshot_rgb = cv2.cvtColor(screenshot_np, cv2.COLOR_BGR2RGB)

            # 使用 OCR 识别屏幕上的文字
            ocr_results = ocr_recognize_text(screenshot_rgb)  # 假设 ocr_recognize_text 是 OCR 识别函数
            ocr_results = sorted(ocr_results, key=lambda x: x[0] in keywords, reverse=True)
            text_box_found = False
            useocrflag=1
            for text, box in ocr_results:
                if is_text_box(text):  # 判断是否为文本框（根据需求定义判断条件）
                    # 计算文本框的中心坐标
                    x1, y1, x2, y2 = box
                    clickx,clicky = int((x1 + x2) // 2), int((y1 + y2) // 2)
                    if is_point_in_blocked_area(clickx,clicky,blocked_areas):
                        continue
                    print(colored(f"Clicking OCR-detected text box at: {clickx},{clicky}", "blue"))
                    # 点击前截屏
                    pre_click_screenshot = device.screenshot()
                    pre_click_image = np.array(pre_click_screenshot)
                    device.click(clickx,clicky)
                    device.click(clickx,clicky)
                    text_box_found = True
                    

                if text_box_found:
                    # 等待 3 秒，点击后截屏
                    text_box_found=False
                    time.sleep(3)
                    post_click_screenshot = device.screenshot()
                    post_click_image = np.array(post_click_screenshot)
                    
                    # 比较点击前后的图片
                    if not images_are_same(pre_click_image, post_click_image):
                        print(colored("Page updated after click. Continuing traversal.", "green"))
                        current_xml = device.dump_hierarchy()
                        depth += 1
                        useocrflag=0
                        failure=0
                        break
                    else:
                        failure+=1
                        print(colored("Page did not update after click. Skipping to next element.", "yellow"))
                        if failure==10:
                                failure=0
                                device.click(772,1799)
                                device.click(772,1799)
                                time.sleep(2)
                                device.click(49,136)
                                device.click(49,136)
                        continue
            if useocrflag==0:
                continue
            # 如果 OCR 没有找到文本框，使用 YOLOv5 进行目标检测
            print(colored("No text box found with OCR. Using YOLOv5 to locate elements.", "yellow"))
            model = YOLOv5(r"C:\Users\reynor\Desktop\click2025\clicktool\yolov5s.pt")  # 使用 YOLOv5 的一个轻量级模型
            results = model.predict(screenshot_rgb)
            print('---------------------')
            print(results)

            # 获取检测到的边界框信息
            boxes = results.xyxy[0].numpy()  # 返回边界框坐标
            confidences = boxes[:, 4]  # 置信度
            class_ids = boxes[:, 5]  # 类别 ID

            # 遍历检测到的目标，点击第一个相关的目标
            for box, confidence, class_id in zip(boxes, confidences, class_ids):
                if len(box) >= 4:
                    x1, y1, x2, y2 = box[:4]  # 只解包前 4 个元素
                    # 过滤检测结果（例如根据类别 ID 或者置信度过滤）
                    if is_relevant_object(confidence, class_id):  # 根据需求定义判断条件
                        clickx,clicky = (int((x1 + x2) // 2), int((y1 + y2) // 2))  # 点击边界框中心
                        if is_point_in_blocked_area(clickx,clicky,blocked_areas):
                            continue
                        print(colored(f"Clicking YOLO-detected element at: {clickx},{clicky}", "blue"))
                        # 点击前截屏
                        pre_click_screenshot = device.screenshot()
                        pre_click_image = np.array(pre_click_screenshot)
                        device.click(clickx,clicky)  # 在设备上模拟点击
                        device.click(clickx,clicky)  # 在设备上模拟点击
                        # 等待 3 秒，点击后截屏
                        time.sleep(3)
                        post_click_screenshot = device.screenshot()
                        post_click_image = np.array(post_click_screenshot)

                        # 比较点击前后的图片
                        if not images_are_same(pre_click_image, post_click_image):
                            print(colored("Page updated after click. Continuing traversal.", "green"))
                            current_xml = device.dump_hierarchy()
                            depth += 1
                            failure=0
                            break
                        else:
                            failure+=1
                            print(colored("Page did not update after click. Skipping to next element.", "yellow"))
            if failure==10:
                failure=0
                device.click(772,1799)
                device.click(772,1799)
                time.sleep(2)
                device.click(49,136)
                device.click(49,136)
        except Exception as e:
            print(colored(f"Error during processing: {e}", "red"))
            print(colored("Stack trace:", "red"))
            print(traceback.format_exc())  # 打印完整的栈信息
            continue

    print(colored("Traversal completed.", "blue"))