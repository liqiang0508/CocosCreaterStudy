
cc.Class({
    extends: cc.Component,

    properties: {
        
        PhysicsManagerEnable: {
            default:false,
            type:cc.Boolean,
            tooltip:"是否开启物理系统"
        },

        PhysicsManagerDrawDebug: {
            default:false,
            type:cc.Boolean,
            tooltip:"是否开启物理绘制调试信息"
        },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {

        console.log("onLoad", this.PhysicsManagerEnable, )
       
        cc.director.getPhysicsManager().enabled = this.PhysicsManagerEnable;

        if (this.PhysicsManagerEnable)
        {
            cc.director.getPhysicsManager().debugDrawFlags = this.PhysicsManagerDrawDebug
        }
        else
        {
            cc.director.getPhysicsManager().enabled = this.PhysicsManagerEnable
            cc.director.getPhysicsManager().debugDrawFlags = 0
        }
        // cc.director.getPhysicsManager().gravity = cc.v2(0,-9.8)
        
    },

    start () {
        console.log("物理测试")

        
    },

    // update (dt) {},
});
