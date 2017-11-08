# -*- coding: utf-8 -*-
import json

def load():
    with open('package.json') as json_file:
        data = json.load(json_file)
        return data

def store(data):
    with open("version.txt","w") as f:
        f.write(data)

if __name__ == "__main__":

    data = load()
    version_data = data['name'] + ":" + data['version']
    store(version_data)
