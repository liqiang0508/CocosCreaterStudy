var ua = {
darkButton: function(e, o) {
e.on(cc.Node.EventType.TOUCH_END, function(e) {
o && o(e);
});
},
ClickNode: function(e, o) {
e.on(cc.Node.EventType.TOUCH_START, function(e) {
o && o(e);
});
},
loadPrefabRes: function(e, o) {
cc.resources.load(e, function(c, n) {
if (c) {
cc.error("ua.loadPrefabRes error====" + e);
o(void 0);
} else {
var a = cc.instantiate(n);
o(a);
cc.loader.setAutoRelease(e, !0);
}
});
}
};

window.ua = ua;