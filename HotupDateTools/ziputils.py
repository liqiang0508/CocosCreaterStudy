#!/usr/bin/python
# -*- coding: UTF-8 -*-
import os
import sys
import zipfile
# import projectConfig
global azip

Zip_Exe = os.path.join(os.getcwd(), "7za.exe")


# 初始化一个zip文件
def ZipInit(targetzip):
    global azip
    azip = zipfile.ZipFile(targetzip, 'w', zipfile.ZIP_DEFLATED)


    # 添加文件
def AddFile(srcfile):
    global azip
    if os.path.isfile(srcfile):  #文件
        azip.write(srcfile)

    if os.path.isdir(srcfile):  #文件夹
        azip.write(srcfile)  #移动目录

        for dirpath, dirnames, filenames in os.walk(srcfile):  #压缩目录下的所有文件
            for filename in filenames:
                # print "file-",file
                # print
                azip.write(os.path.join(dirpath, filename))


# 压缩完毕
def ZipEnd():
    global azip
    if azip:
        azip.close()
    else:
        print("zip not init---please init first")


# 解压
def ZipExtral(targetzip, destpath):
    global azip
    azip = zipfile.ZipFile(targetzip)
    for file in azip.namelist():
        azip.extract(file, destpath)
    azip.close()


#7 zip-------------------------------------------------
#把 zipFolder指定文件夹压缩成saveZipName
#压缩的时候只想把一个目录下的所有文件压缩，文件目录使用.\\dir\\* 这样压缩的zip不包含根目录
def zipFolder(saveZipName, zipFolder, pwd=None):  #压缩文件

    cmd = Zip_Exe + " a " + saveZipName + " " + zipFolder + "  -mx=9 -mm=LZMA"
    if pwd:
        cmd = cmd + " -p" + pwd
    print(cmd)
    os.system(cmd)


#解压zip
def extralFolder(zippath, savefoler, pwd=None):  #解压zip

    # savefoler = os.path.join( os.getcwd(),savefoler)
    if not os.path.exists(savefoler):
        os.makedirs(savefoler)

    cmd = Zip_Exe + " x -o " + savefoler + " " + zippath

    if pwd:
        cmd = cmd + " -p" + pwd
    print(cmd)
    os.system(cmd)


#7 zip-------------------------------------------------

# ZipInit("tes1t.zip")
# AddFile("folder1")
# AddFile("folder2")
# ZipEnd()
