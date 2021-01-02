var EventManager = {
on: function(n, e, t) {
n.on(e, function(n) {
t && t(n);
});
},
off: function(n, e, t) {
n.off(e, function() {
t && t();
});
},
dispatchEvent: function(n, e, t) {
var o = new cc.Event.EventCustom(e, !0);
t && o.setUserData(t);
n.dispatchEvent(o);
}
};

window.EventManager = EventManager;

window.RefreshInfo = "refreshinfo";