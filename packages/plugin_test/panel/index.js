/*
 * @Description: 
 * @Author: li qiang
 * @Date: 2021-06-22 18:13:07
 * @LastEditTime: 2021-07-30 18:04:51
 */
// const Consts = require('../Consts');
const packageName = "plugin_test"
var Fs = require('fs');
var Path = require("path")
const Electron = require('electron');
const Consts = require(Editor.url('packages://' + packageName + '/Consts.js'));
const Style = Fs.readFileSync(Editor.url('packages://' + Consts.packageName + '/panel/index.css', 'utf8'));
const Template = Fs.readFileSync(Editor.url('packages://' + Consts.packageName + '/panel/index.html', 'utf8'));
const Remote = require('electron').remote;
Editor.Panel.extend({

  style: Style,
  template: Template,

  ready() {
    let profileProject = this.profiles.project;
    Editor.log(JSON.stringify(profileProject));
    new window.Vue({
      el: this.shadowRoot,
      data: {
        profileProject: profileProject
      },
      methods: {
        _onOpen(event) {
          event.stopPropagation();
          
          //let res = Remote.dialog.showOpenDialog({ properties: ['openDirectory'] })
          //Editor.log('res==' + res)
          // Editor.assetdb.queryAssets('db://assets/**\/*', 'texture', function (err, results) {
          //   results.forEach(function (result) {
          //     // Editor.log( Path.basename(result.path));//获取文件名
          //     // result.url
          //     // result.path
          //     // result.uuid
          //     // result.type
          //     // result.isSubAsset
          //   });
          // });
        },

        _onCheckClick(event) {
          // Editor.log('_onCheckClick!'+event.target.value);
          this.profileProject.data.choose = event.target.value
          this.profileProject.save()
        },
        //选择目录
        _onChooseDistPathClick(event) {
          event.stopPropagation();
          let res = Editor.Dialog.openFile({
            defaultPath: this.profileProject.data.path,
            properties: ['openDirectory']
          });
          if (res && res[0]) {
            this.profileProject.data.path = res[0];
            this.profileProject.save();
          }
        },

        //打开目录
        _onShowInFinderClick(event) {
          event.stopPropagation();
          if (!Fs.existsSync(this.profileProject.data.path) & this.profileProject.data.path != "") {
            Editor.warn('%s not exists!', this.profileProject.data.path);
            return;
          }
          Electron.shell.showItemInFolder(this.profileProject.data.path);
          Electron.shell.beep();
        }
      },
    });
  },
});