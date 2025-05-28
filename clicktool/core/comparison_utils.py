from difflib import SequenceMatcher
import xml.etree.ElementTree as ET
def parse_xml(xml_string):
    return ET.ElementTree(ET.fromstring(xml_string))

def compare_text_similarity(text1, text2):
    return SequenceMatcher(None, text1, text2).ratio()

def compare_xml_similarity(xml1, xml2):
    tree1 = parse_xml(xml1)
    tree2 = parse_xml(xml2)
    
    # 获取根节点
    root1, root2 = tree1.getroot(), tree2.getroot()
    
    # 比较结构和内容的递归方法
    def compare_nodes(node1, node2):
        # 比较标签相似性
        tag_similarity = compare_text_similarity(node1.tag, node2.tag)
        
        # 计算文本相似性
        text_similarity = compare_text_similarity(node1.text.strip() if node1.text else '', 
                                                  node2.text.strip() if node2.text else '')
        
        # 计算属性相似性
        node1_attrib = sorted(node1.attrib.items())
        node2_attrib = sorted(node2.attrib.items())
        attrib_similarity = compare_text_similarity(str(node1_attrib), str(node2_attrib))
        
        # 比较子节点结构
        children1, children2 = list(node1), list(node2)
        num_children_similarity = 1 - abs(len(children1) - len(children2)) / max(len(children1), len(children2), 1)
        
        child_similarity = 0

        # 对所有子节点逐一比较
        max_children = max(len(children1), len(children2))
        for i in range(max_children):
            if i < len(children1) and i < len(children2):
                # 两边都有对应的子节点，正常比较
                child_similarity += compare_nodes(children1[i], children2[i])
            elif i < len(children1):
                # children1 多出的子节点，与空节点比较
                child_similarity += compare_nodes(children1[i], ET.Element(''))
            elif i < len(children2):
                # children2 多出的子节点，与空节点比较
                child_similarity += compare_nodes(ET.Element(''), children2[i])

        # 归一化
        child_similarity /= max_children if max_children > 0 else 1
        
        # 综合相似度计算
        return (0.1 * tag_similarity + 
                0.4 * text_similarity + 
                0.3 * attrib_similarity + 
                0.2 * (num_children_similarity * child_similarity))
    
    # 对根节点进行比较
    return compare_nodes(root1, root2)
