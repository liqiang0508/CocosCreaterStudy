
cc.Class({
    extends:cc.Component,

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
        this.btn_back = cc.find("uipanel/btn_back",this.node)
        UITool.addBtnClick(this.btn_back,function(){

            // cc.director.loadScene("TestScene")
        })
    },

    // update (dt) {},

 
});
