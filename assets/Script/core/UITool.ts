/*
 * @Description: 
 * @Author: li qiang
 * @Date: 2021-12-29 14:56:57
 * @LastEditTime: 2021-12-31 15:13:38
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
    showLoading: function (todoCall, endcall) {
        this.loadPrefabRes("prefabs/loadinglayer", (node: cc.Node) => {
            if (node) {
                this.sceneAddNode(node)
                var LoadingLayer = node.getComponent("LoadingLayer")
                if (LoadingLayer) {
                    LoadingLayer.setCallFun(todoCall, endcall)
                }
            }
        })
    },
    showFlotText: function (text, parent = null, pos = cc.v2(0, 0)) {
        this.loadPrefabRes("prefabs/FloatText", (node: cc.Node) => {
            if (node) {
                node.getComponent(cc.Label).string = text
                if (parent) {
                    parent.addChild(node)
                }
                else {
                    this.sceneAddNode(node)
                }
                node.setPosition(pos)
                this.playAnimation(node, "floatTextShow", () => {
                    node.destroy()
                })
            }
        })
    },
    sceneAddNode: function (node) {
        cc.director.getScene().getChildByName('Canvas').addChild(node)
    },
    //加载场景
    loadScene: function (sceneName, onLaunchCall = null) {
        cc.director.loadScene(sceneName, onLaunchCall)
    },
    //预加载场景
    preloadScene: function (sceneName, progressCall, endCall) {
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
    loadPrefabRes: function (filepath: string, call: Function) {
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
    showAlert: function (str, btninfo = [], call) {
        this.loadPrefabRes("prefabs/AlertLayer", function (node: cc.Node) {
            if (node) {
                cc.director.getScene().getChildByName('Canvas').addChild(node)
                var Alert = node.getComponent("Alert")
                if (Alert) {
                    Alert.showAlert(str, btninfo, function (index) {
                        if (call) {
                            call(index)
                        }
                    })
                }
            }
        })
    },
    showTextInput: function (call) {
        this.loadPrefabRes("prefabs/textinput", function (node: cc.Node) {
            if (node) {
                cc.director.getScene().getChildByName('Canvas').addChild(node)
                var textinput = node.getComponent("textinput")
                if (textinput) {
                    textinput.show(call)
                }
            }
        })
    },
    showChooseUpdate: function (data, call) {
        this.loadPrefabRes("prefabs/selectupdate", function (node: cc.Node) {
            if (node) {
                cc.director.getScene().getChildByName('Canvas').addChild(node)
                var chooseupdate = node.getComponent("chooseupdate")
                if (chooseupdate) {
                    chooseupdate.initData(data, call)
                }
            }
        })
    },

    loadBundleScene: function (bundleName, finishCall) {
        this.showLoading((layer) => {
            layer.updataProgress(30)
            //@ts-ignore
            var bunldeurl = SubGameManager.getLocalBundlePath(bundleName)
            this.loadBundle(bunldeurl, { onFileProgress: (loaded, total) => console.log("bundle progress==", loaded, total) }, (err, bundle) => {
                if (err) {
                    console.log("Global loadBundle error")
                    if (finishCall) {
                        finishCall(1)
                    }
                    return
                }

                bundle.loadScene(bundleName, function (err, scene) {
                    if (err) {
                        console.log("Global loadBundle scene error")
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
            this.loadScene(bundleName)
        })
    },
    loadBundle: function (url, option, complete) {
        cc.assetManager.loadBundle(url, option, (err, bundle) => {
            if (complete) {
                complete(err, bundle)
            }
        })
    },
    //切换场景
    changeScene: function (sceneName, call) {
        this.showLoading((layer) => {
            this.preloadScene(sceneName, (progress) => {
                layer.updataProgress(progress)
            })
        }, (layer) => {
            layer.updataProgress(100)
            this.loadScene(sceneName)
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
        UITool.loadPrefabRes("prefabs/rotateLoading", function (node: cc.Node) {
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
    },
    addBtnClick: function (node: cc.Node, endCall: Function, startCall: Function = null, moveCall: Function = null) {
        node.on(cc.Node.EventType.TOUCH_START, (event) => {
            if (startCall) {
                startCall(event)
            }
        })
        node.on(cc.Node.EventType.TOUCH_MOVE, (event) => {
            if (moveCall) {
                moveCall(event)
            }
        })
        node.on(cc.Node.EventType.TOUCH_END, (event) => {
            if (endCall) {
                endCall(event)
            }
        })
        node.on(cc.Node.EventType.TOUCH_CANCEL, (event) => {
            if (endCall) {
                endCall(event)
            }
        })
    }
}

globalThis.UITool = UITool;
