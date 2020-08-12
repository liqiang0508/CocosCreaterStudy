var ua = {
darkButton: function(e, o) {
e.on(cc.Node.EventType.TOUCH_END, function(e) {
o && o(e);
});
},
loadPrefabRes: function(e, o) {
cc.resources.load(e, function(c, a) {
if (c) {
cc.error("Load error====" + e);
o(void 0);
} else {
var n = cc.instantiate(a);
o(n);
cc.loader.setAutoRelease(e, !0);
}
});
}
};

window.ua = ua;