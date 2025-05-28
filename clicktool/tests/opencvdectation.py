import cv2
import numpy as np

def detect_shapes(image_path):
    """
    检测图像中的圆形和方形，并在图像上绘制检测结果。

    参数:
        image_path (str): 图像文件的路径。

    返回:
        image (numpy.ndarray): 绘制了检测结果的图像。
    """
    # 读取图像
    image = cv2.imread(image_path)
    if image is None:
        print(f"错误：无法读取图像 {image_path}")
        return None

    # 转换为灰度图像
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

    # 使用高斯模糊减少噪声
    blurred = cv2.GaussianBlur(gray, (5, 5), 0)

    # 检测圆形
    circles = cv2.HoughCircles(blurred, cv2.HOUGH_GRADIENT, dp=1.2, minDist=100,
                               param1=50, param2=30, minRadius=10, maxRadius=100)

    # 如果检测到圆形，绘制它们
    if circles is not None:
        circles = np.round(circles[0, :]).astype("int")
        for (x, y, r) in circles:
            cv2.circle(image, (x, y), r, (0, 255, 0), 4)  # 绿色绘制圆形

    # 检测方形
    _, threshold = cv2.threshold(blurred, 127, 255, cv2.THRESH_BINARY)
    contours, _ = cv2.findContours(threshold, cv2.RETR_TREE, cv2.CHAIN_APPROX_SIMPLE)

    for contour in contours:
        # 近似轮廓
        epsilon = 0.01 * cv2.arcLength(contour, True)
        approx = cv2.approxPolyDP(contour, epsilon, True)

        # 如果轮廓有4个顶点，则认为是方形
        if len(approx) == 4:
            cv2.drawContours(image, [approx], 0, (0, 0, 255), 3)  # 红色绘制方形

    return image


def process_images(image_paths, output_dir="output"):
    """
    处理多个图像文件，检测其中的圆形和方形，并保存结果。

    参数:
        image_paths (list): 图像文件路径的列表。
        output_dir (str): 输出目录，默认为 "output"。
    """
    import os

    # 创建输出目录
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)

    for image_path in image_paths:
        # 检测形状
        result_image = detect_shapes(image_path)
        if result_image is not None:
            # 保存结果
            output_path = os.path.join(output_dir, os.path.basename(image_path))
            cv2.imwrite(output_path, result_image)
            print(f"结果已保存到: {output_path}")


# 示例用法
if __name__ == "__main__":
    # 图像文件路径列表
    image_paths = ["screenshot_origin.png"]  # 替换为你的图像路径

    # 处理图像
    process_images(image_paths)