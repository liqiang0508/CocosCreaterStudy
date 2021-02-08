
// const Buffer = require('buffer').Buffer;

// const SLOT_NUM = 3;//几个卡槽
const Slot_PerNum = 5; //一个卡槽几个item

const Max_Speed = 100 //最大速度
const SLOT_SPEED_UP_TIME = 2;// --卡槽滚动加速时间
const SLOT_SPEED_DOWN_TIME = 3;// --卡槽滚动减速时间
const Slot_StopTime = 2;  //减速 在转几圈到到index
const Slot_BackDistance = 10;//滚动到最后回滚的距离


window.SlotState = {
    eStoped : 0, //--停止
    eSpeedUp :1, //--加速
    eMaxSpeed : 2, //--最大速度
    eWaitSpeedDown : 3,// --等待减速
    eSpeedDown :4, //--减速
    eKickBack : 5, //--回弹
};


cc.Class({
    extends: cc.Component,

    properties: {
       
        item:{

            default: null,       
            type: cc.Prefab,
            tooltip:"预制体item",
        },

        width:{

            default: 0,       
            type: cc.Float,
            tooltip:"itemd的宽度，初始化用来设置容器宽度",
        },

        space:{
            default:0,
            type:cc.Float,
            tooltip:"间距",
        },
         
        movedirection:{
            default:0,
            type:cc.Integer,
            tooltip:"方向 0为往上移动 1为往下",
        },
        showItemNum:{
            default:3,
            type:cc.Integer,
            tooltip:"面板显示几个可见的item",
        },
        
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {

        if(this.width!=0)
        {
            this.node.width =this.width;
        }
         this.node.height = this.showItemNum*this.width+( this.showItemNum+1)*this.space
         this.SlotState = window.SlotState.eStoped;
         this.addItem();

         this.curIndex = 1;//当前index
         this.StartSpin = false;//是否在spin
         this.stopIndex = null; //停止的index；
         this.HaveCompelete = true;//是否完成了一次spin
         this.SpeedY = 0;//当前速度
         this.restPos  = false
         this.schedule(this.update1, 1/60);
        
         this.offsetY = 0

    },



    start () {
        // this.Spin();

    },

    addItem(){

        this.ItemArray = new Array();

        for(let i = 0 ;i<Slot_PerNum;i++)
        {
            var item = cc.instantiate(this.item);
            item.parent = this.node;
            item.x = 0;
            item.tag = i;
             
            if(this.movedirection==0)//往上
            {
                item.y = this.node.height/2-item.height*i-item.height/2-this.space*(i+1);
            }
            else//往下
            {
                item.y = -this.node.height/2+item.height*i+item.height/2+this.space*(i+1);
            }
            
            var cellComponent = item.getComponent("Cell")
            cellComponent.seTextString(i) 
            cellComponent.setBgRes(i)
            this.ItemArray.push(item);

        }

        this.item.height = 120//this.ItemArray[0].height;

      
    },

    updateItem(deltaY){//更新节点位置
        
        if(deltaY==0)
        {
            return;
        }
      
        // var _DT = 1/60;
        var child = this.node.children;
  
       
        for(let start = 0; start < child.length;start++)
        {
            let target = child[start];

            if(deltaY>0)//往上移动
            {

                var posy = this.node.height/2+target.height/2;
                // cc.log(target)
                if(target.y>=posy)// 超出了最上面 y坐标下移
                {
                        target.y = target.y+(-child.length*this.item.height-child.length*this.space);
                        this.curIndex+=1;
                        if(this.curIndex>(Slot_PerNum-1))
                        {
                            this.curIndex-=(Slot_PerNum);
                        }
                       
                           
                }
                else{ //small

                    target.y=target.y+deltaY;//move
                     if(target.y>=posy)//top)
                     {
                        
                        target.y = target.y+(-child.length*this.item.height-child.length*this.space);
                        this.curIndex+=1;
                        if(this.curIndex>(Slot_PerNum-1))
                        {
                            this.curIndex-=(Slot_PerNum);
                        }
                        
                     }

                }
            }
            else{//往下移动

                var posy = -this.node.height/2-target.height/2;
                if(target.y<=posy)// 超过最下面 y坐标上移
                {
                        target.y = target.y+(child.length*this.item.height+child.length*this.space);
                        this.curIndex+=1;
                        if(this.curIndex>(Slot_PerNum-1))
                        {
                            this.curIndex-=(Slot_PerNum);
                        }
                        // cc.log("updateItem==curIndex1",this.curIndex);
                           
                }
                else{ //small

                    target.y = target.y+deltaY;//move
                    this.offsetY = this.offsetY + deltaY
                     if(target.y<=posy)//top)
                     {
                        
                        target.y = target.y+(child.length*this.item.height+child.length*this.space);
                        this.curIndex+=1;
                        if(this.curIndex>(Slot_PerNum-1))
                        {
                            this.curIndex-=(Slot_PerNum);
                        }
                        // cc.log("updateItem==curIndex2",this.curIndex);
                     }

                }
            }
        }

    
       
        
        // cc.log("updateItem==curIndex",this.curIndex);
    },


    updateSlotsToDown(dt){//往下滚动 

        var timedeal = 1/60;
        if(this.SlotState == window.SlotState.eSpeedUp)//加速
        {
          
            if(this.SpeedY>-Max_Speed)
            {
                this.SpeedY= this.SpeedY +this.Acceleration*timedeal;
                if(this.SpeedY<=-Max_Speed)
                {
                   
                    this.SpeedY = -Max_Speed;//达到最高速度，等待减速
                    this.SlotState =window.SlotState.eWaitSpeedDown;
                }
              
            }
            else{
                this.SpeedY = -Max_Speed;//达到最高速度，等待减速
                this.SlotState =window.SlotState.eWaitSpeedDown;
            }
        }

        if(this.SlotState == window.SlotState.eWaitSpeedDown)//等待减速
        {

            
            if(this.stopIndex==this.curIndex)//停止的位置和当前的一样
            {
                var S = this.node.height *Slot_StopTime+  this.space*(this.ItemArray.length-1)*Slot_StopTime +Slot_BackDistance+50
                // var S1= this.ItemArray.length*this.space+this.ItemArray.length*this.item.height;//vt*vt-vo*vo = 2as来算加速度
                this.Acceleration = this.SpeedY * this.SpeedY/ (2 * S)*60; 

                this.resetPosY()

                cc.log(" 减速this.Acceleration---", this.Acceleration)
                this.SlotState = window.SlotState.eSpeedDown;
                // return;
                
            }
           
        }

        if(this.SlotState == window.SlotState.eSpeedDown)//减速
        {

            if(this.SpeedY<0)
            {
                this.SpeedY = this.SpeedY + this.Acceleration*timedeal;
                if( this.SpeedY>=0)
                {
                    this.SpeedY = 0;
                    this.SlotState =window.SlotState.eStoped;

                }
            }
            else{
                this.SpeedY = 0;
                this.SlotState =window.SlotState.eStoped;

            }
        }

        if(this.SlotState == window.SlotState.eKickBack)//回弹
        {
            // cc.log("回弹==",this.SpeedY);
            // this.SpeedY -= 200*timedeal;
            // if(this.SpeedY<=0)
            // {
            //     this.SpeedY = 0;
            //     this.SlotState =window.SlotState.eStoped;

            // }

            // this.Bounce()//回弹；
        }

        if(this.SlotState == window.SlotState.eStoped)//stop
        {
            if(this.StartSpin)
            {
                
                this.Bounce()//回弹；
                this.StartSpin = false;
            }
            
        }
        this.updateItem(this.SpeedY);
    },

    Bounce(){

        var self = this;
        var child = this.node.children;
        for(var start = 0; start < child.length;start++)
        {
            var haha = child[start];
            
            if(haha)
            {
                var move;
               if(this.movedirection==0)
               {
                 move = cc.moveBy(0.1,cc.Vec2(0,-Slot_BackDistance)).easing(cc.easeOut(1));
               }
               else{
                 move = cc.moveBy(0.1,cc.Vec2(0,Slot_BackDistance)).easing(cc.easeOut(1));
               }
             
               var call = cc.callFunc(function(){

                if(self.StopCall)
                {
                    self.StopCall();
                    self.StopCall = null
                }
                self.HaveCompelete = true;

               });
               var seq = cc.sequence(move,call);
               haha.runAction(seq);
            
            }
        }

    },
    resetPosY()//位置矫正
    {
        this.restPos = true
        var index = this.stopIndex;
        var target = this.ItemArray[index];
        var offset = target.y;

        // cc.log("resetPosY==",offset);
        var child = this.node.children;
        for(var start = 0; start < child.length;start++)
        {
            var haha = child[start];
            
            if(haha)
            {
               
                haha.y = haha.y-offset;
            }
        }
        this.restPos = false

    },
    Spin()//开始spin
    {
        
        
        this.Acceleration= Max_Speed/SLOT_SPEED_UP_TIME; //开始加速度

        if(this.movedirection==1)//往下
        {
            this.Acceleration = -this.Acceleration;
        }
        cc.log(" 加速this.Acceleration---", this.Acceleration)
        this.SlotState = window.SlotState.eSpeedUp;

        // this.stopIndex = 5;

        this.StartSpin = true;//开始了spin

        this.HaveCompelete = false;

    },
    setStopIndex(index){
        this.stopIndex = index

    },
    StopAtIndex(index,stopcall){//在哪个index停止
        console.log("StopAtIndex==",index)
        this.stopIndex = index;
        if(stopcall)
        {
            this.StopCall = stopcall;
        }
        // this.SlotState = window.SlotState.eSpeedDown;

    },
    update1(dt) {//每帧调用

        // cc.log("update==",dt);

     
        // return;
        if(!this.StartSpin || this.resetPosY==true)
        {
            // cc.log("stop update");
            return;

        }

        if(this.movedirection==0)//往上移动
        {
            // this.updateSlotsToTop(dt);
        }  
        else//往下移动
        {
            this.updateSlotsToDown(dt);
        }
      
       
    },

   getSlotState(){//获取当前slot的状态

        return this.SlotState;
   },
   
});
