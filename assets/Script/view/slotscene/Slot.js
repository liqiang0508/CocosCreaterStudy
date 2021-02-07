
const Buffer = require('buffer').Buffer;

// const SLOT_NUM = 3;//几个卡槽
const Slot_PerNum = 8; //一个卡槽几个item

const Max_Speed = 50; //最大速度
const SLOT_SPEED_UP_TIME = 3;// --卡槽滚动加速时间
const Slot_StopTime = 3;  //到达最大速度 在转几圈到到index
const Slot_BackDistance =15;//滚动到最后回滚的距离


window.SlotState = {
    eStoped : 0, //--停止
    eSpeedUp :1, //--加速
    eMaxSpeed : 2, //--最大速度
    eWaitSpeedDown : 3,// --等待减速
    eSpeedDown :4, //--减速
    eKickBack : 5, //--回弹
};

//资源数组
const iconTexture = ["stop_banana","stop_begemot","stop_cocktail","stop_crocodile","stop_kakadu","stop_lion","stop_man","stop_monkey"];

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
            default:10,
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
            tooltip:"面包显示几个可见的item",
        },
        
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {

        if(this.width!=0)
        {
            this.node.width =this.width;
        }
         this.node.height = this.showItemNum*this.width+( this.showItemNum+1)*this.space
         var self = this;
         this.SlotState = window.SlotState.eStoped;
         this.addItem();

         this.curIndex = 1;//当前index
         this.StartSpin = false;//是否在spin
         this.stopIndex = null; //停止的index；
         this.HaveCompelete = true;//是否完成了一次spin

         
         this.schedule(this.update1, 1/60);
        //  this.randPos()

    },

    randItemPic()//随机item上面的图片
    {
        // cc.log("randItemPic---")
        var self = this
        let name = iconTexture[this.stopIndex];
        let path = "slots/" + name
        cc.resources.load(path, function (err, sp) {

            if (err) {
                cc.log("err==", err)
                return
            }
            if (sp) {

                self.ItemArray[self.stopIndex].getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(sp)
            }
        })


        var child = this.node.children;
        for (var start = 0; start < child.length; start++) {
            if (start!= this.stopIndex )//不等于停止点 随机图片
            {
                let target = child[start];
                // target.y = target.y+Math.abs(index-this.curIndex)*this.item.height
                let index = Math.floor(Math.random() * iconTexture.length)
                let name = iconTexture[index];
                let path = "slots/" + name
                // cc.log(path)
                cc.resources.load(path, function (err, sp) {
                    if (err) {
                        cc.log("err==", err)
                        return
                    }
                    if (sp) {
                        // cc.log(sprite)
                        target.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(sp)
                    }
                })

            }
           
        } 
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
            
            // cc.log(" this.height==", this.node.height,item.x,item.y);
            var text = item.getChildByName("text");  
            
            text.getComponent(cc.Label).string =i;

            let sprite = item.getComponent(cc.Sprite);
            if(sprite)
            {

                var index = Math.floor(Math.random() * (iconTexture.length ));//random texture
                var name = iconTexture[index];
                var path =  "slots/"+name
                cc.resources.load(path,function(err,sp){

                    if(err)
                    {
                        cc.log("err==",err)
                        return 
                    }
                    
                    if (sp) {
                        // cc.log(sprite)
                        sprite.spriteFrame = new cc.SpriteFrame(sp)
                    }

                })
        
            }
            this.ItemArray.push(item);

        }

        this.item.height = this.ItemArray[0].height;

      
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

            if(deltaY>0)//top
            {

                var posy = this.node.height/2+target.height/2;
                // cc.log(target)
                if(target.y>=posy)// 超出了最上面
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
            else{//down 

                var posy = -this.node.height/2-target.height/2;
                if(target.y<=posy)// large top
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
                     if(target.y<=posy)//top)
                     {
                        
                        target.y = target.y+(child.length*this.item.height+child.length*this.space);
                        // cc.log(">=--",start,"大于",posy);
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

    },


    updateSlotsToDown(dt){//往下滚动

         var timedeal = dt//1/60;
        // cc.log("updateSlots",this.SpeedY,  this.SlotState);
        if(this.SlotState == window.SlotState.eSpeedUp)//加速
        {
          
            if(this.SpeedY>-Max_Speed)
            {
                this.SpeedY+= this.Acceleration*timedeal;
                if(this.SpeedY<=-Max_Speed)
                {
                   
                    this.SpeedY = -Max_Speed;

                    // cc.log("达到最高速度",this.SpeedY);
                    this.randItemPic()
                    this.SlotState =window.SlotState.eWaitSpeedDown;
                }
                // cc.log("updateSlots  eSpeedUp",this.delta.y);
            }
            else{
                this.SpeedY = -Max_Speed;
                // cc.log("达到最高速度",this.SpeedY);
                this.randItemPic()
                this.SlotState =window.SlotState.eWaitSpeedDown;
            }
        }

        if(this.SlotState == window.SlotState.eWaitSpeedDown)//等待减速
        {

            if(this.stopIndex==this.curIndex)//停止的位置和当前的一样
            {

                this.resetPosY();//位置矫正
                this.SlotState = window.SlotState.eSpeedDown;
                var S = Slot_StopTime*this.ItemArray.length*this.space+Slot_StopTime*this.ItemArray.length*this.item.height+Max_Speed/2+Slot_BackDistance;//vt*vt-vo*vo = 2as来算加速度
                this.Acceleration = this.SpeedY * this.SpeedY/ (2 * S); 
                
                
                // this.Acceleration = -this.Acceleration;
                
                // cc.log("等待减速 curIndex=%s this.delta.y=%s this.Acceleration=%s",this.curIndex,this.SpeedY, this.Acceleration);
                return;
                
            }
           
        }

        if(this.SlotState == window.SlotState.eSpeedDown)//减速
        {

            // cc.log("减速---",this.delta.y, this.Acceleration);
            if(this.SpeedY<0)
            {
                this.SpeedY+= this.Acceleration;
                if( this.SpeedY>=0)
                {
                    this.SpeedY = 0;
                    this.SlotState =window.SlotState.eStoped;
                    // this.SpeedY = 20;
                }
            }
            else{
                this.SpeedY = 0;
                this.SlotState =window.SlotState.eStoped;
                // this.SpeedY = 50;
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
    updateSlotsToTop(dt)//往上滚动
    {

        var timedeal =dt;
        // cc.log("updateSlots",this.delta.y,  this.SlotState);
        if(this.SlotState == window.SlotState.eSpeedUp)//加速
        {
          
            if(this.SpeedY<Max_Speed)//当前速度小于最大值，递增
            {
                this.SpeedY+= this.Acceleration*timedeal;
                if(this.SpeedY>=Max_Speed)
                {
                   
                    this.SpeedY = Max_Speed;
                    this.randItemPic()
                    // cc.log("达到最高速度",this.SpeedY);
                    this.SlotState =window.SlotState.eWaitSpeedDown;
                }
                // cc.log("updateSlots  eSpeedUp",this.delta.y);
            }
            else{
                this.SpeedY = Max_Speed;
                // cc.log("达到最高速度",this.SpeedY);
                this.randItemPic()
                this.SlotState =window.SlotState.eWaitSpeedDown;
            }
        }

        if(this.SlotState == window.SlotState.eWaitSpeedDown)//等待减速
        {

            if(this.stopIndex==this.curIndex)//停止的位置和当前的一样
            {

                this.resetPosY();//位置矫正
                this.SlotState =window.SlotState.eSpeedDown;
                var S = Slot_StopTime*this.ItemArray.length*this.space+Slot_StopTime*this.ItemArray.length*this.item.height+Max_Speed/2+Slot_BackDistance;//vt*vt-vo*vo = 2as来算加速度
                this.Acceleration = -this.SpeedY * this.SpeedY/ (2 * S); 
                // this.Acceleration = -this.Acceleration;
                
                // cc.log("等待减速 curIndex=%s this.delta.y=%s this.Acceleration=%s",this.curIndex,this.SpeedY, this.Acceleration);
                return;
                
            }
           
        }

        if(this.SlotState == window.SlotState.eSpeedDown)//减速
        {

            // cc.log("减速---",this.delta.y, this.Acceleration);
            if(this.SpeedY>0)//递减
            {
                this.SpeedY+= this.Acceleration;
                if( this.SpeedY<=0)
                {
                    this.SpeedY = 0;
                    this.SlotState =window.SlotState.eStoped;
                    // this.SpeedY = 20;
                }
            }
            else{
                this.SpeedY = 0;
                this.SlotState =window.SlotState.eStoped;
                // this.SpeedY = 50;
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
                // cc.log("haha==posy",haha.name,haha.y);
            }
        }


    },
    Spin()//开始spin
    {
        
        this.SpeedY = 0;
        this.Acceleration= Max_Speed/SLOT_SPEED_UP_TIME;

        if(this.movedirection==1)//往下
        {
            this.Acceleration = -this.Acceleration;
        }
        this.SlotState = window.SlotState.eSpeedUp;

        // this.stopIndex = 5;

        this.StartSpin = true;//开始了spin

        this.HaveCompelete = false;

    },
    setStopIndex(index){
        this.stopIndex = index

    },
    StopAtIndex(index,stopcall){//在哪个index停止
        console.log("将会停在==",index)
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
        if(!this.StartSpin)
        {
            // cc.log("stop update");
            return;

        }

        if(this.movedirection==0)//往上移动
        {
            this.updateSlotsToTop(dt);
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
