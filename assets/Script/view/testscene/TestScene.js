
var xxtea = require("xxtea")
let i18n = require("i18n")
var Package = require("Package")
var DevicesInfo = require("Devices")
var Global = require("Global")
const voiceNative = require("VoiceNative");
// var KeypadDispatch = require("KeypadDispatch")
cc.Class({
    extends: cc.Component,

    properties: {


    },
    // LIFE-CYCLE CALLBACKS:

    onLoad () {
      voiceNative.init();
    //   KeypadDispatch.getInstance()
      
    },

    start() {
        // var sp = cc.find("New Sprite", this.node)
        var searchPaths  = "searchPaths--"
        if(cc && cc.sys.isNative)
        {
            searchPaths = jsb.fileUtils.getSearchPaths();
        }
       
        var self =this    
        console.log("test scene  strart",searchPaths)

        // 坐标转换
        var sp2 = cc.find("uipanel/New Sprite", this.node)
        var sp4 = cc.find("content/sp4", this.node)
        var sp2worldpos = sp2.parent.convertToWorldSpaceAR(sp2.getPosition())//转换成世界坐标
        var pos2 = sp4.parent.convertToNodeSpaceAR(sp2worldpos);//将世界坐标转换成父节点的坐标
        // sp4.setPosition(pos2)
        this.sp4OldPos = sp4.getPosition()
        sp4.IsOriginPos = true
        //btn_posconvert
        var btn_posconvert = cc.find("uipanel/btn_posconvert", this.node)
        ua.darkButton(btn_posconvert,function(){
            if(sp4.getNumberOfRunningActions()>0)
            {
                return 
            } 

            if(sp4.IsOriginPos == true){
                var ac = cc.moveTo(1,pos2).easing( cc.easeSineOut())
                sp4.runAction(ac)
            }
            else
            {
                var ac = cc.moveTo(1,self.sp4OldPos).easing( cc.easeSineOut())
                sp4.runAction(ac)
            }
            sp4.IsOriginPos = !sp4.IsOriginPos
           
        })
    
        sp2.on(cc.Node.EventType.TOUCH_START, function (event) {
            // console.log('Touch start');
            sp2.opacity = 150
            // sp.color = cc.Color.BLACK
        });

        sp2.on(cc.Node.EventType.TOUCH_END, function (event) {
            // console.log('Touch end');
            sp2.opacity = 255
            // sp.color = cc.Color.WHITE
        });

        sp2.on(cc.Node.EventType.TOUCH_CANCEL, function (event) {
            //console.log('Touch end');
            sp2.opacity = 255
            // sp.color = cc.Color.WHITE
        });

       

        console.log("winSize",cc.winSize)
        console.log("getDesignResolutionSize",cc.view.getDesignResolutionSize())
        console.log("getFrameSize",cc.view.getFrameSize())
        console.log("getVisibleSizeInPixel",cc.view.getVisibleSizeInPixel())
        console.log("getVisibleSize",cc.view.getVisibleSize())
        console.log("getCanvasSize",cc.view.getCanvasSize())
        console.log("cc.sys.getSafeAreaRect()",cc.sys.getSafeAreaRect())

      

         //Package
         var data = Package.biuldReq("Hello",{a:1,c:2})

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
        // var id = window.Save.get("decicesID",timeStamp)
        // if (id==timeStamp)
        // {
        //     window.Save.set("decicesID",timeStamp)
        // }
       
        cc.log("DevicesInfo===id",DevicesInfo.getDevicesID(),cc.sys.os)

        //show Alert
        var showAlertIII = cc.find("uipanel/btn_Alert",this.node)
        ua.darkButton(showAlertIII, function (event) {

            // event.currentTarget.active = false
            Global.ShowAlert("666", ["LOL", "LOL1", "LOL#"], function (index) {
                cc.log("click==", index)
            })

        })

        //btn_EventTest
        var btn_EventTest = cc.find("uipanel/btn_EventTest",this.node)
        ua.darkButton(btn_EventTest, function (event) {
            EventManager.dispatchEvent(self.node, RefreshInfo, { "name": "Lee123" })
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
               
            }
            else if(Date.now() - lastTouchTime > 8000) 
            {
                voiceNative.cancel();
              
                Global.ShowAlert("录音时间大于8s", ["Yes"], function (index) {
                   
                })
            }
            else
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

        EventManager.on(this.node, RefreshInfo, this.EventTest)
        //encryptToString 语音-》string 发送  接收后解密 存储
        /*var data = jsb.fileUtils.getDataFromFile(jsb.fileUtils.getWritablePath()+"packageTemp/record.amr")
        var endata = xxtea.encryptToString(data,"1234")
        var dedata = xxtea.decrypt(endata,"1234")
        cc.log(dedata)
        jsb.fileUtils.writeDataToFile(dedata,jsb.fileUtils.getWritablePath()+"packageTemp/record22.amr")

        */

        //btn_fps
        var btn_fps = cc.find("uipanel/btn_fps", this.node)
        ua.darkButton(btn_fps, function () {
            console.log("setDisplayStats-",!cc.debug.isDisplayStats())
            cc.debug.setDisplayStats(!cc.debug.isDisplayStats())
          
        })
        
        //btn_showpopLayer
        var btn_showpopLayer = cc.find("uipanel/btn_showpopLayer", this.node)
        ua.darkButton(btn_showpopLayer, function () {
            ua.loadPrefabRes("prefabs/poplayer", function (prefabNode) {
                if (prefabNode) {
                    cc.director.getScene().getChildByName('Canvas').addChild(prefabNode)
                    var com = prefabNode.getComponent("poplayer")
                    if (com) {
                        com.show()
                    }
                }
            })

        })

        //材质
        var sp3 = cc.find("content/sp3", this.node)
        var com = sp3.getComponent(cc.Sprite)
        // let variant1 = cc.MaterialVariant.createWithBuiltin("2d-gray-sprite");
        // com.setMaterial(0, variant1);

        cc.loader.loadRes("materials/Dark", cc.Material, function (err, res) {
            if(err)
            {
                cc.log("load err===")
                return 
            }
            // cc.log("load111",res)
            var material = cc.MaterialVariant.create(res)
            com.setMaterial(0, material)
        })
          
    },

    EventTest(event) {

        event.stopPropagation()
        Global.ShowAlert("事件传来的参数"+JSON.stringify(event.detail),[])
    },

    onDestroy(){
        EventManager.off(this.node, RefreshInfo, this.EventTest)
    }
    // update (dt) {},
});
