
var BaseComponent = require("BaseComponent")
cc.Class({
    extends: BaseComponent,

    properties: {
        AimType: {
            default: 1,
            override: true
        }
    },

    // LIFE-CYCLE CALLBACKS:
    onDestroy() {
        this._super()
    },
    onLoad() {
        this._super()
        var self = this
        this.content = this.node.getChildByName("bg").getChildByName("ScrollView").getChildByName("view").getChildByName("content")
        this.item = this.node.getChildByName("bg").getChildByName("item")
        this.tiptext = this.node.getChildByName("bg").getChildByName("tiptext")
        // var btndone = this.node.getChildByName("panel").getChildByName("btn_done")
        // ua.darkButton(this.node.getChildByName("bg").getChildByName("tiptext"),function(){
        //    console.log("text22")
        // })



    },

    initData(data, call) {

        this.call = call
        this.initView(data)
    },

    initView(data) {
        var self = this
        this.tiptext.getComponent(cc.Label).string = data["tips"]
        var items = data["items"]
        for (let index in items) {

            var item = cc.instantiate(this.item)
            this.content.addChild(item)
            item.active = true
            var textNode = item.getChildByName("text")
            textNode.getComponent(cc.Label).string = items[index]["text"]

            ua.darkButton(item, function () {
               
                if (self.call) {
                    self.call(index,self)
                }
                // self.bClose()
            })
        };

    },
    onbackpress() {
        this._super()

    },

    start() {

    },
});
