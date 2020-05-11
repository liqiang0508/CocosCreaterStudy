
var Global = require("Global")
var VersionManager = require("VersionManager")
// var GameClient = require("GameClient")

cc.Class({
    extends: cc.Component,

    properties: {

        Text: {
            default: null,
            type: cc.Label,
        }
    },



    onLoad() {
        cc.log("launchsene onLoad")
    },

    updateText(){//显示updating...

        this.count = this.count + 1
        this.count = this.count % 4
        this.Text.string = "Updating" + Global.StrTime(".", this.count)
        // cc.log("Updating" + Global.StrTime(".", this.count),this.count)
    },

    unSchduleUpdateText(){//取消显示updating...
        this.Text.node.opacity = 0
        Global.gUnSchduleFun(this,this.updateText)

    },
    start() {
        cc.log("Chanel===",window.DISTRIBUTE_CHANNEL)
        cc.sys.localStorage.setItem('debugId',724001)
        var self = this
        this.count = 0

        if (cc && cc.sys.isNative) {//native 
  
            if(window.DISTRIBUTE_CHANNEL== chanel.WIN32)// 自带的模拟器不进行热更新   
            {
                cc.log("模拟器不更新")
                VersionManager.parseLocalCfg()//直接读取本地配置版本号 便于登录界面右下角展示
                self.goLoginScene()
    
                return
            }     
            Global.gSchduleFun(this,this.updateText,1,cc.macro.REPEAT_FOREVER,0)//显示update...

            Global.gSchduleOnce(this, function () {

                self.goCheckUpdate()//热更新检查

            }, 4)

        }
        else {//web
            VersionManager.parseLocalCfg()//直接读取本地配置版本号 便于登录界面右下角展示
            Global.gSchduleOnce(this, function () {

                self.goLoginScene()

            }, 2)

        }

    
        
    },

    goCheckUpdate(){//检查热更新
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
    // 100 :更新成功
        VersionManager.checkUpdate(Global.Ghotupdateurl, function (code,url) {
            self.unSchduleUpdateText()//停止显示update...
            
            if (code == 0)//不用更新
            {
                self.goLoginScene()
            }
            else if(code ==100) {//热更新成功
                
                self.Reboot()
            }
            else if(code ==6 || code ==7) {//不支持的热更新的版本号,渠道号  ，直接进登录界面

                self.goLoginScene()
            }
            else if(code == 8)//强制更新
            {
                Global.ShowAlert("发现新版本"+url,[],function(index){
                    if(index==1)//打开浏览器
                    {
                        cc.sys.openURL(url)
                    }
                })
            }
            else {//热更新error   1 2 3 4 5
                
                Global.ShowAlert("ErrorCode====="+code,[],function(){
                    self.Reboot()//失败重启
                })
            }
        }, function (progress,DownedSize,TotalSize) {//下载进度，下载了多少kb ，总下载多少kb  
            cc.log("progress===", progress)

            self.Text.node.opacity = 255
            var a = "updateing" + progress + "% ("+DownedSize+"kb/"+TotalSize+"kb)"
            self.Text.string = a//"updateing" + progress + "%    "+DownedSize/1024+"M/"+TotalSize/1024+"M"
        })

    },
    Reboot(){//重启
        Global.gSchduleOnce(this,function(){

            VersionManager.ReStartGame()

        },2)
        
    },
    goTestScene(){

        cc.director.loadScene("TestScene")

    },
    goLoginScene() {
        
        var self = this
        Global.gSchduleOnce(this,function(){

            cc.director.loadScene("LoginScene", function () 
            {
                // var Text = cc.director.getScene().getChildByName('Canvas').getChildByName("label")
                // Text.getComponent(cc.Label).string = "updated2"
            })

        },2)
       
    },

    // update (dt) {},
});
