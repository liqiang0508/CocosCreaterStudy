#!/usr/bin/python
# -*- coding: UTF-8 -*-

#打包 子游戏bundle脚本

import os
import hashlib
import json
import shutil
import ziputils
from collections import OrderedDict
import projectConfig


def copyFileTree(src,dst ): 
	if os.path.exists(dst):
		print dst+"  delete**** "
		shutil.rmtree(dst)
	else:
		pass
			

	shutil.copytree(src, dst)
	print "copy tree %s -> %s"%( src,dst)

def moveFile(srcfile,dstfile):
	if not os.path.isfile(srcfile):
		print "%s not exist!"%(srcfile)
	else:
		fpath,fname=os.path.split(dstfile)    #分离文件名和路径
		if not os.path.exists(fpath):
			os.makedirs(fpath)                #创建路径
		shutil.move(srcfile,dstfile) 
 # 复制文件
def copyFile(srcfile,dstfile):
    if not os.path.isfile(srcfile):
        print "%s not exist!"%(srcfile)
    else:
		fpath,fname=os.path.split(dstfile)    #分离文件名和路径
		if not os.path.exists(fpath):
			os.makedirs(fpath)                #创建路径
		print "copyFile %s -> %s"%( srcfile,dstfile)
		shutil.copyfile(srcfile,dstfile)      #复制文件

def getFileMd5(filename):
    if not os.path.isfile(filename):
        return
    myhash = hashlib.md5()# create a md5 object
    f = file(filename,'rb')
    
    while True:
        b = f.read(8096)# get file content.
        if not b :
            break
        myhash.update(b)#encrypt the file
    f.close()
    return myhash.hexdigest()

def getFileSize(filePath):
	return os.path.getsize(filePath)

def walk(path,replaceStr):
	# print "walk======",path
	for dirpath,dirnames,filenames in os.walk(path):#
		# print "dirpath=",dirpath
		for filename in filenames:
			# if dirpath in IgnorDir:
			# 	continue
			# if filename in IgnorFile:
			# 	continue

			path = os.path.join(dirpath, filename)
			# print "walk......",path,getFileMd5(path).upper()
			path = path.replace("\\","/")
			filedata = OrderedDict()
			filedata["filename"]=path.replace(replaceStr,"")
			filedata["md5"]= getFileMd5(path).upper()
			filedata["size"]= getFileSize(path)
            
			
			CfgFile["files"].append(filedata)

def getFileText(path):
    with open(path,"rb+") as f:
        d = f.read()
        f.close()
        return d

def writeFileText(filepath,text):
    with open(filepath,"wb+") as f:
        d = f.write(text)
        f.close()





print("buildSubGameCfg =========================================================================start")
remotePath = "../build/jsb-default/remote"
subGameCfgPath  = projectConfig.subGameCfg_Path#子游戏配置文件
subGameCfg = json.loads(getFileText(subGameCfgPath))#子游戏配置数据
# print subGameCfg
SubGameFilders = os.listdir(remotePath)#编译出来的子游戏bundle文件夹

for gameFolderName in SubGameFilders:#遍历

    if  subGameCfg.has_key(gameFolderName) == False:#编译后的bundle文件夹不在subgameCfg.json中 跳过
        print(gameFolderName+"not in subgameCfg file!!!!")
        continue

    isupdate = subGameCfg[gameFolderName]["isupdate"]#是否更新
    if isupdate == False:#不更新的游戏 跳过
        continue

    foderPath =  os.path.join(remotePath,gameFolderName)#当前bundle文件夹路径
    if os.path.exists(foderPath) == False:#打包出来的子游戏文件夹不存在 跳过
        continue

    appinfofile = os.path.join(foderPath,"appinfo.json")#每个小游戏对应的appinfo.json文件

    print ("start--------------------------------",gameFolderName)
    if os.path.exists(appinfofile):#每次都把 appinfo.json删除
        os.remove(appinfofile)

    #生成md5配置文件
    CfgFile =  OrderedDict()
    subGameCfg[gameFolderName]["version"] = int(subGameCfg[gameFolderName]["version"])+1
    CfgFile["scriptVersion"] = subGameCfg[gameFolderName]["version"]
    CfgFile["files"] = []
    walk(foderPath,"../build/jsb-default/remote/")


    
    writeFileText(appinfofile,json.dumps(CfgFile,indent=4))#写入每个游戏的配置文件appinfo.json
    writeFileText(subGameCfgPath,json.dumps(subGameCfg,indent=4))#更新本地的subgame.json小游戏配置文件 因为版本号加1

    src_folder = gameFolderName+"_"+str(subGameCfg[gameFolderName]["version"])# 生成xx_2 加上版本号的文件夹
    targetPath = os.path.join("../hotupversion/remote",src_folder)
    copyFileTree(foderPath,targetPath)#移动到hotupversion/remote文件夹下面
    print ("end  --------------------------------",gameFolderName)


#zip 文件夹
print("START *** ZIP")
subGameCfg = json.loads(getFileText(subGameCfgPath))
for gameFolderName in SubGameFilders:
    if  subGameCfg.has_key(gameFolderName) == False:#编译后的bundle文件夹不在subgameCfg.json中 跳过
        continue

    src_folder = gameFolderName+"_"+str(subGameCfg[gameFolderName]["version"])
    isupdate = subGameCfg[gameFolderName]["isupdate"]#是否下载
    if os.path.exists(src_folder +".zip"):#判断zip存在 就先删除一下
        os.remove(src_folder +".zip")
    if isupdate == True:#子游戏需要更新
        os.chdir("../hotupversion/remote")
        if os.path.exists(src_folder):#文件夹存在
            ziputils.zipFolder(src_folder +".zip",".\\"+src_folder+"\\*")
            print("ZIP=================>",gameFolderName,src_folder +".zip")
        os.chdir("../../HotupDateTools")
print("END *** ZIP")
print("buildSubGameCfg =========================================================================end")

# 打开生成热更新配置文件夹窗口
os.system("start " +"..\\hotupversion\\remote")
os.system("pause")