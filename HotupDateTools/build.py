#!/usr/bin/python
# -*- coding: UTF-8 -*-
import os
import projectConfig
print("build Start**************")
projectPath = os.path.abspath(os.path.join(os.getcwd(), "../"))# os.getcwd()
print projectPath
key = projectConfig.Key
os.system("CocosCreator.exe.lnk  --build platform=android;debug=false;template=default;xxteaKey="+key+" --path "+projectPath)

# test = os.path.join(projectPath,"build/jsb-default")
# print test

print("build End****************")
os.system("pause")