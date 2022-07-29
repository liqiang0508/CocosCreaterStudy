#!/usr/bin/python
# -*- coding: UTF-8 -*-
import os
import projectConfig
print("compile Start**************")

projectPath = os.path.abspath(os.path.join(os.getcwd(), "../"))# os.getcwd()
print(projectPath)
key = projectConfig.Key
os.system("CocosCreator.exe.lnk  --compile platform=android;debug=false;template=default;xxteaKey="+key+"  --path "+projectPath)



print("compile End**************")
os.system("pause")