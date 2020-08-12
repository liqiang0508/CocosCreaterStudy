var ua = {
darkButton: function(o, e) {
o.on(cc.Node.EventType.TOUCH_END, function(o) {
e && e(o);
});
},
ClickNode: function(o, e) {
o.on(cc.Node.EventType.TOUCH_START, function(o) {
e && e(o);
});
},
loadPrefabRes: function(o, e) {
cc.resources.load(o, function(c, n) {
if (c) {
cc.error("Load error====" + o);
e(void 0);
} else {
var t = cc.instantiate(n);
e(t);
cc.loader.setAutoRelease(o, !0);
}
});
}
};

window.ua = ua;