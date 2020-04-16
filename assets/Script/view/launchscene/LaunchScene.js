
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

    updateText(){//显示updating...

        this.count = this.count + 1
        this.count = this.count % 4
        this.Text.string = "Updating" + Global.StrTime(".", this.count)
        // cc.log("Updating" + Global.StrTime(".", this.count),this.count)
    },

    unSchduleUpdateText(){
        this.Text.node.opacity = 0
        Global.gUnSchduleFun(this,this.updateText)

    },
    start() {
        cc.log("launchsene start",window.DISTRIBUTE_CHANNEL)

        var self = this
        this.count = 0

        var showAlertIII = cc.find("uipanel/showAlert3",this.node)
        ua.darkButton(showAlertIII, function () {
            self.unSchduleUpdateText()
            ua.loadPrefabRes("prefabs/AlertLayer2", function (_node) {
                if (_node) {
                    self.node.addChild(_node)
                    var AlertIII = _node.getComponent("AlertIII")
                    if (AlertIII) {
                        AlertIII.showAlert("666", ["LOL", "LOL1", "LOL#"], function (index) {
                            cc.log("click==", index)
                        })
                    }
                }
            })
        })

       

        if (cc && cc.sys.isNative) {//native  自带的模拟器不进行热更新

           
            Global.gSchduleFun(this,this.updateText,1,cc.macro.REPEAT_FOREVER,0)//显示update...

            Global.gSchduleOnce(this, function () {

                self.goCheckUpdate()//热更新检查

            }, 4)

        }
        else {//web
            self.goLoginScene()

        }
        
    },

    goCheckUpdate(){//检查热更新
        var self = this
       
        
        VersionManager.checkUpdate(Global.Ghotupdateurl, function (code) {
            self.unSchduleUpdateText()
            
            if (code == 0)//不用更新
            {
                self.goLoginScene()
            }
            else if(code ==100) {//热更新成功
                
                self.Reboot()
            }
            else if(code ==6 || code ==7) {//不支持的热更新的版本号,渠道号
                self.Text.string = "ErrorCode====="+code
                self.goLoginScene()
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

    },
    Reboot(){//重启
        Global.gSchduleOnce(this,function(){

            VersionManager.ReStartGame()

        },2)
        
    },
    goLoginScene() {
        cc.log("goLoginScene----")
        var self = this

        this.unSchduleUpdateText()

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
