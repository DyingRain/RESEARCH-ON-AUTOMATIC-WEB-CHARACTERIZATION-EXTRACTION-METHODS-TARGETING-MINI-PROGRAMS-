from xml.dom.minidom import parseString
import xml.etree.ElementTree as ET
from termcolor import colored

def save_formatted_xml(xml_data, file_name):
    """
    将 XML 数据格式化并写入文件
    """
    try:
        # 使用 minidom 格式化 XML
        dom = parseString(xml_data)
        formatted_xml = dom.toprettyxml(indent="  ")

        # 写入文件
        with open(file_name, "w", encoding="utf-8") as file:
            file.write(formatted_xml)
        print(colored(f"XML data saved to {file_name}", "green"))
    except Exception as e:
        print(colored(f"Error saving XML to file: {e}", "red"))

def parse_bounds(bounds):
    """
    从控件的 bounds 属性解析出矩形的坐标 [left, top, right, bottom]
    """
    try:
        coords = bounds.replace("[", "").replace("]", ",").split(",")
        left = int(coords[0])
        top = int(coords[1])
        right = int(coords[2])
        bottom = int(coords[3])
        return left, top, right, bottom
    except Exception as e:
        print(colored(f"Error parsing bounds '{bounds}': {e}", "yellow"))
        return None
def compare_xml(xml1, xml2):
    """
    比较两个 XML 数据的结构是否相同
    """
    tree1 = ET.ElementTree(ET.fromstring(xml1))
    tree2 = ET.ElementTree(ET.fromstring(xml2))
    
    root1 = tree1.getroot()
    root2 = tree2.getroot()
    
    # 比较根节点是否相同
    if root1.tag != root2.tag:
        print(f"Root element mismatch: {root1.tag} != {root2.tag}")
        return False

    # 遍历 XML 元素并比较每个元素
    for elem1, elem2 in zip(root1.iter(), root2.iter()):
        if elem1.tag != elem2.tag:
            print(f"Tag mismatch: {elem1.tag} != {elem2.tag}")
            return False
        if elem1.attrib != elem2.attrib:
            print(f"Attributes mismatch at {elem1.tag}: {elem1.attrib} != {elem2.attrib}")
            return False
        if elem1.text != elem2.text:
            print(f"Text mismatch at {elem1.tag}: {elem1.text} != {elem2.text}")
            return False
    
    return True