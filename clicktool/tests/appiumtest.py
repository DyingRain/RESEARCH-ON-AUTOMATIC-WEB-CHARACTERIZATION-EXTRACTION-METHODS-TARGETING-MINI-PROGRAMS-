from appium import webdriver
from appium.options.android import UiAutomator2Options
import time
import random

def random_click_in_mini_program(device):
    """
    在微信小程序中进行随机点击操作
    :param device: 设备名称 (str)
    """
    # 设置 Desired Capabilities
    options = UiAutomator2Options()
    options.platform_name = 'Android'
    options.device_name = device
    options.app_package = 'com.tencent.mm'
    options.app_activity = '.ui.LauncherUI'
    options.no_reset = True
    options.unicode_keyboard = True
    options.reset_keyboard = True

    try:
        print("Desired Capabilities:", options)  # 调试打印
        # 启动 Appium 会话
        driver = webdriver.Remote('http://localhost:4723', options=options)
        print("微信已启动，等待小程序加载...")
        time.sleep(10)  # 等待微信启动并进入小程序

        # 获取屏幕尺寸
        window_size = driver.get_window_size()
        width = window_size['width']
        height = window_size['height']

        # 随机点击操作
        print("开始随机点击...")
        for i in range(10):  # 点击 10 次
            x = random.randint(int(width * 0.2), int(width * 0.8))  # 横向范围：20% - 80%
            y = random.randint(int(height * 0.2), int(height * 0.8))  # 纵向范围：20% - 80%
            print(f"点击位置: ({x}, {y})")
            driver.tap([(x, y)])
            time.sleep(1)  # 每次点击后等待 1 秒

        print("随机点击完成！")

    except Exception as e:
        print(f"运行过程中出现错误: {e}")
    finally:
        # 关闭会话
        if 'driver' in locals():
            driver.quit()
        print("Appium 会话已关闭。")

# 示例调用
if __name__ == "__main__":
    device_name = "emulator-5554"  # 替换为你的设备名称
    random_click_in_mini_program(device_name)
