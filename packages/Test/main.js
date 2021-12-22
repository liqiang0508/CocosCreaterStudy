/*
 * @Description: 
 * @Author: li qiang
 * @Date: 2021-07-30 17:33:56
 * @LastEditTime: 2021-07-30 17:42:53
 */
'use strict';

module.exports = {
  load () {
    // execute when package loaded
  },

  unload () {
    // execute when package unloaded
  },

  // register your ipc messages here
  messages: {
    'open' () {
      // open entry panel registered in package.json
      Editor.Panel.open('test');
    },
    'say-hello' () {
      Editor.log('Hello World 111!');
      // send ipc message to panel
      Editor.Ipc.sendToPanel('test', 'test:hello');
    },
    'clicked' () {
      Editor.log('Button clicked222!');
    }
  },
};