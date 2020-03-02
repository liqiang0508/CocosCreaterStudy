// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

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
        console.log("sp---", sp.getPosition())
        // var bg  = cc.find("New Layout",this.node)
        var sp2 = cc.find("New Layout/New Sprite", this.node)
        console.log("sp2---", sp2.getPosition())

        sp2.setPosition(80,80)
        //获取世界坐标 找到parent worldpos
        var spWorldPos = sp.parent.convertToWorldSpaceAR(sp.getPosition());
        cc.log("sp1 world pos=", spWorldPos);


        // 转换成node局部坐标
        var tobNode = sp2.parent
        var pos2 = tobNode.convertToNodeSpaceAR(spWorldPos);
  
        sp2.runAction(cc.moveTo(0.5, pos2));
        // sp2.setPosition(pos2)



    },

    // update (dt) {},
});
