
import os

os.chdir("../assets")
path = os.getcwd()

for dirpath,dirnames,filenames in os.walk(path):#
	# print "dirpath=",dirpath
	for file in filenames:
		
		path = os.path.join(dirpath, file)
		print "walk......",path