import os
import subprocess
import time
import threading
import re
import uiautomator2 as u2
from clicktool import mini_click
import clicktool.core
from clicktool.mini_click import travel_App

# 修改为你的APK文件夹路径
APK_FOLDER = "/apk"
PCAP_SAVE_DIR = "/sdcard"


# 启动tcpdump
def start_tcpdump(package_name):
    pcap_path = os.path.join(PCAP_SAVE_DIR, f"{package_name}.pcap")
    cmd = f"adb shell \"export PATH=$PATH:/system/bin/; su -c 'tcpdump -w /sdcard/Pictures/{package_name}.pcap'\""
    subprocess.Popen(cmd, shell=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)


# 停止tcpdump
def stop_tcpdump():
    cmd = f"adb shell \"export PATH=$PATH:/system/bin/; su -c 'pkill tcpdump'\""

    subprocess.call(cmd, shell=True)


# 安装并运行APK
def run_apk(miniapp):
    try:
        os.system("adb root")
        os.system("rmdir /s /q wxapkg/pcap")
        # 启动tcpdump
        start_tcpdump(miniapp)
        print("抓包开始")

        # 等待5秒
        time.sleep(5)

        travel_App(miniapp)

        # 停止抓包
        stop_tcpdump()
        print("抓包停止")

        os.makedirs("wxapkg/pcap")
        os.system("adb pull /sdcard/Pictures  wxapkg/pcap")

    except subprocess.CalledProcessError as e:
        print(f"处理 {miniapp} 失败: {e}")


# 主函数
def main():


    miniapp = "得物APP"
    run_apk(miniapp)


if __name__ == "__main__":

    main()
