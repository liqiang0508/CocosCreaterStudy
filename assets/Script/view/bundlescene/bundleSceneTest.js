/*
 * @Descripttion: 
 * @version: 
 * @Author: liqiang
 * @email: 497232807@qq.com
 * @Date: 2021-01-07 19:56:40
 * @LastEditTime: 2022-01-24 17:50:51
 */

import UITool from "../../core/UITool"
cc.Class({
    extends: cc.Component,

    properties: {

    },


    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {
        var btn_exit = cc.find("uipanel/btn_exit", this.node)
        UITool.addBtnClick(btn_exit, () => {

            UITool.showLoading((layer) => {
                layer.updataProgress(30)
                this.scheduleOnce(() => {
                    layer.updataProgress(100)
                }, 2)

            }, (layer) => {

                cc.director.loadScene("TestScene", () => {
                    Global.releaseBundle("bundleScene")
                })
            })
        })
    },

    // update (dt) {},
});
