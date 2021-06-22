'use strict';

module.exports = {
  load () {
    Editor.log('package loaded');
  },

  unload () {
    Editor.log('package unloaded');
  },

  messages: {
    'say-hello' () {
      Editor.log('Hello World!');
	  Editor.Panel.open('hello-world')
    }
  },
};