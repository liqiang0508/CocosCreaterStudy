/*
 * @Description: 
 * @Author: li qiang
 * @Date: 2021-06-22 18:13:07
 * @LastEditTime: 2021-06-22 20:48:32
 */

var Fs = require('fs');
const Electron = require('electron');

const Style = Fs.readFileSync(Editor.url('packages://hello-world/panel/index.css', 'utf8'))
const Template = Fs.readFileSync(Editor.url('packages://hello-world/panel/index.html', 'utf8'))

Editor.Panel.extend({

  style: Style,
  template: Template,

  ready() {
    let profileProject = this.profiles.project;
    new window.Vue({
      el: this.shadowRoot,
      data: {
        profileProject: profileProject
      },
      methods: {
        _onOpen(event) {
          event.stopPropagation();
          Editor.log('_onOpen!');
          Editor.Dialog.messageBox({ message: "666" })
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