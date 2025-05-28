import cv2
import numpy as np

# 读取图像
image = cv2.imread('screenshot_origin.png')
original_image = image.copy()

# 转换为HSV颜色空间
hsv_image = cv2.cvtColor(image, cv2.COLOR_BGR2HSV)

# 定义HSV阈值（例如，检测蓝色按钮）
lower_color = np.array([100, 50, 50])
upper_color = np.array([130, 255, 255])

# 提取特定颜色区域
color_mask = cv2.inRange(hsv_image, lower_color, upper_color)

# 形态学操作去除噪声
kernel = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (5, 5))
color_mask = cv2.morphologyEx(color_mask, cv2.MORPH_OPEN, kernel)

# 使用Canny边缘检测
edges = cv2.Canny(color_mask, 50, 150)

# 检测圆形
circles = cv2.HoughCircles(edges, cv2.HOUGH_GRADIENT, dp=1, minDist=50,
                            param1=50, param2=30, minRadius=10, maxRadius=40)

# 绘制圆形
if circles is not None:
    circles = np.round(circles[0, :]).astype("int")
    for (x, y, r) in circles:
        cv2.circle(original_image, (x, y), r, (0, 255, 0), 4)

# 检测方形
contours, _ = cv2.findContours(edges, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

for contour in contours:
    # 过滤小轮廓
    if cv2.contourArea(contour) < 100:
        continue
    epsilon = 0.02 * cv2.arcLength(contour, True)
    approx = cv2.approxPolyDP(contour, epsilon, True)
    if len(approx) == 4:
        cv2.drawContours(original_image, [approx], 0, (0, 0, 255), 3)

# 显示结果
cv2.imshow("Detected Shapes", original_image)
cv2.waitKey(0)
cv2.destroyAllWindows()