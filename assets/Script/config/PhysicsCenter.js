
cc.Class({
    extends: cc.Component,

    properties: {
        
        PhysicsManagerEnable: {
            default:false,
            // type:cc.Boolean,
            tooltip:"是否开启物理系统"
        },

        PhysicsManagerDrawDebug: {
            default:false,
            // type:cc.Boolean,
            tooltip:"是否开启物理绘制调试信息"
        },

// default: 设置属性的默认值，这个默认值仅在组件 第一次 添加到节点上时才会用到
// type: 限定属性的数据类型，详见 CCClass 进阶参考：type 参数
// visible: 设为 false 则不在 属性检查器 面板中显示该属性
// serializable: 设为 false 则不序列化（保存）该属性
// displayName: 在 属性检查器 面板中显示成指定名字
// tooltip: 在 属性检查器 面板中添加属性的 Tooltip
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
