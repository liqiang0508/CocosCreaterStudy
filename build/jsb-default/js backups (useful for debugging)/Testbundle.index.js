window.__require = function n(e, t, o) {
function r(i, u) {
if (!t[i]) {
if (!e[i]) {
var l = i.split("/");
l = l[l.length - 1];
if (!e[l]) {
var a = "function" == typeof __require && __require;
if (!u && a) return a(l, !0);
if (c) return c(l, !0);
throw new Error("Cannot find module '" + i + "'");
}
i = l;
}
var f = t[i] = {
exports: {}
};
e[i][0].call(f.exports, function(n) {
return r(e[i][1][n] || n);
}, f, f.exports, n, e, t, o);
}
return t[i].exports;
}
for (var c = "function" == typeof __require && __require, i = 0; i < o.length; i++) r(o[i]);
return r;
}({
Sayhello: [ function(n, e) {
"use strict";
cc._RF.push(e, "699a2Lmh39MiI9FoGib7Ek3", "Sayhello");
var t = {
Say: function() {
console.log("SayHello=====");
}
};
window.SayHello = t;
cc._RF.pop();
}, {} ],
bundleScene: [ function(n, e) {
"use strict";
cc._RF.push(e, "8b80aQyaQZI1LngX975F7G3", "bundleScene");
cc.Class({
extends: cc.Component,
properties: {},
start: function() {
this.btn_back = cc.find("uipanel/btn_back", this.node);
UITool.addBtnClick(this.btn_back, function() {});
}
});
cc._RF.pop();
}, {} ]
}, {}, [ "Sayhello", "bundleScene" ]);