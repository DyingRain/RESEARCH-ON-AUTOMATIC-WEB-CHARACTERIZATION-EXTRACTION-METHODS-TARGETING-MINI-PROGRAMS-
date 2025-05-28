from core.device_connector import connect_device
from core.ui_interaction import *
import time
from clientcontrol import TrafficControlClient
import os
import glob
import shutil
from core.pkg_analyser import PkgAnalyzer
from core.compared_ui_interaction import traverse_and_click_single_dfs

def merge_folders(source_folder, target_folder, overwrite=True):
    """
    将源文件夹中的所有第一层子文件夹的内容（包括嵌套结构）合并到目标文件夹中。
    :param source_folder: 包含多个子文件夹的源文件夹路径
    :param target_folder: 目标文件夹路径，所有内容将被复制到这里
    :param overwrite: 是否覆盖目标文件夹中已存在的文件，默认为 True
    """
    print(f"正在将 {source_folder} 中的子文件夹内容合并到 {target_folder}...")

    # 确保目标文件夹存在
    if not os.path.exists(target_folder):
        os.makedirs(target_folder)
        print(f"创建目标文件夹：{target_folder}")

    # 遍历源文件夹中的第一层子文件夹
    for subfolder_name in os.listdir(source_folder):
        subfolder_path = os.path.join(source_folder, subfolder_name)

        # 只处理文件夹
        if os.path.isdir(subfolder_path):
            # print(f"正在处理子文件夹：{subfolder_path}")
            # 递归复制子文件夹的内容到目标文件夹
            merge_folder_contents(subfolder_path, target_folder, overwrite)

    print("合并完成！")


def merge_folder_contents(src_folder, dst_folder, overwrite):
    """
    递归地将一个文件夹的内容复制到另一个文件夹中，保留文件夹结构。
    :param src_folder: 源文件夹路径
    :param dst_folder: 目标文件夹路径
    :param overwrite: 是否覆盖目标文件夹中已存在的文件
    """
    for item in os.listdir(src_folder):
        src_item = os.path.join(src_folder, item)
        dst_item = os.path.join(dst_folder, item)

        if os.path.isdir(src_item):  # 如果是文件夹，递归处理
            if not os.path.exists(dst_item):
                os.makedirs(dst_item)
                # print(f"创建文件夹：{dst_item}")
            merge_folder_contents(src_item, dst_item, overwrite)
        else:  # 如果是文件，复制文件
            if os.path.exists(dst_item):
                if overwrite:
                    # print(f"覆盖文件：{dst_item}")
                    shutil.copy2(src_item, dst_item)
                else:
                    pass
                    # print(f"跳过已存在的文件：{dst_item}")
            else:
                # print(f"复制文件：{src_item} -> {dst_item}")
                shutil.copy2(src_item, dst_item)


def list_all_folders(folder_path):
    """
    使用 os.walk() 遍历指定文件夹中的所有子文件夹。
    :param folder_path: 要遍历的文件夹路径
    """
    print(f"正在遍历文件夹：{folder_path}")
    for root, dirs, files in os.walk(folder_path):
        # root 是当前遍历的文件夹路径
        # dirs 是当前文件夹中的子文件夹列表
        # files 是当前文件夹中的文件列表
        print(f"当前文件夹：{root}")
        for dir_name in dirs:
            print(f"子文件夹：{os.path.join(root, dir_name)}")


def list_first_level_folders(folder_path):
    """
    使用 os.listdir() 遍历指定文件夹的第一层子文件夹。
    :param folder_path: 要遍历的文件夹路径
    """
    print(f"正在遍历文件夹：{folder_path}")
    for item in os.listdir(folder_path):
        item_path = os.path.join(folder_path, item)
        if os.path.isdir(item_path):  # 判断是否为文件夹
            print(f"第一层子文件夹：{item_path}")


def move_and_rename_file(old_file_path, new_directory, new_file_name):
    """
    将文件移动到新目录并重命名

    :param old_file_path: 原始文件的路径
    :param new_directory: 目标目录的路径
    :param new_file_name: 新文件名
    """
    # 检查旧文件是否存在
    if not os.path.exists(old_file_path):
        return
    # 构建新文件的完整路径
    new_file_path = os.path.join(new_directory, new_file_name)

    # 检查目标目录是否存在，如果不存在则创建
    if not os.path.exists(new_directory):
        os.makedirs(new_directory)

    # 移动并重命名文件
    shutil.move(old_file_path, new_file_path)
    print(f"文件已成功移动到 {new_file_path}")


def open_wechat_mini_program(device, mini_program_name):
    # 启动微信
    device.app_start('com.tencent.mm')  # 启动微信
    print("launch")
    time.sleep(8)  # 等待微信启动

    # 点击“发现”选项卡
    device.click(675, 2139)  # 坐标可能需要根据设备分辨率调整
    print("click discovery")
    time.sleep(5)

    # 下滑操作
    print("scroll")
    device.swipe(0.5, 0.8, 0.5, 0.2, 2)  # 从屏幕底部滑到顶部，按屏幕百分比指定
    time.sleep(5)

    # 点击“小程序”入口
    print("click mini program entry")
    device.click(595, 616)  # 坐标可能需要根据设备分辨率调整
    time.sleep(5)
    print("double click search bar")
    device.click(533, 293)
    # time.sleep(0.1)  # 短暂延迟，确保两次点击被识别为双击
    # device.click(533, 293)
    time.sleep(5)
    # 搜索并打开目标小程序
    print("search")
    device.send_keys(mini_program_name)  # 输入小程序名称
    time.sleep(5)
    device.press("enter")  # 模拟按下回车键
    time.sleep(5)


def close_wechat(device):
    try:
        # 强制停止微信进程
        device.shell('am force-stop com.tencent.mm')
        print("微信已关闭")
    except Exception as e:
        print(f"关闭微信时出错: {e}")


def run_with_timeout(device, graph, timeout):
    """
    执行 traverse_and_click 并在超时时间后自动停止
    """
    #traverse_and_click_single_dfs(device, timeout)
    traverse_and_click_423(device, timeout=60 * 40, depth=2)


def clear_xml_and_jpg_files(directory=None):
    """
    清除指定目录下所有的 .xml 和 .jpg 文件。

    :param directory: 要清除文件的目录路径。如果为 None，则使用当前目录。
    """
    # 如果未指定目录，则使用当前目录
    if directory is None:
        directory = os.getcwd()

    # 查找目录下所有的 .xml 和 .jpg 文件
    xml_files = glob.glob(os.path.join(directory, "*.xml"))
    jpg_files = glob.glob(os.path.join(directory, "*.png"))

    # 删除所有 .xml 文件
    for xml_file in xml_files:
        try:
            os.remove(xml_file)
            print(f"Deleted: {xml_file}")
        except Exception as e:
            print(f"Failed to delete {xml_file}: {e}")

    # 删除所有 .jpg 文件
    for jpg_file in jpg_files:
        try:
            os.remove(jpg_file)
            print(f"Deleted: {jpg_file}")
        except Exception as e:
            print(f"Failed to delete {jpg_file}: {e}")


def exit_main(client, wxappname, device):
    client.stop_logging()
    move_and_rename_file("traffic_log.txt", r"data", wxappname + ".txt")
    close_wechat(device)
    # 执行后清空小程序文件夹
    #os.system("adb shell rm /data/data/com.tencent.mm/MicroMsg/appbrand/pkg/general/*")


def travel(device, i, graph):
    print(f"小程序第{i}层分析", "-" * 20)
    get_miniapp_files()
    print("进行小程序静态文件解析", "#" * 15)
    pkg_analyser = PkgAnalyzer("wxapkg/project_file")
    pkg_analyser.draw_graph(graph)
    # 设置超时时间（单位：秒）
    timeout = 60 * 40
    run_with_timeout(device, pkg_analyser.graph, timeout)
    # 创建一个线程来运行带有循环的逻辑
    # thread = threading.Thread(target=run_with_timeout, args=(device, timeout))
    # thread.start()
    # # 等待线程完成或超时
    # thread.join(timeout + 15)  # 给额外的 1 秒时间用于清理和打印操作
    # 执行完成


def travel_App(wxappname):
    clear_xml_and_jpg_files()
    client = TrafficControlClient()  # 数据流控制
    device = connect_device()
    os.system("adb root")
    os.system("rmdir /s /q wxapkg\\files\\general")
    os.system("rmdir /s /q wxapkg\\project_file")
    if not device:
        print("Device connection failed.")
        return
    os.system("adb shell rm /data/data/com.tencent.mm/MicroMsg/appbrand/pkg/general/*")
    open_wechat_mini_program(device, wxappname)
    client.start_logging()
    device.click(579, 357)  # 坐标可能需要根据设备分辨率调整 点击第一个搜索框
    time.sleep(0.1)
    device.click(579, 357)
    time.sleep(10)
    try:
        # 进行主包分析
        travel(device, 1, "first_test")
    except Exception as e:
        print(f"Error in main: {e}")
        exit_main(client, wxappname, device)
        return None
    print("#" * 15, "遍历结束", "#" * 15)
    # print("#" * 15, "主包分析结束，进行全包分析", "#" * 15)
    # close_wechat(device)
    # clear_xml_and_jpg_files()
    # open_wechat_mini_program(device, wxappname)
    # device.click(579, 357)  # 坐标可能需要根据设备分辨率调整 点击第一个搜索框
    # time.sleep(0.1)
    # device.click(579, 357)
    # time.sleep(10)
    # try:
    #     # 进行全包分析
    #     travel(device, 2, "second_test")
    # except Exception as e:
    #     print(f"Error in main: {e}")
    #     exit_main(client, wxappname, device)
    #     return None

    exit_main(client, wxappname, device)


def get_miniapp_files():
    # 拉取文件

    os.system("adb pull /data/data/com.tencent.mm/MicroMsg/appbrand/pkg/general  wxapkg/files")
    # 更换当前工作目录
    retval1 = os.getcwd()
    print("当前工作目录为 %s" % retval1)
    path = "..\\clicktool\\wxapkg\\tool"
    os.chdir(path)
    # 查看修改后的工作目录
    retval = os.getcwd()
    print("目录修改成功 %s" % retval)
    # 文件逆向
    os.system("javac capreolus1Forhook.java -d class")
    os.system("java -classpath class newpath.capreolus1Forhook33")
    # 包合并
    os.chdir(retval1)
    merge_folders("wxapkg/files/general", "wxapkg/project_file", overwrite=True)


if __name__ == "__main__":
    # device = connect_device()
    # if not device:
    #     print("Device connection failed.")

    travel_App("得物App")

    #travel_App("茶百道")
    # compare_images(Image.open("page_20.png"), Image.open("39913964-f0d9-4ea1-87a5-0d70b7b5b8b6.png"))
