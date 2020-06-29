var ua = {
darkButton: function(e, o) {
e.on(cc.Node.EventType.TOUCH_END, function(e) {
o && o(e);
});
},
loadPrefabRes: function(e, o) {
cc.resources.load(e, function(n, a) {
if (n) {
cc.error("Load error====" + e);
o(void 0);
} else {
var c = cc.instantiate(a);
o(c);
cc.loader.setAutoRelease(e, !0);
}
});
},
loadTexture: function(e, o) {
cc.assetManager.loadRemote(e, {
ext: ".png"
}, function(e, n) {
e ? o && o(null) : o(n);
});
}
};

window.ua = ua;