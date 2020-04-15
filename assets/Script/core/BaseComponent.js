
cc.Class({
    extends: cc.Component,

    properties: {
        AimType:{// AimType = 1;                    动画效果:  1:弹出 2:渐变 3:从右到左滑入 4:从左到右滑入
            default:1,
            override:true,
            tooltip:"弹出动画  1:弹出 2:渐变"
        }
    },

    

    // onLoad () {},

    start () {

    },

    initUI()
    {

    },


    bClose()
    {   
        var self = this
        this.ExtAni(function(){
            if(self.node)
            {
                self.node.destroy()
                self.node.removeFromParent()
               
            }

        })
       
    },

    ExtAni(call)//退出动画
    {
        if (this.AimType == 1) {//弹出方式
            var act1 = cc.spawn(cc.scaleTo(0.1, 0.7), cc.fadeTo(0.08, 0))
            var act2 = cc.callFunc(function () {
                if (call) {
                    call()
                }
            })

            var action = cc.sequence(act1, act2)
            this.node.runAction(action);
            var mask = this.node.getChildByName("mask")
            if (mask) {
                mask.opacity = 0
            }

        }


        if (this.AimType == 2) {//渐变

            var act1 =  cc.fadeTo( 0.15, 0 )
            var act2 = cc.callFunc(function () {
                if (call) {
                    call()
                }
                
            })
            var action = cc.sequence(act1, act2)
            this.node.runAction(action);

        }
        
    },

    EnterAni(call){//进入动画

        if (this.AimType == 1) {//弹出方式
            var mask = this.node.getChildByName("mask")
            
            this.node.opacity = 10
            this.node.Scale = 0.5
            var act1 = cc.spawn(cc.scaleTo(0.1, 1.05), cc.fadeTo(0.1, 180))
            var act2 = cc.spawn(cc.scaleTo(0.05, 1.0), cc.fadeTo(0.05, 255))
            var act3 = cc.callFunc(function () {
                if (call) {
                    call()
                }
                if (mask) {
                    mask.opacity = 125
                }
            })
            var action = cc.sequence(act1, act2, act3)
            this.node.runAction(action);
        }

        if (this.AimType == 2) {//渐变

            var mask = this.node.getChildByName("mask")
            if (mask) {
                mask.opacity = 0
            }


            var act1 =  cc.fadeTo( 0.15, 255 )
            var act2 = cc.callFunc(function () {
                if (call) {
                    call()
                }
                if (mask) {
                    mask.opacity = 225
                }
            })
            var action = cc.sequence(act1, act2)
            this.node.runAction(action);

        }
        
    }

    
    // update (dt) {},
});
