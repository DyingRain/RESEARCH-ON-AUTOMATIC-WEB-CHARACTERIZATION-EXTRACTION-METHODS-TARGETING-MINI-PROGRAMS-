import uiautomator2 as u2

def connect_device():
    """
    连接设备
    """
    try:
        return u2.connect()
    except Exception as e:
        print(f"Error connecting to device: {e}")
        return None

def is_within_mini_program(device):
    """
    检测当前是否仍然在微信小程序中
    """
    current_app = device.app_current()
    package_name = current_app.get('package', '')
    activity = current_app.get('activity', '')

    # 检查包名是否为微信
    if package_name == "com.tencent.mm":
        # 检查是否与小程序相关的活动
        if "AppBrand" in activity or "App" in activity:
            return True
    return False
