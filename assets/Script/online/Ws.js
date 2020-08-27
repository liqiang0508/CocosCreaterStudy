/*
 * @Descripttion: 
 * @version: 
 * @Author: Lee
 * @Date: 2020-08-26 13:57:33
 * @LastEditTime: 2020-08-26 14:24:24
 */
// ws基础类
cc.Class({
    connect(ip, port) {

        this._wsiSendBinary = new WebSocket("ws://" + ip + ":" + port + "//");
        this._wsiSendBinary.binaryType = "arraybuffer";

    },

    setOpenCall(call) {

        if (this._wsiSendBinary) {
            this._wsiSendBinary.onopen = function (evt) {
                if (call) {
                    call()
                }
            };
        }

    },

    setOnMessageCall(call) {

        if (this._wsiSendBinary) {
            this._wsiSendBinary.onmessage = function (evt) {
                if (call) {
                    call(evt)
                }
            };
        }

    },

    setOnErrorCall(call) {

        if (this._wsiSendBinary) {
            this._wsiSendBinary.onerror = function (evt) {
                if (call) {
                    call(evt)
                }
            };
        }

    },

    setOnCloseCall(call) {

        if (this._wsiSendBinary) {
            this._wsiSendBinary.onclose = function (evt) {
                if (call) {
                    call(evt)
                }
            };
        }

    },

    send(data) {
        if (this._wsiSendBinary && this._wsiSendBinary.readyState === WebSocket.OPEN) {

            this._wsiSendBinary.send(data)
        } else {
            cc.log("WS 断开连接")
        }
    }


})


