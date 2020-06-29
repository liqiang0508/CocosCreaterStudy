window.__require = function r(e, o, n) {
function t(u, l) {
if (!o[u]) {
if (!e[u]) {
var f = u.split("/");
f = f[f.length - 1];
if (!e[f]) {
var a = "function" == typeof __require && __require;
if (!l && a) return a(f, !0);
if (i) return i(f, !0);
throw new Error("Cannot find module '" + u + "'");
}
u = f;
}
var c = o[u] = {
exports: {}
};
e[u][0].call(c.exports, function(r) {
return t(e[u][1][r] || r);
}, c, c.exports, r, e, o, n);
}
return o[u].exports;
}
for (var i = "function" == typeof __require && __require, u = 0; u < n.length; u++) t(n[u]);
return t;
}({
Sayhello: [ function(r, e, o) {
"use strict";
cc._RF.push(e, "699a2Lmh39MiI9FoGib7Ek3", "Sayhello");
var n = {
Say: function() {
console.log("SayHello=====");
}
};
window.SayHello = n;
cc._RF.pop();
}, {} ]
}, {}, [ "Sayhello" ]);