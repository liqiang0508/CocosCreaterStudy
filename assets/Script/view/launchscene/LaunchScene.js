
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


        var showAlertIII = cc.find("uipanel/showAlert3",this.node)
        ua.darkButton(showAlertIII, function () {

            ua.loadPrefabRes("prefabs/AlertLayer2",function(_node){
                if(_node){
                    self.node.addChild(_node)
                    var AlertIII = _node.getComponent("AlertIII")
                    if(AlertIII)
                    {
                        AlertIII.setTitle("666")
                        AlertIII.AddClickBtnCall(function(index){
                            cc.log("click==",index)
                        })

                        AlertIII.setButtonInfo(["LOL","LOL1"])
                    }

                }
               
            })
         
            
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
            // self.goHomeScene()

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
