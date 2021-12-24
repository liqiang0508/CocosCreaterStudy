#!/usr/bin/python
# coding: UTF-8 -*-
import os  
import time # 引入time模块
import shutil
import sys
import xlrd
import json


xmlfile = 'strings.xls'
workbook = xlrd.open_workbook(xmlfile) #读取excel文件
data = workbook.sheets()[0].row(0)  #读取第一行有几种语言
Langue=[]
for l in (data):
	if l.value !='':
		pass
		# print  data.index(l),l.value.lower()
	# if l.
	Langue.append(l.value.lower())

Langue = Langue[1:]#去掉第一个ID

for langue in Langue: #把语言存起来遍历生成xml文件
	if langue=='':
		break
	dataDic = {}
	f = open(langue+".ts", "w+",encoding='utf-8')
	f.write("export default{\n")
	# f.write("{\n")

	for booksheet in workbook.sheets():#循环每个表单	
			for row in range(1,booksheet.nrows):
				# ctype = booksheet.cell(row, 0).ctype
				# print("ctype",ctype)
				textValue = str(int(booksheet.cell(row, 0).value))
				if textValue !='' and textValue.find("_")==-1 :
					celldata = booksheet.cell(row, 1+Langue.index(langue)).value
					celldata = str(celldata)
					celldata = celldata.replace('\n','\\n') 
					celldata = celldata.replace('\"','\\"') 
					text = "\""+textValue+"\":"+"\""+celldata+"\",\n"
					f.write(("\t"+text))
					# dataDic[textValue] = celldata
				else:
					pass
	# with open(langue+".json",'w',encoding="utf-8") as f:
	# 	# 设置不转换成ascii  json字符串首缩进
	# 	print("build {} success------------------".format(langue+".json"))
	# 	f.write(json.dumps( dataDic,ensure_ascii=False,indent=2 ) )
		
	f.write("}\n")
	f.close()
 
	src = langue+".ts"
	dst = "../assets/i18n/"+langue+".ts"
	shutil.copyfile(src, dst)

print("build success------------------")
os.system("pause")