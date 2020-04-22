
var Global = require("Global")
//弹出层 按键事件管理 目前针对于安卓返回键关闭一些弹出层
var KeypadDispatch = cc.Class({
    properties: {
       ComArr:{
            default:[],
            type:[cc.Component]
       }
    },

    ctor: function () {
        
        this.addEventListener()
    },

    add(com)
    {   
        
        this.ComArr.push(com)
      
       
    },
    remove()
    {
        var com =  this.ComArr.pop()
        if (com)
        {
            if(com.onbackpress)
            {
                com.onbackpress()
            }
        }
        else
        {
            Global.ShowAlert("确定要退出?", ["yes", "no"], function (index) {
                if(index==1){
                    cc.game.end()
                }
            })

        }
        
    },
    addEventListener(){
        
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    },
 

    onKeyUp: function (event) {
        // console.log('onKeyUp--', event.keyCode);
        switch (event.keyCode) {
            case cc.macro.KEY.a:
                console.log('release a key');
                this.remove()
                break;
            case cc.macro.KEY.back:
                console.log('release back-key');
                this.remove()
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
