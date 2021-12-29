/*
 * @Description: 
 * @Author: li qiang
 * @Date: 2021-12-29 14:56:57
 * @LastEditTime: 2021-12-29 16:52:08
 */
var UITool = {
    showWaitState: false,
    getChildNode: function (nodeObject: object, node: cc.Node) {
        var childNode: cc.Node[] = node.children
        for (var i = 0; i < childNode.length; i++) {
            var name = childNode[i].name
            nodeObject[name] = childNode[i]
            this.getChildNode(nodeObject, childNode[i])
        }
    },
    gShowLoading: function (todoCall, endcall) {
        this.gLoadPrefabRes("prefabs/loadinglayer", (node: cc.Node) => {
            if (node) {
                this.gSceneAddNode(node)
                var LoadingLayer = node.getComponent("LoadingLayer")
                if (LoadingLayer) {
                    LoadingLayer.setCallFun(todoCall, endcall)
                }
            }
        })
    },
    showFlotText: function (text, parent = null, pos = cc.v2(0, 0)) {
        this.gLoadPrefabRes("prefabs/FloatText", (node: cc.Node) => {
            if (node) {
                node.getComponent(cc.Label).string = text
                if (parent) {
                    parent.addChild(node)
                }
                else {
                    this.gSceneAddNode(node)
                }
                node.setPosition(pos)
                this.playAnimation(node,"floatTextShow",()=>{
                    node.destroy()
                })
            }
        })
    },
    gSceneAddNode: function (node) {
        cc.director.getScene().getChildByName('Canvas').addChild(node)
    },
    //加载场景
    gLoadScene: function (sceneName, onLaunchCall = null) {
        cc.director.loadScene(sceneName, onLaunchCall)
    },
    //预加载场景
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
    //加载预制体
    gLoadPrefabRes: function (filepath: string, call: Function) {
        cc.resources.load(filepath, function (err, prefab) {
            if (err) {
                console.log("UITool.loadPrefabRes error====" + filepath)
                if (call) {
                    call(null)
                }
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
    //弹框
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
                    return
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
    //切换场景
    changeScene: function (sceneName, call) {
        this.gShowLoading((layer) => {
            this.gPreloadScene(sceneName, (progress) => {
                layer.updataProgress(progress)
            })
        }, (layer) => {
            layer.updataProgress(100)
            this.gLoadScene(sceneName)
            if (call) {
                call()
            }

        })
    },
    showWaitNetWork: function (time = 30) {
        if (this.showWaitState) {
            return
        }
        this.showWaitState = true
        UITool.gLoadPrefabRes("prefabs/rotateLoading", function (node: cc.Node) {
            if (node) {
                cc.director.getScene().getChildByName("Canvas").addChild(node)
                node.name = "rotateLoading"
                cc.tween(node).delay(time)
                    .call(() => { node.destroy() })
                    .start()
            }
        })
    },
    dismissWaitNetWork: function () {
        this.showWaitState = false
        var node = cc.director.getScene().getChildByName("Canvas").getChildByName("rotateLoading")
        if (node) {
            node.destroy()
        }
    },
    //播放动画
    playAnimation: function (node: cc.Node, name: string, endCall: Function) {
        var anim = node.getComponent(cc.Animation);
        if (anim) {
            anim.play(name);
            anim.on("finished", () => {
                if (endCall) {
                    endCall()
                }
            }, this);
        }
    }
}

globalThis.UITool = UITool;
