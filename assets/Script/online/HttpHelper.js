
var HttpHelper = {

    sendHttpRequest: function (url, callFunc) {
        // console.log("sendHttpRequest-------")
        var xhr = new XMLHttpRequest()//cc.loader.getXMLHttpRequest();
        xhr.onreadystatechange = function () {

            if (xhr.readyState == 4 && (xhr.status >= 200 && xhr.status < 300)) {
                if (callFunc)
                    callFunc(xhr.responseText);
            }
        }
        xhr.onerror = function (err) {
            cc.log(" xhr.onerror*******");
            callFunc(null)
        };
        xhr.ontimeout = function () {

            cc.log(" xhr.ontimeout*******");
            callFunc(null)
        };
        xhr.onabort = function () {
            cc.log(" xhr.onabort*******");
            callFunc(null)
        }
        xhr.open("GET", url, true);

        if (cc.sys.isNative) {
            xhr.setRequestHeader("Accept-Encoding", "gzip, deflate");
        }
        // xhr.timeout = 1000;

        xhr.send();
    },


    sendHttpPost: function (url, data, callFunc) {

        var xhr = new XMLHttpRequest()//cc.loader.getXMLHttpRequest();
        xhr.onreadystatechange = function () {

            if (xhr.readyState == 4 && (xhr.status >= 200 && xhr.status < 300)) {
                if (callFunc)
                    callFunc(xhr.responseText);
            }
        }

        xhr.open("POST", url);

        if (cc.sys.isNative) {
            xhr.setRequestHeader("Accept-Encoding", "gzip, deflate");
        }
        xhr.timeout = 5000;
        xhr.setRequestHeader("Content-Type", "application/json");
        // Uint8Array is an ArrayBufferView
        var _data = JSON.stringify(data)
        console.log("_data", _data)
        xhr.send(_data);
    }

}
module.exports = HttpHelper;