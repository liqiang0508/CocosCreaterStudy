var VersionManager = require("VersionManager")
var Global = require("Global")
const voiceNative = require("VoiceNative");
var DevicesInfo = require("Devices")
cc.Class({
    extends: cc.Component,

    properties: {
        
        VersionText: {
            default: null,
            type: cc.Label,
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        voiceNative.init();
    },

    start () {
        if(Global.GgameType == 1)//正式包
        {
            this.VersionText.string = DevicesInfo.getAppVersion()+"(R"+VersionManager.getScriptVersion()+")"
        }

        if(Global.GgameType == 3)//debug包
        {
            this.VersionText.string =DevicesInfo.getAppVersion()+"(D"+VersionManager.getScriptVersion()+")"
        }

        var showAlertIII = cc.find("uipanel/btn_Alert",this.node)
        ua.darkButton(showAlertIII, function (event) {

            // event.currentTarget.active = false
            Global.ShowAlert("666", ["LOL", "LOL1", "LOL#"], function (index) {
                cc.log("click==", index)
            })

        })

        var loadTex = cc.find("uipanel/loadTex",this.node)
        var url = "http://54.179.180.39:8080/CSLServer/img/welcome.png"//"http://tools.itharbors.com/christmas/res/tree.png"
        url = "http://tools.itharbors.com/christmas/res/tree.png"
        Global.GloadTexture(url, function (tex) {
            if (tex) {
                loadTex.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(tex)
            }
        })

        var lastTouchTime = null;
        var self = this
        //btn_Speech
        var btn_Speech = cc.find("uipanel/btn_Speech",this.node)
        btn_Speech.on(cc.Node.EventType.TOUCH_START,function(){
            lastTouchTime = Date.now()
            cc.log("开始录音")
            self.SpeechFile = Date.now()+".amr"
            voiceNative.prepare(self.SpeechFile);
        },this)

        btn_Speech.on(cc.Node.EventType.TOUCH_END,function(){

            cc.log("结束录音")
            if (Date.now() - lastTouchTime < 1000) 
            {
                voiceNative.cancel();
                cc.log("时间小于一秒");
                Global.ShowAlert("时间小于一秒", ["Yes"], function (index) {
                   
                })
               
            } else
            {
                if (lastTouchTime != null) 
                {
                    // 录音结束
                    voiceNative.release();
                    // 录音时间
                    var time = Date.now() - lastTouchTime;
                    console.log("time now。。。。。  " + Date.now());
                    console.log("begin time。。。。。  " + lastTouchTime);
                    console.log("record time。。。。。  " + time);
                    // 读取录音文件
                    var msgStr = voiceNative.getVoiceData(self.SpeechFile);
                    console.log("sound data。。。。。  " + msgStr);

                     //本地测试测试
                    setTimeout(function () {
                        // 间隔两秒播放录音
                        var msgfile = self.SpeechFile;
                        voiceNative.play(msgfile);
                        // 到这里结束
                        //voiceNative.writeVoice 根据msgStr 文件  和命名 把后端发送过来的语音存放本地
                        // 本地测试不需要这步
                        voiceNative.writeVoice(msgfile, msgStr);
                       // cc.log("即将要播放的语音内容" + msgStr);
                                         
                    }, 2000)
                }
            }
        },this)


        btn_Speech.on(cc.Node.EventType.TOUCH_CANCEL,function(){
            voiceNative.cancel();
            cc.log("取消录音")
        },this)
    },

});
