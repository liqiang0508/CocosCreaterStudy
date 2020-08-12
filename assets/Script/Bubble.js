/*
 * @Descripttion: 
 * @version: 
 * @Author: Lee
 * @Date: 2020-08-12 11:09:31
 * @LastEditTime: 2020-08-12 14:58:40
 */


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
        life:{

            type:cc.Integer,
            default:5
        }
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        // console.log("  buble start===",cc.view.getVisibleSize().width)
        this.Speed = cc.v2(Math.random()*1000-500,Math.random()*1000-500)
        this.ScreenSize = cc.view.getVisibleSize()

        ua.ClickNode(this.node,()=>{
            if (window.GameState==1)//暂停
            {
                return
            }
            if (this.CliclCall)
            {
                this.CliclCall()
            }
            this.node.removeFromParent()
            this.node.destroy()
        })

        
    },

    onDestroy(){

        this.node.targetOff(this)
    },
    setClickCall(call){
        this.CliclCall = call
    },
    update (dt) {
      
        if (window.GameState==1)//暂停
        {
            return
        }
        // cc.log("update")
        this.node.x = this.node.x + this.Speed.x*dt
        this.node.y = this.node.y + this.Speed.y*dt
        if (this.node.x<= -(this.ScreenSize.width/2-this.node.width/2))
        {
            // cc.log("超出最左边")
            this.node.x = -(this.ScreenSize.width/2-this.node.width/2)
            this.Speed.x = -this.Speed.x
            this.life =  this.life -1
        }

        if (this.node.x>= (this.ScreenSize.width/2-this.node.width/2))
        {
            this.node.x = (this.ScreenSize.width/2-this.node.width/2)
            this.Speed.x = -this.Speed.x
            // cc.log("超出最右边")
            this.life =  this.life -1
        }

        if (this.node.y<= -(this.ScreenSize.height/2-this.node.height/2))
        {
            this.node.y = -(this.ScreenSize.height/2-this.node.height/2)
            this.Speed.y = -this.Speed.y
            this.life =  this.life -1
        }

        if (this.node.y>= (this.ScreenSize.height/2-this.node.height/2))
        {
            this.node.y = (this.ScreenSize.height/2-this.node.height/2)
            this.Speed.y = -this.Speed.y
            this.life =  this.life -1
        }
        // cc.log("update")
        if  (this.life ==0)
        {
            this.node.removeFromParent()
            this.node.destroy()
        }

    },
});
