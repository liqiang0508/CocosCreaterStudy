#!/usr/bin/python
# -*- coding: UTF-8 -*-
import os
import projectConfig
print("build Start**************")
projectPath = os.path.abspath(os.path.join(os.getcwd(), "../"))# os.getcwd()

key = projectConfig.Key
CocosCreatorExePath = projectConfig.CocosCreatorExePath
buildcmd = CocosCreatorExePath+"  --build platform=android;debug=false;template=default;xxteaKey="+key+" --path "+projectPath
# print buildcmd
os.system(buildcmd)


print("build End****************")
os.system("pause")