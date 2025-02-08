# JSON ✅
# import json

# with open('data/data.json', 'r') as file:
#     data = json.load(file)

# print(data)

# # XML ✅
# import json
# import xmltodict

# def xml_to_json(file_path):
#       with open(file_path, "r", encoding="utf-8") as file:
#         return xmltodict.parse(file.read())

# xml_data = xml_to_json("data/data.xml")
# print(json.dumps(xml_data, indent=4))

# # CSV 🔴
# import csv
# import json

# def csv_to_json(file_path):
#     with open(file_path, "r", encoding="utf-8") as file:
#         reader = csv.DictReader(file)
#         return list(reader)  # List of dictionaries

# csv_data = csv_to_json("data/data.csv")
# print(json.dumps(csv_data, indent=4))

# # YAML ✅
# import yaml
# import json

# def yaml_to_json(file_path):
#     with open(file_path, "r", encoding="utf-8") as file:
#         return yaml.safe_load(file)  # Dictionary

# yaml_data = yaml_to_json("data/data.yaml")
# print(json.dumps(yaml_data, indent=4))


# TXT ✅
import yaml
import json

def parse_txt_as_yaml(file_path):
    """Parses the TXT file using PyYAML."""
    with open(file_path, "r", encoding="utf-8") as file:
        data = yaml.safe_load(file)

    return data

txt_data = parse_txt_as_yaml("data/data.txt")
print(json.dumps(txt_data, indent=4))
