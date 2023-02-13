
import UITool from "../../core/UITool"
cc.Class({
    extends: cc.Component,

    properties: {
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {


        this.content = this.node.getChildByName("bg").getChildByName("ScrollView").getChildByName("view").getChildByName("content")
        this.item = this.node.getChildByName("bg").getChildByName("item")
        this.tiptext = this.node.getChildByName("bg").getChildByName("tiptext")




    },

    initData(data, call) {

        this.call = call
        this.initView(data)
    },

    initView(data) {

        this.tiptext.getComponent(cc.Label).string = data["tips"]
        var items = data["items"]
        for (let index in items) {

            var item = cc.instantiate(this.item)
            this.content.addChild(item)
            item.active = true
            var textNode = item.getChildByName("text")
            textNode.getComponent(cc.Label).string = items[index]["text"]

            UITool.addBtnClick(item, () => {

                if (this.call) {
                    this.call(index, this)
                }

            })
        };

    },
    onbackpress() {


    },

    start() {

    },
});
