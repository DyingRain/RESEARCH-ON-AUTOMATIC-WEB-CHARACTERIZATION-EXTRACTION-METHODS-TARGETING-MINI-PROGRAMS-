import time

from ultralytics import YOLO
import cv2  # 导入 OpenCV
import numpy as np

def pngtest():
    # 1. 加载训练好的模型
    model = YOLO('../best.pt')  # 确保路径正确

    # 2. 对输入文件 screenshot_origin.png 进行推理
    input_image = r'initial.png'  # 输入文件路径
    output_image = 'initial_marked.png'  # 输出标注后的图片路径

    # 读取输入图片
    img = cv2.imread(input_image)
    if img is None:
        print(f"无法读取图片: {input_image}")
        return

    # 进行推理
    results = model(input_image)
    # 3. 解析检测结果并标注到图片上
    for result in results:
        boxes = result.boxes
        for box in boxes:
            # 获取边界框坐标 (xmin, ymin, xmax, ymax)
            xmin, ymin, xmax, ymax = map(int, box.xyxy[0].tolist())
            box2 = (xmin, ymin, xmax, ymax)
            print(xmin, ymin, xmax, ymax)
            # 保存输入图像

            # 获取类别 ID 和名称
            class_id = int(box.cls)  # 类别 ID
            class_name = result.names[class_id]  # 类别名称

            # 获取置信度
            confidence = box.conf.item()  # 置信度
            #print("置信度：",confidence)
            # 绘制边界框
            if ymin < 250:


                if confidence < 0.8:
                    print("置信度过低.....")
                else:
                    color = (0, 255, 0)  # 边界框颜色 (绿色)
                    cv2.rectangle(img, (xmin, ymin), (xmax, ymax), color, 2)
                    # 绘制标签和置信度
                    label = f"{class_name} ({confidence:.2f})"
                    roi = img[box2[1]:box2[3], box2[0]:box2[2]]
                    image_path = str(xmin) + str(ymin) + str(xmax) + str(ymax) + ".png"
                    cv2.imwrite(image_path, roi)
                    text_size, _ = cv2.getTextSize(label, cv2.FONT_HERSHEY_SIMPLEX, 0.5, 1)
                    text_width, text_height = text_size
                    cv2.rectangle(img, (xmin, ymin - text_height - 4), (xmin + text_width, ymin), color, -1)  # 标签背景
                    cv2.putText(img, label, (xmin, ymin - 4), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 0, 0), 1)  # 标签文本

    # 4. 保存标注后的图片
    cv2.imwrite(output_image, img)
    print(f"标注后的图片已保存到: {output_image}")

if __name__ == '__main__':
    pngtest()
