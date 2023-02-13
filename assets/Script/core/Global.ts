
// Global 函数
var Global = {
    sayHello: function () {

        console.log("Global sayehello")
    },

    // schdule
    schduleFun: function (component: cc.Component, call: Function, interval: number, repeat: number, delay: number) {
        if (repeat == undefined) {
            repeat = cc.macro.REPEAT_FOREVER
        }
        if (delay == undefined) {
            delay = 0
        }
        cc.director.getScheduler().schedule(call, component, interval, repeat, delay, false)

    },
    //schduleonece
    schduleOnce: function (component: cc.Component, call: Function, time: number) {

        component.scheduleOnce(() => {
            call();
        }, time);
    },
    //unschdule
    unSchduleFun: function (component: cc.Component, call: Function) {
        cc.director.getScheduler().unschedule(call, component);
    },


    // 数组是否包含
    isArrContain: function (arr: [], n: string) {
        for (var i in arr) {
            var value = arr[i]
            // cc.log(value,typeof(value),n,typeof(n))
            if (value == n) {
                return true
            }
        }
        return false
    },
    // 获取文件数据
    getDataFromFile: function (path: string) {
        if (cc.sys.isNative) {
            // @ts-ignore
            var data = jsb.fileUtils.getDataFromFile(path)
            return data
        }
        return null
    },
    // 写文件  字符串
    writeStringToFile: function (str: string, path: string) {
        if (cc.sys.isNative) {
            jsb.fileUtils.writeStringToFile(str, path);
        }
    },
    // 写文件数据
    writeDataToFile: function (data, path: string) {
        if (cc.sys.isNative) {
            // @ts-ignore
            jsb.fileUtils.writeDataToFile(new Uint8Array(data), path);
        }
    },

    //创建目录
    createDir: function (path: string) {
        if (cc.sys.isNative) {
            if (!jsb.fileUtils.isDirectoryExist(path)) {
                jsb.fileUtils.createDirectory(path);
            }

        }
    },
    //    url转成目录
    getDirByUrl: function (url: string) {
        var arr = url.split("/")
        // console.log("getDirByUrl==",arr)
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
    //保留小数几位
    numberToFix(n: number, num: number) {
        var t = Math.pow(10, num)
        return Math.floor(n * t) / t
    },
    //获取url最后的文件名
    getFileNameByUrl: function (url: string) {
        var arr = url.split("/")

        return arr[arr.length - 1]
    },
    //load图片  web直接load  原生先缓存在本地
    loadPic: function (url: string, call: Function) {

        if (cc.sys.isNative) //原生先下载
        {
            var picPath = jsb.fileUtils.getWritablePath() + "PicTemp/"
            this.createDir(picPath)
            var filename = this.getFileNameByUrl(url)
            var localpath = picPath + filename
            if (jsb.fileUtils.isFileExist(localpath))//存在
            {

                this.loadTexture(localpath, function (tex) {
                    if (call) {
                        call(tex)
                    }
                })
            }
            else {//不存在
                this.downFile(url, (data) => {
                    this.writeDataToFile(data, localpath)
                    this.loadTexture(localpath, function (tex) {

                        if (call) {
                            call(tex)
                        }
                    })
                })
            }
        }
        else //web 直接load
        {
            cc.assetManager.loadRemote(url, { ext: '.png' }, function (error, texture) {
                if (error) {
                    if (call) {
                        call(null)
                    }
                    return
                }
                else {
                    call(texture)
                }

            })
        }

    },

    //下载pic
    loadTexture: function (url: string, call: Function) {
        cc.assetManager.loadRemote(url, { ext: '.png' }, function (error, texture) {
            if (error) {
                if (call) {
                    call(null)
                }
                return
            }
            else {
                call(texture)
            }

        })

    },
    //下载文件
    downFile: function (url: string, call: Function) {
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
            xhr.onerror = function (err) {
                call(null)
            };
            xhr.ontimeout = function () {


                call(null)
            };

            xhr.open("GET", url, true);
            xhr.timeout = 5000;
            xhr.send();

        }

    },
    //字符串 *num
    strTime: function (str: string, num: number) {
        var s = ""
        for (var i = 0; i < num; i++) {
            s = s + str
        }
        return s
    },

    //获取node世界坐标
    converToWorldPos: function (node: cc.Node) {

        var worldpos = node.parent.convertToWorldSpaceAR(node.getPosition())
        return worldpos

    },
    //把一个世界坐标转换成这个节点下的坐标
    converToNodePos: function (node: cc.Node, worldpos: cc.Vec2) {
        var pos = node.convertToNodeSpaceAR(worldpos)
        return pos

    },


    getTwoV2Angle: function (vA: cc.Vec2, vB: cc.Vec2) {//获得2点的夹角vA起点，vB终点

        var dx = vB.x - vA.x;
        var dy = vB.y - vA.y;
        var dir = cc.v2(dx, dy);
        var angle = dir.signAngle(cc.v2(0, 1))//弧度
        // var degree = angle / Math.PI * 180;
        var degree = cc.misc.radiansToDegrees(angle)//转成角度
        return degree
    },
    //判断是不是正确的json
    isjson: function (str: string) {
        if (typeof str == 'string') {
            try {
                JSON.parse(str);
                return true;
            } catch (e) {
                console.log(e);
                return false;
            }
        }
    },
    //加载bundle
    loadBundle: function (url: string, option: Record<string, any>, complete: Function) {
        cc.assetManager.loadBundle(url, option, (err, bundle) => {
            if (complete) {
                complete(err, bundle)
            }
        })
    },
    //释放bundle
    releaseBundle: function (bundleName: string) {

        let bundle = this.getBundle(bundleName)
        if (bundle) {
            bundle.releaseAll();
            cc.assetManager.removeBundle(bundle);//释放bundle
        }

    },
    //获取已加载了的bundle
    getBundle: function (bundlename: string) {
        var bundle = cc.assetManager.getBundle(bundlename);
        return bundle
    },

    //重启
    reBoot: function () {

        cc.game.restart()
    },
    //退出游戏
    exitGame: function () {
        if (cc.sys.isNative) {
            cc.game.end()
        }
    },
    //深拷贝
    deepClone(obj, newObj) {
        var newObj = newObj || {};
        for (let key in obj) {
            if (typeof obj[key] == 'object') {
                newObj[key] = (obj[key].constructor === Array) ? [] : {}
                this.deepClone(obj[key], newObj[key]);
            } else {
                newObj[key] = obj[key]
            }
        }
        return newObj;
    },
    Ghotupdateurl: "请配置热更新地址", // 热更新地址

}



// 平台判断-------------------------------------
globalThis.Global = Global
import WeChatModule = require("./../../Script/wechat/WeChatModule.js")
import Devices = require("./../../Script/platform/Devices/Devices.js")
var gg = {
    isAndroid: function () {
        return cc.sys.isNative && cc.sys.os == cc.sys.OS_ANDROID
    },
    isIOS: function () {
        return cc.sys.isNative && cc.sys.os == cc.sys.OS_IOS
    },
    isWindows: function () {
        return cc.sys.os == cc.sys.OS_WINDOWS
    },
    isBrowser: function () {
        return cc.sys.isBrowser
    },
    wechat: null
};

globalThis.gg = gg
gg.wechat = new WeChatModule()
// 平台判断-------------------------------------

// 渠道定义------------------------
var chanel = {
    WIN32: 0,
    IOS_APPSTORE: 1,
    H5: 2,
    ANDROID_GOOGLE_PLAY: 3,
    LOCAL_ANDROID: 4,

}
var serverInfo = {
    [chanel.WIN32]: { server: "", hotUrl: "http://192.168.0.106/hotupversion/configdebug" },
    [chanel.IOS_APPSTORE]: { server: "", hotUrl: "http://192.168.0.106/hotupversion/configdebug" },
    [chanel.H5]: { server: "", hotUrl: "http://192.168.0.106/hotupversion/configdebug" },
    [chanel.ANDROID_GOOGLE_PLAY]: { server: "", hotUrl: "http://192.168.0.106/hotupversion/configrelease" },
    [chanel.LOCAL_ANDROID]: { server: "", hotUrl: "http://192.168.0.106/hotupversion/configdebug" },
}
globalThis.chanel = chanel
// 分发的渠道
globalThis.DISTRIBUTE_CHANNEL = 0

if (gg.isBrowser())//h5
{
    globalThis.DISTRIBUTE_CHANNEL = chanel.H5;

}
else if (gg.isAndroid())//android
{
    globalThis.DISTRIBUTE_CHANNEL = Devices.getAppChanel()
    console.log("globalThis.DISTRIBUTE_CHANNEL1" + globalThis.DISTRIBUTE_CHANNEL)
    Global.Ghotupdateurl = serverInfo[globalThis.DISTRIBUTE_CHANNEL].hotUrl
}
else if (gg.isIOS())//ios
{
    globalThis.DISTRIBUTE_CHANNEL = chanel.IOS_APPSTORE;
    Global.Ghotupdateurl = serverInfo[globalThis.DISTRIBUTE_CHANNEL].hotUrl
    console.log("globalThis.DISTRIBUTE_CHANNEL2" + globalThis.DISTRIBUTE_CHANNEL)
}
else //其他的都是算模拟器
{
    globalThis.DISTRIBUTE_CHANNEL = chanel.WIN32;
    Global.Ghotupdateurl = serverInfo[globalThis.DISTRIBUTE_CHANNEL].hotUrl
    console.log("globalThis.DISTRIBUTE_CHANNEL3" + globalThis.DISTRIBUTE_CHANNEL)
}
// 渠道定义------------------------











