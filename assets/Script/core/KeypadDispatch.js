/*
 * @Descripttion: 
 * @version: 
 * @Author: Lee
 * @Date: 2020-04-22 15:50:04
 * @LastEditTime: 2020-08-07 11:03:03
 */

// var Global = require("Global")
//弹出层 按键事件管理 目前针对于安卓返回键关闭一些弹出层
var KeypadDispatch = cc.Class({
    properties: {
       Stacks:{
            default:[],
            type:[cc.Component]
       }
    },

    ctor: function () {
        
        this.addEventListener()
    },

    add(com)//记录下当前打开的弹出层
    {   
        this.Stacks.push(com)
        // cc.log("KeypadDispatch  add==", this.ComArr.length) 
    },
    remove()//关闭界面自动移除最上面的弹出层
    {
        this.Stacks.pop()
        // cc.log("KeypadDispatch  remove==", this.ComArr.length)
    },

    onbackkeyup(){//按了返回键 ，默认关闭最上层弹出层。 子类如果有其他额外操作，继承重写方法即可

        if( this.Stacks.length ==1)//根布局 提示退出游戏
        {
            Global.ShowAlert("exit game?", ["yes", "no"], function (index) {
                if(index==1){
                    cc.game.end()
                }
            })
            return
        }

        var com =  this.Stacks[this.Stacks.length-1]//弹出层调用自己的onbackpress
        if (com)
        {
          
            if(com.onbackpress)
            {
                com.onbackpress()
            }
        }
        // else
        // {
        //     Global.ShowAlert("exit game?", ["yes", "no"], function (index) {
        //         if(index==1){
        //             cc.game.end()
        //         }
        //     })
        // }


    },
    addEventListener(){
        
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    },
 

    onKeyUp: function (event) {
  
        switch (event.keyCode) {
            case cc.macro.KEY.a:
                this.onbackkeyup()//test
                break;
            case cc.macro.KEY.back:
                this.onbackkeyup()
                break;

        }
    },

    onDestroy()
    {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    }

    

});

KeypadDispatch._instance = null;

KeypadDispatch.getInstance = function(){
    if(!KeypadDispatch._instance)
    {
        KeypadDispatch._instance = new KeypadDispatch()
    }
    return KeypadDispatch._instance;
}

module.exports = KeypadDispatch;
