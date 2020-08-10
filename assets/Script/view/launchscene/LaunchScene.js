
var Global = require("Global")
var VersionManager = require("VersionManager")
// var GameClient = require("GameClient")
var BaseComponent = require("BaseComponent")
cc.Class({
    extends: BaseComponent,

    properties: {

        Text: {
            default: null,
            type: cc.Label,
        }
    },



    onLoad() {
        this._super()
        cc.log("launchsene onLoad")
    },

    onDestroy() {
        this._super()
    },

    updateText() {//显示updating...

        this.count = this.count + 1
        this.count = this.count % 4
        this.Text.string = "Updating" + Global.StrTime(".", this.count)
        // cc.log("Updating" + Global.StrTime(".", this.count),this.count)
    },

    unSchduleUpdateText() {//取消显示updating...
        // this.Text.node.opacity = 0
        Global.gUnSchduleFun(this, this.updateText)

    },
    start() {
        
        cc.log("渠道号===", window.DISTRIBUTE_CHANNEL)
        cc.sys.localStorage.setItem('debugId', 724001)
        var self = this
        this.count = 0

        if (cc && cc.sys.isNative) {//native 

            if (window.DISTRIBUTE_CHANNEL == window.chanel.WIN32)// 自带的模拟器不进行热更新   
            {
                cc.log("模拟器不更新")
                VersionManager.parseLocalCfg()//直接读取本地配置版本号 便于登录界面右下角展示
                self.goLoginScene()
                return
            }

            if (Global.isDebugTest){//debug选择热更新地址
                var data = {
                    "tips": "热更新选择",
                    "items": [
                        { "text": "默认热更新地址" },
                        { "text": "手动输入热更新地址" }
                    ]
                }
                Global.ShowChooseUpdate(data, function (index,layer) {
        
                    console.log("点击了", index)
                    if (index == 0)
                    {
                        self.goCheckUpdate(Global.Ghotupdateurl)//热更新检查
                        layer.bClose()
                    }
                    if (index == 1)//手动输入地址
                    {
                        Global.ShowTextInput(function(text){
                            if(text.length>0)
                            {
                                Global.Ghotupdateurl = text
                                self.goCheckUpdate(text)//热更新检查
                                layer.bClose()
                            }
                            else{
                                console.log("no text")
                            }
                           
                        })
                        
                    }
                })
            }
            else{//正式不选择

                Global.gSchduleOnce(this, function () {

                    self.goCheckUpdate(Global.Ghotupdateurl)//热更新检查
    
                }, 3)
            }
            Global.gSchduleFun(this, this.updateText, 1, cc.macro.REPEAT_FOREVER, 0)//显示update...

            

        }
        else {//web
            VersionManager.getH5ScriptVersion()//直接读取本地配置版本号 便于登录界面右下角展示
            Global.gSchduleOnce(this, function () {

                self.goLoginScene()

            }, 0.1)

        }



    },

    goCheckUpdate(url) {//检查热更新
        var self = this

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
        VersionManager.checkUpdate(url, function (code, url) {

            if (code == 0)//不用更新
            {
                self.goLoginScene()
            }
            else if (code == 100) {//热更新成功

                self.Reboot()
            }
            else if (code == 6 || code == 7) {//不支持的热更新的版本号,渠道号  ，直接进登录界面

                self.goLoginScene()
            }
            else if (code == 8)//强制更新
            {
                Global.ShowAlert("发现新版本" + url, [], function (index) {
                    cc.log("indx====", index)

                    cc.sys.openURL(url)

                })
            }
            else {//热更新error 

                Global.ShowAlert("ErrorCode=====" + code, [], function () {
                    // self.Reboot()//失败重启
                    self.goLoginScene()
                })
            }
        }, function (progress, DownedSize, TotalSize) {//下载进度，下载了多少kb ，总下载多少kb  
            cc.log("progress===", progress)
            if (cc.director.getScheduler().isScheduled(self.updateText, self)) {
                self.unSchduleUpdateText()//停止显示update... 
            }

            var a = "updateing" + progress + "% (" + DownedSize + "kb/" + TotalSize + "kb)"
            self.Text.string = a//"updateing" + progress + "%    "+DownedSize/1024+"M/"+TotalSize/1024+"M"
        })

    },
    Reboot() {//重启
        // Global.gSchduleOnce(this, function () {

        //     VersionManager.ReStartGame()

        // }, 2)
        this.scheduleOnce(()=>{
            Global.gReBoot()
        },2)

    },
    goTestScene() {

        cc.director.loadScene("TestScene")

    },
    goLoginScene() {

        var self = this
        Global.gSchduleOnce(this, function () {

            cc.director.loadScene("LoginScene", function () {
                // var Text = cc.director.getScene().getChildByName('Canvas').getChildByName("label")
                // Text.getComponent(cc.Label).string = "updated2"
            })

        }, 2)

    },

    // update (dt) {},
});
