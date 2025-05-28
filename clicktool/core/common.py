from core.xml_utils import save_formatted_xml,parse_bounds
import hashlib
from termcolor import colored
def is_within_blocked_area(bounds, blocked_areas):
    """
    判断控件的 bounds 是否位于任何一个禁止点击的区域内
    """
    left, top, right, bottom = parse_bounds(bounds)
    
    for blocked_area in blocked_areas:
        blocked_left, blocked_top, blocked_right, blocked_bottom = blocked_area
        
        # 判断控件的矩形是否与禁止区域有交集
        if not (right < blocked_left or left > blocked_right or bottom < blocked_top or top > blocked_bottom):
            return True  # 如果与任意禁止区域有交集，则返回 True，表示该控件在禁止区域内
    return False  # 如果与所有禁止区域都没有交集，则返回 False
def print_node_info(resource_id, text, clickable, bounds, element_hash):
    print(colored(
        f"Node: Resource-ID={resource_id}, Text={text}, Clickable={clickable}, Bounds={bounds}, Hash={element_hash}",
        "cyan"
    ))
def hash_node_attributes(node):
    # Concatenate relevant attributes into a single string
    attributes = [
        node.attrib.get('index', ''),
        node.attrib.get('text', ''),
        node.attrib.get('resource-id', ''),
        node.attrib.get('class', ''),
        node.attrib.get('package', ''),
        node.attrib.get('content-desc', ''),
        node.attrib.get('checkable', ''),
        node.attrib.get('checked', ''),
        node.attrib.get('clickable', ''),
        node.attrib.get('enabled', ''),
        node.attrib.get('focusable', ''),
        node.attrib.get('focused', ''),
        node.attrib.get('scrollable', ''),
        node.attrib.get('long-clickable', ''),
        node.attrib.get('password', ''),
        node.attrib.get('selected', ''),
        node.attrib.get('visible-to-user', ''),
        node.attrib.get('bounds', ''),
        node.attrib.get('drawing-order', ''),
        node.attrib.get('hint', '')
    ]
    
    # Join attributes into a single string
    attribute_string = ''.join(attributes)
    
    # Create a hash of the concatenated string (using SHA-256 for example)
    return hashlib.sha256(attribute_string.encode('utf-8')).hexdigest()   
def save_current_screen(xml_data, depth):
    file_name = f"screen_{depth}.xml"
    save_formatted_xml(xml_data, file_name)