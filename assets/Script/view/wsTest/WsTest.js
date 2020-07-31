
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

    start () {
        var self  = this
        this._wsiSendBinary = new WebSocket("ws://127.0.0.1:9001");
        this._wsiSendBinary.binaryType = "arraybuffer";
        this._wsiSendBinary.onopen = function(evt) {
            cc.log("websocket  open")
            self._wsiSendBinary.send(JSON.stringify({ "funcName":"auth","uid": Number(new Date())}))
            self._wsiSendBinary.send(JSON.stringify({ "funcName":"enterroom","roomid": 444}))
        };

        this._wsiSendBinary.onmessage = function(evt) {
            cc.log("websocket  onmessage",evt.data)
            var data = JSON.parse(evt.data)
            var funcName = data["funcName"]
            if (funcName == "chatText")
            {
                self.addText(data["txt"])
            }


        };

        this._wsiSendBinary.onerror = function(evt) {
            cc.log("websocket  onerror")
        };

        this._wsiSendBinary.onclose = function(evt) {
            cc.log("websocket  onclose")
        }
        
        var sendbtn = cc.find("uipanel/sendbtn",this.node)
        ua.darkButton(sendbtn,function(event){
            cc.log("send")
            
            self.sendText()
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
