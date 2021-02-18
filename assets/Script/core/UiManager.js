
//一些ui常见操作
var SubGameManager = require("SubGameManager")

var UiManager = {}
//显示loadinglayer进度
UiManager.gShowLoading = function (todoCall, endcall) {

    this.gLoadPrefabRes("prefabs/loadinglayer", (_node) => {
        if (_node) {
            this.gSceneAddNode(_node)
            var LoadingLayer = _node.getComponent("LoadingLayer")
            if (LoadingLayer) {
                LoadingLayer.setCallFun(todoCall, endcall)
            }
        }
    })

}

//显示浮动文字
UiManager.ShowFlotText = function (text, parent = null, pos = cc.v2(0, 0)) {

    this.gLoadPrefabRes("prefabs/FloatText", (_node) => {
        if (_node) {

            _node.getComponent(cc.Label).string = text

            if (parent) {
                parent.addChild(_node)
            }
            else {
                this.gSceneAddNode(_node)
            }

            _node.setPosition(pos)

            cc.tween(_node)
                .parallel(
                    cc.tween().by(1, { position: cc.v2(0, 150) }),
                    cc.tween().to(1, { opacity: 0 })
                ).start()
        }
    })

}

//当前场景添加节点
UiManager.gSceneAddNode = function (node) {

    cc.director.getScene().getChildByName('Canvas').addChild(node)
}
//loadscene
UiManager.gLoadScene = function (sceneName, onLaunchCall = null) {
    cc.director.loadScene(sceneName, onLaunchCall)
}

//preloadscene
UiManager.gPreloadScene = function (sceneName, progressCall, endCall) {
    cc.director.preloadScene(sceneName, (completedCount, totalCount, item) => {
        var progress = Math.floor(((completedCount / totalCount).toFixed(2)) * 100)
        if (progressCall) {
            progressCall(progress)
        }
    }, (error, asset) => {
        if (endCall) {
            endCall(sceneName, error)
        }
    })
},
    // 加载prefab
    UiManager.gLoadPrefabRes = function (filepath, call) {
        cc.resources.load(filepath, function (err, prefab) {
            if (err) {
                cc.error("UiManager.loadPrefabRes error====" + filepath)
                call(undefined)
            }
            else {
                var newNode = cc.instantiate(prefab);
                call(newNode)
                cc.loader.setAutoRelease(filepath, true)
            }
        })
    }
//显示弹框
UiManager.ShowAlert = function (str, btninfo = [], call) {

    this.gLoadPrefabRes("prefabs/AlertLayer2", function (_node) {
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
}
//显示输入
UiManager.ShowTextInput = function (call) {
    this.gLoadPrefabRes("prefabs/textinput", function (_node) {
        if (_node) {
            cc.director.getScene().getChildByName('Canvas').addChild(_node)
            var textinput = _node.getComponent("textinput")
            if (textinput) {
                textinput.show(call)
            }
        }
    })

}
//热更新选择弹框
UiManager.ShowChooseUpdate = function (data, call) {
    this.gLoadPrefabRes("prefabs/selectupdate", function (_node) {
        if (_node) {
            cc.director.getScene().getChildByName('Canvas').addChild(_node)
            var chooseupdate = _node.getComponent("chooseupdate")
            if (chooseupdate) {
                chooseupdate.initData(data, call)
            }
        }
    })

},
    //根据bundle的名称 进入bundle场景
    UiManager.gloadBundleScene = function (bundleName, finishCall) {
        UiManager.gShowLoading((layer) => {
            layer.updataProgress(30)
            var bunldeurl = SubGameManager.getLocalBundlePath(bundleName)
            Global.gLoadBundle(bunldeurl, { onFileProgress: (loaded, total) => console.log("bundle progress==", loaded, total) }, (err, bundle) => {
                if (err) {
                    console.log("Global gLoadBundle error")
                    if (finishCall) {
                        finishCall(1)
                    }
                    return console.error(err);
                }

                bundle.loadScene(bundleName, function (err, scene) {
                    if (err) {
                        console.log("Global gLoadBundle scene error")
                        if (finishCall) {
                            finishCall(2)
                        }
                        return
                    }
                    layer.updataProgress(100)
                });
            })
        }, (layer) => {
            if (finishCall) {
                finishCall(0)
            }

            UiManager.gLoadScene(bundleName)
        })

    }
window.UiManager = UiManager