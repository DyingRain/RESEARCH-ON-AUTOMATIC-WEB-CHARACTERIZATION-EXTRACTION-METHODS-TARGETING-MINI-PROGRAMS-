import cv2
import numpy as np
from yolov5 import YOLOv5  # 引入YOLOv5模型
from paddleocr import PaddleOCR
from ultralytics import YOLO
# 加载PaddleOCR模型
ocr = PaddleOCR(use_angle_cls=True, lang='ch')  # 使用中文模型，包含文字方向识别

# 加载YOLOv5模型（假设模型已经准备好）
yolo_model = YOLO('best.pt')  # 替换为你实际的模型路径

def extract_text_and_positions(image):
    """
    使用PaddleOCR提取图像中的文本及其位置。
    :param image: 输入图像
    :return: 提取的文本及其位置信息
    """
    result = ocr.ocr(image, cls=True)  # 对图像进行OCR识别，cls=True表示开启方向分类
    text_positions = []
    for line in result[0]:
        # line 是包含文本、位置和置信度的一个元组
        text = line[1][0]  # 文本内容
        bbox = line[0]  # 文本框的坐标
        text_positions.append({
            'text': text,
            'bbox': (bbox[0][0], bbox[0][1], bbox[2][0] - bbox[0][0], bbox[2][1] - bbox[0][1])
        })
    return text_positions

# 加载图片
screenshot_rgb = cv2.imread('tests/page_4.png')
# 检查图片是否读取成功
if screenshot_rgb is None:
    print("Error: Unable to load image.")
else:
    print("Image loaded successfully.")

    # YOLOv5目标检测
    results = yolo_model.predict(screenshot_rgb)  # 使用YOLOv5进行目标检测
    boxes = results.xyxy[0].numpy()  # 获取检测框坐标
    print(f"Detected boxes: {boxes}")

    # 使用YOLOv5检测到的目标区域进行OCR识别
    text_positions = []
    for box in boxes:
        x1, y1, x2, y2, confidence, class_id = box
        cropped_img = screenshot_rgb[int(y1):int(y2), int(x1):int(x2)]  # 裁剪出检测框区域
        # 保存裁剪后的图片
        cv2.imwrite('cropped_image.jpg', cropped_img)
        print("Cropped image saved as 'cropped_image.jpg'.")
        # 对每个检测框区域进行OCR识别
        ocr_text_positions = extract_text_and_positions(cropped_img)
        text_positions.extend(ocr_text_positions)

    print("Extracted text positions:", text_positions)
