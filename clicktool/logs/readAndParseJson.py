import json
def read_and_parse_json(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        for line in file:
            # 解析每一行的JSON数据
            data = json.loads(line.strip())
            # 打印或处理解析后的数据
            print("Instruction:", data.get("instruction"))
            print("Input:", data.get("input"))
            print("Output:", data.get("output"))
            print("History:", data.get("history"))
            print("-" * 40)
            yield data

# 调用函数并传入文件路径
# read_and_parse_json(r'C:\Users\reynor\Desktop\click2025\clicktool\20250102alpaca_responses.txt')