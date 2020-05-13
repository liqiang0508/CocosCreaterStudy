#!/usr/bin/python
# -*- coding: UTF-8 -*-
print("generateLocalConfig Start==========================")


import os
import hashlib
import json
import shutil
import ziputils
from collections import OrderedDict
import projectConfig

IgnorFile = ["CT_main.strings","EN_main.strings","appinfoiii.json","NO_main.strings"]

IgnorDir = ["res\\config","res\\Default"]

#复制 src目录下面所有的文件到 dst目录下面 
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

    F = file(filename,'rb')
    
    while True:
        b = F.read(8096)# get file content.
        if not b :
            break
        myhash.update(b)#encrypt the file
    F.close()
    return myhash.hexdigest()

def getFileSize(filePath):
	return os.path.getsize(filePath)

def walk(path):
	# print "walk======",path
	for dirpath,dirnames,filenames in os.walk(path):#
		# print "dirpath=",dirpath
		for filename in filenames:
			if dirpath in IgnorDir:
				continue
			if filename in IgnorFile:
				continue

			filename = os.path.join(dirpath, filename)
			# print "walk......",path,getFileMd5(path).upper()
			filename = filename.replace("\\","/")
			# print filename
			filedata = OrderedDict()
			filedata["filename"]= filename
			filedata["md5"]= getFileMd5(filename).upper()
			filedata["size"]= getFileSize(filename)
			
			data["files"].append(filedata)

def BuildRes():
	print("BuildRes Start**************")
	# projectPath = os.getcwd()
	projectPath = os.path.abspath(os.path.join(os.getcwd(), "../"))
	encodekey = projectConfig.Key
	os.system("CocosCreator.exe.lnk  --build platform=android;debug=false;template=default;xxteaKey="+encodekey+" --path "+projectPath)
	print("BuildRes end**************")




scriptVersion = 0
if os.path.exists("../assets/resources/appinfoiii.json"):#判断本地有没有配置文件 获取当前版本号
	with open("../assets/resources/appinfoiii.json","r") as f:
		filedata = f.read()
		jsondata = json.loads(filedata)
		scriptVersion = jsondata['scriptVersion']
		print scriptVersion
if not os.path.exists("../hotupversion"):
	os.mkdir("../hotupversion")

BuildRes()#先生成编译出来的资源和脚本
data = OrderedDict()
scriptVersion = scriptVersion+1#版本号加1 
data["scriptVersion"] = scriptVersion
data["files"] = []

os.chdir("../build/jsb-default")

# walk("src")#生成src的配置
# walk("res")#生成res的配置
os.chdir("../../")

# with open("appinfoiii.json","w") as f:#保存md5配置文件
# 	f.write(json.dumps(data,indent=4))
# 	f.close()

# copyFile("appinfoiii.json","assets/resources/appinfoiii.json")#生成最新的配置复制到项目中

#移动资源到hotupversion文件夹
copyFileTree("build/jsb-default/src","hotupversion/Script_"+str(scriptVersion)+"/src")#移动到hotupversion文件夹
copyFileTree("build/jsb-default/res","hotupversion/Script_"+str(scriptVersion)+"/res")#移动到hotupversion文件夹
# copyFile("appinfoiii.json","hotupversion/Script_"+str(scriptVersion)+"/appinfoiii.json")#配置文件移动到hotupversion文件夹

# compress 压缩
resdir = "hotupversion/Script_"+str(scriptVersion)+"/res"
quality = "30-50"#压缩比
main = "HotupDateTools\pngquant.exe"
for dirpath,dirnames,filenames in os.walk(resdir):#压缩目录下的所有文件
            for filename in filenames:
                    if filename.endswith("png"):
                        # print "compressing......",os.path.join(dirpath, filename)
                        cmd = main + " -f --ext .png --quality "+quality+" "+os.path.join(dirpath, filename)
                        # print cmd
                        os.popen(cmd)


# zip
zipdir = "hotupversion/"+"Script_"+str(scriptVersion)
os.chdir(zipdir)
ziputils.ZipInit("Script_"+str(scriptVersion)+".zip")
ziputils.AddFile("res")
ziputils.AddFile("src")
ziputils.ZipEnd()

# 压缩之后再来生成md5
walk("src")#生成src的配置
walk("res")#生成res的配置
with open("../../appinfoiii.json","w") as f:#保存md5配置文件
	f.write(json.dumps(data,indent=4))
	f.close()

#配置文件移动到热更新资源没了和项目目录
copyFile("../../appinfoiii.json","../../assets/resources/appinfoiii.json")#生成最新的配置复制到项目中
copyFile("../../appinfoiii.json","../../hotupversion/Script_"+str(scriptVersion)+"/appinfoiii.json")#配置文件移动到hotupversion文件夹

# move移动zip包到上一层目录
moveFile("Script_"+str(scriptVersion)+".zip","../Script_"+str(scriptVersion)+".zip")

os.chdir("../../HotupDateTools")

BuildRes()#上面生成最新的配置 所以还要编译一次

print("generateLocalConfig  Script_"+str(scriptVersion)+"/res   End==========================")
os.system('pause')