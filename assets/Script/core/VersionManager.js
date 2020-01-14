
var HttpHelper = require("HttpHelper");

var GtempFolder = ""

var GHotUpFolder = ""

var GtempCfg = ""

if (cc && cc.sys.isNative) {

    GtempFolder = jsb.fileUtils.getWritablePath() + "packageTemp/"//热更新临时目录

    GHotUpFolder = jsb.fileUtils.getWritablePath() + "package/"//热更新真实目录

    GtempCfg = jsb.fileUtils.getWritablePath() + "config/appinfoiii.json"//包外配置

}

// stateCode
// 0:不用更新 
// 1:获取版本配置文件失败
// 2:获取MD5配置文件失败
// 3:下载单个文件失败
// 4:移动文件失败
// 5 :更新成功
var Global = require("Global")
var VersionManager = {
    remoteCfg: '',//远程配置
    remoteMd5Cfg: '',//远程md5
    localCfg: '',//local配置
    stateCode: '',//更新状态码


    checkUpdate: function (url, downcall, progressCall) {
        var self = this;
        this.parseLocalCfg()

        this.downcall = downcall;
        this.progressCall = progressCall;
        this.remoteCfg = url

    },
    //下载远程md5
    downRemoteMd5: function (url) {
        var self = this
        console.log("downRemoteMd5----,", url)

        HttpHelper.sendHttpRequest(url, function (data) {
            if (data == null) {
                self.callFunWithState(2, "获取MD5配置文件失败")
                return
            }
            self.remoteMd5Cfg = JSON.parse(data)
            self.comparefiles()

        })

    },

    comparefiles: function () {//对比差异文件

        var localMd5Files = this.localCfg["files"]

        var remoteMd5Files = this.remoteMd5Cfg["files"]
        var ChangeFiles = new Array()
        var localMd5Objects = {}
        var remoteMd5Objects = {}
        for (var i = 0; i < localMd5Files.length; i++) {//本地的配置按照文件名存下
            var file = localMd5Files[i]
            var fileName = file["filename"]
            var md5 = file["md5"]
            var fileSize = file["fileSize"]
            localMd5Objects[fileName] = { "md5": md5, "fileSize": fileSize }

        }

        for (var i = 0; i < remoteMd5Files.length; i++) {//远程的配置按照文件名存下
            var file = remoteMd5Files[i]
            var fileName = file["filename"]
            var md5 = file["md5"]
            var fileSize = file["fileSize"]

            remoteMd5Objects[fileName] = { "md5": md5, "fileSize": fileSize }

        }

        for (var name in remoteMd5Objects) {//对比
            // console.log("name==",name)
            var fileinfo = remoteMd5Objects[name]
            var remotemd5File = fileinfo["md5"]
            var fileSize = fileinfo["fileSize"]

            if (localMd5Objects[name]) {//本地有对应的配置

                if (remotemd5File != localMd5Objects[name]["md5"])//md5不相同
                {

                    ChangeFiles.push({ "fileName": name, "md5": remotemd5File, "fileSize": fileSize })
                }

            }//没有对应配置
            else {

                ChangeFiles.push({ "fileName": name, "md5": remotemd5File, "fileSize": fileSize })
            }
        }

        // for (var index in ChangeFiles){

        //     console.log("change-",index,ChangeFiles[index]["fileName"])
        // }

        this.downFiles(ChangeFiles)

    },
    downFiles: function (data) {
        console.log("downFiles====", data.length)
        if (data.length == 0) {
            this.MoveDone();
            return
        }
        var self = this
        let downFileList = data
        self.DownIndex = 0

        var downOneFile = function (index) {
            var BaseUrl = self.BaseUrl
            var fileName = downFileList[index]["fileName"]//下载文件路径
            var fileurl = BaseUrl + fileName//下载文件的url
            var filetempPath = GtempFolder + fileName//临时目录
            var filerealPath = GHotUpFolder + fileName//真实目录
            var tempDir = GtempFolder + Global.GgetDirByUrl(fileName)//临时文件夹
            var realDir = GHotUpFolder + Global.GgetDirByUrl(fileName)//临时文件夹
            // console.log("fileName====",fileName)
            Global.GcreateDir(tempDir)//创建临时文件夹
            Global.GcreateDir(realDir)//创建真实文件夹

            downFileList[index]["tempfile"] = filetempPath
            downFileList[index]["realfile"] = filerealPath
            // console.log("index====",index, filetempPath,filerealPath)

            console.log("downFile=====", fileurl)
            Global.GDownFile(fileurl, function (data) {
                if (data) {
                    Global.GwriteDataToFile(data, filetempPath)



                    if (self.DownIndex < downFileList.length - 1) {
                        self.DownIndex = self.DownIndex + 1
                        if (self.progressCall) {
                            self.progressCall(Math.floor(self.DownIndex / downFileList.length * 100))
                        }
                        downOneFile(self.DownIndex)
                    }
                    else {
                        if (self.progressCall) {
                            self.progressCall(Math.floor(100))
                        }
                        console.log("down  done***")

                        self.MoveFiles(downFileList)//移动文件

                    }
                }
                else {
                    self.callFunWithState(3, "下载单个文件失败=" + fileurl)
                }
            })


        }
        downOneFile(self.DownIndex)

    },

    MoveFiles: function (data) {
        this.moveStep = 0
        var self = this
        var moveOneFile = function (index) {
            var tempfilePath = data[index]["tempfile"]
            var realfilePath = data[index]["realfile"]
            // console.log("tempfilePath===",tempfilePath,realfilePath);
            var filedata = Global.GgetDataFromFile(tempfilePath)
            if (filedata) {
                Global.GwriteDataToFile(filedata, realfilePath)
                if (self.moveStep < data.length - 1) {
                    self.moveStep = self.moveStep + 1
                    moveOneFile(self.moveStep)
                }
                else {
                    self.MoveDone()
                }
            }
            else {
                this.callFunWithState(4, "移动文件失败" + tempfilePath)
            }

        }

        moveOneFile(this.moveStep)
    },

    //移动完成 保存配置
    MoveDone: function () {
        console.log("move done****")
        var str = JSON.stringify(this.remoteMd5Cfg, null, 4)
        Global.GcreateDir(jsb.fileUtils.getWritablePath() + "config")
        Global.GwriteStringToFile(str, GtempCfg)
        this.callFunWithState(5, "更新成功")


        var searchPaths = jsb.fileUtils.getSearchPaths();
        var newPaths = new Array(GHotUpFolder)
        searchPaths.unshift(GHotUpFolder)
        cc.sys.localStorage.setItem('HotUpdateSearchPaths', JSON.stringify(searchPaths));
        jsb.fileUtils.setSearchPaths(searchPaths);
        this.ReStartGame()

    },
    //
    ReStartGame: function () {
        console.log("ReStartGame****")
        cc.audioEngine.stopAll();
        cc.game.restart()
    },

    callFunWithState: function (state, desc) {
        if (this.downcall) {
            console.log(desc)
            this.downcall(state)
        }
    },

    //包内配置
    parseLocalCfg: function () {
        var self = this;
        cc.loader.loadRes('appinfoiii', function (err, jsonAsset) {
            if (err) {
                console.log("+++++++++++++++++++++++++" + err);
            }
            else {

                self.localCfg = jsonAsset.json

                self.parseTempCfg()
            };
        });

    },
    //获取本地最新脚本版本号
    getScriptVersion:function(){

        return this.localCfg["scriptVersion"]
    },
    //包外配置
    parseTempCfg: function () {

        var self = this;
        var path = GtempCfg
        if (jsb.fileUtils.isFileExist(path)) {
            var data = jsb.fileUtils.getStringFromFile(path)
            self.localCfg = JSON.parse(data) 
        }
        HttpHelper.sendHttpRequest(this.remoteCfg, function (data) {
            if (data == null) {
                self.callFunWithState(1, "获取版本配置文件失败")
                return
            }
            self.remoteCfg = JSON.parse(data)

            var localscriptVersion = self.localCfg["scriptVersion"]//本地配置版本号
            var remotescriptVersion = self.remoteCfg["scriptVersion"]//远程配置版本号
            var debugscriptVersion = self.remoteCfg["debugScriptVersion"]//测试版本号

            var debugUIDs = self.remoteCfg["debugUIDs"]//测试id组

            var localId = cc.sys.localStorage.getItem('debugId') || "724001";//本地存的上次登录的玩家id
            console.log("localscriptVersion==" + localscriptVersion)
            console.log("debugscriptVersion==" + debugscriptVersion)
            console.log("remotescriptVersion==" + remotescriptVersion)
            if (Global.GIsArrContain(debugUIDs, localId))//测试玩家
            {

                if (parseInt(localscriptVersion) < parseInt(debugscriptVersion)) {

                    console.log("go debug")
                    var debugBaseUrl = self.remoteCfg["debugBaseUrl"]
                    debugBaseUrl = cc.js.formatStr(debugBaseUrl, debugscriptVersion)
                    var debugConfigFile = self.remoteCfg["debugConfigFile"]
                    var url = debugBaseUrl + debugConfigFile
                    self.BaseUrl = debugBaseUrl
                    self.downRemoteMd5(url)
                    return
                }

            }

            if (parseInt(localscriptVersion) < parseInt(remotescriptVersion))//正式更新判断
            {
                console.log("go ok")
                var baseUrl = self.remoteCfg["baseUrl"]
                baseUrl = cc.js.formatStr(baseUrl, remotescriptVersion)
                var ConfigFile = self.remoteCfg["configFile"]
                var url = baseUrl + ConfigFile
                self.BaseUrl = baseUrl
                self.downRemoteMd5(url)
                return
            }

            self.callFunWithState(0, "不用更新")

        })

    }

}



module.exports = VersionManager;