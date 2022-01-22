/*
 * @Descripttion: 
 * @version: 
 * @Author: Lee
 * @Date: 2020-08-12 13:56:57
 * @LastEditTime: 2022-01-22 19:53:11
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
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {
        this.ball = cc.find("ball", this.node)
        this.ballPool = new cc.NodePool();
        let initCount = 5;
        for (let i = 0; i < initCount; ++i) {
            let ball = cc.instantiate(this.ball); // 创建节点
            this.ballPool.put(ball); // 通过 put 接口放入对象池
        }

        globalThis.GameState = 0//开始
        this.content = cc.find("content", this.node)
        this.scoreText = cc.find("uipanel/scoretxt", this.node)

        this.schedule(this.CreateBubble, 1)
        this.Score = 0

        var btn_pause = cc.find("uipanel/btn_pause", this.node)
        UITool.addBtnClick(btn_pause, () => {
            if (globalThis.GameState == 0) {
                globalThis.GameState = 1
            }
            else {
                globalThis.GameState = 0
            }

        })
    },

    addScore(ballNode) {
        this.ballPool.put(ballNode);
        this.Score = this.Score + 1
        this.scoreText.getComponent(cc.Label).string = "Score:" + this.Score

        cc.tween(this.scoreText)
            .to(0.08, { scale: 1.1 })
            .to(0.05, { scale: 0.8 })
            .to(0.05, { scale: 1 })
            .start()

    },
    CreateBubble() {
        if (globalThis.GameState == 1)//暂停
        {
            return
        }
        let ball = null;
        if (this.ballPool.size() > 0) { // 通过 size 接口判断对象池中是否有空闲的对象
            ball = this.ballPool.get();
        } else { // 如果没有空闲对象，也就是对象池中备用对象不够时，我们就用 cc.instantiate 重新创建
            ball = cc.instantiate(this.ball);

        }
        if (ball) {
            ball.active = true
            ball.getComponent("Bubble").setClickCall((node) => { this.addScore(node) })
            this.content.addChild(ball)
            ball.x = 0;
            ball.y = 0
        }
    }
});
