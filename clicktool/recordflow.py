import json
from mitmproxy import http
import os

class TrafficLogger:

    def __init__(self):
        # 初始化日志文件和控制文件
        self.log_file = "traffic_log.txt"
        self.control_file = "traffic_control.txt"

        # 如果控制文件不存在，则创建一个并设置为默认的停止状态
        if not os.path.exists(self.control_file):
            with open(self.control_file, "w") as f:
                f.write("STOP")  # 初始状态为停止

    def log_to_file(self, content):
        # 将记录写入文件
        with open(self.log_file, "a", encoding="utf-8") as f:
            f.write(content + "\n\n")

    def format_body(self, body: bytes, content_type: str):
        """
        格式化 body，支持文本、JSON 和二进制数据。
        """
        body_length = len(body)

        # 处理 Content-Type
        if content_type.startswith("image/") or content_type.startswith("video/") or "octet-stream" in content_type:
            # 如果是二进制数据
            return f'{{"type": "{content_type}", "length": {body_length}}}'
        else:
            try:
                # 尝试解析为 JSON
                json_body = json.loads(body.decode("utf-8", errors="ignore"))
                return json_body
            except (json.JSONDecodeError, UnicodeDecodeError):
                # 如果不是 JSON，返回文本长度和部分内容
                return f'{{"length": {body_length}, "type": "text"}}'

    def should_log(self):
        """
        检查控制文件，决定是否记录流量。
        """
        try:
            with open(self.control_file, "r") as f:
                status = f.read().strip()
                return status == "START"
        except FileNotFoundError:
            return False

    def log_traffic(self, flow: http.HTTPFlow):
        if not self.should_log():
            return  # 如果状态是 STOP，则不记录

        content_type_request = flow.request.headers.get("Content-Type", "unknown")
        content_type_response = flow.response.headers.get("Content-Type", "unknown")

        # 记录请求内容
        request_info = f"--- Request ---\n" \
                       f"URL: {flow.request.url}\n" \
                       f"Method: {flow.request.method}\n" \
                       f"Headers: {dict(flow.request.headers)}\n" \
                       f"Body: {self.format_body(flow.request.content, content_type_request)}\n"

        # 记录响应内容
        response_info = f"--- Response ---\n" \
                        f"URL: {flow.request.url}\n" \
                        f"Status Code: {flow.response.status_code}\n" \
                        f"Headers: {dict(flow.response.headers)}\n" \
                        f"Body: {self.format_body(flow.response.content, content_type_response)}\n"

        # 打印到终端
        print(request_info)
        print(response_info)

        # 写入日志文件
        self.log_to_file(request_info)
        self.log_to_file(response_info)

    def request(self, flow: http.HTTPFlow):
        # 请求时不做记录，仅在响应时记录
        pass

    def response(self, flow: http.HTTPFlow):
        # 响应时才记录日志
        self.log_traffic(flow)


# 注册插件
addons = [
    TrafficLogger()
]
