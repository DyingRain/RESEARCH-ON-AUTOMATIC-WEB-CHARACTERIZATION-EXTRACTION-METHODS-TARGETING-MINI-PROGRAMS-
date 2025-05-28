import requests
import time
import json
res = []

def main():
    # List of wxids to process
    # aaa5 = ["wx6905976d5d24199c"]
    # res.append("政府\n\n\n\n\n\n")

    # for a in aaa5:
    #     aaa(a)
    #     time.sleep(10)

    aaa("wxd50719b441c24e02")

    # Save results to a file
    # with open("./res.txt", "w") as writer:
    #     writer.write(str(res))

def aaa(wxid):
    url = "https://kainy.cn/api/weapp/info/"
    request_body = {"appid": wxid}

    headers = {
        "Accept-Encoding": "gzip,compress,br,deflate",
        "charset": "utf-8",
        "Connection": "keep-alive",
        "Content-Length": str(len(str(request_body))),
        "content-type": "application/json;charset=utf-8",
        "Host": "kainy.cn",
        "Referer": "https://servicewechat.com/wx109bf438c8cc1b8b/23/page-frame.html",
        "User-Agent": "Mozilla/5.0 (Linux; Android 10; MI 8 Lite Build/QKQ1.190910.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/116.0.0.0 Mobile Safari/537.36 XWEB/1160065 MMWEBSDK/20231202 MMWEBID/4270 MicroMessenger/8.0.47.2560(0x28002F3F) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64 MiniProgramEnv/android"
    }

    try:
        response = requests.post(url, json=request_body, headers=headers)
        response.raise_for_status()
        response_body = response.text

        # Convert response_body to a dictionary
        response_dict = json.loads(response_body)

        # Save response to a file
        with open("yiyuan0.txt", "a") as writer:
            writer.write(f"{wxid}\t{json.dumps(response_dict, ensure_ascii=False)}\n")

        print(f"{wxid}: {response_dict}")
        return response_dict
    except requests.exceptions.RequestException as e:
        print(f"Error with wxid {wxid}: {e}")
        return None
    except json.JSONDecodeError:
        print(f"Failed to decode JSON for wxid {wxid}: {response_body}")
        return None
def r(wxid):
    url = "https://kainy.cn/api/weapp/info/"
    request_body = {"appid": wxid}

    headers = {
        "Accept-Encoding": "gzip,compress,br,deflate",
        "charset": "utf-8",
        "Connection": "keep-alive",
        "Content-Length": str(len(str(request_body))),
        "content-type": "application/json;charset=utf-8",
        "Host": "kainy.cn",
        "Referer": "https://servicewechat.com/wx109bf438c8cc1b8b/24/page-frame.html",
        "User-Agent": "Mozilla/5.0 (Linux; Android 10; MI 8 Lite Build/QKQ1.190910.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/116.0.0.0 Mobile Safari/537.36 XWEB/1160065 MMWEBSDK/20231202 MMWEBID/4270 MicroMessenger/8.0.47.2560(0x28002F3F) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64 MiniProgramEnv/android"
    }

    try:
        response = requests.post(url, json=request_body, headers=headers)
        response.raise_for_status()
        response_body = response.text

        # Uncomment to save to file
        # with open("yiyuan0.txt", "a") as writer:
        #     writer.write(f"{wxid}\t{response_body}\n")

        print(f"{wxid}: {response_body}")
    except requests.exceptions.RequestException as e:
        print(e)

if __name__ == "__main__":
    main()