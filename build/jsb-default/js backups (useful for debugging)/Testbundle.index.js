window.__require = function e(n, t, o) {
function r(c, u) {
if (!t[c]) {
if (!n[c]) {
var a = c.split("/");
a = a[a.length - 1];
if (!n[a]) {
var s = "function" == typeof __require && __require;
if (!u && s) return s(a, !0);
if (i) return i(a, !0);
throw new Error("Cannot find module '" + c + "'");
}
c = a;
}
var l = t[c] = {
exports: {}
};
n[c][0].call(l.exports, function(e) {
return r(n[c][1][e] || e);
}, l, l.exports, e, n, t, o);
}
return t[c].exports;
}
for (var i = "function" == typeof __require && __require, c = 0; c < o.length; c++) r(o[c]);
return r;
}({
Sayhello: [ function(e, n) {
"use strict";
cc._RF.push(n, "699a2Lmh39MiI9FoGib7Ek3", "Sayhello");
var t = {
Say: function() {
console.log("SayHello=====");
}
};
window.SayHello = t;
cc._RF.pop();
}, {} ],
bundleScene: [ function(e, n) {
"use strict";
cc._RF.push(n, "8b80aQyaQZI1LngX975F7G3", "bundleScene");
var t = e("BaseComponent");
cc.Class({
extends: t,
properties: {},
start: function() {
this.btn_back = cc.find("uipanel/btn_back", this.node);
ua.darkButton(this.btn_back, function() {
cc.director.loadScene("TestScene");
});
},
onLoad: function() {
this._super();
},
onDestroy: function() {
this._super();
}
});
cc._RF.pop();
}, {
BaseComponent: void 0
} ]
}, {}, [ "Sayhello", "bundleScene" ]);