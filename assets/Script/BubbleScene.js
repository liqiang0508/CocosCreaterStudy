/*
 * @Descripttion: 
 * @version: 
 * @Author: Lee
 * @Date: 2020-08-12 13:56:57
 * @LastEditTime: 2021-12-31 11:23:48
 */

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
        window.GameState = 0//开始
        this.content = cc.find("content",this.node)
        this.scoreText =  cc.find("uipanel/scoretxt",this.node)
        this.ball = cc.find("ball",this.node)
        this.schedule(this.CreateBubble,1)
        this.Score = 0
        
        var btn_pause = cc.find("uipanel/btn_pause",this.node)
        UITool.addBtnClick(btn_pause,()=>{
            if (window.GameState==0)
            {
                window.GameState = 1
            }
            else{
                window.GameState = 0
            }
           
        })
    },

    addScore(){
        this.Score = this.Score + 1
        this.scoreText.getComponent(cc.Label).string = "Score:"+this.Score
        
        cc.tween(this.scoreText)
            .to(0.08, { scale:1.1 })
            .to(0.05, { scale: 0.8 })
            .to(0.05, { scale: 1 })
            .start()
        
    },
    CreateBubble(){
        if (window.GameState==1)//暂停
        {
            return
        }
        var ball = cc.instantiate(this.ball)
        ball.active = true
        ball.getComponent("Bubble").setClickCall(()=>{this.addScore()})
        this.content.addChild(ball)
        ball.x = 0;
        ball.y = 0
    }
    // update (dt) {},
});
