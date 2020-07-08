var Eve

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

    onLoad () {},
    tap(){
        
        var rigidbody = this.node.getComponent(cc.RigidBody)
        console.log("ball tap====",rigidbody)
        rigidbody.applyForceToCenter(new cc.Vec2(0,600000),true)
    },

    start () {
        // this.schedule(this.printlog,1/20)
    //    this.tap()
        console.log("start",this.node.y)
        // this.node.y = 0
        // this.node.x= 0
        // this.node.getComponent(cc.RigidBody).syncPosition(true);
    },
    printlog(){
        var rigidbody = this.node.getComponent(cc.RigidBody)
    
        var velocity = rigidbody.linearVelocity;
        // console.log("velocity",velocity.x,velocity.y)
        // console.log("pos",this.node.x,this.node.y)

    },
      // 只在两个碰撞体开始接触时被调用一次
    onBeginContact (contact, selfCollider, otherCollider) {
        console.log("ball onBeginContact")
        // window.EventManager.dispatchEvent(this.node,"gameover")
        // this.node.active = false
       
        
    },

    // 只在两个碰撞体结束接触时被调用一次
    onEndContact (contact, selfCollider, otherCollider) {
        console.log("ball onEndContact")

    },

    // 每次将要处理碰撞体接触逻辑时被调用
    onPreSolve (contact, selfCollider, otherCollider) {
        console.log("ball onPreSolve")
        
    },

    // 每次处理完碰撞体接触逻辑时被调用
    onPostSolve (contact, selfCollider, otherCollider) {
        console.log("ball onPostSolve")
    },

    
    update (dt) {
      
    },

});
