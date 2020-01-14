const Buffer = require('buffer').Buffer;
// 一些辅助函数
var Global = {

    sayHello: function () {

        console.log("Global sayehello")
    },

    // schdule
    gSchduleFun: function (component, call, interval,repeat,delay) {
        if(repeat==undefined)
        {
            repeat =   cc.macro.REPEAT_FOREVER
        }
        if(delay==undefined)
        {
            delay = 0
        }
        cc.director.getScheduler().schedule(call,component,interval, repeat, delay,false)
    
    },
    //schduleonece
    gSchduleOnce:function(component,call,time){

        component.scheduleOnce(function() {
            call();
        }, time);
    },
    //unschdule
    gUnSchduleFun:function(component,call)
    {
        cc.director.getScheduler().unschedule(call,component);
    },

    //preloadscene
    gPreloadScene:function(sceneName,progressCall,endCall)
    {
        cc.director.preloadScene(sceneName, function (completedCount, totalCount, item) { 
            var progress = Math.floor(((completedCount/totalCount).toFixed(2))*100)
            if (progressCall)
            {
                progressCall(progress)
            }
        }, function (error, asset) { 
            if (endCall)
            {
                endCall(sceneName,error)
            }
        })
    },
    //str ->base64字符
    gStringToBase64:function(str){

        return new Buffer(str).toString("base64");
    },
    //base64 ->str
    gBase64ToString:function(str){

        return new Buffer(str,"base64").toString();//base64解密
    }
}



module.exports = Global;