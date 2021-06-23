/*
 * @Description: 
 * @Author: li qiang
 * @Date: 2021-06-22 18:13:07
 * @LastEditTime: 2021-06-23 11:35:50
 */
'use strict';
const Consts = require("./Consts")
module.exports = {
  load() {
    Editor.log('package loaded');
  },

  unload() {
    Editor.log('package unloaded');
  },

  messages: {
    'say-hello'() {
      // Editor.log(Consts.packageName)
      Editor.Panel.open(Consts.packageName)
    }
  },
};