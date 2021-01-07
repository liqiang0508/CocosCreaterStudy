window.__require = function n(e, t, o) {
function r(u, c) {
if (!t[u]) {
if (!e[u]) {
var a = u.split("/");
a = a[a.length - 1];
if (!e[a]) {
var s = "function" == typeof __require && __require;
if (!c && s) return s(a, !0);
if (i) return i(a, !0);
throw new Error("Cannot find module '" + u + "'");
}
u = a;
}
var l = t[u] = {
exports: {}
};
e[u][0].call(l.exports, function(n) {
return r(e[u][1][n] || n);
}, l, l.exports, n, e, t, o);
}
return t[u].exports;
}
for (var i = "function" == typeof __require && __require, u = 0; u < o.length; u++) r(o[u]);
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
var t = n("BaseComponent");
cc.Class({
extends: t,
properties: {},
start: function() {
this.btn_back = cc.find("uipanel/btn_back", this.node);
ua.darkButton(this.btn_back, function() {});
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