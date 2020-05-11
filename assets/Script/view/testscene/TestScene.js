
var xxtea = require("xxtea")
let i18n = require("i18n")
var Package = require("Package")
var DevicesInfo = require("Devices")
var Global = require("Global")
const voiceNative = require("VoiceNative");
var BaseComponent = require("BaseComponent")
// var KeypadDispatch = require("KeypadDispatch")
cc.Class({
    extends: BaseComponent,

    properties: {


    },
    // LIFE-CYCLE CALLBACKS:

    onLoad () {
      this._super()
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
        var sp2worldpos = Global.ConverToWorldPos(sp2)//sp2.parent.convertToWorldSpaceAR(sp2.getPosition())//转换成世界坐标
        var pos2 = Global.ConverToNodePos(sp4.parent,sp2worldpos)//sp4.parent.convertToNodeSpaceAR(sp2worldpos);//将世界坐标转换成父节点的坐标
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

        //btn_showWaiting菊花转
        var btn_showWaiting = cc.find("uipanel/btn_showWaiting",this.node)
        ua.darkButton(btn_showWaiting, function (event) {
            self.showWiat(true)
            setTimeout(function(){
                self.showWiat(false)
            },3000)
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
                var SpriteCom =  loadTex.getComponent(cc.Sprite)
                SpriteCom.spriteFrame = new cc.SpriteFrame(tex)

                //加载材质
                // cc.loader.loadRes("materials/circle_head",cc.Material,function(err,res){
                   
                //     if(!err)
                //     {
                //         cc.log("res==",res)
                //         var com = sp2.getComponent(cc.Sprite)
                //         let variant1 = cc.MaterialVariant.create(res);
                //         // variant1.setProperty("edge",0.01)
                //         com.setMaterial(0, variant1);

                //     }
                //     else{
                //         cc.log("err==",err)
                //     }
                // })
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
        //encryptToString 语音-》string(字符串压缩)）发送  接收后解密 存储
        // var data = jsb.fileUtils.getDataFromFile(jsb.fileUtils.getWritablePath()+"packageTemp/record.amr")
        // var endata = xxtea.encryptToString(data,"1234")//编码成字符串
        // cc.log(endata)
        // var compressedSrr = StringTools.Compress(endata)//压缩字符串
        // cc.log(compressedSrr)
        // var destr = StringTools.Decompress(compressedSrr)//解压字符串
        // var dedata = xxtea.decrypt(destr,"1234")//解码
        // jsb.fileUtils.writeDataToFile(dedata,jsb.fileUtils.getWritablePath()+"packageTemp/record22.amr")

        

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

        //btn_GrayRenderCom  置灰/复原 针对于renderComponent
        var sp3 = cc.find("content/sp3", this.node)
        sp3.isGray = false
        var btn_GrayRenderCom =  cc.find("uipanel/btn_GrayRenderCom", this.node) 
        ua.darkButton(btn_GrayRenderCom,function(){
           
            var sp_com = sp3.getComponent(cc.Sprite)
            if(sp3.isGray == false)
            {
                let variant1 = cc.MaterialVariant.createWithBuiltin("2d-gray-sprite");
                sp_com.setMaterial(0, variant1);

            }
            else
            {
                let variant1 = cc.MaterialVariant.createWithBuiltin("2d-sprite");
                sp_com.setMaterial(0, variant1);
            }
            sp3.isGray = !sp3.isGray

        })

        //圆形裁剪
        // cc.macro.CLEANUP_IMAGE_CACHE = false;
        // cc.dynamicAtlasManager.enabled = false;//圆角shader必须禁用动态合图不然显示有问题  会导致drawcall上升  或者关闭图片资源的packable
        var sp1 = cc.find("content/sp1", this.node)
        var sp_Com = sp1.getComponent(cc.RenderComponent)
        var ma = sp_Com.getMaterial(0)
        // ma.setProperty("radius",0.5)
        
        //画图测试
        var garpgicsnode = cc.find("garpgicsnode", this.node)
        var garpgics = garpgicsnode.getComponent(cc.Graphics)
  
        garpgicsnode.on(cc.Node.EventType.TOUCH_START,function(event){
            var touches = event.getTouches();
            var touchLoc = touches[0].getLocation();
            touchLoc = garpgicsnode.convertToNodeSpaceAR(touchLoc);
            // cc.log("TOUCH_START===",touchLoc,garpgics)
            garpgics.moveTo(touchLoc.x,touchLoc.y)
        })

        garpgicsnode.on(cc.Node.EventType.TOUCH_MOVE,function(event){
            var touches = event.getTouches();
            var touchLoc = touches[0].getLocation();
            touchLoc = garpgicsnode.convertToNodeSpaceAR(touchLoc);
            // cc.log("TOUCH_MOVE===",touchLoc,garpgics)
            garpgics.lineTo(touchLoc.x,touchLoc.y)
            garpgics.stroke();
          
        })

    


    },

     
    // var renderTexture = cc.RenderTexture()//cc.RenderTexture.initWithSize(750,1334, cc.gfx.RB_FMT_S8); 
    // renderTexture.initWithSize(750,1334, cc.gfx.RB_FMT_S8); 
    // var garpgicsnode = cc.find("garpgicsnode", this.node)
    // renderTexture.begin(); 
    // garpgicsnode.visit();
    // // cc.director.getRunningScene().visit(); 
    // renderTexture.end();
    // var path =jsb.fileUtils.getWritablePath()+"hh.png"
    // cc.log(path)
    // renderTexture.saveToFile(path,cc.macro.ImageFormat.PNG)

    EventTest(event) {

        event.stopPropagation()
        Global.ShowAlert("事件传来的参数"+JSON.stringify(event.detail),[])
    },

    onDestroy(){
       this._super()
    }
    // update (dt) {},
});
