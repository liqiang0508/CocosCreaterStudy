/*
 * @Descripttion: 
 * @version: 
 * @Author: liqiang
 * @email: 497232807@qq.com
 * @Date: 2021-12-31 19:13:05
 * @LastEditTime: 2022-01-16 20:21:31
 */

var keypadManager = {
    mStack: [],
    init() {

        this.addEventListener()
    },
    add(com: cc.Component)//记录下当前打开的弹出层
    {
        this.mStack.push(com)

    },
    remove(com: cc.Component)//关闭界面自动移除最上面的弹出层
    {
        // this.mStack.pop()
        this.mStack = this.mStack.filter(item => item._id !== com._id);
    },

    onbackkeyup() {//按了返回键 ，默认关闭最上层弹出层。 子类如果有其他额外操作，继承重写方法即可
        var com = this.mStack[this.mStack.length - 1]//弹出层调用自己的onbackpress
        if (com) {

            if (com.onbackpress) {
                com.onbackpress()
            }
        }
    },
    addEventListener() {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    },

    onKeyEvent(keyCode) {
        var com = this.mStack[this.mStack.length - 1]
        if (com) {
            if (com.onKeyEvent) {
                com.onKeyEvent(keyCode)
            }
        }
    },
    onKeyUp: function (event) {
        switch (event.keyCode) {
            case cc.macro.KEY.a:
                this.onbackkeyup()//test
                break;
            case cc.macro.KEY.back:
                this.onbackkeyup()
                break;
            default:
                this.onKeyEvent(event.keyCode)

        }
    },

    onDestroy() {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    }

}


keypadManager.init()
globalThis.keypadManager = keypadManager