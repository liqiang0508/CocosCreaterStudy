
var HttpHelper = require("HttpHelper");
var DevicesInfo = require("Devices")
// var Global = require("Global")
var GtempFolder = ""

var GHotUpFolder = ""

var GtempCfg = ""

if (cc && cc.sys.isNative) {//web跑的时候会报错

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
// 8:强制更新
// 9:包外json配置不合法
// 10:远程配置json不合法
// 11:远程md5-json不合法
// 100 :更新成功

// var VersionManager = 
export default {
    remoteCfg: null,//远程配置
    remoteMd5Cfg: '',//远程md5
    localCfg: '',//local配置
    stateCode: '',//更新状态码
    totalDownSize: 0,//下载文件总大小  kb
    downedSize: 0,//已下载文件的大小  kb


    checkUpdate: function (url, downcall, progressCall) {
        cc.log("checkUpdate----", url)
        var self = this;


        this.downcall = downcall;
        this.progressCall = progressCall;
        this.remoteCfg = url
        this.parseLocalCfg()//读取本地配置

    },
    //下载远程md5
    downRemoteMd5: function (url) {

        cc.log("下载远程md5,", url)

        HttpHelper.sendHttpRequest(url, (data) => {
            if (data == null) {
                this.callFunWithState(2, "获取MD5配置文件失败")
                return
            }
            if (!Global.isjson(data)) {
                this.callFunWithState(11, "远程md5-json不合法")
                return
            }
            this.remoteMd5Cfg = JSON.parse(data)
            this.comparefiles()

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
        for (var index in ChangeFiles) {
            var fileSize = ChangeFiles[index]["fileSize"]
            this.totalDownSize = this.totalDownSize + fileSize
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
            var tempDir = GtempFolder + Global.getDirByUrl(fileName)//临时文件夹
            var realDir = GHotUpFolder + Global.getDirByUrl(fileName)//临时文件夹
            // console.log("fileName====",fileName)
            Global.createDir(tempDir)//创建临时文件夹
            Global.createDir(realDir)//创建真实文件夹

            downFileList[index]["tempfile"] = filetempPath//临时文件路径
            downFileList[index]["realfile"] = filerealPath//正式文件路径
            // console.log("index====",index, filetempPath,filerealPath)

            cc.log("下载=====", fileurl)
            Global.downFile(fileurl, function (data) {
                if (data) {
                    Global.writeDataToFile(data, filetempPath)

                    self.downedSize = self.downedSize + fileSize//记录已下载文件的大小

                    if (self.DownIndex < downFileList.length - 1) {
                        self.DownIndex = self.DownIndex + 1
                        if (self.progressCall) {
                            self.progressCall(Math.floor(self.DownIndex / downFileList.length * 100), (self.downedSize / 1000).toFixed(1), (self.totalDownSize / 1000).toFixed(1))
                        }
                        downOneFile(self.DownIndex)
                    }
                    else {
                        if (self.progressCall) {
                            self.progressCall(Math.floor(100), (self.downedSize / 1000).toFixed(1), (self.totalDownSize / 1000).toFixed(1))
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
            var filedata = Global.getDataFromFile(tempfilePath)
            if (filedata != null) {
                Global.writeDataToFile(filedata, realfilePath)
                if (self.moveStep < data.length - 1) {
                    self.moveStep = self.moveStep + 1
                    moveOneFile(self.moveStep)
                }
                else {
                    self.MoveDone()
                }
            }
            else {

                jsb.fileUtils.removeDirectory(GHotUpFolder)//移动失败不知道移动了多少，就删掉热更新目录在创建
                jsb.fileUtils.createDirectory(GHotUpFolder)

                jsb.fileUtils.removeFile(GtempCfg)//移除包外的热更新配置

                self.callFunWithState(4, "移动文件失败" + tempfilePath)



            }

        }

        moveOneFile(this.moveStep)
    },

    //移动完成 保存配置
    MoveDone: function () {
        cc.log("移动成功****")
        var str = JSON.stringify(this.remoteMd5Cfg, null, 4)
        Global.createDir(jsb.fileUtils.getWritablePath() + "config")
        Global.writeStringToFile(str, GtempCfg)//移动完成后再把远程的配置存在可读写路径下的config目录

        this.callFunWithState(100, "更新成功")
    },

    //重启
    ReStartGame: function () {
        cc.log("重启***")
        cc.audioEngine.stopAll();
        cc.game.restart()


    },

    //移除热更新的临时文件
    RemoveTemp: function () {
        if (cc.sys.isNative) {
            jsb.fileUtils.removeDirectory(GHotUpFolder)//删掉热更新目录在创建
            jsb.fileUtils.createDirectory(GHotUpFolder)

            jsb.fileUtils.removeFile(GtempCfg)//删除包外的热更新配置
        }

    },

    callFunWithState: function (state, desc, url) {

        if (this.downcall) {
            console.log(desc + ": 状态码=" + state)
            this.downcall(state, url)
        }
    },

    //包内配置
    parseLocalCfg: function () {
        var self = this;

        var path = GtempCfg
        if (jsb.fileUtils.isFileExist(path)) {//先看包外是否有配置 包外有先读取包外的
            console.log("读取包外配置");
            var data = jsb.fileUtils.getStringFromFile(path)
            if (Global.isjson(data))//判断是不是合法的json
            {
                self.localCfg = JSON.parse(data)
                //拉取远程配置
                self.parseRemoteCfg()
            } else {//包外json配置不合法
                self.RemoveTemp()//移除热更新相关的东西
                self.callFunWithState(9, "包外json配置不合法")
                return
            }


        }
        else {//读取包内配置
            console.log("读取包内配置");
            cc.resources.load('appinfoiii', function (err, jsonAsset) {
                if (err) {
                    cc.log("读取包内配置失败" + err);
                    self.callFunWithState(5, "读取包内配置失败，请检查本地配置")
                }
                else {

                    self.localCfg = jsonAsset.json
                    //拉取远程配置
                    self.parseRemoteCfg()
                };
            });

        }



    },
    //获取本地最新脚本版本号
    getScriptVersion: function () {

        return this.localCfg["scriptVersion"]


    },
    getH5ScriptVersion: function () {
        var self = this
        cc.resources.load('appinfoiii', function (err, jsonAsset) {
            if (err) {
                cc.log("读取包内配置失败" + err);
                self.callFunWithState(5, "读取包内配置失败，请检查本地配置")
            }
            else {

                self.localCfg = jsonAsset.json

            };
        });

    },

    //获取子游戏配置
    getSubGameCfg: function () {

        return this.remoteCfg["subgames"]
    },
    //拉取远程配置
    parseRemoteCfg: function () {
        if (cc.sys.isNative == false || this.remoteCfg == null)//不是原生
        {
            return
        }
        var self = this
        console.log("拉取远程配置", this.remoteCfg)
        HttpHelper.sendHttpRequest(this.remoteCfg, function (data) {
            if (data == null) {
                self.callFunWithState(1, "获取版本配置文件失败")
                return
            }
            if (!Global.isjson(data))//判断是不是合法的json
            {
                self.callFunWithState(10, "远程配置json不合法")
                return
            }
            self.remoteCfg = JSON.parse(data)
            var distributeChanel = globalThis.DISTRIBUTE_CHANNEL //分发渠道
            var localscriptVersion = self.localCfg["scriptVersion"]//本地配置版本号
            var remotescriptVersion = self.remoteCfg["scriptVersion"]//远程配置版本号
            var debugscriptVersion = self.remoteCfg["debugScriptVersion"]//测试版本号
            var supportBinarys = self.remoteCfg["supportBinarys"]//支持热更新的版本号
            var forcedBinaryVersions = self.remoteCfg["forcedBinaryVersions"]//强制更新版本号
            var channels = self.remoteCfg["channels"]//支持热更新的渠道号
            var debugUIDs = self.remoteCfg["debugUIDs"]//测试id组
            var binaryUrl = self.remoteCfg["binaryUrl"][distributeChanel] || self.remoteCfg[0]//商店地址  根据远程配置的渠道号对应的数组
            var localId = cc.sys.localStorage.getItem('debugId');//本地存的上次登录的玩家id
            if (!Global.isArrContain(channels, distributeChanel))//app版本是否支持热更新
            {
                self.callFunWithState(7, "不支持热更新的渠道号" + distributeChanel)
                return
            }

            if (!Global.isArrContain(supportBinarys, DevicesInfo.getAppVersion()))//app版本是否支持热更新
            {

                self.callFunWithState(6, "不支持热更新的2进制版本号" + DevicesInfo.getAppVersion())
                return
            }

            //forcedBinaryVersions 强制更新
            if (Global.isArrContain(forcedBinaryVersions, DevicesInfo.getAppVersion()))//版本在里面
            {
                self.callFunWithState(8, "强制更新", binaryUrl)
                return
            }

            console.log("主包本地脚本号==" + localscriptVersion)
            console.log("主包远程debug版本号==" + debugscriptVersion)
            console.log("主包远程版本号==" + remotescriptVersion)

            if (Global.isArrContain(debugUIDs, localId))//先看是不是测试玩家
            {
                // console.log("是测试玩家",parseInt(localscriptVersion) != parseInt(debugscriptVersion))
                if (parseInt(localscriptVersion) != parseInt(debugscriptVersion)) {

                    console.log("走测试玩家----热更新")
                    var debugBaseUrl = self.remoteCfg["debugBaseUrl"]
                    debugBaseUrl = cc.js.formatStr(debugBaseUrl, debugscriptVersion)
                    var debugConfigFile = self.remoteCfg["debugConfigFile"]//远程debug md5文件字段
                    var url = debugBaseUrl + debugConfigFile//md5 全路径
                    self.BaseUrl = debugBaseUrl//保存下http://xxxx/script_%s/  后面构造一个文件的下载链接
                    self.downRemoteMd5(url)
                    return
                }
                else//是测试玩家 并且本地版本和远程版本号一样
                {
                    self.callFunWithState(0, "测试玩家版本和远程一样，不用更新")
                    return
                }


            }

            if (parseInt(localscriptVersion) != parseInt(remotescriptVersion))//正式更新判断
            {
                console.log("走正式----热更新")
                var baseUrl = self.remoteCfg["baseUrl"]
                baseUrl = cc.js.formatStr(baseUrl, remotescriptVersion)
                var ConfigFile = self.remoteCfg["configFile"]//远程md5文件字段
                var url = baseUrl + ConfigFile //md5 全路径
                self.BaseUrl = baseUrl//保存下http://xxxx/script_%s/  后面构造一个文件的下载链接
                self.downRemoteMd5(url)
                return
            }

            self.callFunWithState(0, "不用更新-本地和远程版本一致:" + localscriptVersion)

        })

    }

}


