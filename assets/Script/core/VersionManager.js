
var HttpHelper = require("HttpHelper");
var DevicesInfo = require("Devices")

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
// 5：读取包内配置失败
// 6:不支持热更新的版本号
// 7:不支持热更新的渠道
// 100 :更新成功
var Global = require("Global")
var VersionManager = {
    remoteCfg: '',//远程配置
    remoteMd5Cfg: '',//远程md5
    localCfg: '',//local配置
    stateCode: '',//更新状态码
    totalDownSize:0,//下载文件总大小
    downedSize:0,//已下载文件的大小


    checkUpdate: function (url, downcall, progressCall) {
        cc.log("checkUpdate----",url)
        var self = this;
        this.parseLocalCfg()

        this.downcall = downcall;
        this.progressCall = progressCall;
        this.remoteCfg = url

    },
    //下载远程md5
    downRemoteMd5: function (url) {
        var self = this
        cc.log("下载远程md5,", url)

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

        var localMd5Files = this.localCfg["files"]//本地md5配置
        var remoteMd5Files = this.remoteMd5Cfg["files"]//远程md5配置

        var ChangeFiles = new Array()
        var localMd5Objects = {}
        var remoteMd5Objects = {}
        for (var i = 0; i < localMd5Files.length; i++) {//本地的配置按照文件名存下
            var file = localMd5Files[i]
            var fileName = file["filename"]
            var md5 = file["md5"]
            var fileSize = file["size"]
            localMd5Objects[fileName] = { "md5": md5, "fileSize": fileSize }

        }

        for (var i = 0; i < remoteMd5Files.length; i++) {//远程的配置按照文件名存下
            var file = remoteMd5Files[i]
            var fileName = file["filename"]
            var md5 = file["md5"]
            var fileSize = file["size"]

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
        //totalDownSize 计算热更新下载文件的大小
        for (var index in ChangeFiles){
            var fileSize = ChangeFiles[index]["fileSize"]
            this.totalDownSize = this.totalDownSize +fileSize
        }

        this.downFiles(ChangeFiles)

    },
    downFiles: function (data) {
        // cc.log("下载文件====", data.length)
        if (data.length == 0) {//md5文件没有下载的
            this.MoveDone();
            return
        }
        var self = this
        let downFileList = data
        self.DownIndex = 0

        var downOneFile = function (index) {
            var BaseUrl = self.BaseUrl
            var fileName = downFileList[index]["fileName"]//下载文件路径
            var fileSize = downFileList[index]["fileSize"]//下载文件大小
            var fileurl = BaseUrl + fileName//下载文件的url
            var filetempPath = GtempFolder + fileName//临时目录
            var filerealPath = GHotUpFolder + fileName//真实目录
            var tempDir = GtempFolder + Global.GgetDirByUrl(fileName)//临时文件夹
            var realDir = GHotUpFolder + Global.GgetDirByUrl(fileName)//临时文件夹
            // console.log("fileName====",fileName)
            Global.GcreateDir(tempDir)//创建临时文件夹
            Global.GcreateDir(realDir)//创建真实文件夹

            downFileList[index]["tempfile"] = filetempPath//临时文件路径
            downFileList[index]["realfile"] = filerealPath//正式文件路径
            // console.log("index====",index, filetempPath,filerealPath)

            cc.log("下载=====", fileurl)
            Global.GDownFile(fileurl, function (data) {
                if (data) {
                    Global.GwriteDataToFile(data, filetempPath)

                    self.downedSize = self.downedSize+fileSize//记录已下载文件的大小

                    if (self.DownIndex < downFileList.length - 1) {
                        self.DownIndex = self.DownIndex + 1
                        if (self.progressCall) {
                            self.progressCall(Math.floor(self.DownIndex / downFileList.length * 100),(self.downedSize/1024/1000).toFixed(1),(self.totalDownSize/1024/1000).toFixed(1))
                        }
                        downOneFile(self.DownIndex)
                    }
                    else {
                        if (self.progressCall) {
                            self.progressCall(Math.floor(100),(self.downedSize/1024/1000).toFixed(1),(self.totalDownSize/1024/1000).toFixed(1))
                        }
                        cc.log("下载完成***")

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
        cc.log("移动成功****")
        var str = JSON.stringify(this.remoteMd5Cfg, null, 4)
        Global.GcreateDir(jsb.fileUtils.getWritablePath() + "config")
        Global.GwriteStringToFile(str, GtempCfg)//移动完成后再把远程的配置存在可读写路径下的config目录
        


        var searchPaths = jsb.fileUtils.getSearchPaths();
        var newPaths = new Array(GHotUpFolder)
        // searchPaths.unshift(GHotUpFolder)
        Array.prototype.unshift.apply(searchPaths, newPaths)
       
        cc.sys.localStorage.setItem('HotUpdateSearchPaths', JSON.stringify(searchPaths));
        jsb.fileUtils.setSearchPaths(searchPaths);
        this.callFunWithState(100, "更新成功")
        // this.ReStartGame()
        

    },
    //
    ReStartGame: function () {
        cc.log("重启***")
        cc.audioEngine.stopAll();
        cc.game.restart()

       
    },

    callFunWithState: function (state, desc) {
        if (this.downcall) {
            cc.log(desc)
            this.downcall(state)
        }
    },

    //包内配置
    parseLocalCfg: function () {
        var self = this;
        cc.loader.loadRes('appinfoiii', function (err, jsonAsset) {
            if (err) {
                cc.log("读取包内配置失败" + err);
                self.callFunWithState(5, "读取包内配置失败，请检查本地配置")
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
        if(!cc.sys.isNative)
        {
            return
        }
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
            var supportBinarys =  self.remoteCfg["supportBinarys"]//支持热更新的版本号
            var channels = self.remoteCfg["channels"]//支持热更新的渠道号
            var debugUIDs = self.remoteCfg["debugUIDs"]//测试id组
            var localId = cc.sys.localStorage.getItem('debugId') ;//本地存的上次登录的玩家id

            if(!Global.GIsArrContain(channels, window.DISTRIBUTE_CHANNEL))//app版本是否支持热更新
            {
                self.callFunWithState(7, "不支持热更新的渠道号"+window.DISTRIBUTE_CHANNEL)
                return 
            }
            
            if(!Global.GIsArrContain(supportBinarys, DevicesInfo.getAppVersion()))//app版本是否支持热更新
            {
                
                self.callFunWithState(6, "不支持热更新的2进制版本号"+DevicesInfo.getAppVersion())
                return 
            }
            cc.log("本地脚本号==" + localscriptVersion)
            cc.log("远程debug版本号==" + debugscriptVersion)
            cc.log("远程版本号==" + remotescriptVersion)
            if(Global.GgameType == 3)//debug包 每个人都更新 不用判断id在不在debuguid里面
            {

                // cc.log("走正式的热更新判断")
                var baseUrl = self.remoteCfg["baseUrl"]
                baseUrl = cc.js.formatStr(baseUrl, remotescriptVersion)
                var ConfigFile = self.remoteCfg["configFile"]//远程md5配置字段
                var url = baseUrl + ConfigFile//md5 全路径
                self.BaseUrl = baseUrl//保存下http://xxxx/script_%s/  后面构造一个文件的下载链接
                self.downRemoteMd5(url)
                return

            }
            if (Global.GIsArrContain(debugUIDs, localId))//先看是不是测试玩家
            {

                if (parseInt(localscriptVersion) != parseInt(debugscriptVersion)) {

                    cc.log("走debug热更新判断")
                    var debugBaseUrl = self.remoteCfg["debugBaseUrl"]
                    debugBaseUrl = cc.js.formatStr(debugBaseUrl, debugscriptVersion)
                    var debugConfigFile = self.remoteCfg["debugConfigFile"]//远程debug md5文件字段
                    var url = debugBaseUrl + debugConfigFile//md5 全路径
                    self.BaseUrl = debugBaseUrl//保存下http://xxxx/script_%s/  后面构造一个文件的下载链接
                    self.downRemoteMd5(url)
                    return
                }

            }

            if (parseInt(localscriptVersion) != parseInt(remotescriptVersion))//正式更新判断
            {
                cc.log("走正式的热更新判断")
                var baseUrl = self.remoteCfg["baseUrl"]
                baseUrl = cc.js.formatStr(baseUrl, remotescriptVersion)
                var ConfigFile = self.remoteCfg["configFile"]//远程md5文件字段
                var url = baseUrl + ConfigFile //md5 全路径
                self.BaseUrl = baseUrl//保存下http://xxxx/script_%s/  后面构造一个文件的下载链接
                self.downRemoteMd5(url)
                return
            }

            self.callFunWithState(0, "不用更新-本地和远程版本一致:"+localscriptVersion)

        })

    }

}



module.exports = VersionManager;