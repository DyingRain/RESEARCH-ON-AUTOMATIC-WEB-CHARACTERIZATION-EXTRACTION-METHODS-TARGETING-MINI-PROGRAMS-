import os

class TrafficControlClient:

    def __init__(self, control_file="traffic_control.txt"):
        self.control_file = control_file

        # 如果控制文件不存在，创建一个并设置为默认的 STOP 状态
        if not os.path.exists(self.control_file):
            with open(self.control_file, "w") as f:
                f.write("STOP")  # 默认停止记录

    def start_logging(self):
        """开始记录流量"""
        self._write_control_file("START")
        print("流量记录已启动.")

    def stop_logging(self):
        """停止记录流量"""
        self._write_control_file("STOP")
        print("流量记录已停止.")

    def get_status(self):
        """获取当前流量记录的状态"""
        try:
            with open(self.control_file, "r") as f:
                status = f.read().strip()
                print(f"当前状态: {status}")
                return status
        except FileNotFoundError:
            print("控制文件不存在.")
            return "UNKNOWN"

    def _write_control_file(self, status):
        """写入控制文件"""
        with open(self.control_file, "w") as f:
            f.write(status)

if __name__ == "__main__":
    client = TrafficControlClient()

    while True:
        print("\n请选择操作:")
        print("1. 开始记录流量")
        print("2. 停止记录流量")
        print("3. 查看当前状态")
        print("4. 退出")

        choice = input("请输入选项 (1/2/3/4): ").strip()
        if choice == "1":
            client.start_logging()
        elif choice == "2":
            client.stop_logging()
        elif choice == "3":
            client.get_status()
        elif choice == "4":
            print("退出控制端.")
            break
        else:
            print("无效选项，请重新输入.")
