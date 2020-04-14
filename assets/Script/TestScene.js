
var xxtea = require("xxtea")
let i18n = require("i18n")
var Package = require("Package")
var Devices = require("Devices")
cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

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
         var str = "Hello World! 你好，中国🇨🇳！";
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
       
        cc.log("Devices===id",Devices.getDevicesID(),cc.sys.os)
    },

    // update (dt) {},
});
