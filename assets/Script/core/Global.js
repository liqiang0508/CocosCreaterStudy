
// 一些辅助函数 没有用插件 是因为用了插件 不能用require
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
    // 数组是否包含
    GIsArrContain:function (arr, n) {
       for (var i in arr)
       {
            var value = arr[i]
            // cc.log(value,typeof(value),n,typeof(n))
            if (value == n || value == toString(n))
            {
                return true
            }
       }
       return false
    },
    // 获取文件数据
    GgetDataFromFile: function (path) {
        if (cc.sys.isNative) {
            var data = jsb.fileUtils.getDataFromFile(path)
            return data
        }
        return null
    },
    // 写文件  字符串
    GwriteStringToFile:function (str, path) {
        if (cc.sys.isNative) {
            jsb.fileUtils.writeStringToFile(str, path);
        }
    },
    // 写文件数据
    GwriteDataToFile : function (data, path) {
        if (cc.sys.isNative) {
            jsb.fileUtils.writeDataToFile(new Uint8Array(data), path);
        }
    },

    //创建目录
    GcreateDir:function (path) {
        if (cc.sys.isNative) {
            jsb.fileUtils.createDirectory(path);
        }
    },
//    url转成目录
    GgetDirByUrl:function (url) {
        var arr = url.split("/")
        // console.log("GgetDirByUrl==",arr)
        var path = ""
        if (arr.length > 1) {
            for (var i = 0; i < arr.length - 1; i++) {
                var tempdir = arr[i]
                if (i == 0) {
                    path = tempdir

                }
                else {
                    path = path + "/" + tempdir
                }
            }

        }
        else {
            path = arr[0]
        }
        path = path + "/"
        return path
    },

    //下载文件
    GDownFile:function (url, call) {
        if (cc.sys.isNative) {

            var xhr = new XMLHttpRequest();
            xhr.responseType = 'arraybuffer';
            xhr.open("GET", url, true);
            // Special event
            xhr.onreadystatechange = function () {

                if (xhr.readyState === 4 && xhr.status >= 200) {

                    var data = xhr.response
                    call(data);

                }
                else {
                    call(null);

                }
            }
            xhr.send();
        }

    },
   
    Ghotupdateurl:"http://192.168.65.172/hotupversion/configrelease", // 热更新地址
    GgameType:1  // 1正式包 3debug

}


if(Global.GgameType==1)//正式包
{
    Global.Ghotupdateurl = "http://192.168.65.172/hotupversion/configrelease"
}
if(Global.GgameType==3)//debug包
{
    Global.Ghotupdateurl = "http://192.168.65.172/hotupversion/configdebug"
}
module.exports = Global;