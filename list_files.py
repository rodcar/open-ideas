
import os

json_folder = os.path.join(os.path.dirname(__file__), 'json')
prefix = 'https://datosabiertos.gob.pe/dataset/'

for filename in os.listdir(json_folder):
    if filename.endswith('.json'):
        filename_without_ext = os.path.splitext(filename)[0]
        print(prefix + filename_without_ext)