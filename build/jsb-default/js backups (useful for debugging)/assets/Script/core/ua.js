var ua = {
darkButton: function(n, o) {
n.on(cc.Node.EventType.TOUCH_END, function(n) {
o && o(n);
});
},
ClickNode: function(n, o) {
n.on(cc.Node.EventType.TOUCH_START, function(n) {
o && o(n);
});
}
};

window.ua = ua;