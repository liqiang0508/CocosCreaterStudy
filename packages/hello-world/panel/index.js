
var Fs = require('fs');

const Style = Fs.readFileSync(Editor.url('packages://hello-world/panel/index.css', 'utf8'))
const Template = Fs.readFileSync(Editor.url('packages://hello-world/panel/index.html', 'utf8'))

Editor.Panel.extend({
	
  style:Style,
  template: Template,

  ready () {
    new window.Vue({
      el: this.shadowRoot,
      methods: {
        onConfirm ( event ) {
          event.stopPropagation();
          Editor.log('On Confirm!');
        },
      },
    });
  },
});