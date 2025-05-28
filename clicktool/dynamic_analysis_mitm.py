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


# 启动 mitmproxy
def start_mitmproxy():
    script_path = "./mitm_recordflow.py"  # 替换为 recordflow.py 的实际路径
    process = subprocess.Popen(
        ["mitmdump", "-s", script_path],
        # shell=True,
        # stdout=subprocess.PIPE, # 这一行如果不禁用，手机会连不上网
        # stderr=subprocess.PIPE
    )
    # print("Mitmproxy started.")
    return process


def stop_mitmproxy(process):
    # 发送终止信号
    process.terminate()
    try:
        process.wait(timeout=2)  # 等待进程退出
    except subprocess.TimeoutExpired:
        process.kill()  # 强制杀死进程
    # print("Mitmproxy stopped.")


# 安装并运行APK
def run_apk(miniapp):
    # 配置recordflow.py的运行参数
    with open('traffic_control.txt', "w") as f:
        f.write(f"START\n{miniapp}.txt")

    try:
        # os.system("adb root")
        # os.system("rmdir /s /q wxapkg/pcap")
        # 启动mitmproxy抓包
        mitmproxy_process = start_mitmproxy()
        print("mitmproxy抓包开始")
        time.sleep(2)  # 若不等待，mitmproxy会启动失败

        # 启动自动点击线程
        travel_App(miniapp)

        # 等待30秒
        time.sleep(15)
        # 停止mitmproxy抓包
        stop_mitmproxy(mitmproxy_process)
        print("mitmproxy抓包停止")
        # os.makedirs("wxapkg/pcap")
        # os.system("adb pull /sdcard/Pictures  wxapkg/pcap")

    except subprocess.CalledProcessError as e:
        print(f"处理 {miniapp} 失败: ======================={e}===========================")


# 主函数
def main(miniapp):
    run_apk(miniapp)


if __name__ == "__main__":
    miniapp = "得物APP"
    main(miniapp)
