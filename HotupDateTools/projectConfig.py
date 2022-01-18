#!/usr/bin/python
# -*- coding: UTF-8 -*-
import os

Zip_Exe = os.path.join(os.getcwd(), "7za.exe")
Key = "e2ededca-352b-49"  #加密密钥

#本地cocos exe的路径
# CocosCreatorExePath = "D:/CocosDashboard/resources/.editors/Creator/2.4.3/CocosCreator.exe"
# ExePath.txt写入自己本地EXE的路径
CocosCreatorExePath = ""
subGameCfg_Path = "subgameCfg.json"  #项目中子游戏配置文件
exePath = "ExePath.txt"
if os.path.exists(exePath):
    with open(exePath, "r") as f:
        CocosCreatorExePath = f.read()
        f.close()
else:
    print("no exePath file please input CocosCreatorExePath to ExePath.txt ")

print("CocosCreatorExePath====", CocosCreatorExePath)
