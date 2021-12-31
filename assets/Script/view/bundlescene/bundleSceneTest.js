

cc.Class({
    extends: cc.Component,

    properties: {

    },

 
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {
        var btn_exit = cc.find("uipanel/btn_exit", this.node)
        UITool.addBtnClick(btn_exit, () => {

            UITool.gShowLoading((layer) => {
                layer.updataProgress(30)
                this.scheduleOnce(() => {
                    layer.updataProgress(100)
                }, 2)

            }, (layer) => {

                cc.director.loadScene("TestScene", () => {

                    Global.gReleaseBundle("bundleScene")
                })
            })
        })
    },

    // update (dt) {},
});
