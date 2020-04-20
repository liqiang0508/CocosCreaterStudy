
var xxtea = require("xxtea")
let i18n = require("i18n")
var Package = require("Package")
var DevicesInfo = require("Devices")
var Global = require("Global")
const voiceNative = require("VoiceNative");

cc.Class({
    extends: cc.Component,

    properties: {


    },
    // LIFE-CYCLE CALLBACKS:

    onLoad () {
      voiceNative.init();
    },

    start() {
        var sp = cc.find("New Sprite", this.node)
        // console.log("sp---", sp.getPosition())
        // var bg  = cc.find("New Layout",this.node)
        var sp2 = cc.find("content/New Sprite", this.node)
        // console.log("sp2---", sp2.getPosition())

        sp2.setPosition(80,80)
        //获取世界坐标 找到parent worldpos
        var spWorldPos = sp.parent.convertToWorldSpaceAR(sp.getPosition());
        // cc.log("sp1 world pos=", spWorldPos);
      
     
        sp.on(cc.Node.EventType.TOUCH_START, function (event) {
            console.log('Touch start');
            sp.opacity = 150
            // sp.color = cc.Color.BLACK
          });

          sp.on(cc.Node.EventType.TOUCH_END, function (event) {
            console.log('Touch end');
            sp.opacity = 255
            // sp.color = cc.Color.WHITE
          });

          sp.on(cc.Node.EventType.TOUCH_CANCEL, function (event) {
            //console.log('Touch end');
            sp.opacity = 255
            // sp.color = cc.Color.WHITE
          });

        // 转换成node局部坐标
        var tobNode = sp2.parent
        
        var pos2 = tobNode.convertToNodeSpaceAR(spWorldPos);
  
        // sp2.runAction(cc.moveTo(0.5, pos2));
        // sp2.setPosition(pos2)

        console.log("winSize",cc.winSize)
        console.log("getDesignResolutionSize",cc.view.getDesignResolutionSize())
        console.log("getFrameSize",cc.view.getFrameSize())
        console.log("getVisibleSizeInPixel",cc.view.getVisibleSizeInPixel())
        console.log("getVisibleSize",cc.view.getVisibleSize())
        console.log("getCanvasSize",cc.view.getCanvasSize())
        console.log("cc.sys.getSafeAreaRect()",cc.sys.getSafeAreaRect())

        // tobNode.setContentSize(cc.size(cc.sys.getSafeAreaRect().width,cc.sys.getSafeAreaRect().height))

         //Package
         var data = Package.biuldReq("Hello",{a:1,c:2})
        //  cc.log("data-------------",data)
        //  cc.log("data-------------2",data.encode())
         //xxtea
         var str = "Hello World! 你好，中国🇨🇳-----！";
         var key = "1234567890";
         var encrypt_data = xxtea.encryptToString(str, key);
         console.log("encrypt_data=",encrypt_data);
         var decrypt_data = xxtea.decryptToString(encrypt_data, key);
         console.log("decrypt_data==", decrypt_data);
 
         //some test
         cc.log("window.DISTRIBUTE_CHANNEL ==",window.DISTRIBUTE_CHANNEL,cc.sys.isNative,cc.sys.os )
         i18n.init("zh")
         cc.log("i18n===",i18n.t("STR_COREPLAY_BUTTON_FOLD"))

         var ConstantItem  = require("ConstantItem")
        cc.log(ConstantItem[1])

        var timeStamp = new Date().getTime()//时间戳

        cc.log("timeStamp=====",timeStamp,new Date().toLocaleDateString())
        cc.log("timeStamp=====",timeStamp,new Date().toLocaleString())
        cc.log("timeStamp=====",timeStamp,new Date().toLocaleTimeString())
        // cc.log(window.Save.get("loginid",timeStamp))
        var id = window.Save.get("decicesID",timeStamp)
        if (id==timeStamp)
        {
            window.Save.set("decicesID",timeStamp)
        }
       
        cc.log("DevicesInfo===id",DevicesInfo.getDevicesID(),cc.sys.os)

        //show Alert
        var showAlertIII = cc.find("uipanel/btn_Alert",this.node)
        ua.darkButton(showAlertIII, function (event) {

            // event.currentTarget.active = false
            Global.ShowAlert("666", ["LOL", "LOL1", "LOL#"], function (index) {
                cc.log("click==", index)
            })

        })

        //load Tex
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
                    // console.log("time now。。。。。  " + Date.now());
                    // console.log("begin time。。。。。  " + lastTouchTime);
                    console.log("record time。。。。。  " + time);
                    // 读取录音文件
                    var msgStr = voiceNative.getVoiceData(self.SpeechFile);
                    console.log("sound data。。。。。  " + msgStr);
                    if (msgStr) {
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
            }
        },this)


        btn_Speech.on(cc.Node.EventType.TOUCH_CANCEL,function(){
            voiceNative.cancel();
            cc.log("取消录音")
        },this)

        //encryptToString 语音-》string 发送  接收后解密 存储
        /*var data = jsb.fileUtils.getDataFromFile(jsb.fileUtils.getWritablePath()+"packageTemp/record.amr")
        var endata = xxtea.encryptToString(data,"1234")
        var dedata = xxtea.decrypt(endata,"1234")
        cc.log(dedata)
        jsb.fileUtils.writeDataToFile(dedata,jsb.fileUtils.getWritablePath()+"packageTemp/record22.amr")

        */

    },

    // update (dt) {},
});
