
var Global = require("Global")
var VersionManager = require("VersionManager")
var GameClient = require("GameClient")

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

    start() {
        cc.log("launchsene start",window.DISTRIBUTE_CHANNEL)
        var self = this
        

        var showAlert = cc.find("showAlert",this.node)
        ua.darkButton(showAlert, function () {
            var Alert = require("Alert")
            Alert.show("test",["你好","LOL"], function (option) {
                // cc.log(option)
                if (option == 0) {
                    cc.log("你点击了YES")
                }
            })

        })

        var showAlertII = cc.find("showAlert1",this.node)
        ua.darkButton(showAlertII, function () {
            var AlertII = require("AlertII")
            AlertII = new AlertII({"Parent":self.node,"pos":cc.v2(0,0)})
            
        

        })

       

        if (cc && cc.sys.isNative) {//native  自带的模拟器不进行热更新
            VersionManager.checkUpdate(Global.Ghotupdateurl, function (code) {
               
                if (code == 0)//不用更新
                {
                    self.goHomeScene()
                }
                else if(code ==100) {//热更新成功
                    
                    self.Reboot()
                }
                else if(code ==6 || code ==7) {//不支持的热更新的版本号,渠道号
                    self.Text.string = "ErrorCode====="+code
                    self.goHomeScene()
                }
                else {//热更新error
                    cc.log("热更新返回--Erorcode", code)
                    self.Text.string = "ErrorCode====="+code
                }
            }, function (progress,DownedSize,TotalSize) {//下载进度，下载了多少kb ，总下载多少kb  
                cc.log("progress===", progress)

                var a = "updateing" + progress + "% ("+DownedSize+"kb/"+TotalSize+"kb)"
                self.Text.string = a//"updateing" + progress + "%    "+DownedSize/1024+"M/"+TotalSize/1024+"M"
            })
        }
        else {//web
            self.goHomeScene()

        }
        
    },

    Reboot(){
        Global.gSchduleOnce(this,function(){

            VersionManager.ReStartGame()

        },2)
        
    },
    goHomeScene() {
        var self = this

        Global.gSchduleOnce(this,function(){

            cc.director.loadScene("MainScene", function () 
            {
                // var Text = cc.director.getScene().getChildByName('Canvas').getChildByName("label")
                // Text.getComponent(cc.Label).string = "updated2"
            })

        },2)
       
        // GameClient.connect("54.179.180.39", "8089", function () {
        //     Global.gPreloadScene("MainScene", function (loadprogress) {
        //         // self.Text.string = progress
        //         // console.log(progress)
        //     },
        //     function (scenename, error)
        //     {
        //         if (!error) 
        //         {

        //             cc.director.loadScene(scenename, function () 
        //             {
        //                 var Text = cc.director.getScene().getChildByName('Canvas').getChildByName("label")
        //                 Text.getComponent(cc.Label).string = "updated"
        //             })
                  
        //         }
        //     })
        // })
    },

    // update (dt) {},
});
