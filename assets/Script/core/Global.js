
// 一些辅助函数 没有用插件 是因为用了插件 不能用require
var Global = {

    sayHello: function () {

        console.log("Global sayehello")
    },

    // schdule
    gSchduleFun: function (component, call, interval, repeat, delay) {
        if (repeat == undefined) {
            repeat = cc.macro.REPEAT_FOREVER
        }
        if (delay == undefined) {
            delay = 0
        }
        cc.director.getScheduler().schedule(call, component, interval, repeat, delay, false)

    },
    //schduleonece
    gSchduleOnce: function (component, call, time) {

        component.scheduleOnce( ()=> {
            call();
        }, time);
    },
    //unschdule
    gUnSchduleFun: function (component, call) {
        cc.director.getScheduler().unschedule(call, component);
    },

    //preloadscene
    gPreloadScene: function (sceneName, progressCall, endCall) {
        cc.director.preloadScene(sceneName, function (completedCount, totalCount, item) {
            var progress = Math.floor(((completedCount / totalCount).toFixed(2)) * 100)
            if (progressCall) {
                progressCall(progress)
            }
        }, function (error, asset) {
            if (endCall) {
                endCall(sceneName, error)
            }
        })
    },
    // 数组是否包含
    GIsArrContain: function (arr, n) {
        for (var i in arr) {
            var value = arr[i]
            // cc.log(value,typeof(value),n,typeof(n))
            if (value == n || value == toString(n)) {
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
    GwriteStringToFile: function (str, path) {
        if (cc.sys.isNative) {
            jsb.fileUtils.writeStringToFile(str, path);
        }
    },
    // 写文件数据
    GwriteDataToFile: function (data, path) {
        if (cc.sys.isNative) {
            jsb.fileUtils.writeDataToFile(new Uint8Array(data), path);
        }
    },

    //创建目录
    GcreateDir: function (path) {
        if (cc.sys.isNative) {
            if (!jsb.fileUtils.isDirectoryExist(path)) {
                jsb.fileUtils.createDirectory(path);
            }

        }
    },
    //    url转成目录
    GgetDirByUrl: function (url) {
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
    //获取url最后的文件名
    GgetFileNameByUrl: function (url) {
        var arr = url.split("/")

        return arr[arr.length - 1]
    },
    //load图片  web直接load  原生先缓存在本地
    GloadPic: function (url, call) {
        var self = this
        if (cc.sys.isNative) //原生先下载
        {
            var picPath = jsb.fileUtils.getWritablePath() + "PicTemp/"
            this.GcreateDir(picPath)
            var filename = this.GgetFileNameByUrl(url)
            var localpath = picPath + filename
            if (jsb.fileUtils.isFileExist(localpath))//存在
            {

                self.loadTexture(localpath, function (tex) {

                    if (call) {
                        call(tex)
                    }
                })
            }
            else {//不存在

                self.GDownFile(url, function (data) {
                    self.GwriteDataToFile(data, localpath)
                    self.loadTexture(localpath, function (tex) {

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
    loadTexture: function (url, call) {



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
    GDownFile: function (url, call) {
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
    //字符串 *num
    StrTime: function (str, num) {
        var s = ""
        for (var i = 0; i < num; i++) {
            s = s + str
        }
        return s
    },

    //获取node世界坐标
    ConverToWorldPos: function (node) {

        var worldpos = node.parent.convertToWorldSpaceAR(node.getPosition())
        return worldpos

    },
    //把一个世界坐标转换成这个节点下的坐标
    ConverToNodePos: function (node, worldpos) {
        var pos = node.convertToNodeSpaceAR(worldpos)
        return pos

    },

    ShowAlert: function (str, btninfo, call) {

        ua.loadPrefabRes("prefabs/AlertLayer2", function (_node) {
            if (_node) {
                cc.director.getScene().getChildByName('Canvas').addChild(_node)
                var AlertIII = _node.getComponent("AlertIII")
                if (AlertIII) {
                    AlertIII.showAlert(str, btninfo, function (index) {
                        if (call) {
                            call(index)
                        }
                    })
                }
            }
        })
    },

    ShowTextInput: function (call) {
        ua.loadPrefabRes("prefabs/textinput", function (_node) {
            if (_node) {
                cc.director.getScene().getChildByName('Canvas').addChild(_node)
                var textinput = _node.getComponent("textinput")
                if (textinput) {
                    textinput.show(call)
                }
            }
        })

    },
    ShowChooseUpdate: function (data, call) {
        ua.loadPrefabRes("prefabs/selectupdate", function (_node) {
            if (_node) {
                cc.director.getScene().getChildByName('Canvas').addChild(_node)
                var chooseupdate = _node.getComponent("chooseupdate")
                if (chooseupdate) {
                    chooseupdate.initData(data, call)
                }
            }
        })

    },
    GgetTwoV2Angle: function (vA, vB) {//获得2点的夹角vA起点，vB终点

        var dx = vB.x - vA.x;
        var dy = vB.y - vA.y;
        var dir = cc.v2(dx, dy);
        var angle = dir.signAngle(cc.v2(0, 1))//弧度
        // var degree = angle / Math.PI * 180;
        var degree = cc.misc.radiansToDegrees(angle)//转成角度
        return degree
    },
    //判断是不是正确的json
    isjson: function (str) {
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
    gLoadBUndle: function (url, option, complete) {
        cc.assetManager.loadBundle(url, option, function (err, bundle) {
            if (complete) {
                complete(err, bundle)
            }
        })
    },
    //重启
    gReBoot: function () {

        cc.game.restart()
    },
    Ghotupdateurl: "xxx", // 热更新地址
    GgameType: 3  // 1正式包 3debug 

}

// 根据不同包指定不同的热更新地址
if (Global.GgameType == 1)//正式包
{
    Global.Ghotupdateurl = "http://192.168.0.102/hotupversion/configrelease"
    Global.isDebugTest = false
}
if (Global.GgameType == 3)//debug包
{
    Global.Ghotupdateurl = "http://192.168.0.102/hotupversion/configdebug"
    Global.isDebugTest = true
}

module.exports = Global;
