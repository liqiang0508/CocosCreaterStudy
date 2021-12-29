var http = {};

http.quest = function (option, callback) {
    var url = option.url;
    var method = option.method;
    var data = option.data;
    var timeout = option.timeout || 0;

    var xhr = new XMLHttpRequest();
    (timeout > 0) && (xhr.timeout = timeout);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status >= 200 && xhr.status < 400) {
            var result = xhr.responseText;
            try {result = JSON.parse(xhr.responseText);} catch (e) {}
                callback && callback(null, result);
            } else {
                callback && callback('status: ' + xhr.status);
            }
        }
    }.bind(this);
    xhr.open(method, url, true);
    if(typeof data === 'object'){
        try{
            data = JSON.stringify(data);
        }catch(e){}
    }
    xhr.send(data);
    xhr.ontimeout = function () {
        callback && callback('timeout');
        console.log('连接超时');
    };
};

http.get = function (url, callback) {
    var option = url.url ? url : { url: url };
    option.method = 'get';
    this.quest(option, callback);
};

http.post = function (url, callback) {
    var option = url.url ? url : { url: url };
    option.method = 'post';
    this.quest(option, callback);
};

http.postData = function (url, callback, base64) {
    let data = [];
    var xhr = new XMLHttpRequest();
    let obj = {};
    obj.userid = gg.userData.userId;
    obj.data = base64;
    let strHead = JSON.stringify(obj);
    for (var i = 0; i < strHead.length; i++) {
        data.push(strHead.charCodeAt(i));
    }
    var buffer = new Uint8Array(data);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status >= 200 && xhr.status < 400) {
            var result = xhr.responseText;
            try {result = JSON.parse(xhr.responseText);} catch (e) {}
                callback && callback(null, result);
            } else {
                callback && callback('status: ' + xhr.status);
            }
        }
    }.bind(this);
    xhr.open('post', url, true);
    xhr.send(buffer);
    xhr.ontimeout = function () {
        callback && callback('timeout');
        console.log('连接超时');
    };
}

http.uploadFile = function (url, callback, filepath) {
    var data = jsb.fileUtils.getDataFromFile(filepath);
    var xhr = new XMLHttpRequest()//.getXMLHttpRequest();
    xhr.open('POST', url);
    xhr.setRequestHeader('Content-Type', 'application/octet-stream');
    xhr.send(data);
    
    xhr.onreadystatechange = function () {  
        if (xhr.readyState == 4) {  
            if (xhr.status == 200) {  
                var result = xhr.responseText;
                try {
                    result = JSON.parse(xhr.responseText);
                } catch (e) {
                    result = xhr.responseText;
                }
                callback && callback(null, result);
            } else {
                callback && callback('status: ' + xhr.status);
            }
        }  
    }
},

module.exports = http;