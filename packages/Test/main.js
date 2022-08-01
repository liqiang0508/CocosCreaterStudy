/*
 * @Description: 
 * @Author: li qiang
 * @Date: 2021-07-30 17:33:56
 * @LastEditTime: 2022-08-01 17:36:23
 */
'use strict';

var exec = require("child_process").exec;
function onBuildFinish(options, callback) {
  Editor.log('onBuildFinish===='); // 你可以在控制台输出点什么
  // var buildPath = options.buildPath
  callback();
}

function onBuildStart(options, callback) {
  Editor.log('onBuildStart===='); // 你可以在控制台输出点什么
  // var buildPath = options.buildPath
  // exec("python hello.py", (err, stdout, stderr) => {
  //   Editor.log("66==" + stdout)
  // });
  callback();
}

module.exports = {
  load() {
    // execute when package loaded
    Editor.Builder.on('build-start', onBuildStart);
    Editor.Builder.on('build-finished', onBuildFinish);
  },

  unload() {
    // execute when package unloaded
    Editor.Builder.removeListener('build-start', onBuildStart);
    Editor.Builder.removeListener('build-finished', onBuildFinish);
  },

  // register your ipc messages here
  messages: {
    'open'() {
      // open entry panel registered in package.json
      Editor.Panel.open('test');
    },
    'say-hello'() {
      Editor.log('Hello World 111!');
      // send ipc message to panel
      Editor.Ipc.sendToPanel('test', 'test:hello');
    },
    'clicked'() {
      Editor.log('Button clicked222!');
    }
  },
};