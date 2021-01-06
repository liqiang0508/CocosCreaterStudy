
//一些ui常见操作

var UiManager = {}
//显示loadinglayer进度
UiManager.gShowLoading = function(todoCall,endcall){

    this.gLoadPrefabRes("prefabs/loadinglayer",  (_node)=> {
        if (_node) {
            this.gSceneAddNode(_node)
            var LoadingLayer = _node.getComponent("LoadingLayer")
            if (LoadingLayer) {
                LoadingLayer.setCallFun(todoCall, endcall)
            }
        }
    })

}
//当前场景添加节点
UiManager.gSceneAddNode = function(node){

    cc.director.getScene().getChildByName('Canvas').addChild(node)
}

// 加载prefab
UiManager.gLoadPrefabRes = function (filepath, call) {
    cc.resources.load(filepath, function (err, prefab) {
        if (err) {
            cc.error("ua.loadPrefabRes error====" + filepath)
            call(undefined)
        }
        else {
            var newNode = cc.instantiate(prefab);
            call(newNode)
            cc.loader.setAutoRelease(filepath, true)
        }
    })
}

UiManager.ShowAlert = function (str, btninfo, call) {

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
window.UiManager =  UiManager