
var BaseComponent = require("BaseComponent");
const { timeStamp } = require("console");
cc.Class({
    extends: BaseComponent,

    properties: {
        
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {

        this._super()
    },

    onDestroy() {
        this._super()
        
    },

    start () {
        this.ProgreeNode = cc.find("progress",this.node)
        this.percent = 0 //当前进度
        this.speed = 0   //更新进度的速度
        this.targetPercent = 0//更新时目标进度
    },
    //更新百分比
    updataProgress(percent,time=1){
        this.targetPercent = percent
        // var curProgress = this.ProgreeNode.getComponent("cc.ProgressBar").progress
        this.speed = (this.targetPercent-this.percent)/time
    },
    // setpercent  0-100
    setPercent(percent){
        if(this.ProgreeNode)
        {
            this.ProgreeNode.getComponent("cc.ProgressBar").progress = percent/100
            this.percent = percent
        }
    },

    setCallFun(progresscall,endcall){
        this.progresscall = progresscall
        this.endcall = endcall
    },
    

    update (dt) {
        
        if(this.percent>=100){
            this.percent = 100
            this.setPercent( this.percent );
            if (this.endcall)
            {
                this.endcall(this)
            }
            return 
        }
        
        if (this.targetPercent > this.percent )
        {   
            var nextpercent = parseFloat((this.percent  + this.speed*dt).toFixed(1))
            this.setPercent( nextpercent );
            
        }
       
        
        if ( this.progresscall)
        {
            this.progresscall(this)
            this.progresscall = null
        }

    },
});
