/*
 * @Descripttion: 
 * @version: 
 * @Author: Lee
 * @Date: 2020-07-31 09:11:45
 * @LastEditTime: 2020-08-27 10:37:02
 */ 
let Ws = require("Ws")
cc.Class({
    extends: cc.Component,

    properties: {
       
    },

    

    // onLoad () {},

    start () {
        var ws_obj = new Ws()
        ws_obj.connect("127.0.0.1",9001)
        ws_obj.setOpenCall((evt)=>{
            cc.log("连接成功")
        })

        ws_obj.setOnMessageCall((evt)=>{
            cc.log("消息来了")
        })
        
        
    },

    sendText(){
        var EditCom=  cc.find("uipanel/Edit",this.node).getComponent(cc.EditBox)
        var txt = EditCom.string
        cc.log("txt==",txt)
        this._wsiSendBinary.send(JSON.stringify({ "funcName":"chatText","txt":txt}))
        EditCom.string = ""

    },
    addText(txt){
        var scrollview = cc.find("uipanel/scrollview",this.node)
        var item =cc.instantiate( cc.find("uipanel/item",this.node))
        item.getComponent(cc.Label).string = txt
        item.x=0
        item.active = true
        var SvCom = scrollview.getComponent(cc.ScrollView)
        SvCom.content.addChild(item)
        SvCom.scrollToBottom(0.5)
    }
    // update (dt) {},
});
