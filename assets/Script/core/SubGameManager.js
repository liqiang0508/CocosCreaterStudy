//子游戏管理类

var HttpHelper = require("HttpHelper");

var SubGameManager = {
    remoteData:null//远程子游戏配置
}
let SubGamesPath = ""
let SubGamesPathTemp = ""
if (cc && cc.sys.isNative) {
    SubGamesPath = jsb.fileUtils.getWritablePath() + "SubGames/"//子游戏更新下载真实目录
    SubGamesPathTemp = jsb.fileUtils.getWritablePath() + "SubGamesTemp/"//子游戏更新下载临时目录
}
//读取保存远程配置的小游戏情况
SubGameManager.parseCfgFromData = function (data) {
    this.remoteData = data//远程小游戏配置 
    cc.log("SubGameManager.parseCfgFromData", this.remoteData)
}

//获取游戏名称获取本地小游戏状态 
// "not_in_app"     不在本地，没有下载
// "need_update"    在本地，需要更新
// "no_need_update" 在本地，不需要更新
SubGameManager.getSubGameState = function (subgameName, finishCall) {
    this.curSubgameName = subgameName//保存下当前操作的哪个子游戏
    this.getLoclSubGameCfg(subgameName, (subgamecfg) => {

        if (subgamecfg)//有子游戏的配置
        {
            if (subgamecfg["scriptVersion"] != this.remoteData["games"][subgameName]["version"])//远程的子游戏版本和本地的不一样
            {
                finishCall("need_update")
            }
            else//版本一样，不需要更新 直接进游戏
            {
                finishCall("no_need_update")
            }
        }
        else//没有子游戏的配置  可能子游戏不存在或者出现文件无意删除  都归为不在本地，没有下载
        {

            finishCall("not_in_app")
        }

    })

}

//根据子游戏名称获取本地子游戏的配置
SubGameManager.getLoclSubGameCfg = function (subgameName, finishCall) {

    var subgamecfgpath = SubGamesPath + subgameName + "/appinfo.json" //子游戏本地配置路径
    if (jsb.fileUtils.isFileExist(subgamecfgpath)) {
        var data = jsb.fileUtils.getStringFromFile(subgamecfgpath)
        if(Global.isjson(data))//判断是不是合法的json
        {
            var cfg = JSON.parse(data)
            this.localSubGameCfg = cfg//保存在本地子游戏的配置
            finishCall(cfg)
        }else{//包外json配置不合法
            this.callFunWithState(1,"读取子游戏本地配置失败====" + subgameName)
            this.localSubGameCfg = {"scriptVersion":-1,"files":[]}
            finishCall(null)
           
        }
    }
    else {
        this.callFunWithState(2,"子游戏本地配置不存在====" + subgameName)
        this.localSubGameCfg = {"scriptVersion":-1,"files":[]}
        finishCall(null)

    }

}

//根据子游戏名称比较下载资源
SubGameManager.downSubGame = function (subgameName, progressCall, finishCall) {
    this.baseUrl = this.remoteData["baseUrl"]//子游戏远程资源根目录
    var version = this.remoteData["games"][subgameName]["version"]//子游戏远程版本号
    var remoteSubGameCfgUrl = this.baseUrl + subgameName + "_" + version + "/appinfo.json"//远程子游戏配置url 
    this.progressCall = progressCall
    this.finishCall = finishCall
    cc.log("remoteSubGameCfgUrl=",remoteSubGameCfgUrl)

    HttpHelper.sendHttpRequest(remoteSubGameCfgUrl,  (data)=> {
        if (data == null) {

            this.callFunWithState(3,"读取远程子游戏配置失败====" + subgameName)
            return
        }
        if(!Global.isjson(data))
        {
            this.callFunWithState(4,"读取远程子游戏远程md5-json不合法====" + subgameName)
            return
           
        }
        this.remoteSubgameCfg = JSON.parse(data)
        this.comparefile()

    })




}
//对比差异文件
SubGameManager.comparefile = function () {

    var localMd5Files = this.localSubGameCfg["files"]//本地md5配置
    var remoteMd5Files = this.remoteSubgameCfg["files"]//远程md5配置

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
    cc.log("准备下载子游戏差异文件")
    this.downFiles(ChangeFiles)
}


SubGameManager.downFiles = function (data) {
    // cc.log("下载文件====", data.length)
    if (data.length == 0) {//md5文件没有下载的
        this.MoveDone();
        return
    }
    var self = this
    let downFileList = data
    self.DownIndex = 0

    var downOneFile = function (index) {
        var BaseUrl = self.baseUrl
        var fileName = downFileList[index]["fileName"]//下载文件路径
        var fileSize = downFileList[index]["fileSize"]//下载文件大小
        var fileurl = BaseUrl + fileName//下载文件的url
        var filetempPath = SubGamesPathTemp + fileName//临时目录
        var filerealPath = SubGamesPath + fileName//真实目录
        var tempDir = SubGamesPathTemp + Global.GgetDirByUrl(fileName)//临时文件夹
        var realDir = SubGamesPath + Global.GgetDirByUrl(fileName)//真实文件夹
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
                        self.progressCall(Math.floor(self.DownIndex / downFileList.length * 100),(self.downedSize/1000).toFixed(1),(self.totalDownSize/1000).toFixed(1))
                    }
                    downOneFile(self.DownIndex)
                }
                else {
                    if (self.progressCall) {
                        self.progressCall(Math.floor(100),(self.downedSize/1000).toFixed(1),(self.totalDownSize/1000).toFixed(1))
                    }
                    cc.log("子游戏下载完成***")

                    self.MoveFiles(downFileList)//移动文件

                }
            }
            else {

                this.callFunWithState(5,"子游戏下载单个文件失败=" + fileurl)
            }
        })


    }
    downOneFile(self.DownIndex)

},

//移动差异文件
SubGameManager.MoveFiles = function (data) {
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

            var path = SubGamesPath+self.curSubgameName
            jsb.fileUtils.removeDirectory(SubGamesPath)//移动失败不知道移动了多少，就删掉当前子游戏文件夹
            jsb.fileUtils.createDirectory(SubGamesPath)

            

            this.callFunWithState(6,"移动文件失败" + tempfilePath)

           

        }

    }

    moveOneFile(this.moveStep)
},

//移动完成 保存配置
SubGameManager.MoveDone = function () {
    var str = JSON.stringify(this.remoteSubgameCfg, null, 4)
    var subgamecfgpath = SubGamesPath + this.curSubgameName + "/appinfo.json" //子游戏本地配置路径
    Global.GwriteStringToFile(str, subgamecfgpath)//移动完成后再把远程子游戏的配置当前子游戏bundle文件夹下面 比如
    
    this.callFunWithState(0,"下载子游戏完成")
},

// code
// 0 下载子游戏成功
// 1,"读取子游戏本地配置失败
// 2,"子游戏本地配置不存在====" + subgameName
// 3,"读取远程子游戏配置失败====
// 4,"读取远程子游戏远程md5-json不合法===
// 5,"子游戏下载单个文件失败
// 6,"移动文件失败
SubGameManager.callFunWithState = function(code,dec)
{
    cc.log(dec+"===="+code)
    if (this.finishCall)
    {
        this.finishCall(code)

    }
}

//获取本地bundle path
SubGameManager.getLocalBundlePath = function(bundleName){

    var path = SubGamesPath+bundleName
    return path


}



module.exports = SubGameManager;