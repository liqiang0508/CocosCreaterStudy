/*
 * @Description: 
 * @Author: li qiang
 * @Date: 2021-06-22 18:13:07
 * @LastEditTime: 2021-06-22 20:12:05
 */
'use strict';

module.exports = {
  load() {
    Editor.log('package loaded');
  },

  unload() {
    Editor.log('package unloaded');
  },

  messages: {
    'say-hello'() {
      Editor.Panel.open('hello-world')
    }
  },
};