/*
 * @Description: 
 * @Author: li qiang
 * @Date: 2021-12-29 14:56:57
 * @LastEditTime: 2021-12-29 15:35:09
 */
var UITool = {

    getChildNode: function (nodeObject: object, node: cc.Node) {
        var childNode: cc.Node[] = node.children
        for (var i = 0; i < childNode.length; i++) {
            var name = childNode[i].name
            nodeObject[name] = childNode[i]
            this.getChildNode(nodeObject, childNode[i])
        }
    },
    gShowLoading: function (todoCall, endcall) {

        this.gLoadPrefabRes("prefabs/loadinglayer", (_node) => {
            if (_node) {
                this.gSceneAddNode(_node)
                var LoadingLayer = _node.getComponent("LoadingLayer")
                if (LoadingLayer) {
                    LoadingLayer.setCallFun(todoCall, endcall)
                }
            }
        })
    },
    ShowFlotText: function (text, parent = null, pos = cc.v2(0, 0)) {

        this.gLoadPrefabRes("prefabs/FloatText", (node) => {
            if (node) {
                node.getComponent(cc.Label).string = text
                if (parent) {
                    parent.addChild(node)
                }
                else {
                    this.gSceneAddNode(node)
                }
                node.setPosition(pos)
                cc.tween(node)
                    .parallel(
                        cc.tween().by(1, { position: cc.v2(0, 150) }),
                        cc.tween().to(1, { opacity: 0 })
                    ).start()
            }
        })
    },
    gSceneAddNode: function (node) {
        cc.director.getScene().getChildByName('Canvas').addChild(node)
    },
    gLoadScene: function (sceneName, onLaunchCall = null) {
        cc.director.loadScene(sceneName, onLaunchCall)
    },
    gPreloadScene: function (sceneName, progressCall, endCall) {
        cc.director.preloadScene(sceneName, (completedCount: number, totalCount: number, item: any) => {
            var progress = Math.floor(completedCount / totalCount * 100)
            if (progressCall) {
                progressCall(progress)
            }
        }, (error) => {
            if (endCall) {
                endCall(sceneName, error)
            }
        })
    },
    gLoadPrefabRes: function (filepath: string, call: Function) {
        cc.resources.load(filepath, function (err, prefab) {
            if (err) {
                cc.error("UITool.loadPrefabRes error====" + filepath)
                call(undefined)
            }
            else {
                var newNode = cc.instantiate(prefab);
                if (call) {
                    call(newNode)
                }
                cc.loader.setAutoRelease(filepath, true)
            }
        })
    },
    ShowAlert: function (str, btninfo = [], call) {
        this.gLoadPrefabRes("prefabs/AlertLayer2", function (node: cc.Node) {
            if (node) {
                cc.director.getScene().getChildByName('Canvas').addChild(node)
                var AlertIII = node.getComponent("AlertIII")
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
        this.gLoadPrefabRes("prefabs/textinput", function (node: cc.Node) {
            if (node) {
                cc.director.getScene().getChildByName('Canvas').addChild(node)
                var textinput = node.getComponent("textinput")
                if (textinput) {
                    textinput.show(call)
                }
            }
        })
    },
    ShowChooseUpdate: function (data, call) {
        this.gLoadPrefabRes("prefabs/selectupdate", function (node: cc.Node) {
            if (node) {
                cc.director.getScene().getChildByName('Canvas').addChild(node)
                var chooseupdate = node.getComponent("chooseupdate")
                if (chooseupdate) {
                    chooseupdate.initData(data, call)
                }
            }
        })
    },
    
    gloadBundleScene: function (bundleName, finishCall) {
        this.gShowLoading((layer) => {
            layer.updataProgress(30)
            //@ts-ignore
            var bunldeurl = SubGameManager.getLocalBundlePath(bundleName)
            this.gLoadBundle(bunldeurl, { onFileProgress: (loaded, total) => console.log("bundle progress==", loaded, total) }, (err, bundle) => {
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
            this.gLoadScene(bundleName)
        })
    },
    gLoadBundle: function (url, option, complete) {
        cc.assetManager.loadBundle(url, option, (err, bundle) => {
            if (complete) {
                complete(err, bundle)
            }
        })
    },
}

globalThis.UITool = UITool;
