// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html


var SayHello = {}

SayHello.Say = function(){

    console.log("SayHello=====")
}

window.SayHello = SayHello

// bundle下面的代码只能用window 或者Component
