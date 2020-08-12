window.__require = function e(_, t, T) {
function S(i, o) {
if (!t[i]) {
if (!_[i]) {
var E = i.split("/");
E = E[E.length - 1];
if (!_[E]) {
var R = "function" == typeof __require && __require;
if (!o && R) return R(E, !0);
if (n) return n(E, !0);
throw new Error("Cannot find module '" + i + "'");
}
i = E;
}
var r = t[i] = {
exports: {}
};
_[i][0].call(r.exports, function(e) {
return S(_[i][1][e] || e);
}, r, r.exports, e, _, t, T);
}
return t[i].exports;
}
for (var n = "function" == typeof __require && __require, i = 0; i < T.length; i++) S(T[i]);
return S;
}({
AdaptBg: [ function(e, _, t) {
"use strict";
cc._RF.push(_, "ee625B2iPdOz4Trq3USAlCq", "AdaptBg");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {},
start: function() {
var e = cc.view.getVisibleSize(), _ = Math.min(this.node.width / e.width, this.node.height / e.height);
this.node.scale = this.node.scale / _;
}
});
cc._RF.pop();
}, {} ],
AdaptCanvas: [ function(e, _, t) {
"use strict";
cc._RF.push(_, "3d5f7WCRqhE5bZ5is2EOwx6", "AdaptCanvas");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {
var e = cc.view.getDesignResolutionSize(), _ = cc.view.getVisibleSize();
if (_.width / e.width > _.height / e.height) {
cc.Canvas.instance.fitHeight = !0;
cc.Canvas.instance.fitWidth = !1;
} else {
cc.Canvas.instance.fitHeight = !1;
cc.Canvas.instance.fitWidth = !0;
}
},
start: function() {}
});
cc._RF.pop();
}, {} ],
AdaptUI: [ function(e, _, t) {
"use strict";
cc._RF.push(_, "7f436dxylZH4bCxvIF2a+LV", "AdaptUI");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {},
start: function() {
cc.sys.getSafeAreaRect(), cc.view.getVisibleSize();
}
});
cc._RF.pop();
}, {} ],
AlertIII: [ function(e, _, t) {
"use strict";
cc._RF.push(_, "fcc45vfYNtImpD7O5BXoNrL", "AlertIII");
var T = e("BaseComponent");
cc.Class({
extends: T,
properties: {
AimType: {
default: 1,
override: !0
}
},
onDestroy: function() {
this._super();
},
onLoad: function() {
this._super();
var e = this, _ = this.node.getChildByName("bg").getChildByName("text");
_.getComponent(cc.Label).string = "LOL";
this.text = _;
var t = this.node.getChildByName("bg").getChildByName("btn_yes"), T = this.node.getChildByName("bg").getChildByName("btn_no"), S = this.node.getChildByName("bg").getChildByName("btn_middle");
this.btnyes = t;
this.btn_no = T;
this.btn_middle = S;
ua.darkButton(S, function() {
e.BtnCall(2);
e.bClose();
});
ua.darkButton(t, function() {
e.BtnCall(1);
e.bClose();
});
ua.darkButton(T, function() {
e.BtnCall(0);
e.bClose();
});
},
setTitle: function(e) {
this.text.getComponent(cc.Label).string = e;
},
setButtonInfo: function(e) {
if (1 == e.length) {
this.btnyes.active = !1;
this.btn_no.active = !1;
this.btn_middle.active = !0;
this.setButtonText(this.btn_middle, e[0]);
}
if (0 == e.length) {
this.btnyes.active = !1;
this.btn_no.active = !1;
this.btn_middle.active = !0;
this.setButtonText(this.btn_middle, "Yes");
}
if (2 == e.length) {
this.btnyes.active = !0;
this.btn_no.active = !0;
this.btn_middle.active = !1;
this.setButtonText(this.btnyes, e[0]);
this.setButtonText(this.btn_no, e[1]);
}
if (3 == e.length) {
this.btnyes.active = !0;
this.btn_no.active = !0;
this.btn_middle.active = !0;
this.setButtonText(this.btnyes, e[0]);
this.setButtonText(this.btn_no, e[1]);
this.setButtonText(this.btn_middle, e[2]);
}
},
showAlert: function(e, _, t) {
this.EnterAni();
this.setTitle(e);
this.setButtonInfo(_);
this.AddClickBtnCall(t);
},
AddClickBtnCall: function(e) {
this.ClickCall = e;
},
BtnCall: function(e) {
this.ClickCall && this.ClickCall(e);
},
setButtonText: function(e, _) {
var t = e.getChildByName("Background").getChildByName("Label");
t && (t.getComponent(cc.Label).string = _);
},
start: function() {}
});
cc._RF.pop();
}, {
BaseComponent: "BaseComponent"
} ],
Base64Tool: [ function(e, _, t) {
"use strict";
cc._RF.push(_, "04561E7wzpHiKoMn1wok8WB", "Base64Tool");
var T = e("buffer").Buffer, S = {
encode: function(e) {
return new T(e).toString("base64");
},
decode: function(e) {
return new T(e, "base64").toString();
}
};
_.exports = S;
cc._RF.pop();
}, {
buffer: 2
} ],
BaseComponent: [ function(e, _, t) {
"use strict";
cc._RF.push(_, "8e980PYoChFa6X8R9XVV7PJ", "BaseComponent");
var T = e("KeypadDispatch");
cc.Class({
extends: cc.Component,
properties: {
AimType: {
default: 0,
override: !0,
tooltip: "弹出动画  1:弹出 2:渐变"
}
},
showWiat: function(e) {
if (e) ua.loadPrefabRes("prefabs/rotateLoading", function(e) {
if (e) {
cc.director.getScene().getChildByName("Canvas").addChild(e);
e.setName("rotateLoading");
}
}); else {
var _ = cc.director.getScene().getChildByName("Canvas").getChildByName("rotateLoading");
_ && _.removeFromParent();
}
},
onLoad: function() {
T.getInstance().add(this);
},
start: function() {},
onDestroy: function() {
this.node.targetOff(this);
T.getInstance().remove();
},
show: function() {
this.EnterAni();
},
bClose: function() {
var e = this;
this.ExtAni(function() {
if (e.node) {
e.node.destroy();
e.node.removeFromParent();
}
});
},
ExtAni: function(e) {
0 == this.AimType && e && e();
if (1 == this.AimType) {
var _ = cc.spawn(cc.scaleTo(.1, .7), cc.fadeTo(.08, 0)), t = cc.callFunc(function() {
e && e();
}), T = cc.sequence(_, t);
this.node.runAction(T);
var S = this.node.getChildByName("mask");
S && (S.opacity = 0);
}
if (2 == this.AimType) {
_ = cc.fadeTo(.15, 0), t = cc.callFunc(function() {
e && e();
}), T = cc.sequence(_, t);
this.node.runAction(T);
}
},
onbackpress: function() {
this.bClose();
},
EnterAni: function(e) {
if (1 == this.AimType) {
var _ = this.node.getChildByName("mask");
this.node.opacity = 10;
this.node.Scale = .5;
var t = cc.spawn(cc.scaleTo(.1, 1.05), cc.fadeTo(.1, 180)), T = cc.spawn(cc.scaleTo(.05, 1), cc.fadeTo(.05, 255)), S = cc.callFunc(function() {
e && e();
_ && (_.opacity = 125);
}), n = cc.sequence(t, T, S);
this.node.runAction(n);
}
if (2 == this.AimType) {
(_ = this.node.getChildByName("mask")) && (_.opacity = 0);
t = cc.fadeTo(.15, 255), T = cc.callFunc(function() {
e && e();
_ && (_.opacity = 225);
}), n = cc.sequence(t, T);
this.node.runAction(n);
}
}
});
cc._RF.pop();
}, {
KeypadDispatch: "KeypadDispatch"
} ],
CastTest: [ function(e, _, t) {
"use strict";
cc._RF.push(_, "27518R8AWdKgbFqyhaZ2dB+", "CastTest");
cc.Class({
extends: cc.Component,
properties: {
_cur_length: 0,
graphic_line: {
type: cc.Graphics,
default: null
}
},
onEnable: function() {},
onLoad: function() {
var e = this;
this.img = cc.find("img", this.node);
this.img.setPosition(cc.v2(0, 0));
this.img.getComponent(cc.RigidBody).linearVelocity = cc.v2(0, -200);
window.EventManager.on(this.node, "gameover", function() {
console.log("game over====");
});
ua.darkButton(this.node, function(_) {
var t = cc.instantiate(e.img);
e.node.addChild(t);
var T = _.getTouches(), S = T[0].getLocation();
T[0].getLocationInView();
S = t.parent.convertToNodeSpaceAR(S);
t.setPosition(S);
});
},
onTouchStart: function(e) {
this.graphic_line.clear();
},
onTouchMove: function(e) {
this.graphic_line.clear();
this._cur_length = 0;
var _ = e.getStartLocation(), t = e.getLocation();
this.drawRayCast(_, t.subSelf(_).normalizeSelf());
this.graphic_line.stroke();
},
onTouchEnd: function(e) {
this.graphic_line.clear();
},
drawRayCast: function(e, _) {
var t = 1440 - this._cur_length;
if (!(t <= 0)) {
var T = e.add(_.mul(t)), S = cc.director.getPhysicsManager().rayCast(e, T, cc.RayCastType.Closest);
if (S.length > 0) {
var n = S[0], i = n.point;
this.drawAimLine(e, i);
var o = i.sub(e).mag();
this._cur_length += o;
var E = n.normal, R = _, r = R.sub(E.mul(2 * R.dot(E)));
this.drawRayCast(i, r);
} else this.drawAimLine(e, T);
}
},
drawAimLine: function(e, _) {
var t = this.graphic_line.node.convertToNodeSpaceAR(e);
this.graphic_line.moveTo(t.x, t.y);
this.graphic_line.strokeColor = new cc.Color().fromHEX("#ffffff");
this.graphic_line.lineWidth = 2;
var T = _.sub(e), S = Math.round(T.mag() / 35);
T.normalizeSelf().mulSelf(35);
for (var n = 0; n < S; n++) {
t.addSelf(T);
this.graphic_line.circle(t.x, t.y, 6);
}
},
start: function() {},
update: function(e) {},
onBeginContact: function(e, _, t) {
console.log("onBeginContact");
},
onEndContact: function(e, _, t) {
console.log("onEndContact");
},
onPreSolve: function(e, _, t) {
console.log("onPreSolve");
},
onPostSolve: function(e, _, t) {
console.log("onPostSolve");
},
onCollisionEnter: function(e, _) {
console.log("onCollisionEnter");
}
});
cc._RF.pop();
}, {} ],
Chanel: [ function(e, _, t) {
"use strict";
cc._RF.push(_, "15547fdAgdMZo3lwC1nVArs", "Chanel");
var T = {
WIN32: 0,
IOS_APPSTORE: 1,
H5: 2,
ANDROID_GOOGLE_PLAY: 3
};
window.chanel = T;
cc.sys.isBrowser ? window.DISTRIBUTE_CHANNEL = T.H5 : cc.sys.isNative && cc.sys.os == cc.sys.OS_ANDROID ? window.DISTRIBUTE_CHANNEL = T.ANDROID_GOOGLE_PLAY : cc.sys.isNative && cc.sys.os == cc.sys.OS_IOS ? window.DISTRIBUTE_CHANNEL = T.IOS_APPSTORE : window.DISTRIBUTE_CHANNEL = T.WIN32;
cc._RF.pop();
}, {} ],
ConstantItem: [ function(e, _, t) {
"use strict";
cc._RF.push(_, "597b04MNS9KfIVJ0rR+fn0e", "ConstantItem");
var T = {
1: {}
};
T[1].ID = 1;
T[1].Name = "钻石包_1";
T[1].Type = 0;
T[1].PriceType = 2;
T[1].Price = 35;
T[1].PriceBeforeDiscount = 0;
T[1].Time = 0;
T[1].StorePosition = 1101;
T[1].InfoVersion = 0;
T[1].AddGem = 6;
T[1].AddInteractiveItem = 0;
T[1].AddSpeechItem = 0;
T[1].DiscountBuyItem = 0;
T[1].AddChip = 0;
T[1].MinRandomChip = 0;
T[1].MaxRandomChip = 0;
T[2] = {};
T[2].ID = 2;
T[2].Name = "钻石包_2";
T[2].Type = 0;
T[2].PriceType = 2;
T[2].Price = 175;
T[2].PriceBeforeDiscount = 0;
T[2].Time = 0;
T[2].StorePosition = 1102;
T[2].InfoVersion = 0;
T[2].AddGem = 31;
T[2].AddInteractiveItem = 0;
T[2].AddSpeechItem = 0;
T[2].DiscountBuyItem = 0;
T[2].AddChip = 0;
T[2].MinRandomChip = 0;
T[2].MaxRandomChip = 0;
T[3] = {};
T[3].ID = 3;
T[3].Name = "钻石包_3";
T[3].Type = 0;
T[3].PriceType = 2;
T[3].Price = 699;
T[3].PriceBeforeDiscount = 0;
T[3].Time = 0;
T[3].StorePosition = 1103;
T[3].InfoVersion = 0;
T[3].AddGem = 132;
T[3].AddInteractiveItem = 0;
T[3].AddSpeechItem = 0;
T[3].DiscountBuyItem = 0;
T[3].AddChip = 0;
T[3].MinRandomChip = 0;
T[3].MaxRandomChip = 0;
T[4] = {};
T[4].ID = 4;
T[4].Name = "钻石包_4";
T[4].Type = 0;
T[4].PriceType = 2;
T[4].Price = 1750;
T[4].PriceBeforeDiscount = 0;
T[4].Time = 0;
T[4].StorePosition = 1104;
T[4].InfoVersion = 0;
T[4].AddGem = 336;
T[4].AddInteractiveItem = 0;
T[4].AddSpeechItem = 0;
T[4].DiscountBuyItem = 0;
T[4].AddChip = 0;
T[4].MinRandomChip = 0;
T[4].MaxRandomChip = 0;
T[5] = {};
T[5].ID = 5;
T[5].Name = "钻石包_5";
T[5].Type = 0;
T[5].PriceType = 2;
T[5].Price = 3500;
T[5].PriceBeforeDiscount = 0;
T[5].Time = 0;
T[5].StorePosition = 1105;
T[5].InfoVersion = 0;
T[5].AddGem = 690;
T[5].AddInteractiveItem = 0;
T[5].AddSpeechItem = 0;
T[5].DiscountBuyItem = 0;
T[5].AddChip = 0;
T[5].MinRandomChip = 0;
T[5].MaxRandomChip = 0;
T[6] = {};
T[6].ID = 6;
T[6].Name = "周卡";
T[6].Type = 7;
T[6].PriceType = 2;
T[6].Price = 175;
T[6].PriceBeforeDiscount = 0;
T[6].Time = 168;
T[6].StorePosition = 0;
T[6].InfoVersion = 0;
T[6].AddGem = 15;
T[6].AddInteractiveItem = 0;
T[6].AddSpeechItem = 0;
T[6].DiscountBuyItem = 0;
T[6].AddChip = 0;
T[6].MinRandomChip = 0;
T[6].MaxRandomChip = 0;
T[7] = {};
T[7].ID = 7;
T[7].Name = "月卡";
T[7].Type = 7;
T[7].PriceType = 2;
T[7].Price = 699;
T[7].PriceBeforeDiscount = 0;
T[7].Time = 720;
T[7].StorePosition = 0;
T[7].InfoVersion = 0;
T[7].AddGem = 100;
T[7].AddInteractiveItem = 0;
T[7].AddSpeechItem = 0;
T[7].DiscountBuyItem = 0;
T[7].AddChip = 0;
T[7].MinRandomChip = 0;
T[7].MaxRandomChip = 0;
T[16] = {};
T[16].ID = 16;
T[16].Name = "互动道具包_1";
T[16].Type = 0;
T[16].PriceType = 0;
T[16].Price = 1e3;
T[16].PriceBeforeDiscount = 0;
T[16].Time = 0;
T[16].StorePosition = 2104;
T[16].InfoVersion = 0;
T[16].AddGem = 0;
T[16].AddInteractiveItem = 25;
T[16].AddSpeechItem = 0;
T[16].DiscountBuyItem = 0;
T[16].AddChip = 0;
T[16].MinRandomChip = 0;
T[16].MaxRandomChip = 0;
T[17] = {};
T[17].ID = 17;
T[17].Name = "互动道具包_2";
T[17].Type = 0;
T[17].PriceType = 0;
T[17].Price = 6e3;
T[17].PriceBeforeDiscount = 0;
T[17].Time = 0;
T[17].StorePosition = 2105;
T[17].InfoVersion = 0;
T[17].AddGem = 0;
T[17].AddInteractiveItem = 150;
T[17].AddSpeechItem = 0;
T[17].DiscountBuyItem = 0;
T[17].AddChip = 0;
T[17].MinRandomChip = 0;
T[17].MaxRandomChip = 0;
T[18] = {};
T[18].ID = 18;
T[18].Name = "互动道具包_3";
T[18].Type = 0;
T[18].PriceType = 0;
T[18].Price = 24e3;
T[18].PriceBeforeDiscount = 0;
T[18].Time = 0;
T[18].StorePosition = 2106;
T[18].InfoVersion = 0;
T[18].AddGem = 0;
T[18].AddInteractiveItem = 660;
T[18].AddSpeechItem = 0;
T[18].DiscountBuyItem = 0;
T[18].AddChip = 0;
T[18].MinRandomChip = 0;
T[18].MaxRandomChip = 0;
T[19] = {};
T[19].ID = 19;
T[19].Name = "喇叭包_1";
T[19].Type = 0;
T[19].PriceType = 0;
T[19].Price = 2500;
T[19].PriceBeforeDiscount = 0;
T[19].Time = 0;
T[19].StorePosition = 2101;
T[19].InfoVersion = 0;
T[19].AddGem = 0;
T[19].AddInteractiveItem = 0;
T[19].AddSpeechItem = 25;
T[19].DiscountBuyItem = 0;
T[19].AddChip = 0;
T[19].MinRandomChip = 0;
T[19].MaxRandomChip = 0;
T[20] = {};
T[20].ID = 20;
T[20].Name = "喇叭包_2";
T[20].Type = 0;
T[20].PriceType = 0;
T[20].Price = 15e3;
T[20].PriceBeforeDiscount = 0;
T[20].Time = 0;
T[20].StorePosition = 2102;
T[20].InfoVersion = 0;
T[20].AddGem = 0;
T[20].AddInteractiveItem = 0;
T[20].AddSpeechItem = 150;
T[20].DiscountBuyItem = 0;
T[20].AddChip = 0;
T[20].MinRandomChip = 0;
T[20].MaxRandomChip = 0;
T[21] = {};
T[21].ID = 21;
T[21].Name = "喇叭包_3";
T[21].Type = 0;
T[21].PriceType = 0;
T[21].Price = 6e4;
T[21].PriceBeforeDiscount = 0;
T[21].Time = 0;
T[21].StorePosition = 2103;
T[21].InfoVersion = 0;
T[21].AddGem = 0;
T[21].AddInteractiveItem = 0;
T[21].AddSpeechItem = 600;
T[21].DiscountBuyItem = 0;
T[21].AddChip = 0;
T[21].MinRandomChip = 0;
T[21].MaxRandomChip = 0;
T[22] = {};
T[22].ID = 22;
T[22].Name = "喇叭包_4";
T[22].Type = 0;
T[22].PriceType = 1;
T[22].Price = 10;
T[22].PriceBeforeDiscount = 0;
T[22].Time = 0;
T[22].StorePosition = 2107;
T[22].InfoVersion = 0;
T[22].AddGem = 0;
T[22].AddInteractiveItem = 0;
T[22].AddSpeechItem = 1;
T[22].DiscountBuyItem = 0;
T[22].AddChip = 0;
T[22].MinRandomChip = 0;
T[22].MaxRandomChip = 0;
T[4004] = {};
T[4004].ID = 4004;
T[4004].Name = "饮品_鲜榨果汁";
T[4004].Type = 4;
T[4004].PriceType = 0;
T[4004].Price = 3500;
T[4004].PriceBeforeDiscount = 0;
T[4004].Time = 24;
T[4004].StorePosition = 4101;
T[4004].InfoVersion = 0;
T[4004].AddGem = 0;
T[4004].AddInteractiveItem = 0;
T[4004].AddSpeechItem = 0;
T[4004].DiscountBuyItem = 0;
T[4004].AddChip = 0;
T[4004].MinRandomChip = 0;
T[4004].MaxRandomChip = 0;
T[4009] = {};
T[4009].ID = 4009;
T[4009].Name = "饮品_鸡尾酒（血腥玛丽）";
T[4009].Type = 4;
T[4009].PriceType = 0;
T[4009].Price = 3500;
T[4009].PriceBeforeDiscount = 0;
T[4009].Time = 24;
T[4009].StorePosition = 4102;
T[4009].InfoVersion = 0;
T[4009].AddGem = 0;
T[4009].AddInteractiveItem = 0;
T[4009].AddSpeechItem = 0;
T[4009].DiscountBuyItem = 0;
T[4009].AddChip = 0;
T[4009].MinRandomChip = 0;
T[4009].MaxRandomChip = 0;
T[4013] = {};
T[4013].ID = 4013;
T[4013].Name = "美食_棒棒糖";
T[4013].Type = 4;
T[4013].PriceType = 0;
T[4013].Price = 4500;
T[4013].PriceBeforeDiscount = 0;
T[4013].Time = 24;
T[4013].StorePosition = 4105;
T[4013].InfoVersion = 0;
T[4013].AddGem = 0;
T[4013].AddInteractiveItem = 0;
T[4013].AddSpeechItem = 0;
T[4013].DiscountBuyItem = 0;
T[4013].AddChip = 0;
T[4013].MinRandomChip = 0;
T[4013].MaxRandomChip = 0;
T[4014] = {};
T[4014].ID = 4014;
T[4014].Name = "美食_提拉米苏";
T[4014].Type = 4;
T[4014].PriceType = 0;
T[4014].Price = 5500;
T[4014].PriceBeforeDiscount = 0;
T[4014].Time = 24;
T[4014].StorePosition = 4107;
T[4014].InfoVersion = 0;
T[4014].AddGem = 0;
T[4014].AddInteractiveItem = 0;
T[4014].AddSpeechItem = 0;
T[4014].DiscountBuyItem = 0;
T[4014].AddChip = 0;
T[4014].MinRandomChip = 0;
T[4014].MaxRandomChip = 0;
T[4019] = {};
T[4019].ID = 4019;
T[4019].Name = "美食_冰淇林";
T[4019].Type = 4;
T[4019].PriceType = 0;
T[4019].Price = 5500;
T[4019].PriceBeforeDiscount = 0;
T[4019].Time = 24;
T[4019].StorePosition = 4106;
T[4019].InfoVersion = 0;
T[4019].AddGem = 0;
T[4019].AddInteractiveItem = 0;
T[4019].AddSpeechItem = 0;
T[4019].DiscountBuyItem = 0;
T[4019].AddChip = 0;
T[4019].MinRandomChip = 0;
T[4019].MaxRandomChip = 0;
T[4023] = {};
T[4023].ID = 4023;
T[4023].Name = "烟_雪茄";
T[4023].Type = 4;
T[4023].PriceType = 0;
T[4023].Price = 4500;
T[4023].PriceBeforeDiscount = 0;
T[4023].Time = 24;
T[4023].StorePosition = 4103;
T[4023].InfoVersion = 0;
T[4023].AddGem = 0;
T[4023].AddInteractiveItem = 0;
T[4023].AddSpeechItem = 0;
T[4023].DiscountBuyItem = 0;
T[4023].AddChip = 0;
T[4023].MinRandomChip = 0;
T[4023].MaxRandomChip = 0;
T[4024] = {};
T[4024].ID = 4024;
T[4024].Name = "烟_烟斗";
T[4024].Type = 4;
T[4024].PriceType = 0;
T[4024].Price = 4500;
T[4024].PriceBeforeDiscount = 0;
T[4024].Time = 24;
T[4024].StorePosition = 4104;
T[4024].InfoVersion = 0;
T[4024].AddGem = 0;
T[4024].AddInteractiveItem = 0;
T[4024].AddSpeechItem = 0;
T[4024].DiscountBuyItem = 0;
T[4024].AddChip = 0;
T[4024].MinRandomChip = 0;
T[4024].MaxRandomChip = 0;
T[4027] = {};
T[4027].ID = 4027;
T[4027].Name = "吉祥物_招财猫";
T[4027].Type = 4;
T[4027].PriceType = 0;
T[4027].Price = 6500;
T[4027].PriceBeforeDiscount = 0;
T[4027].Time = 24;
T[4027].StorePosition = 4108;
T[4027].InfoVersion = 0;
T[4027].AddGem = 0;
T[4027].AddInteractiveItem = 0;
T[4027].AddSpeechItem = 0;
T[4027].DiscountBuyItem = 0;
T[4027].AddChip = 0;
T[4027].MinRandomChip = 0;
T[4027].MaxRandomChip = 0;
T[4029] = {};
T[4029].ID = 4029;
T[4029].Name = "吉祥物_忠犬";
T[4029].Type = 4;
T[4029].PriceType = 0;
T[4029].Price = 6500;
T[4029].PriceBeforeDiscount = 0;
T[4029].Time = 24;
T[4029].StorePosition = 4109;
T[4029].InfoVersion = 0;
T[4029].AddGem = 0;
T[4029].AddInteractiveItem = 0;
T[4029].AddSpeechItem = 0;
T[4029].DiscountBuyItem = 0;
T[4029].AddChip = 0;
T[4029].MinRandomChip = 0;
T[4029].MaxRandomChip = 0;
T[4031] = {};
T[4031].ID = 4031;
T[4031].Name = "吉祥物_晴天娃娃";
T[4031].Type = 4;
T[4031].PriceType = 0;
T[4031].Price = 7500;
T[4031].PriceBeforeDiscount = 0;
T[4031].Time = 24;
T[4031].StorePosition = 4110;
T[4031].InfoVersion = 0;
T[4031].AddGem = 0;
T[4031].AddInteractiveItem = 0;
T[4031].AddSpeechItem = 0;
T[4031].DiscountBuyItem = 0;
T[4031].AddChip = 0;
T[4031].MinRandomChip = 0;
T[4031].MaxRandomChip = 0;
T[4038] = {};
T[4038].ID = 4038;
T[4038].Name = "饰品_手链";
T[4038].Type = 4;
T[4038].PriceType = 0;
T[4038].Price = 7500;
T[4038].PriceBeforeDiscount = 0;
T[4038].Time = 24;
T[4038].StorePosition = 4112;
T[4038].InfoVersion = 0;
T[4038].AddGem = 0;
T[4038].AddInteractiveItem = 0;
T[4038].AddSpeechItem = 0;
T[4038].DiscountBuyItem = 0;
T[4038].AddChip = 0;
T[4038].MinRandomChip = 0;
T[4038].MaxRandomChip = 0;
T[4039] = {};
T[4039].ID = 4039;
T[4039].Name = "饰品_铃铛";
T[4039].Type = 4;
T[4039].PriceType = 0;
T[4039].Price = 7500;
T[4039].PriceBeforeDiscount = 0;
T[4039].Time = 24;
T[4039].StorePosition = 4111;
T[4039].InfoVersion = 0;
T[4039].AddGem = 0;
T[4039].AddInteractiveItem = 0;
T[4039].AddSpeechItem = 0;
T[4039].DiscountBuyItem = 0;
T[4039].AddChip = 0;
T[4039].MinRandomChip = 0;
T[4039].MaxRandomChip = 0;
T[5001] = {};
T[5001].ID = 5001;
T[5001].Name = "VIP（白银）";
T[5001].Type = 5;
T[5001].PriceType = 0;
T[5001].Price = 0;
T[5001].PriceBeforeDiscount = 0;
T[5001].Time = 0;
T[5001].StorePosition = 0;
T[5001].InfoVersion = 0;
T[5001].AddGem = 0;
T[5001].AddInteractiveItem = 0;
T[5001].AddSpeechItem = 0;
T[5001].DiscountBuyItem = 100;
T[5001].AddChip = 0;
T[5001].MinRandomChip = 0;
T[5001].MaxRandomChip = 0;
T[5002] = {};
T[5002].ID = 5002;
T[5002].Name = "VIP（黄金）";
T[5002].Type = 5;
T[5002].PriceType = 0;
T[5002].Price = 0;
T[5002].PriceBeforeDiscount = 0;
T[5002].Time = 0;
T[5002].StorePosition = 0;
T[5002].InfoVersion = 0;
T[5002].AddGem = 0;
T[5002].AddInteractiveItem = 0;
T[5002].AddSpeechItem = 0;
T[5002].DiscountBuyItem = 95;
T[5002].AddChip = 0;
T[5002].MinRandomChip = 0;
T[5002].MaxRandomChip = 0;
T[5003] = {};
T[5003].ID = 5003;
T[5003].Name = "VIP（蓝钻）";
T[5003].Type = 5;
T[5003].PriceType = 0;
T[5003].Price = 0;
T[5003].PriceBeforeDiscount = 0;
T[5003].Time = 0;
T[5003].StorePosition = 0;
T[5003].InfoVersion = 0;
T[5003].AddGem = 0;
T[5003].AddInteractiveItem = 0;
T[5003].AddSpeechItem = 0;
T[5003].DiscountBuyItem = 90;
T[5003].AddChip = 0;
T[5003].MinRandomChip = 0;
T[5003].MaxRandomChip = 0;
T[5004] = {};
T[5004].ID = 5004;
T[5004].Name = "VIP（黑钻）";
T[5004].Type = 5;
T[5004].PriceType = 0;
T[5004].Price = 0;
T[5004].PriceBeforeDiscount = 0;
T[5004].Time = 0;
T[5004].StorePosition = 0;
T[5004].InfoVersion = 0;
T[5004].AddGem = 0;
T[5004].AddInteractiveItem = 0;
T[5004].AddSpeechItem = 0;
T[5004].DiscountBuyItem = 80;
T[5004].AddChip = 0;
T[5004].MinRandomChip = 0;
T[5004].MaxRandomChip = 0;
T[5005] = {};
T[5005].ID = 5005;
T[5005].Name = "VIP（至尊）";
T[5005].Type = 5;
T[5005].PriceType = 0;
T[5005].Price = 0;
T[5005].PriceBeforeDiscount = 0;
T[5005].Time = 0;
T[5005].StorePosition = 0;
T[5005].InfoVersion = 0;
T[5005].AddGem = 0;
T[5005].AddInteractiveItem = 0;
T[5005].AddSpeechItem = 0;
T[5005].DiscountBuyItem = 70;
T[5005].AddChip = 0;
T[5005].MinRandomChip = 0;
T[5005].MaxRandomChip = 0;
T[6001] = {};
T[6001].ID = 6001;
T[6001].Name = "互动道具";
T[6001].Type = 6;
T[6001].PriceType = 0;
T[6001].Price = 0;
T[6001].PriceBeforeDiscount = 0;
T[6001].Time = 0;
T[6001].StorePosition = 0;
T[6001].InfoVersion = 0;
T[6001].AddGem = 0;
T[6001].AddInteractiveItem = 0;
T[6001].AddSpeechItem = 0;
T[6001].DiscountBuyItem = 0;
T[6001].AddChip = 0;
T[6001].MinRandomChip = 0;
T[6001].MaxRandomChip = 0;
T[6002] = {};
T[6002].ID = 6002;
T[6002].Name = "语音聊天道具";
T[6002].Type = 6;
T[6002].PriceType = 0;
T[6002].Price = 0;
T[6002].PriceBeforeDiscount = 0;
T[6002].Time = 0;
T[6002].StorePosition = 0;
T[6002].InfoVersion = 0;
T[6002].AddGem = 0;
T[6002].AddInteractiveItem = 0;
T[6002].AddSpeechItem = 0;
T[6002].DiscountBuyItem = 0;
T[6002].AddChip = 0;
T[6002].MinRandomChip = 0;
T[6002].MaxRandomChip = 0;
T[6003] = {};
T[6003].ID = 6003;
T[6003].Name = "踢人卡";
T[6003].Type = 6;
T[6003].PriceType = 0;
T[6003].Price = 0;
T[6003].PriceBeforeDiscount = 0;
T[6003].Time = 0;
T[6003].StorePosition = 0;
T[6003].InfoVersion = 0;
T[6003].AddGem = 0;
T[6003].AddInteractiveItem = 0;
T[6003].AddSpeechItem = 0;
T[6003].DiscountBuyItem = 0;
T[6003].AddChip = 0;
T[6003].MinRandomChip = 0;
T[6003].MaxRandomChip = 0;
T[6004] = {};
T[6004].ID = 6004;
T[6004].Name = "锁房卡";
T[6004].Type = 6;
T[6004].PriceType = 0;
T[6004].Price = 0;
T[6004].PriceBeforeDiscount = 0;
T[6004].Time = 0;
T[6004].StorePosition = 0;
T[6004].InfoVersion = 0;
T[6004].AddGem = 0;
T[6004].AddInteractiveItem = 0;
T[6004].AddSpeechItem = 0;
T[6004].DiscountBuyItem = 0;
T[6004].AddChip = 0;
T[6004].MinRandomChip = 0;
T[6004].MaxRandomChip = 0;
T[6005] = {};
T[6005].ID = 6005;
T[6005].Name = "全服大喇叭";
T[6005].Type = 6;
T[6005].PriceType = 0;
T[6005].Price = 0;
T[6005].PriceBeforeDiscount = 0;
T[6005].Time = 0;
T[6005].StorePosition = 0;
T[6005].InfoVersion = 0;
T[6005].AddGem = 0;
T[6005].AddInteractiveItem = 0;
T[6005].AddSpeechItem = 0;
T[6005].DiscountBuyItem = 0;
T[6005].AddChip = 0;
T[6005].MinRandomChip = 0;
T[6005].MaxRandomChip = 0;
T[7001] = {};
T[7001].ID = 7001;
T[7001].Name = "小月卡";
T[7001].Type = 7;
T[7001].PriceType = 1;
T[7001].Price = 30;
T[7001].PriceBeforeDiscount = 0;
T[7001].Time = 720;
T[7001].StorePosition = 0;
T[7001].InfoVersion = 0;
T[7001].AddGem = 0;
T[7001].AddInteractiveItem = 0;
T[7001].AddSpeechItem = 0;
T[7001].DiscountBuyItem = 0;
T[7001].AddChip = 1e6;
T[7001].MinRandomChip = 15e4;
T[7001].MaxRandomChip = 2e5;
T[8001] = {};
T[8001].ID = 8001;
T[8001].Name = "小小兵";
T[8001].Type = 8;
T[8001].PriceType = 0;
T[8001].Price = 5e4;
T[8001].PriceBeforeDiscount = 0;
T[8001].Time = 72;
T[8001].StorePosition = 3109;
T[8001].InfoVersion = 0;
T[8001].AddGem = 0;
T[8001].AddInteractiveItem = 0;
T[8001].AddSpeechItem = 0;
T[8001].DiscountBuyItem = 0;
T[8001].AddChip = 0;
T[8001].MinRandomChip = 0;
T[8001].MaxRandomChip = 0;
T[8007] = {};
T[8007].ID = 8007;
T[8007].Name = "海盗";
T[8007].Type = 8;
T[8007].PriceType = 0;
T[8007].Price = 5e4;
T[8007].PriceBeforeDiscount = 0;
T[8007].Time = 72;
T[8007].StorePosition = 3110;
T[8007].InfoVersion = 0;
T[8007].AddGem = 0;
T[8007].AddInteractiveItem = 0;
T[8007].AddSpeechItem = 0;
T[8007].DiscountBuyItem = 0;
T[8007].AddChip = 0;
T[8007].MinRandomChip = 0;
T[8007].MaxRandomChip = 0;
T[8003] = {};
T[8003].ID = 8003;
T[8003].Name = "钢铁人";
T[8003].Type = 8;
T[8003].PriceType = 0;
T[8003].Price = 5e4;
T[8003].PriceBeforeDiscount = 0;
T[8003].Time = 72;
T[8003].StorePosition = 3111;
T[8003].InfoVersion = 0;
T[8003].AddGem = 0;
T[8003].AddInteractiveItem = 0;
T[8003].AddSpeechItem = 0;
T[8003].DiscountBuyItem = 0;
T[8003].AddChip = 0;
T[8003].MinRandomChip = 0;
T[8003].MaxRandomChip = 0;
T[8004] = {};
T[8004].ID = 8004;
T[8004].Name = "奇异博士";
T[8004].Type = 8;
T[8004].PriceType = 0;
T[8004].Price = 5e4;
T[8004].PriceBeforeDiscount = 0;
T[8004].Time = 72;
T[8004].StorePosition = 3112;
T[8004].InfoVersion = 0;
T[8004].AddGem = 0;
T[8004].AddInteractiveItem = 0;
T[8004].AddSpeechItem = 0;
T[8004].DiscountBuyItem = 0;
T[8004].AddChip = 0;
T[8004].MinRandomChip = 0;
T[8004].MaxRandomChip = 0;
T[8021] = {};
T[8021].ID = 8021;
T[8021].Name = "熊本熊";
T[8021].Type = 8;
T[8021].PriceType = 0;
T[8021].Price = 5e4;
T[8021].PriceBeforeDiscount = 0;
T[8021].Time = 72;
T[8021].StorePosition = 3108;
T[8021].InfoVersion = 0;
T[8021].AddGem = 0;
T[8021].AddInteractiveItem = 0;
T[8021].AddSpeechItem = 0;
T[8021].DiscountBuyItem = 0;
T[8021].AddChip = 0;
T[8021].MinRandomChip = 0;
T[8021].MaxRandomChip = 0;
T[8022] = {};
T[8022].ID = 8022;
T[8022].Name = "托尼乔巴";
T[8022].Type = 8;
T[8022].PriceType = 0;
T[8022].Price = 5e4;
T[8022].PriceBeforeDiscount = 0;
T[8022].Time = 72;
T[8022].StorePosition = 3103;
T[8022].InfoVersion = 0;
T[8022].AddGem = 0;
T[8022].AddInteractiveItem = 0;
T[8022].AddSpeechItem = 0;
T[8022].DiscountBuyItem = 0;
T[8022].AddChip = 0;
T[8022].MinRandomChip = 0;
T[8022].MaxRandomChip = 0;
T[8023] = {};
T[8023].ID = 8023;
T[8023].Name = "美少女战士";
T[8023].Type = 8;
T[8023].PriceType = 0;
T[8023].Price = 5e4;
T[8023].PriceBeforeDiscount = 0;
T[8023].Time = 72;
T[8023].StorePosition = 3104;
T[8023].InfoVersion = 0;
T[8023].AddGem = 0;
T[8023].AddInteractiveItem = 0;
T[8023].AddSpeechItem = 0;
T[8023].DiscountBuyItem = 0;
T[8023].AddChip = 0;
T[8023].MinRandomChip = 0;
T[8023].MaxRandomChip = 0;
T[8024] = {};
T[8024].ID = 8024;
T[8024].Name = "小兔子";
T[8024].Type = 8;
T[8024].PriceType = 0;
T[8024].Price = 5e4;
T[8024].PriceBeforeDiscount = 0;
T[8024].Time = 72;
T[8024].StorePosition = 3107;
T[8024].InfoVersion = 0;
T[8024].AddGem = 0;
T[8024].AddInteractiveItem = 0;
T[8024].AddSpeechItem = 0;
T[8024].DiscountBuyItem = 0;
T[8024].AddChip = 0;
T[8024].MinRandomChip = 0;
T[8024].MaxRandomChip = 0;
T[8025] = {};
T[8025].ID = 8025;
T[8025].Name = "猫猫";
T[8025].Type = 8;
T[8025].PriceType = 0;
T[8025].Price = 5e4;
T[8025].PriceBeforeDiscount = 0;
T[8025].Time = 72;
T[8025].StorePosition = 3106;
T[8025].InfoVersion = 0;
T[8025].AddGem = 0;
T[8025].AddInteractiveItem = 0;
T[8025].AddSpeechItem = 0;
T[8025].DiscountBuyItem = 0;
T[8025].AddChip = 0;
T[8025].MinRandomChip = 0;
T[8025].MaxRandomChip = 0;
T[8026] = {};
T[8026].ID = 8026;
T[8026].Name = "仓鼠";
T[8026].Type = 8;
T[8026].PriceType = 0;
T[8026].Price = 5e4;
T[8026].PriceBeforeDiscount = 0;
T[8026].Time = 72;
T[8026].StorePosition = 3105;
T[8026].InfoVersion = 0;
T[8026].AddGem = 0;
T[8026].AddInteractiveItem = 0;
T[8026].AddSpeechItem = 0;
T[8026].DiscountBuyItem = 0;
T[8026].AddChip = 0;
T[8026].MinRandomChip = 0;
T[8026].MaxRandomChip = 0;
T[8027] = {};
T[8027].ID = 8027;
T[8027].Name = "水灯节free";
T[8027].Type = 8;
T[8027].PriceType = 0;
T[8027].Price = 5e4;
T[8027].PriceBeforeDiscount = 0;
T[8027].Time = 168;
T[8027].StorePosition = 0;
T[8027].InfoVersion = 0;
T[8027].AddGem = 0;
T[8027].AddInteractiveItem = 0;
T[8027].AddSpeechItem = 0;
T[8027].DiscountBuyItem = 0;
T[8027].AddChip = 0;
T[8027].MinRandomChip = 0;
T[8027].MaxRandomChip = 0;
T[8028] = {};
T[8028].ID = 8028;
T[8028].Name = "水灯节";
T[8028].Type = 8;
T[8028].PriceType = 0;
T[8028].Price = 1e5;
T[8028].PriceBeforeDiscount = 0;
T[8028].Time = 72;
T[8028].StorePosition = 3113;
T[8028].InfoVersion = 0;
T[8028].AddGem = 0;
T[8028].AddInteractiveItem = 0;
T[8028].AddSpeechItem = 0;
T[8028].DiscountBuyItem = 0;
T[8028].AddChip = 0;
T[8028].MinRandomChip = 0;
T[8028].MaxRandomChip = 0;
T[8029] = {};
T[8029].ID = 8029;
T[8029].Name = "黄金";
T[8029].Type = 8;
T[8029].PriceType = 0;
T[8029].Price = 1e5;
T[8029].PriceBeforeDiscount = 0;
T[8029].Time = 72;
T[8029].StorePosition = 3114;
T[8029].InfoVersion = 0;
T[8029].AddGem = 0;
T[8029].AddInteractiveItem = 0;
T[8029].AddSpeechItem = 0;
T[8029].DiscountBuyItem = 0;
T[8029].AddChip = 0;
T[8029].MinRandomChip = 0;
T[8029].MaxRandomChip = 0;
T[8030] = {};
T[8030].ID = 8030;
T[8030].Name = "天空";
T[8030].Type = 8;
T[8030].PriceType = 0;
T[8030].Price = 1e5;
T[8030].PriceBeforeDiscount = 0;
T[8030].Time = 72;
T[8030].StorePosition = 3115;
T[8030].InfoVersion = 0;
T[8030].AddGem = 0;
T[8030].AddInteractiveItem = 0;
T[8030].AddSpeechItem = 0;
T[8030].DiscountBuyItem = 0;
T[8030].AddChip = 0;
T[8030].MinRandomChip = 0;
T[8030].MaxRandomChip = 0;
T[8031] = {};
T[8031].ID = 8031;
T[8031].Name = "魔卡小樱";
T[8031].Type = 8;
T[8031].PriceType = 0;
T[8031].Price = 1e5;
T[8031].PriceBeforeDiscount = 0;
T[8031].Time = 72;
T[8031].StorePosition = 3116;
T[8031].InfoVersion = 0;
T[8031].AddGem = 0;
T[8031].AddInteractiveItem = 0;
T[8031].AddSpeechItem = 0;
T[8031].DiscountBuyItem = 0;
T[8031].AddChip = 0;
T[8031].MinRandomChip = 0;
T[8031].MaxRandomChip = 0;
T[8032] = {};
T[8032].ID = 8032;
T[8032].Name = "可乐罐";
T[8032].Type = 8;
T[8032].PriceType = 0;
T[8032].Price = 1e5;
T[8032].PriceBeforeDiscount = 0;
T[8032].Time = 72;
T[8032].StorePosition = 3117;
T[8032].InfoVersion = 0;
T[8032].AddGem = 0;
T[8032].AddInteractiveItem = 0;
T[8032].AddSpeechItem = 0;
T[8032].DiscountBuyItem = 0;
T[8032].AddChip = 0;
T[8032].MinRandomChip = 0;
T[8032].MaxRandomChip = 0;
T[8033] = {};
T[8033].ID = 8033;
T[8033].Name = "Jinglebells";
T[8033].Type = 8;
T[8033].PriceType = 0;
T[8033].Price = 1e5;
T[8033].PriceBeforeDiscount = 0;
T[8033].Time = 72;
T[8033].StorePosition = 0;
T[8033].InfoVersion = 0;
T[8033].AddGem = 0;
T[8033].AddInteractiveItem = 0;
T[8033].AddSpeechItem = 0;
T[8033].DiscountBuyItem = 0;
T[8033].AddChip = 0;
T[8033].MinRandomChip = 0;
T[8033].MaxRandomChip = 0;
T[8034] = {};
T[8034].ID = 8034;
T[8034].Name = "圣诞帽";
T[8034].Type = 8;
T[8034].PriceType = 0;
T[8034].Price = 1e5;
T[8034].PriceBeforeDiscount = 0;
T[8034].Time = 72;
T[8034].StorePosition = 0;
T[8034].InfoVersion = 0;
T[8034].AddGem = 0;
T[8034].AddInteractiveItem = 0;
T[8034].AddSpeechItem = 0;
T[8034].DiscountBuyItem = 0;
T[8034].AddChip = 0;
T[8034].MinRandomChip = 0;
T[8034].MaxRandomChip = 0;
T[8035] = {};
T[8035].ID = 8035;
T[8035].Name = "元旦节";
T[8035].Type = 8;
T[8035].PriceType = 0;
T[8035].Price = 1e5;
T[8035].PriceBeforeDiscount = 0;
T[8035].Time = 72;
T[8035].StorePosition = 3102;
T[8035].InfoVersion = 0;
T[8035].AddGem = 0;
T[8035].AddInteractiveItem = 0;
T[8035].AddSpeechItem = 0;
T[8035].DiscountBuyItem = 0;
T[8035].AddChip = 0;
T[8035].MinRandomChip = 0;
T[8035].MaxRandomChip = 0;
T[8036] = {};
T[8036].ID = 8036;
T[8036].Name = "宋干节";
T[8036].Type = 8;
T[8036].PriceType = 0;
T[8036].Price = 1e4;
T[8036].PriceBeforeDiscount = 0;
T[8036].Time = 168;
T[8036].StorePosition = 3101;
T[8036].InfoVersion = 0;
T[8036].AddGem = 0;
T[8036].AddInteractiveItem = 0;
T[8036].AddSpeechItem = 0;
T[8036].DiscountBuyItem = 0;
T[8036].AddChip = 0;
T[8036].MinRandomChip = 0;
T[8036].MaxRandomChip = 0;
T[8037] = {};
T[8037].ID = 8037;
T[8037].Name = "四周年";
T[8037].Type = 8;
T[8037].PriceType = 0;
T[8037].Price = 1e4;
T[8037].PriceBeforeDiscount = 0;
T[8037].Time = 1e3;
T[8037].StorePosition = 0;
T[8037].InfoVersion = 0;
T[8037].AddGem = 0;
T[8037].AddInteractiveItem = 0;
T[8037].AddSpeechItem = 0;
T[8037].DiscountBuyItem = 0;
T[8037].AddChip = 0;
T[8037].MinRandomChip = 0;
T[8037].MaxRandomChip = 0;
T[8038] = {};
T[8038].ID = 8038;
T[8038].Name = "万圣节男";
T[8038].Type = 8;
T[8038].PriceType = 0;
T[8038].Price = 1e4;
T[8038].PriceBeforeDiscount = 0;
T[8038].Time = 168;
T[8038].StorePosition = 0;
T[8038].InfoVersion = 0;
T[8038].AddGem = 0;
T[8038].AddInteractiveItem = 0;
T[8038].AddSpeechItem = 0;
T[8038].DiscountBuyItem = 0;
T[8038].AddChip = 0;
T[8038].MinRandomChip = 0;
T[8038].MaxRandomChip = 0;
T[8039] = {};
T[8039].ID = 8039;
T[8039].Name = "万圣节女";
T[8039].Type = 8;
T[8039].PriceType = 0;
T[8039].Price = 1e4;
T[8039].PriceBeforeDiscount = 0;
T[8039].Time = 168;
T[8039].StorePosition = 0;
T[8039].InfoVersion = 0;
T[8039].AddGem = 0;
T[8039].AddInteractiveItem = 0;
T[8039].AddSpeechItem = 0;
T[8039].DiscountBuyItem = 0;
T[8039].AddChip = 0;
T[8039].MinRandomChip = 0;
T[8039].MaxRandomChip = 0;
T[8040] = {};
T[8040].ID = 8040;
T[8040].Name = "dummy皮肤";
T[8040].Type = 8;
T[8040].PriceType = 0;
T[8040].Price = 1e4;
T[8040].PriceBeforeDiscount = 0;
T[8040].Time = 168;
T[8040].StorePosition = 0;
T[8040].InfoVersion = 0;
T[8040].AddGem = 0;
T[8040].AddInteractiveItem = 0;
T[8040].AddSpeechItem = 0;
T[8040].DiscountBuyItem = 0;
T[8040].AddChip = 0;
T[8040].MinRandomChip = 0;
T[8040].MaxRandomChip = 0;
T[8041] = {};
T[8041].ID = 8041;
T[8041].Name = "圣诞动态皮肤";
T[8041].Type = 8;
T[8041].PriceType = 0;
T[8041].Price = 1e4;
T[8041].PriceBeforeDiscount = 0;
T[8041].Time = 168;
T[8041].StorePosition = 0;
T[8041].InfoVersion = 0;
T[8041].AddGem = 0;
T[8041].AddInteractiveItem = 0;
T[8041].AddSpeechItem = 0;
T[8041].DiscountBuyItem = 0;
T[8041].AddChip = 0;
T[8041].MinRandomChip = 0;
T[8041].MaxRandomChip = 0;
T[8042] = {};
T[8042].ID = 8042;
T[8042].Name = "2020年";
T[8042].Type = 8;
T[8042].PriceType = 0;
T[8042].Price = 1e5;
T[8042].PriceBeforeDiscount = 0;
T[8042].Time = 72;
T[8042].StorePosition = 3100;
T[8042].InfoVersion = 0;
T[8042].AddGem = 0;
T[8042].AddInteractiveItem = 0;
T[8042].AddSpeechItem = 0;
T[8042].DiscountBuyItem = 0;
T[8042].AddChip = 0;
T[8042].MinRandomChip = 0;
T[8042].MaxRandomChip = 0;
T[8043] = {};
T[8043].ID = 8043;
T[8043].Name = "2020春节活动皮肤";
T[8043].Type = 8;
T[8043].PriceType = 0;
T[8043].Price = 1e5;
T[8043].PriceBeforeDiscount = 0;
T[8043].Time = 168;
T[8043].StorePosition = 0;
T[8043].InfoVersion = 0;
T[8043].AddGem = 0;
T[8043].AddInteractiveItem = 0;
T[8043].AddSpeechItem = 0;
T[8043].DiscountBuyItem = 0;
T[8043].AddChip = 0;
T[8043].MinRandomChip = 0;
T[8043].MaxRandomChip = 0;
_.exports = T;
cc._RF.pop();
}, {} ],
DevicesAndroid: [ function(e, _, t) {
"use strict";
cc._RF.push(_, "76007bwrn9IE5i9lxVbGD0F", "DevicesAndroid");
var T = "com/casino/game/ApplicationUtil", S = {
getDevicesID: function() {
return jsb.reflection.callStaticMethod(T, "getDeviceIdentifier", "()Ljava/lang/String;");
},
getAppVersion: function() {
return jsb.reflection.callStaticMethod(T, "getApplicationVersion", "()Ljava/lang/String;");
}
};
_.exports = S;
cc._RF.pop();
}, {} ],
DevicesIos: [ function(e, _, t) {
"use strict";
cc._RF.push(_, "6e0f94nMBRI+ZIyjS7/Emyg", "DevicesIos");
var T = {
getDevicesID: function() {
cc.log("TODO DevicesIos getDevicesID");
return "123";
},
getAppVersion: function() {
cc.log("TODO DevicesIos getAppVersion");
return "1.3.0";
}
};
_.exports = T;
cc._RF.pop();
}, {} ],
DevicesWeb: [ function(e, _, t) {
"use strict";
cc._RF.push(_, "1f7d1OvDdhKb6+AnPj2Q80P", "DevicesWeb");
var T = {
getDevicesID: function() {
var e = new Date().getTime(), _ = window.Save.get("decicesID", e);
_ == e && window.Save.set("decicesID", e);
return _;
},
getAppVersion: function() {
return "1.3.0";
}
};
_.exports = T;
cc._RF.pop();
}, {} ],
Devices: [ function(e, _, t) {
"use strict";
cc._RF.push(_, "cd548Gn7o1Afas1wT6k6Lak", "Devices");
var T = {
instance: void 0,
getDevicesID: function() {
return this.instance.getDevicesID();
},
getAppVersion: function() {
return this.instance.getAppVersion();
}
};
T.instance = e("DevicesWeb");
cc.sys.isBrowser ? T.instance = e("DevicesWeb") : cc.sys.isNative && cc.sys.os == cc.sys.OS_ANDROID ? T.instance = e("DevicesAndroid") : cc.sys.isNative && cc.sys.os == cc.sys.OS_IOS && (T.instance = e("DevicesIos"));
_.exports = T;
cc._RF.pop();
}, {
DevicesAndroid: "DevicesAndroid",
DevicesIos: "DevicesIos",
DevicesWeb: "DevicesWeb"
} ],
1: [ function(e, _, t) {
"use strict";
t.byteLength = function(e) {
var _ = R(e), t = _[0], T = _[1];
return 3 * (t + T) / 4 - T;
};
t.toByteArray = function(e) {
var _, t, T = R(e), i = T[0], o = T[1], E = new n(r(e, i, o)), s = 0, I = o > 0 ? i - 4 : i;
for (t = 0; t < I; t += 4) {
_ = S[e.charCodeAt(t)] << 18 | S[e.charCodeAt(t + 1)] << 12 | S[e.charCodeAt(t + 2)] << 6 | S[e.charCodeAt(t + 3)];
E[s++] = _ >> 16 & 255;
E[s++] = _ >> 8 & 255;
E[s++] = 255 & _;
}
if (2 === o) {
_ = S[e.charCodeAt(t)] << 2 | S[e.charCodeAt(t + 1)] >> 4;
E[s++] = 255 & _;
}
if (1 === o) {
_ = S[e.charCodeAt(t)] << 10 | S[e.charCodeAt(t + 1)] << 4 | S[e.charCodeAt(t + 2)] >> 2;
E[s++] = _ >> 8 & 255;
E[s++] = 255 & _;
}
return E;
};
t.fromByteArray = function(e) {
for (var _, t = e.length, S = t % 3, n = [], i = 0, o = t - S; i < o; i += 16383) n.push(I(e, i, i + 16383 > o ? o : i + 16383));
if (1 === S) {
_ = e[t - 1];
n.push(T[_ >> 2] + T[_ << 4 & 63] + "==");
} else if (2 === S) {
_ = (e[t - 2] << 8) + e[t - 1];
n.push(T[_ >> 10] + T[_ >> 4 & 63] + T[_ << 2 & 63] + "=");
}
return n.join("");
};
for (var T = [], S = [], n = "undefined" != typeof Uint8Array ? Uint8Array : Array, i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", o = 0, E = i.length; o < E; ++o) {
T[o] = i[o];
S[i.charCodeAt(o)] = o;
}
S["-".charCodeAt(0)] = 62;
S["_".charCodeAt(0)] = 63;
function R(e) {
var _ = e.length;
if (_ % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
var t = e.indexOf("=");
-1 === t && (t = _);
return [ t, t === _ ? 0 : 4 - t % 4 ];
}
function r(e, _, t) {
return 3 * (_ + t) / 4 - t;
}
function s(e) {
return T[e >> 18 & 63] + T[e >> 12 & 63] + T[e >> 6 & 63] + T[63 & e];
}
function I(e, _, t) {
for (var T, S = [], n = _; n < t; n += 3) {
T = (e[n] << 16 & 16711680) + (e[n + 1] << 8 & 65280) + (255 & e[n + 2]);
S.push(s(T));
}
return S.join("");
}
}, {} ],
2: [ function(e, _, t) {
(function(_) {
"use strict";
var T = e("base64-js"), S = e("ieee754"), n = e("isarray");
t.Buffer = E;
t.SlowBuffer = function(e) {
+e != e && (e = 0);
return E.alloc(+e);
};
t.INSPECT_MAX_BYTES = 50;
E.TYPED_ARRAY_SUPPORT = void 0 !== _.TYPED_ARRAY_SUPPORT ? _.TYPED_ARRAY_SUPPORT : function() {
try {
var e = new Uint8Array(1);
e.__proto__ = {
__proto__: Uint8Array.prototype,
foo: function() {
return 42;
}
};
return 42 === e.foo() && "function" == typeof e.subarray && 0 === e.subarray(1, 1).byteLength;
} catch (e) {
return !1;
}
}();
t.kMaxLength = i();
function i() {
return E.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
}
function o(e, _) {
if (i() < _) throw new RangeError("Invalid typed array length");
if (E.TYPED_ARRAY_SUPPORT) (e = new Uint8Array(_)).__proto__ = E.prototype; else {
null === e && (e = new E(_));
e.length = _;
}
return e;
}
function E(e, _, t) {
if (!(E.TYPED_ARRAY_SUPPORT || this instanceof E)) return new E(e, _, t);
if ("number" == typeof e) {
if ("string" == typeof _) throw new Error("If encoding is specified then the first argument must be a string");
return I(this, e);
}
return R(this, e, _, t);
}
E.poolSize = 8192;
E._augment = function(e) {
e.__proto__ = E.prototype;
return e;
};
function R(e, _, t, T) {
if ("number" == typeof _) throw new TypeError('"value" argument must not be a number');
return "undefined" != typeof ArrayBuffer && _ instanceof ArrayBuffer ? N(e, _, t, T) : "string" == typeof _ ? a(e, _, t) : C(e, _);
}
E.from = function(e, _, t) {
return R(null, e, _, t);
};
if (E.TYPED_ARRAY_SUPPORT) {
E.prototype.__proto__ = Uint8Array.prototype;
E.__proto__ = Uint8Array;
"undefined" != typeof Symbol && Symbol.species && E[Symbol.species] === E && Object.defineProperty(E, Symbol.species, {
value: null,
configurable: !0
});
}
function r(e) {
if ("number" != typeof e) throw new TypeError('"size" argument must be a number');
if (e < 0) throw new RangeError('"size" argument must not be negative');
}
function s(e, _, t, T) {
r(_);
return _ <= 0 ? o(e, _) : void 0 !== t ? "string" == typeof T ? o(e, _).fill(t, T) : o(e, _).fill(t) : o(e, _);
}
E.alloc = function(e, _, t) {
return s(null, e, _, t);
};
function I(e, _) {
r(_);
e = o(e, _ < 0 ? 0 : 0 | A(_));
if (!E.TYPED_ARRAY_SUPPORT) for (var t = 0; t < _; ++t) e[t] = 0;
return e;
}
E.allocUnsafe = function(e) {
return I(null, e);
};
E.allocUnsafeSlow = function(e) {
return I(null, e);
};
function a(e, _, t) {
"string" == typeof t && "" !== t || (t = "utf8");
if (!E.isEncoding(t)) throw new TypeError('"encoding" must be a valid string encoding');
var T = 0 | O(_, t), S = (e = o(e, T)).write(_, t);
S !== T && (e = e.slice(0, S));
return e;
}
function c(e, _) {
var t = _.length < 0 ? 0 : 0 | A(_.length);
e = o(e, t);
for (var T = 0; T < t; T += 1) e[T] = 255 & _[T];
return e;
}
function N(e, _, t, T) {
_.byteLength;
if (t < 0 || _.byteLength < t) throw new RangeError("'offset' is out of bounds");
if (_.byteLength < t + (T || 0)) throw new RangeError("'length' is out of bounds");
_ = void 0 === t && void 0 === T ? new Uint8Array(_) : void 0 === T ? new Uint8Array(_, t) : new Uint8Array(_, t, T);
E.TYPED_ARRAY_SUPPORT ? (e = _).__proto__ = E.prototype : e = c(e, _);
return e;
}
function C(e, _) {
if (E.isBuffer(_)) {
var t = 0 | A(_.length);
if (0 === (e = o(e, t)).length) return e;
_.copy(e, 0, 0, t);
return e;
}
if (_) {
if ("undefined" != typeof ArrayBuffer && _.buffer instanceof ArrayBuffer || "length" in _) return "number" != typeof _.length || $(_.length) ? o(e, 0) : c(e, _);
if ("Buffer" === _.type && n(_.data)) return c(e, _.data);
}
throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
}
function A(e) {
if (e >= i()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + i().toString(16) + " bytes");
return 0 | e;
}
E.isBuffer = function(e) {
return !(null == e || !e._isBuffer);
};
E.compare = function(e, _) {
if (!E.isBuffer(e) || !E.isBuffer(_)) throw new TypeError("Arguments must be Buffers");
if (e === _) return 0;
for (var t = e.length, T = _.length, S = 0, n = Math.min(t, T); S < n; ++S) if (e[S] !== _[S]) {
t = e[S];
T = _[S];
break;
}
return t < T ? -1 : T < t ? 1 : 0;
};
E.isEncoding = function(e) {
switch (String(e).toLowerCase()) {
case "hex":
case "utf8":
case "utf-8":
case "ascii":
case "latin1":
case "binary":
case "base64":
case "ucs2":
case "ucs-2":
case "utf16le":
case "utf-16le":
return !0;

default:
return !1;
}
};
E.concat = function(e, _) {
if (!n(e)) throw new TypeError('"list" argument must be an Array of Buffers');
if (0 === e.length) return E.alloc(0);
var t;
if (void 0 === _) {
_ = 0;
for (t = 0; t < e.length; ++t) _ += e[t].length;
}
var T = E.allocUnsafe(_), S = 0;
for (t = 0; t < e.length; ++t) {
var i = e[t];
if (!E.isBuffer(i)) throw new TypeError('"list" argument must be an Array of Buffers');
i.copy(T, S);
S += i.length;
}
return T;
};
function O(e, _) {
if (E.isBuffer(e)) return e.length;
if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)) return e.byteLength;
"string" != typeof e && (e = "" + e);
var t = e.length;
if (0 === t) return 0;
for (var T = !1; ;) switch (_) {
case "ascii":
case "latin1":
case "binary":
return t;

case "utf8":
case "utf-8":
case void 0:
return X(e).length;

case "ucs2":
case "ucs-2":
case "utf16le":
case "utf-16le":
return 2 * t;

case "hex":
return t >>> 1;

case "base64":
return J(e).length;

default:
if (T) return X(e).length;
_ = ("" + _).toLowerCase();
T = !0;
}
}
E.byteLength = O;
function d(e, _, t) {
var T = !1;
(void 0 === _ || _ < 0) && (_ = 0);
if (_ > this.length) return "";
(void 0 === t || t > this.length) && (t = this.length);
if (t <= 0) return "";
if ((t >>>= 0) <= (_ >>>= 0)) return "";
e || (e = "utf8");
for (;;) switch (e) {
case "hex":
return F(this, _, t);

case "utf8":
case "utf-8":
return m(this, _, t);

case "ascii":
return H(this, _, t);

case "latin1":
case "binary":
return y(this, _, t);

case "base64":
return V(this, _, t);

case "ucs2":
case "ucs-2":
case "utf16le":
case "utf-16le":
return G(this, _, t);

default:
if (T) throw new TypeError("Unknown encoding: " + e);
e = (e + "").toLowerCase();
T = !0;
}
}
E.prototype._isBuffer = !0;
function h(e, _, t) {
var T = e[_];
e[_] = e[t];
e[t] = T;
}
E.prototype.swap16 = function() {
var e = this.length;
if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
for (var _ = 0; _ < e; _ += 2) h(this, _, _ + 1);
return this;
};
E.prototype.swap32 = function() {
var e = this.length;
if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
for (var _ = 0; _ < e; _ += 4) {
h(this, _, _ + 3);
h(this, _ + 1, _ + 2);
}
return this;
};
E.prototype.swap64 = function() {
var e = this.length;
if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
for (var _ = 0; _ < e; _ += 8) {
h(this, _, _ + 7);
h(this, _ + 1, _ + 6);
h(this, _ + 2, _ + 5);
h(this, _ + 3, _ + 4);
}
return this;
};
E.prototype.toString = function() {
var e = 0 | this.length;
return 0 === e ? "" : 0 === arguments.length ? m(this, 0, e) : d.apply(this, arguments);
};
E.prototype.equals = function(e) {
if (!E.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
return this === e || 0 === E.compare(this, e);
};
E.prototype.inspect = function() {
var e = "", _ = t.INSPECT_MAX_BYTES;
if (this.length > 0) {
e = this.toString("hex", 0, _).match(/.{2}/g).join(" ");
this.length > _ && (e += " ... ");
}
return "<Buffer " + e + ">";
};
E.prototype.compare = function(e, _, t, T, S) {
if (!E.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
void 0 === _ && (_ = 0);
void 0 === t && (t = e ? e.length : 0);
void 0 === T && (T = 0);
void 0 === S && (S = this.length);
if (_ < 0 || t > e.length || T < 0 || S > this.length) throw new RangeError("out of range index");
if (T >= S && _ >= t) return 0;
if (T >= S) return -1;
if (_ >= t) return 1;
_ >>>= 0;
t >>>= 0;
T >>>= 0;
S >>>= 0;
if (this === e) return 0;
for (var n = S - T, i = t - _, o = Math.min(n, i), R = this.slice(T, S), r = e.slice(_, t), s = 0; s < o; ++s) if (R[s] !== r[s]) {
n = R[s];
i = r[s];
break;
}
return n < i ? -1 : i < n ? 1 : 0;
};
function l(e, _, t, T, S) {
if (0 === e.length) return -1;
if ("string" == typeof t) {
T = t;
t = 0;
} else t > 2147483647 ? t = 2147483647 : t < -2147483648 && (t = -2147483648);
t = +t;
isNaN(t) && (t = S ? 0 : e.length - 1);
t < 0 && (t = e.length + t);
if (t >= e.length) {
if (S) return -1;
t = e.length - 1;
} else if (t < 0) {
if (!S) return -1;
t = 0;
}
"string" == typeof _ && (_ = E.from(_, T));
if (E.isBuffer(_)) return 0 === _.length ? -1 : D(e, _, t, T, S);
if ("number" == typeof _) {
_ &= 255;
return E.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? S ? Uint8Array.prototype.indexOf.call(e, _, t) : Uint8Array.prototype.lastIndexOf.call(e, _, t) : D(e, [ _ ], t, T, S);
}
throw new TypeError("val must be string, number or Buffer");
}
function D(e, _, t, T, S) {
var n, i = 1, o = e.length, E = _.length;
if (void 0 !== T && ("ucs2" === (T = String(T).toLowerCase()) || "ucs-2" === T || "utf16le" === T || "utf-16le" === T)) {
if (e.length < 2 || _.length < 2) return -1;
i = 2;
o /= 2;
E /= 2;
t /= 2;
}
function R(e, _) {
return 1 === i ? e[_] : e.readUInt16BE(_ * i);
}
if (S) {
var r = -1;
for (n = t; n < o; n++) if (R(e, n) === R(_, -1 === r ? 0 : n - r)) {
-1 === r && (r = n);
if (n - r + 1 === E) return r * i;
} else {
-1 !== r && (n -= n - r);
r = -1;
}
} else {
t + E > o && (t = o - E);
for (n = t; n >= 0; n--) {
for (var s = !0, I = 0; I < E; I++) if (R(e, n + I) !== R(_, I)) {
s = !1;
break;
}
if (s) return n;
}
}
return -1;
}
E.prototype.includes = function(e, _, t) {
return -1 !== this.indexOf(e, _, t);
};
E.prototype.indexOf = function(e, _, t) {
return l(this, e, _, t, !0);
};
E.prototype.lastIndexOf = function(e, _, t) {
return l(this, e, _, t, !1);
};
function u(e, _, t, T) {
t = Number(t) || 0;
var S = e.length - t;
T ? (T = Number(T)) > S && (T = S) : T = S;
var n = _.length;
if (n % 2 != 0) throw new TypeError("Invalid hex string");
T > n / 2 && (T = n / 2);
for (var i = 0; i < T; ++i) {
var o = parseInt(_.substr(2 * i, 2), 16);
if (isNaN(o)) return i;
e[t + i] = o;
}
return i;
}
function p(e, _, t, T) {
return Z(X(_, e.length - t), e, t, T);
}
function f(e, _, t, T) {
return Z(z(_), e, t, T);
}
function M(e, _, t, T) {
return f(e, _, t, T);
}
function P(e, _, t, T) {
return Z(J(_), e, t, T);
}
function L(e, _, t, T) {
return Z(q(_, e.length - t), e, t, T);
}
E.prototype.write = function(e, _, t, T) {
if (void 0 === _) {
T = "utf8";
t = this.length;
_ = 0;
} else if (void 0 === t && "string" == typeof _) {
T = _;
t = this.length;
_ = 0;
} else {
if (!isFinite(_)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
_ |= 0;
if (isFinite(t)) {
t |= 0;
void 0 === T && (T = "utf8");
} else {
T = t;
t = void 0;
}
}
var S = this.length - _;
(void 0 === t || t > S) && (t = S);
if (e.length > 0 && (t < 0 || _ < 0) || _ > this.length) throw new RangeError("Attempt to write outside buffer bounds");
T || (T = "utf8");
for (var n = !1; ;) switch (T) {
case "hex":
return u(this, e, _, t);

case "utf8":
case "utf-8":
return p(this, e, _, t);

case "ascii":
return f(this, e, _, t);

case "latin1":
case "binary":
return M(this, e, _, t);

case "base64":
return P(this, e, _, t);

case "ucs2":
case "ucs-2":
case "utf16le":
case "utf-16le":
return L(this, e, _, t);

default:
if (n) throw new TypeError("Unknown encoding: " + T);
T = ("" + T).toLowerCase();
n = !0;
}
};
E.prototype.toJSON = function() {
return {
type: "Buffer",
data: Array.prototype.slice.call(this._arr || this, 0)
};
};
function V(e, _, t) {
return 0 === _ && t === e.length ? T.fromByteArray(e) : T.fromByteArray(e.slice(_, t));
}
function m(e, _, t) {
t = Math.min(e.length, t);
for (var T = [], S = _; S < t; ) {
var n = e[S], i = null, o = n > 239 ? 4 : n > 223 ? 3 : n > 191 ? 2 : 1;
if (S + o <= t) {
var E, R, r, s;
switch (o) {
case 1:
n < 128 && (i = n);
break;

case 2:
128 == (192 & (E = e[S + 1])) && (s = (31 & n) << 6 | 63 & E) > 127 && (i = s);
break;

case 3:
E = e[S + 1];
R = e[S + 2];
128 == (192 & E) && 128 == (192 & R) && (s = (15 & n) << 12 | (63 & E) << 6 | 63 & R) > 2047 && (s < 55296 || s > 57343) && (i = s);
break;

case 4:
E = e[S + 1];
R = e[S + 2];
r = e[S + 3];
128 == (192 & E) && 128 == (192 & R) && 128 == (192 & r) && (s = (15 & n) << 18 | (63 & E) << 12 | (63 & R) << 6 | 63 & r) > 65535 && s < 1114112 && (i = s);
}
}
if (null === i) {
i = 65533;
o = 1;
} else if (i > 65535) {
i -= 65536;
T.push(i >>> 10 & 1023 | 55296);
i = 56320 | 1023 & i;
}
T.push(i);
S += o;
}
return U(T);
}
var g = 4096;
function U(e) {
var _ = e.length;
if (_ <= g) return String.fromCharCode.apply(String, e);
for (var t = "", T = 0; T < _; ) t += String.fromCharCode.apply(String, e.slice(T, T += g));
return t;
}
function H(e, _, t) {
var T = "";
t = Math.min(e.length, t);
for (var S = _; S < t; ++S) T += String.fromCharCode(127 & e[S]);
return T;
}
function y(e, _, t) {
var T = "";
t = Math.min(e.length, t);
for (var S = _; S < t; ++S) T += String.fromCharCode(e[S]);
return T;
}
function F(e, _, t) {
var T = e.length;
(!_ || _ < 0) && (_ = 0);
(!t || t < 0 || t > T) && (t = T);
for (var S = "", n = _; n < t; ++n) S += j(e[n]);
return S;
}
function G(e, _, t) {
for (var T = e.slice(_, t), S = "", n = 0; n < T.length; n += 2) S += String.fromCharCode(T[n] + 256 * T[n + 1]);
return S;
}
E.prototype.slice = function(e, _) {
var t, T = this.length;
e = ~~e;
_ = void 0 === _ ? T : ~~_;
e < 0 ? (e += T) < 0 && (e = 0) : e > T && (e = T);
_ < 0 ? (_ += T) < 0 && (_ = 0) : _ > T && (_ = T);
_ < e && (_ = e);
if (E.TYPED_ARRAY_SUPPORT) (t = this.subarray(e, _)).__proto__ = E.prototype; else {
var S = _ - e;
t = new E(S, void 0);
for (var n = 0; n < S; ++n) t[n] = this[n + e];
}
return t;
};
function w(e, _, t) {
if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
if (e + _ > t) throw new RangeError("Trying to access beyond buffer length");
}
E.prototype.readUIntLE = function(e, _, t) {
e |= 0;
_ |= 0;
t || w(e, _, this.length);
for (var T = this[e], S = 1, n = 0; ++n < _ && (S *= 256); ) T += this[e + n] * S;
return T;
};
E.prototype.readUIntBE = function(e, _, t) {
e |= 0;
_ |= 0;
t || w(e, _, this.length);
for (var T = this[e + --_], S = 1; _ > 0 && (S *= 256); ) T += this[e + --_] * S;
return T;
};
E.prototype.readUInt8 = function(e, _) {
_ || w(e, 1, this.length);
return this[e];
};
E.prototype.readUInt16LE = function(e, _) {
_ || w(e, 2, this.length);
return this[e] | this[e + 1] << 8;
};
E.prototype.readUInt16BE = function(e, _) {
_ || w(e, 2, this.length);
return this[e] << 8 | this[e + 1];
};
E.prototype.readUInt32LE = function(e, _) {
_ || w(e, 4, this.length);
return (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3];
};
E.prototype.readUInt32BE = function(e, _) {
_ || w(e, 4, this.length);
return 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
};
E.prototype.readIntLE = function(e, _, t) {
e |= 0;
_ |= 0;
t || w(e, _, this.length);
for (var T = this[e], S = 1, n = 0; ++n < _ && (S *= 256); ) T += this[e + n] * S;
T >= (S *= 128) && (T -= Math.pow(2, 8 * _));
return T;
};
E.prototype.readIntBE = function(e, _, t) {
e |= 0;
_ |= 0;
t || w(e, _, this.length);
for (var T = _, S = 1, n = this[e + --T]; T > 0 && (S *= 256); ) n += this[e + --T] * S;
n >= (S *= 128) && (n -= Math.pow(2, 8 * _));
return n;
};
E.prototype.readInt8 = function(e, _) {
_ || w(e, 1, this.length);
return 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e];
};
E.prototype.readInt16LE = function(e, _) {
_ || w(e, 2, this.length);
var t = this[e] | this[e + 1] << 8;
return 32768 & t ? 4294901760 | t : t;
};
E.prototype.readInt16BE = function(e, _) {
_ || w(e, 2, this.length);
var t = this[e + 1] | this[e] << 8;
return 32768 & t ? 4294901760 | t : t;
};
E.prototype.readInt32LE = function(e, _) {
_ || w(e, 4, this.length);
return this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
};
E.prototype.readInt32BE = function(e, _) {
_ || w(e, 4, this.length);
return this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
};
E.prototype.readFloatLE = function(e, _) {
_ || w(e, 4, this.length);
return S.read(this, e, !0, 23, 4);
};
E.prototype.readFloatBE = function(e, _) {
_ || w(e, 4, this.length);
return S.read(this, e, !1, 23, 4);
};
E.prototype.readDoubleLE = function(e, _) {
_ || w(e, 8, this.length);
return S.read(this, e, !0, 52, 8);
};
E.prototype.readDoubleBE = function(e, _) {
_ || w(e, 8, this.length);
return S.read(this, e, !1, 52, 8);
};
function v(e, _, t, T, S, n) {
if (!E.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
if (_ > S || _ < n) throw new RangeError('"value" argument is out of bounds');
if (t + T > e.length) throw new RangeError("Index out of range");
}
E.prototype.writeUIntLE = function(e, _, t, T) {
e = +e;
_ |= 0;
t |= 0;
if (!T) {
v(this, e, _, t, Math.pow(2, 8 * t) - 1, 0);
}
var S = 1, n = 0;
this[_] = 255 & e;
for (;++n < t && (S *= 256); ) this[_ + n] = e / S & 255;
return _ + t;
};
E.prototype.writeUIntBE = function(e, _, t, T) {
e = +e;
_ |= 0;
t |= 0;
if (!T) {
v(this, e, _, t, Math.pow(2, 8 * t) - 1, 0);
}
var S = t - 1, n = 1;
this[_ + S] = 255 & e;
for (;--S >= 0 && (n *= 256); ) this[_ + S] = e / n & 255;
return _ + t;
};
E.prototype.writeUInt8 = function(e, _, t) {
e = +e;
_ |= 0;
t || v(this, e, _, 1, 255, 0);
E.TYPED_ARRAY_SUPPORT || (e = Math.floor(e));
this[_] = 255 & e;
return _ + 1;
};
function B(e, _, t, T) {
_ < 0 && (_ = 65535 + _ + 1);
for (var S = 0, n = Math.min(e.length - t, 2); S < n; ++S) e[t + S] = (_ & 255 << 8 * (T ? S : 1 - S)) >>> 8 * (T ? S : 1 - S);
}
E.prototype.writeUInt16LE = function(e, _, t) {
e = +e;
_ |= 0;
t || v(this, e, _, 2, 65535, 0);
if (E.TYPED_ARRAY_SUPPORT) {
this[_] = 255 & e;
this[_ + 1] = e >>> 8;
} else B(this, e, _, !0);
return _ + 2;
};
E.prototype.writeUInt16BE = function(e, _, t) {
e = +e;
_ |= 0;
t || v(this, e, _, 2, 65535, 0);
if (E.TYPED_ARRAY_SUPPORT) {
this[_] = e >>> 8;
this[_ + 1] = 255 & e;
} else B(this, e, _, !1);
return _ + 2;
};
function Y(e, _, t, T) {
_ < 0 && (_ = 4294967295 + _ + 1);
for (var S = 0, n = Math.min(e.length - t, 4); S < n; ++S) e[t + S] = _ >>> 8 * (T ? S : 3 - S) & 255;
}
E.prototype.writeUInt32LE = function(e, _, t) {
e = +e;
_ |= 0;
t || v(this, e, _, 4, 4294967295, 0);
if (E.TYPED_ARRAY_SUPPORT) {
this[_ + 3] = e >>> 24;
this[_ + 2] = e >>> 16;
this[_ + 1] = e >>> 8;
this[_] = 255 & e;
} else Y(this, e, _, !0);
return _ + 4;
};
E.prototype.writeUInt32BE = function(e, _, t) {
e = +e;
_ |= 0;
t || v(this, e, _, 4, 4294967295, 0);
if (E.TYPED_ARRAY_SUPPORT) {
this[_] = e >>> 24;
this[_ + 1] = e >>> 16;
this[_ + 2] = e >>> 8;
this[_ + 3] = 255 & e;
} else Y(this, e, _, !1);
return _ + 4;
};
E.prototype.writeIntLE = function(e, _, t, T) {
e = +e;
_ |= 0;
if (!T) {
var S = Math.pow(2, 8 * t - 1);
v(this, e, _, t, S - 1, -S);
}
var n = 0, i = 1, o = 0;
this[_] = 255 & e;
for (;++n < t && (i *= 256); ) {
e < 0 && 0 === o && 0 !== this[_ + n - 1] && (o = 1);
this[_ + n] = (e / i >> 0) - o & 255;
}
return _ + t;
};
E.prototype.writeIntBE = function(e, _, t, T) {
e = +e;
_ |= 0;
if (!T) {
var S = Math.pow(2, 8 * t - 1);
v(this, e, _, t, S - 1, -S);
}
var n = t - 1, i = 1, o = 0;
this[_ + n] = 255 & e;
for (;--n >= 0 && (i *= 256); ) {
e < 0 && 0 === o && 0 !== this[_ + n + 1] && (o = 1);
this[_ + n] = (e / i >> 0) - o & 255;
}
return _ + t;
};
E.prototype.writeInt8 = function(e, _, t) {
e = +e;
_ |= 0;
t || v(this, e, _, 1, 127, -128);
E.TYPED_ARRAY_SUPPORT || (e = Math.floor(e));
e < 0 && (e = 255 + e + 1);
this[_] = 255 & e;
return _ + 1;
};
E.prototype.writeInt16LE = function(e, _, t) {
e = +e;
_ |= 0;
t || v(this, e, _, 2, 32767, -32768);
if (E.TYPED_ARRAY_SUPPORT) {
this[_] = 255 & e;
this[_ + 1] = e >>> 8;
} else B(this, e, _, !0);
return _ + 2;
};
E.prototype.writeInt16BE = function(e, _, t) {
e = +e;
_ |= 0;
t || v(this, e, _, 2, 32767, -32768);
if (E.TYPED_ARRAY_SUPPORT) {
this[_] = e >>> 8;
this[_ + 1] = 255 & e;
} else B(this, e, _, !1);
return _ + 2;
};
E.prototype.writeInt32LE = function(e, _, t) {
e = +e;
_ |= 0;
t || v(this, e, _, 4, 2147483647, -2147483648);
if (E.TYPED_ARRAY_SUPPORT) {
this[_] = 255 & e;
this[_ + 1] = e >>> 8;
this[_ + 2] = e >>> 16;
this[_ + 3] = e >>> 24;
} else Y(this, e, _, !0);
return _ + 4;
};
E.prototype.writeInt32BE = function(e, _, t) {
e = +e;
_ |= 0;
t || v(this, e, _, 4, 2147483647, -2147483648);
e < 0 && (e = 4294967295 + e + 1);
if (E.TYPED_ARRAY_SUPPORT) {
this[_] = e >>> 24;
this[_ + 1] = e >>> 16;
this[_ + 2] = e >>> 8;
this[_ + 3] = 255 & e;
} else Y(this, e, _, !1);
return _ + 4;
};
function b(e, _, t, T, S, n) {
if (t + T > e.length) throw new RangeError("Index out of range");
if (t < 0) throw new RangeError("Index out of range");
}
function W(e, _, t, T, n) {
n || b(e, 0, t, 4);
S.write(e, _, t, T, 23, 4);
return t + 4;
}
E.prototype.writeFloatLE = function(e, _, t) {
return W(this, e, _, !0, t);
};
E.prototype.writeFloatBE = function(e, _, t) {
return W(this, e, _, !1, t);
};
function K(e, _, t, T, n) {
n || b(e, 0, t, 8);
S.write(e, _, t, T, 52, 8);
return t + 8;
}
E.prototype.writeDoubleLE = function(e, _, t) {
return K(this, e, _, !0, t);
};
E.prototype.writeDoubleBE = function(e, _, t) {
return K(this, e, _, !1, t);
};
E.prototype.copy = function(e, _, t, T) {
t || (t = 0);
T || 0 === T || (T = this.length);
_ >= e.length && (_ = e.length);
_ || (_ = 0);
T > 0 && T < t && (T = t);
if (T === t) return 0;
if (0 === e.length || 0 === this.length) return 0;
if (_ < 0) throw new RangeError("targetStart out of bounds");
if (t < 0 || t >= this.length) throw new RangeError("sourceStart out of bounds");
if (T < 0) throw new RangeError("sourceEnd out of bounds");
T > this.length && (T = this.length);
e.length - _ < T - t && (T = e.length - _ + t);
var S, n = T - t;
if (this === e && t < _ && _ < T) for (S = n - 1; S >= 0; --S) e[S + _] = this[S + t]; else if (n < 1e3 || !E.TYPED_ARRAY_SUPPORT) for (S = 0; S < n; ++S) e[S + _] = this[S + t]; else Uint8Array.prototype.set.call(e, this.subarray(t, t + n), _);
return n;
};
E.prototype.fill = function(e, _, t, T) {
if ("string" == typeof e) {
if ("string" == typeof _) {
T = _;
_ = 0;
t = this.length;
} else if ("string" == typeof t) {
T = t;
t = this.length;
}
if (1 === e.length) {
var S = e.charCodeAt(0);
S < 256 && (e = S);
}
if (void 0 !== T && "string" != typeof T) throw new TypeError("encoding must be a string");
if ("string" == typeof T && !E.isEncoding(T)) throw new TypeError("Unknown encoding: " + T);
} else "number" == typeof e && (e &= 255);
if (_ < 0 || this.length < _ || this.length < t) throw new RangeError("Out of range index");
if (t <= _) return this;
_ >>>= 0;
t = void 0 === t ? this.length : t >>> 0;
e || (e = 0);
var n;
if ("number" == typeof e) for (n = _; n < t; ++n) this[n] = e; else {
var i = E.isBuffer(e) ? e : X(new E(e, T).toString()), o = i.length;
for (n = 0; n < t - _; ++n) this[n + _] = i[n % o];
}
return this;
};
var Q = /[^+\/0-9A-Za-z-_]/g;
function x(e) {
if ((e = k(e).replace(Q, "")).length < 2) return "";
for (;e.length % 4 != 0; ) e += "=";
return e;
}
function k(e) {
return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
}
function j(e) {
return e < 16 ? "0" + e.toString(16) : e.toString(16);
}
function X(e, _) {
_ = _ || Infinity;
for (var t, T = e.length, S = null, n = [], i = 0; i < T; ++i) {
if ((t = e.charCodeAt(i)) > 55295 && t < 57344) {
if (!S) {
if (t > 56319) {
(_ -= 3) > -1 && n.push(239, 191, 189);
continue;
}
if (i + 1 === T) {
(_ -= 3) > -1 && n.push(239, 191, 189);
continue;
}
S = t;
continue;
}
if (t < 56320) {
(_ -= 3) > -1 && n.push(239, 191, 189);
S = t;
continue;
}
t = 65536 + (S - 55296 << 10 | t - 56320);
} else S && (_ -= 3) > -1 && n.push(239, 191, 189);
S = null;
if (t < 128) {
if ((_ -= 1) < 0) break;
n.push(t);
} else if (t < 2048) {
if ((_ -= 2) < 0) break;
n.push(t >> 6 | 192, 63 & t | 128);
} else if (t < 65536) {
if ((_ -= 3) < 0) break;
n.push(t >> 12 | 224, t >> 6 & 63 | 128, 63 & t | 128);
} else {
if (!(t < 1114112)) throw new Error("Invalid code point");
if ((_ -= 4) < 0) break;
n.push(t >> 18 | 240, t >> 12 & 63 | 128, t >> 6 & 63 | 128, 63 & t | 128);
}
}
return n;
}
function z(e) {
for (var _ = [], t = 0; t < e.length; ++t) _.push(255 & e.charCodeAt(t));
return _;
}
function q(e, _) {
for (var t, T, S, n = [], i = 0; i < e.length && !((_ -= 2) < 0); ++i) {
T = (t = e.charCodeAt(i)) >> 8;
S = t % 256;
n.push(S);
n.push(T);
}
return n;
}
function J(e) {
return T.toByteArray(x(e));
}
function Z(e, _, t, T) {
for (var S = 0; S < T && !(S + t >= _.length || S >= e.length); ++S) _[S + t] = e[S];
return S;
}
function $(e) {
return e != e;
}
}).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
}, {
"base64-js": 1,
ieee754: 4,
isarray: 3
} ],
3: [ function(e, _, t) {
var T = {}.toString;
_.exports = Array.isArray || function(e) {
return "[object Array]" == T.call(e);
};
}, {} ],
4: [ function(e, _, t) {
t.read = function(e, _, t, T, S) {
var n, i, o = 8 * S - T - 1, E = (1 << o) - 1, R = E >> 1, r = -7, s = t ? S - 1 : 0, I = t ? -1 : 1, a = e[_ + s];
s += I;
n = a & (1 << -r) - 1;
a >>= -r;
r += o;
for (;r > 0; n = 256 * n + e[_ + s], s += I, r -= 8) ;
i = n & (1 << -r) - 1;
n >>= -r;
r += T;
for (;r > 0; i = 256 * i + e[_ + s], s += I, r -= 8) ;
if (0 === n) n = 1 - R; else {
if (n === E) return i ? NaN : Infinity * (a ? -1 : 1);
i += Math.pow(2, T);
n -= R;
}
return (a ? -1 : 1) * i * Math.pow(2, n - T);
};
t.write = function(e, _, t, T, S, n) {
var i, o, E, R = 8 * n - S - 1, r = (1 << R) - 1, s = r >> 1, I = 23 === S ? Math.pow(2, -24) - Math.pow(2, -77) : 0, a = T ? 0 : n - 1, c = T ? 1 : -1, N = _ < 0 || 0 === _ && 1 / _ < 0 ? 1 : 0;
_ = Math.abs(_);
if (isNaN(_) || Infinity === _) {
o = isNaN(_) ? 1 : 0;
i = r;
} else {
i = Math.floor(Math.log(_) / Math.LN2);
if (_ * (E = Math.pow(2, -i)) < 1) {
i--;
E *= 2;
}
if ((_ += i + s >= 1 ? I / E : I * Math.pow(2, 1 - s)) * E >= 2) {
i++;
E /= 2;
}
if (i + s >= r) {
o = 0;
i = r;
} else if (i + s >= 1) {
o = (_ * E - 1) * Math.pow(2, S);
i += s;
} else {
o = _ * Math.pow(2, s - 1) * Math.pow(2, S);
i = 0;
}
}
for (;S >= 8; e[t + a] = 255 & o, a += c, o /= 256, S -= 8) ;
i = i << S | o;
R += S;
for (;R > 0; e[t + a] = 255 & i, a += c, i /= 256, R -= 8) ;
e[t + a - c] |= 128 * N;
};
}, {} ],
GameClient: [ function(e, _, t) {
"use strict";
cc._RF.push(_, "7790f7DHIlN/LJdV2QxtWlg", "GameClient");
var T = e("OnlineWS"), S = {
initData: function() {
cc.log("GameClient initData***");
},
connect: function(e, _, t) {
this.ws = new T();
this.ws.connect(e, _);
this.ws.setConnectCall(function() {
t && t();
});
},
getConnectState: function() {
return !!this.ws && this.ws.getWsState();
}
};
_.exports = S;
cc._RF.pop();
}, {
OnlineWS: "OnlineWS"
} ],
Global: [ function(e, _, t) {
"use strict";
cc._RF.push(_, "b5395s9nXxHJIO9wugo2HKF", "Global");
var T = {
sayHello: function() {
console.log("Global sayehello");
},
gSchduleFun: function(e, _, t, T, S) {
void 0 == T && (T = cc.macro.REPEAT_FOREVER);
void 0 == S && (S = 0);
cc.director.getScheduler().schedule(_, e, t, T, S, !1);
},
gSchduleOnce: function(e, _, t) {
e.scheduleOnce(function() {
_();
}, t);
},
gUnSchduleFun: function(e, _) {
cc.director.getScheduler().unschedule(_, e);
},
gPreloadScene: function(e, _, t) {
cc.director.preloadScene(e, function(e, t, T) {
var S = Math.floor(100 * (e / t).toFixed(2));
_ && _(S);
}, function(_, T) {
t && t(e, _);
});
},
GIsArrContain: function(e, _) {
for (var t in e) {
var T = e[t];
if (T == _ || T == toString(_)) return !0;
}
return !1;
},
GgetDataFromFile: function(e) {
if (cc.sys.isNative) {
return jsb.fileUtils.getDataFromFile(e);
}
return null;
},
GwriteStringToFile: function(e, _) {
cc.sys.isNative && jsb.fileUtils.writeStringToFile(e, _);
},
GwriteDataToFile: function(e, _) {
cc.sys.isNative && jsb.fileUtils.writeDataToFile(new Uint8Array(e), _);
},
GcreateDir: function(e) {
cc.sys.isNative && (jsb.fileUtils.isDirectoryExist(e) || jsb.fileUtils.createDirectory(e));
},
GgetDirByUrl: function(e) {
var _ = e.split("/"), t = "";
if (_.length > 1) for (var T = 0; T < _.length - 1; T++) {
var S = _[T];
t = 0 == T ? S : t + "/" + S;
} else t = _[0];
return t += "/";
},
GgetFileNameByUrl: function(e) {
var _ = e.split("/");
return _[_.length - 1];
},
GloadPic: function(e, _) {
var t = this;
if (cc.sys.isNative) {
var T = jsb.fileUtils.getWritablePath() + "PicTemp/";
this.GcreateDir(T);
var S = T + this.GgetFileNameByUrl(e);
jsb.fileUtils.isFileExist(S) ? t.loadTexture(S, function(e) {
_ && _(e);
}) : t.GDownFile(e, function(e) {
t.GwriteDataToFile(e, S);
t.loadTexture(S, function(e) {
_ && _(e);
});
});
} else cc.assetManager.loadRemote(e, {
ext: ".png"
}, function(e, t) {
e ? _ && _(null) : _(t);
});
},
loadTexture: function(e, _) {
cc.assetManager.loadRemote(e, {
ext: ".png"
}, function(e, t) {
e ? _ && _(null) : _(t);
});
},
GDownFile: function(e, _) {
if (cc.sys.isNative) {
var t = new XMLHttpRequest();
t.responseType = "arraybuffer";
t.open("GET", e, !0);
t.onreadystatechange = function() {
if (4 === t.readyState && t.status >= 200) {
var e = t.response;
_(e);
} else _(null);
};
t.send();
}
},
StrTime: function(e, _) {
for (var t = "", T = 0; T < _; T++) t += e;
return t;
},
ConverToWorldPos: function(e) {
return e.parent.convertToWorldSpaceAR(e.getPosition());
},
ConverToNodePos: function(e, _) {
return e.convertToNodeSpaceAR(_);
},
ShowAlert: function(e, _, t) {
ua.loadPrefabRes("prefabs/AlertLayer2", function(T) {
if (T) {
cc.director.getScene().getChildByName("Canvas").addChild(T);
var S = T.getComponent("AlertIII");
S && S.showAlert(e, _, function(e) {
t && t(e);
});
}
});
},
ShowTextInput: function(e) {
ua.loadPrefabRes("prefabs/textinput", function(_) {
if (_) {
cc.director.getScene().getChildByName("Canvas").addChild(_);
var t = _.getComponent("textinput");
t && t.show(e);
}
});
},
ShowChooseUpdate: function(e, _) {
ua.loadPrefabRes("prefabs/selectupdate", function(t) {
if (t) {
cc.director.getScene().getChildByName("Canvas").addChild(t);
var T = t.getComponent("chooseupdate");
T && T.initData(e, _);
}
});
},
GgetTwoV2Angle: function(e, _) {
var t = _.x - e.x, T = _.y - e.y, S = cc.v2(t, T).signAngle(cc.v2(0, 1));
return cc.misc.radiansToDegrees(S);
},
isjson: function(e) {
if ("string" == typeof e) try {
JSON.parse(e);
return !0;
} catch (e) {
console.log(e);
return !1;
}
},
gLoadBUndle: function(e, _, t) {
cc.assetManager.loadBundle(e, _, function(e, _) {
t && t(e, _);
});
},
gReBoot: function() {
cc.game.restart();
},
Ghotupdateurl: "http://192.168.65.172/hotupversion/configrelease",
GgameType: 3
};
1 == T.GgameType && (T.Ghotupdateurl = "http://192.168.65.172/hotupversion/configrelease");
if (3 == T.GgameType) {
T.Ghotupdateurl = "http://192.168.65.172/hotupversion/configdebug";
T.isDebugTest = !0;
}
_.exports = T;
cc._RF.pop();
}, {} ],
HttpHelper: [ function(e, _, t) {
"use strict";
cc._RF.push(_, "163fcvJNjZDzY673ehl7bYi", "HttpHelper");
var T = {
sendHttpRequest: function(e, _) {
var t = cc.loader.getXMLHttpRequest();
t.onreadystatechange = function() {
4 == t.readyState && t.status >= 200 && t.status < 300 && _ && _(t.responseText);
};
t.onerror = function(e) {
cc.log(" xhr.onerror*******");
_(null);
};
t.ontimeout = function() {
cc.log(" xhr.ontimeout*******");
_(null);
};
t.open("GET", e, !0);
cc.sys.isNative && t.setRequestHeader("Accept-Encoding", "gzip, deflate");
t.timeout = 5e3;
t.send();
},
sendHttpPost: function(e, _, t) {
var T = cc.loader.getXMLHttpRequest();
T.onreadystatechange = function() {
4 == T.readyState && T.status >= 200 && T.status < 300 && t && t(T.responseText);
};
T.open("POST", e);
cc.sys.isNative && T.setRequestHeader("Accept-Encoding", "gzip, deflate");
T.timeout = 5e3;
T.setRequestHeader("Content-Type", "application/json");
var S = JSON.stringify(_);
console.log("_data", S);
T.send(S);
}
};
_.exports = T;
cc._RF.pop();
}, {} ],
KeypadDispatch: [ function(e, _, t) {
"use strict";
cc._RF.push(_, "c37c1GBpUhDCoCJcFdLsA1S", "KeypadDispatch");
var T = e("Global"), S = cc.Class({
properties: {
Stacks: {
default: [],
type: [ cc.Component ]
}
},
ctor: function() {
this.addEventListener();
},
add: function(e) {
this.Stacks.push(e);
},
remove: function() {
this.Stacks.pop();
},
onbackkeyup: function() {
if (1 != this.Stacks.length) {
var e = this.Stacks[this.Stacks.length - 1];
e && e.onbackpress && e.onbackpress();
} else T.ShowAlert("exit game?", [ "yes", "no" ], function(e) {
1 == e && cc.game.end();
});
},
addEventListener: function() {
cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
},
onKeyUp: function(e) {
switch (e.keyCode) {
case cc.macro.KEY.a:
case cc.macro.KEY.back:
this.onbackkeyup();
}
},
onDestroy: function() {
cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
}
});
S._instance = null;
S.getInstance = function() {
S._instance || (S._instance = new S());
return S._instance;
};
_.exports = S;
cc._RF.pop();
}, {
Global: "Global"
} ],
LabelLocalized: [ function(e, _, t) {
"use strict";
cc._RF.push(_, "e4f88adp3hERoJ48DZ2PSAl", "LabelLocalized");
var T = e("i18n");
cc.Class({
extends: cc.Label,
properties: {
textKey: {
default: "TEXT_KEY",
multiline: !0,
tooltip: "Enter i18n key here",
notify: function() {
if (this._sgNode) {
this._sgNode.setString(this.string);
this._updateNodeSize();
}
}
},
string: {
override: !0,
tooltip: "Here shows the localized string of Text Key",
get: function() {
return T.t(this.textKey);
},
set: function(e) {
this.textKey = e;
}
}
}
});
cc._RF.pop();
}, {
i18n: "i18n"
} ],
LaunchScene: [ function(e, _, t) {
"use strict";
cc._RF.push(_, "a7016SMIJVNQrZxjzWJyjKM", "LaunchScene");
var T = e("Global"), S = e("VersionManager"), n = e("BaseComponent");
cc.Class({
extends: n,
properties: {
Text: {
default: null,
type: cc.Label
}
},
onLoad: function() {
this._super();
cc.log("launchsene onLoad");
},
onDestroy: function() {
this._super();
},
updateText: function() {
this.count = this.count + 1;
this.count = this.count % 4;
this.Text.string = "Updating" + T.StrTime(".", this.count);
},
unSchduleUpdateText: function() {
T.gUnSchduleFun(this, this.updateText);
},
start: function() {
cc.log("渠道号===", window.DISTRIBUTE_CHANNEL);
cc.sys.localStorage.setItem("debugId", 724001);
var e = this;
this.count = 0;
if (cc && cc.sys.isNative) {
if (window.DISTRIBUTE_CHANNEL == window.chanel.WIN32) {
cc.log("模拟器不更新");
S.parseLocalCfg();
e.goLoginScene();
return;
}
if (T.isDebugTest) {
T.ShowChooseUpdate({
tips: "热更新选择",
items: [ {
text: "默认热更新地址"
}, {
text: "手动输入热更新地址"
} ]
}, function(_, t) {
console.log("点击了", _);
if (0 == _) {
e.goCheckUpdate(T.Ghotupdateurl);
t.bClose();
}
1 == _ && T.ShowTextInput(function(_) {
if (_.length > 0) {
T.Ghotupdateurl = _;
e.goCheckUpdate(_);
t.bClose();
} else console.log("no text");
});
});
} else T.gSchduleOnce(this, function() {
e.goCheckUpdate(T.Ghotupdateurl);
}, 3);
T.gSchduleFun(this, this.updateText, 1, cc.macro.REPEAT_FOREVER, 0);
} else {
S.getH5ScriptVersion();
T.gSchduleOnce(this, function() {
e.goLoginScene();
}, .1);
}
},
goCheckUpdate: function(e) {
var _ = this;
S.checkUpdate(e, function(e, t) {
0 == e ? _.goLoginScene() : 100 == e ? _.Reboot() : 6 == e || 7 == e ? _.goLoginScene() : 8 == e ? T.ShowAlert("发现新版本" + t, [], function(e) {
cc.log("indx====", e);
cc.sys.openURL(t);
}) : T.ShowAlert("ErrorCode=====" + e, [], function() {
_.goLoginScene();
});
}, function(e, t, T) {
cc.log("progress===", e);
cc.director.getScheduler().isScheduled(_.updateText, _) && _.unSchduleUpdateText();
var S = "updateing" + e + "% (" + t + "kb/" + T + "kb)";
_.Text.string = S;
});
},
Reboot: function() {
this.scheduleOnce(function() {
T.gReBoot();
}, 2);
},
goTestScene: function() {
cc.director.loadScene("TestScene");
},
goLoginScene: function() {
T.gSchduleOnce(this, function() {
cc.director.loadScene("LoginScene", function() {});
}, 2);
}
});
cc._RF.pop();
}, {
BaseComponent: "BaseComponent",
Global: "Global",
VersionManager: "VersionManager"
} ],
LoginScene: [ function(e, _, t) {
"use strict";
cc._RF.push(_, "43150sdB6ZHSKFTTRw2QZE7", "LoginScene");
var T = e("VersionManager"), S = e("Global"), n = e("Devices"), i = e("BaseComponent");
e("../../core/Global").ConverToNodePos;
cc.Class({
extends: i,
properties: {
VersionText: {
default: null,
type: cc.Label
}
},
onLoad: function() {
this._super();
},
onDestroy: function() {
this._super();
},
start: function() {
var e = this;
1 == S.GgameType && (this.VersionText.string = n.getAppVersion() + "(R" + T.getScriptVersion() + ")");
3 == S.GgameType && (this.VersionText.string = n.getAppVersion() + "(D" + T.getScriptVersion() + ")");
var _ = cc.find("uipanel/gotest", this.node);
cc.find("uipanel/label", this.node);
ua.darkButton(_, function() {
e.goTestScene();
});
ua.darkButton(this.node, function(e) {
console.log("getLocation=====", e.getLocation().x, e.getLocation().y);
console.log("getLocationInView=====", e.getLocationInView().x, e.getLocationInView().y);
});
},
goTestScene: function() {
cc.director.loadScene("TestScene");
}
});
cc._RF.pop();
}, {
"../../core/Global": "Global",
BaseComponent: "BaseComponent",
Devices: "Devices",
Global: "Global",
VersionManager: "VersionManager"
} ],
MainScene: [ function(e, _, t) {
"use strict";
cc._RF.push(_, "280c3rsZJJKnZ9RqbALVwtK", "MainScene");
e("Global"), e("Base64Tool");
var T = e("Devices");
cc.Class({
extends: cc.Component,
properties: {},
start: function() {
cc.log("MainScene start");
e("GameClient");
e("HttpHelper").sendHttpRequest("https://httpbin.org/get?show_env=1", function(e) {
if (e) {
e = JSON.parse(e);
cc.log("data==", e.args.show_env);
}
});
cc.director.getScene().getChildByName("Canvas").getChildByName("label").getComponent(cc.Label).string = "设备版本号：" + T.getAppVersion() + "\nchanle" + window.DISTRIBUTE_CHANNEL;
},
launchFullScreen: function(e) {
if (e.requestFullScreen) e.requestFullScreen(); else if (e.mozRequestFullScreen) e.mozRequestFullScreen(); else if (e.webkitRequestFullScreen) e.webkitRequestFullScreen(); else {
if (!e.msRequestFullscreen) return !0;
e.msRequestFullscreen();
}
},
onLoad: function() {},
update: function(e) {}
});
cc._RF.pop();
}, {
Base64Tool: "Base64Tool",
Devices: "Devices",
GameClient: "GameClient",
Global: "Global",
HttpHelper: "HttpHelper"
} ],
OnlineWS: [ function(e, _, t) {
"use strict";
cc._RF.push(_, "88503myvH9CnIObyoxlBC25", "OnlineWS");
var T = e("buffer").Buffer;
cc.Class({
ctor: function() {
this.bclientClose = !1;
},
connect: function(_, t) {
this.netData = new Array();
this.callbackMap = new Map();
var S = e("Onlinedef"), n = this;
this._wsiSendBinary = null == _ ? new WebSocket("ws://" + S.hos + ":" + S.port + "//") : new WebSocket("ws://" + _ + ":" + t + "//");
cc.log("-连接--------", _ + ":" + t);
this._wsiSendBinary.binaryType = "arraybuffer";
this._wsiSendBinary.onopen = function(e) {
cc.log("网络连接成功");
n.reportConnectSuc();
};
this._wsiSendBinary.onmessage = function(_) {
n.arrayU8ToU16Array(new Uint8Array(_.data));
var t = new T(_.data, "utf8"), S = e("Package").ParseStrToPackage(t.toString());
cc.log("onmessage--33333333333333.........-", S);
n.callLocalFun(S.m_header_name, S.m_json);
};
this._wsiSendBinary.onerror = function(e) {
cc.log("网络错误");
n.reportOnlineOff("网络错误");
};
this._wsiSendBinary.onclose = function(e) {
n._wsiSendBinary = null;
cc.log("网络已经断开");
n.reportOnlineOff("网络已经断开");
};
this.onLoad();
},
addHead: function(e) {
return e;
},
addLocalCallback: function(e, _) {
null != e && null != _ && void 0 != _ && this.callbackMap.set(e, _);
},
arrayU8ToU16Array: function(e) {
for (var _ = "", t = 0, T = 0, S = 0; S < e.length; S++) {
if (224 == (240 & e[S])) {
t = 3;
T |= (15 & e[S]) << 12;
T |= (63 & e[S + 1]) << 6;
T |= 63 & e[S + 2];
} else if (192 == (224 & e[S])) {
t = 2;
T |= (31 & e[S]) << 6;
T |= 63 & e[S + 1];
} else if (e[S] <= 127) {
t = 1;
T |= 127 & e[S];
}
S += t - 1;
_ += String.fromCharCode(T);
T = 0;
t = 0;
}
return _;
},
Uint8ArrayToString: function(e) {
for (var _ = "", t = 0; t < e.length; t++) _ += String.fromCharCode(e[t]);
return _;
},
stringToUint8Array: function(e) {
for (var _ = [], t = 0, T = e.length; t < T; ++t) _.push(e.charCodeAt(t));
return new Uint8Array(_);
},
string2u8array: function(e) {
for (var _ = new Uint8Array(3 * e.length), t = 0, T = 0; T < e.length; T++) {
var S = e.charCodeAt(T);
if (S <= 127) {
var n = 127 & S;
_[t++] = n;
} else if (S >= 128 && S <= 2047) {
var i = 63 & S | 128;
n = S >> 6 & 31 | 192;
_[t++] = n;
_[t++] = i;
} else if (S >= 2048 && S <= 65535) {
var o = 63 & S | 128;
i = S >> 6 & 63 | 128, n = S >> 12 & 15 | 224;
_[t++] = n;
_[t++] = i;
_[t++] = o;
}
}
return new Uint8Array(_.buffer, 0, t);
},
send: function(e, _) {
e.m_header_name != window.Message.MS_PingPong && cc.log("Client send ===", e);
_ && this.addLocalCallback(e.m_header_name, _);
e = e.encode();
if (this._wsiSendBinary) if (this._wsiSendBinary.readyState === WebSocket.OPEN) {
var t = this.string2u8array(e.toString("utf-8"));
this._wsiSendBinary.send(t);
} else {
cc.log("网络已经断开", this._wsiSendBinary.readyState);
this.reportOnlineOff("网络已经断开");
}
},
getWsState: function() {
return null != this._wsiSendBinary && this._wsiSendBinary.readyState === WebSocket.OPEN;
},
onLoad: function() {},
callLocalFun: function(e, _) {
var t = this.callbackMap.get(e);
if (void 0 != t) {
cc.log("=========OnlineWs===heart==", e);
t(_);
}
},
update: function() {
if (null != this.netData && null != this.callbackMap) for (;this.netData.length; ) this.netData.shift();
},
onDestroy: function() {
cc.log("=====onlineWs=== onDestroy");
this.callbackMap.clear();
if (null != this._wsiSendBinary && this._wsiSendBinary.readyState === WebSocket.OPEN) {
this.bclientClose = !0;
this._wsiSendBinary.close();
}
this._wsiSendBinary = null;
this.globalCall = null;
},
setGlobalCallBack: function(e) {
this.globalCall = e;
},
setOnlineErrorCall: function(e) {
this.errorCall = e;
},
reportOnlineOff: function(e) {
cc.log("===onlinews==reportOnlineOff==");
null != this.errorCall && this.errorCall(e);
},
setConnectCall: function(e) {
this.connectSuc = e;
},
reportConnectSuc: function() {
this.connectSuc && this.connectSuc();
}
});
cc._RF.pop();
}, {
Onlinedef: "Onlinedef",
Package: "Package",
buffer: 2
} ],
Onlinedef: [ function(e, _, t) {
"use strict";
cc._RF.push(_, "57b1eEV+nBLkozPyr6HImkN", "Onlinedef");
_.exports = {
host: "echo.websocket.org",
port: "80"
};
cc._RF.pop();
}, {} ],
Package: [ function(e, _, t) {
"use strict";
cc._RF.push(_, "328a3iqtbhCEafyBWl8EuDx", "Package");
var T = e("buffer").Buffer;
cc.Class({
properties: {
m_game_name: "AP2",
m_proto_type: 0,
m_version: "1.0",
m_header_name: 0,
m_header_ext_data: 0,
m_header_id: 42,
m_header_sign: "",
m_header_type: 1,
m_header_uid: 0,
m_header_state: 0,
m_json: void 0,
m_Ext_Data: void 0
},
statics: {
biuldReq: function(_, t) {
var T;
(T = new (T = e("Package"))()).m_proto_type = "REQ";
T.m_json = t;
T.m_header_name = _;
return T;
},
biuldNotify: function(_, t) {
var T;
(T = new (T = e("Package"))()).m_proto_type = "NOTIFY";
T.m_json = t;
T.m_header_name = _;
return T;
},
ParseStrToPackage: function(_) {
var t;
(t = new (t = e("Package"))()).ParseProto(_);
t.ParseHeader(_);
t.ParseJson(_);
return t;
}
},
encode: function() {
var e = this.m_game_name + " " + this.m_proto_type + " " + this.m_version, _ = "";
this.m_header_uid = 0;
for (var t in this) if (t.indexOf("header") > 0) {
var S = t.lastIndexOf("_"), n = t.substr(S + 1);
"m_header_ext_data" == t && (n = "ext-data");
_ += n + ":" + this[t] + "\n";
}
var i = JSON.stringify(this.m_json);
1 == this.m_header_type && (i = new T(i + "\n").toString("base64"));
return e + "\n" + _ + "\n" + i + "\n";
},
ParseProto: function(e) {
var _ = e.indexOf(" "), t = e.substr(0, _);
this.m_game_name = t;
var T = e.indexOf(" ", _ + 1), S = e.substr(_ + 1, T - _ - 1);
this.m_proto_type = S;
var n = e.indexOf("\n"), i = e.substr(T + 1, n - T - 1);
this.m_version = i;
},
ParseHeader: function(e) {
for (var _ = 0, t = 0; _ < e.length - 1; ) {
if ("\n" == e[_]) {
var T = e.substr(t, _ - t), S = T.indexOf(":"), n = T.substr(0, S), i = T.substr(S + 1, T.length - S - 1);
"type" == n && (this.m_header_type = i);
"uid" == n && (this.m_header_uid = i);
"name" == n && (this.m_header_name = i);
"id" == n && (this.m_header_id = i);
"sign" == n && (this.m_header_sign = i);
"ext-data" == n && (this.m_header_ext_data = i);
"state" == n && (this.m_header_state = i);
t = _ + 1;
}
_++;
}
},
lastIndexOf: function(e, _, t) {
for (var T = e.lastIndexOf(_), S = 0; S < t - 1; S++) T = e.lastIndexOf(_, T - 1);
return T;
},
ParseJson: function(e) {
var _ = this.lastIndexOf(e, "\n", 2), t = e.substr(_ + 1, e.length - _ - 2);
1 == this.m_header_type && (t = new T(t, "base64").toString());
t = JSON.parse(t);
this.m_json = t;
},
ctor: function() {
this.bclientClose = !1;
}
});
cc._RF.pop();
}, {
Package: "Package",
buffer: 2
} ],
PhysicsCenter: [ function(e, _, t) {
"use strict";
cc._RF.push(_, "8b2c803BjFI/ZRhXMTnBd1H", "PhysicsCenter");
cc.Class({
extends: cc.Component,
properties: {
PhysicsManagerEnable: {
default: !1,
tooltip: "是否开启物理系统"
},
PhysicsManagerDrawDebug: {
default: !1,
tooltip: "是否开启物理绘制调试信息"
}
},
onLoad: function() {
console.log("onLoad", this.PhysicsManagerEnable);
cc.director.getPhysicsManager().enabled = this.PhysicsManagerEnable;
if (this.PhysicsManagerEnable) cc.director.getPhysicsManager().debugDrawFlags = this.PhysicsManagerDrawDebug; else {
cc.director.getPhysicsManager().enabled = this.PhysicsManagerEnable;
cc.director.getPhysicsManager().debugDrawFlags = 0;
}
},
start: function() {
console.log("物理测试");
}
});
cc._RF.pop();
}, {} ],
Save: [ function(e, _, t) {
"use strict";
cc._RF.push(_, "2e2b04XOU5KEb80xlTHT7LI", "Save");
window.Save = {
set: function(e, _) {
cc.sys.localStorage.setItem(e, _);
},
get: function(e, _) {
var t = cc.sys.localStorage.getItem(e);
null === t && (t = _);
return t;
}
};
cc._RF.pop();
}, {} ],
SlotScene: [ function(e, _, t) {
"use strict";
cc._RF.push(_, "52728dRoZdOio+6APtNJstt", "SlotScene");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {
var e = this;
this.Slots = new Array();
for (var _ = 1; _ <= 3; _++) {
var t = cc.find("content/slot" + _, this.node);
this.Slots.push(t);
}
var T = cc.find("UI/btn_spin", this.node);
ua.darkButton(T, function() {
cc.log("Start spin");
for (var _ = 0; _ < e.Slots.length; _++) {
var t = e.Slots[_], T = t.getComponent("Slot");
if (T) {
cc.log(_, t);
T.Spin();
var S = Math.floor(8 * Math.random());
T.StopAtIndex(S, function() {
console.log("stop-");
});
}
}
});
var S = cc.find("UI/btn_back", this.node);
ua.darkButton(S, function() {
cc.director.loadScene("TestScene");
});
},
start: function() {
var e = cc.find("content/slot1", this.node), _ = cc.find("content/bg", this.node);
_.height = e.height;
_.width = e.width;
}
});
cc._RF.pop();
}, {} ],
Slot: [ function(e, _, t) {
"use strict";
cc._RF.push(_, "5374dvKetxDEoT2sKdzOV9Z", "Slot");
e("buffer").Buffer;
window.SlotState = {
eStoped: 0,
eSpeedUp: 1,
eMaxSpeed: 2,
eWaitSpeedDown: 3,
eSpeedDown: 4,
eKickBack: 5
};
var T = [ "stop_banana", "stop_begemot", "stop_cocktail", "stop_crocodile", "stop_kakadu", "stop_lion", "stop_man", "stop_monkey" ];
cc.Class({
extends: cc.Component,
properties: {
item: {
default: null,
type: cc.Prefab,
tooltip: "预制体item"
},
width: {
default: 0,
type: cc.Float,
tooltip: "itemd的宽度，初始化用来设置容器宽度"
},
space: {
default: 10,
type: cc.Float,
tooltip: "间距"
},
movedirection: {
default: 0,
type: cc.Integer,
tooltip: "方向 0为往上移动 1为往下"
},
showItemNum: {
default: 3,
type: cc.Integer,
tooltip: "面包显示几个可见的item"
}
},
onLoad: function() {
0 != this.width && (this.node.width = this.width);
this.node.height = this.showItemNum * this.width + (this.showItemNum + 1) * this.space;
this.SlotState = window.SlotState.eStoped;
this.addItem();
this.curIndex = 1;
this.StartSpin = !1;
this.stopIndex = null;
this.HaveCompelete = !0;
this.schedule(this.update1, 1 / 60);
},
randItemPic: function() {
cc.log("randItemPic---");
var e = this, _ = "slots/" + T[this.stopIndex];
cc.resources.load(_, function(_, t) {
_ ? cc.log("err==", _) : t && (e.ItemArray[e.stopIndex].getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(t));
});
for (var t = this.node.children, S = 0; S < t.length; S++) S != this.stopIndex && function() {
var e = t[S], _ = Math.floor(Math.random() * T.length), n = "slots/" + T[_];
cc.resources.load(n, function(_, t) {
_ ? cc.log("err==", _) : t && (e.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(t));
});
}();
},
start: function() {},
addItem: function() {
var e = this;
this.ItemArray = new Array();
for (var _ = function(_) {
(S = cc.instantiate(e.item)).parent = e.node;
S.x = 0;
S.tag = _;
0 == e.movedirection ? S.y = e.node.height / 2 - S.height * _ - S.height / 2 - e.space * (_ + 1) : S.y = -e.node.height / 2 + S.height * _ + S.height / 2 + e.space * (_ + 1);
S.getChildByName("text").getComponent(cc.Label).string = _;
var t = S.getComponent(cc.Sprite);
if (t) {
n = Math.floor(Math.random() * T.length);
i = "slots/" + T[n];
cc.resources.load(i, function(e, _) {
e ? cc.log("err==", e) : _ && (t.spriteFrame = new cc.SpriteFrame(_));
});
}
e.ItemArray.push(S);
}, t = 0; t < 8; t++) {
var S, n, i;
_(t);
}
this.item.height = this.ItemArray[0].height;
},
updateItem: function(e) {
if (0 != e) for (var _ = this.node.children, t = 0; t < _.length; t++) {
var T = _[t];
if (e > 0) {
var S = this.node.height / 2 + T.height / 2;
if (T.y >= S) {
T.y = T.y + (-_.length * this.item.height - _.length * this.space);
this.curIndex += 1;
this.curIndex > 7 && (this.curIndex -= 8);
} else {
T.y = T.y + e;
if (T.y >= S) {
T.y = T.y + (-_.length * this.item.height - _.length * this.space);
this.curIndex += 1;
this.curIndex > 7 && (this.curIndex -= 8);
}
}
} else {
S = -this.node.height / 2 - T.height / 2;
if (T.y <= S) {
T.y = T.y + (_.length * this.item.height + _.length * this.space);
this.curIndex += 1;
this.curIndex > 7 && (this.curIndex -= 8);
} else {
T.y = T.y + e;
if (T.y <= S) {
T.y = T.y + (_.length * this.item.height + _.length * this.space);
this.curIndex += 1;
this.curIndex > 7 && (this.curIndex -= 8);
}
}
}
}
},
updateSlotsToDown: function(e) {
var _ = e;
if (this.SlotState == window.SlotState.eSpeedUp) if (this.SpeedY > -50) {
this.SpeedY += this.Acceleration * _;
if (this.SpeedY <= -50) {
this.SpeedY = -50;
this.randItemPic();
this.SlotState = window.SlotState.eWaitSpeedDown;
}
} else {
this.SpeedY = -50;
this.randItemPic();
this.SlotState = window.SlotState.eWaitSpeedDown;
}
if (this.SlotState != window.SlotState.eWaitSpeedDown || this.stopIndex != this.curIndex) {
if (this.SlotState == window.SlotState.eSpeedDown) if (this.SpeedY < 0) {
this.SpeedY += this.Acceleration;
if (this.SpeedY >= 0) {
this.SpeedY = 0;
this.SlotState = window.SlotState.eStoped;
}
} else {
this.SpeedY = 0;
this.SlotState = window.SlotState.eStoped;
}
this.SlotState, window.SlotState.eKickBack;
if (this.SlotState == window.SlotState.eStoped && this.StartSpin) {
this.Bounce();
this.StartSpin = !1;
}
this.updateItem(this.SpeedY);
} else {
this.resetPosY();
this.SlotState = window.SlotState.eSpeedDown;
var t = 3 * this.ItemArray.length * this.space + 3 * this.ItemArray.length * this.item.height + 25 + 10;
this.Acceleration = this.SpeedY * this.SpeedY / (2 * t);
}
},
updateSlotsToTop: function(e) {
var _ = e;
if (this.SlotState == window.SlotState.eSpeedUp) if (this.SpeedY < 50) {
this.SpeedY += this.Acceleration * _;
if (this.SpeedY >= 50) {
this.SpeedY = 50;
this.randItemPic();
this.SlotState = window.SlotState.eWaitSpeedDown;
}
} else {
this.SpeedY = 50;
this.randItemPic();
this.SlotState = window.SlotState.eWaitSpeedDown;
}
if (this.SlotState != window.SlotState.eWaitSpeedDown || this.stopIndex != this.curIndex) {
if (this.SlotState == window.SlotState.eSpeedDown) if (this.SpeedY > 0) {
this.SpeedY += this.Acceleration;
if (this.SpeedY <= 0) {
this.SpeedY = 0;
this.SlotState = window.SlotState.eStoped;
}
} else {
this.SpeedY = 0;
this.SlotState = window.SlotState.eStoped;
}
this.SlotState, window.SlotState.eKickBack;
if (this.SlotState == window.SlotState.eStoped && this.StartSpin) {
this.Bounce();
this.StartSpin = !1;
}
this.updateItem(this.SpeedY);
} else {
this.resetPosY();
this.SlotState = window.SlotState.eSpeedDown;
var t = 3 * this.ItemArray.length * this.space + 3 * this.ItemArray.length * this.item.height + 25 + 10;
this.Acceleration = -this.SpeedY * this.SpeedY / (2 * t);
}
},
Bounce: function() {
for (var e = this, _ = this.node.children, t = 0; t < _.length; t++) {
var T = _[t];
if (T) {
var S;
S = 0 == this.movedirection ? cc.moveBy(.5, cc.Vec2(0, -10)).easing(cc.easeOut(1)) : cc.moveBy(.5, cc.Vec2(0, 10)).easing(cc.easeOut(1));
var n = cc.callFunc(function() {
if (e.StopCall) {
e.StopCall();
e.StopCall = null;
}
e.HaveCompelete = !0;
}), i = cc.sequence(S, n);
T.runAction(i);
}
}
},
resetPosY: function() {
for (var e = this.stopIndex, _ = this.ItemArray[e].y, t = this.node.children, T = 0; T < t.length; T++) {
var S = t[T];
S && (S.y = S.y - _);
}
},
Spin: function() {
this.SpeedY = 0;
this.Acceleration = 50 / 3;
1 == this.movedirection && (this.Acceleration = -this.Acceleration);
this.SlotState = window.SlotState.eSpeedUp;
this.StartSpin = !0;
this.HaveCompelete = !1;
},
setStopIndex: function(e) {
this.stopIndex = e;
},
StopAtIndex: function(e, _) {
console.log("将会停在==", e);
this.stopIndex = e;
_ && (this.StopCall = _);
},
update1: function(e) {
this.StartSpin && (0 == this.movedirection ? this.updateSlotsToTop(e) : this.updateSlotsToDown(e));
},
getSlotState: function() {
return this.SlotState;
}
});
cc._RF.pop();
}, {
buffer: 2
} ],
Sound: [ function(e, _, t) {
"use strict";
cc._RF.push(_, "e3c22Dpi01Gp4EerFjvIKH0", "Sound");
window.Sound = {
audioId: {},
backGroundResPath: {},
_playEffect: function(e, _, t, T, S) {
var n = this;
if (!(S && void 0 != n.audioId[e] && n.audioId[e].length > 0)) {
void 0 == n.audioId[e] && (n.audioId[e] = []);
void 0 == _ && (_ = !1);
void 0 == t && (t = 1);
"number" != typeof t && (t = parseFloat(t));
var i = -1;
cc.resources.load(e, cc.AudioClip, function(e, T) {
if (e) cc.log(e); else {
i = cc.audioEngine.playEffect(T, _);
n.setEffcetVolume(t);
}
});
n.audioId[e].unshift(i);
cc.audioEngine.setFinishCallback(i, function() {
n.audioId[e].pop();
T && T();
});
return i;
}
},
playMusic: function(e, _, t, T, S) {
var n = this;
if (!(S && void 0 != n.audioId[e] && n.audioId[e].length > 0)) {
void 0 == n.audioId[e] && (n.audioId[e] = []);
void 0 == _ && (_ = !1);
void 0 == t && (t = 1);
"number" != typeof t && (t = parseFloat(t));
cc.resources.load(e, cc.AudioClip, function(e, T) {
if (e) cc.log(e); else {
cc.audioEngine.playMusic(T, _);
n.setBackGroundVolume(t);
}
});
}
},
playBackGround: function(e) {
var _ = this.getBackGroundVolume();
if (this.curPlayBgSound) {
if (this.curPlayBgSound == e) return !1;
this.stop(this.curPlayBgSound);
}
this.curPlayBgSound = e;
this.playMusic(e, !0, _ / 100);
this.backGroundResPath[e] = e;
return !0;
},
playEffect: function(e, _, t, T, S) {
var n = this.getEffectVolume();
this._playEffect(e, _, n / 100, T, S);
},
getVoiceVolume: function() {
return window.Save.get("Sound_Voice_Volume", 100);
},
getBackGroundVolume: function() {
return window.Save.get("Sound_BackGround_Volume", 100);
},
getEffectVolume: function() {
return window.Save.get("Sound_Effect_Volume", 100);
},
setVoiceVolume: function(e) {
window.Save.set("Sound_Voice_Volume", e);
},
setBackGroundVolume: function(e) {
window.Save.set("Sound_BackGround_Volume", e);
for (var _ in this.backGroundResPath) if ("string" == typeof this.backGroundResPath[_] && void 0 != this.audioId[_] && this.audioId[_].length > 0) {
this.audioId[_][0];
cc.audioEngine.setMusicVolume(e / 100);
}
},
setEffcetVolume: function(e) {
window.Save.set("Sound_Effect_Volume", e);
cc.audioEngine.setEffectsVolume(e);
},
stopAll: function() {
cc.audioEngine.stopAll();
this.audioId = {};
this.backGroundResPath = {};
this.curPlayBgSound = void 0;
},
stop: function(e) {
if (void 0 != this.audioId[e] && 0 != this.audioId[e].length) {
for (var _ = 0; _ < this.audioId[e].length; _++) {
var t = this.audioId[e].pop();
cc.audioEngine.stop(t);
}
this.backGroundResPath[e] = void 0;
}
}
};
window.SoundRes = {
MainBg: "sound/bgm_main"
};
cc._RF.pop();
}, {} ],
TestScene: [ function(e, _, t) {
"use strict";
cc._RF.push(_, "43e41jtsGxORJ0f6gUlDaqj", "TestScene");
var T = e("xxtea"), S = e("i18n"), n = e("Package"), i = e("Devices"), o = e("Global"), E = e("VoiceNative"), R = e("BaseComponent");
cc.Class({
extends: R,
properties: {},
onLoad: function() {
this._super();
E.init();
},
start: function() {
var _ = "searchPaths--";
cc && cc.sys.isNative && (_ = jsb.fileUtils.getSearchPaths());
var t = this;
console.log("test scene  strart", _);
var R = cc.find("uipanel/New Sprite", this.node), r = cc.find("content/sp4", this.node), s = o.ConverToWorldPos(R), I = o.ConverToNodePos(r.parent, s);
this.sp4OldPos = r.getPosition();
r.IsOriginPos = !0;
var a = cc.find("uipanel/btn_posconvert", this.node);
ua.darkButton(a, function() {
if (!(r.getNumberOfRunningActions() > 0)) {
if (1 == r.IsOriginPos) {
var e = cc.moveTo(1, I).easing(cc.easeSineOut());
r.runAction(e);
} else {
e = cc.moveTo(1, t.sp4OldPos).easing(cc.easeSineOut());
r.runAction(e);
}
r.IsOriginPos = !r.IsOriginPos;
}
});
R.on(cc.Node.EventType.TOUCH_START, function(e) {
R.opacity = 150;
});
R.on(cc.Node.EventType.TOUCH_END, function(e) {
R.opacity = 255;
});
R.on(cc.Node.EventType.TOUCH_CANCEL, function(e) {
R.opacity = 255;
});
console.log("getDevicePixelRatio", cc.view.getDevicePixelRatio());
console.log("winSize", cc.winSize.width, cc.winSize.height);
console.log("getDesignResolutionSize", cc.view.getDesignResolutionSize().width, cc.view.getDesignResolutionSize().height);
console.log("getFrameSize", cc.view.getFrameSize().width, cc.view.getFrameSize().height);
console.log("getVisibleSizeInPixel", cc.view.getVisibleSizeInPixel().width, cc.view.getVisibleSizeInPixel().height);
console.log("getVisibleSize", cc.view.getVisibleSize().width, cc.view.getVisibleSize().height);
console.log("getCanvasSize", cc.view.getCanvasSize().width, cc.view.getCanvasSize().height);
console.log("cc.sys.getSafeAreaRect()", cc.sys.getSafeAreaRect());
n.biuldReq("Hello", {
a: 1,
c: 2
});
var c = "1234567890", N = T.encryptToString("Hello World! 你好，中国🇨🇳-----！", c);
console.log("encrypt_data=", N);
var C = T.decryptToString(N, c);
console.log("decrypt_data==", C);
cc.log("window.DISTRIBUTE_CHANNEL ==", window.DISTRIBUTE_CHANNEL, cc.sys.isNative, cc.sys.os);
S.init("zh");
cc.log("i18n===", S.t("STR_COREPLAY_BUTTON_FOLD"));
var A = e("ConstantItem");
cc.log(A[1]);
var O = new Date().getTime();
cc.log("timeStamp=====", O, new Date());
cc.log("DevicesInfo===id", i.getDevicesID(), cc.sys.os);
var d = cc.find("uipanel/btn_Alert", this.node);
ua.darkButton(d, function(e) {
o.ShowAlert("666", [ "LOL", "LOL1", "LOL#" ], function(e) {
cc.log("click==", e);
});
});
var h = cc.find("uipanel/btn_showWaiting", this.node);
ua.darkButton(h, function(e) {
t.showWiat(!0);
setTimeout(function() {
t.showWiat(!1);
}, 3e3);
});
var l = cc.find("uipanel/btn_EventTest", this.node);
ua.darkButton(l, function(e) {
EventManager.dispatchEvent(t.node, RefreshInfo, {
name: "Lee123"
});
});
var D, u = cc.find("uipanel/loadTex", this.node);
D = "http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJ1E1XEicr8vAj5o8DMT7GTfCtFyC6vok9TImPjf6BfKBKLFA8hKBS6Wiaz2GJyQQWoV5lA7fhqS4SA/96";
o.GloadPic(D, function(e) {
if (e) {
u.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(e);
}
});
var p = null, f = (t = this, cc.find("uipanel/btn_Speech", this.node));
f.on(cc.Node.EventType.TOUCH_START, function() {
p = Date.now();
cc.log("开始录音");
t.SpeechFile = Date.now() + ".amr";
E.prepare(t.SpeechFile);
}, this);
f.on(cc.Node.EventType.TOUCH_END, function() {
cc.log("结束录音");
if (Date.now() - p < 1e3) {
E.cancel();
cc.log("时间小于一秒");
o.ShowAlert("时间小于一秒", [ "Yes" ], function(e) {});
} else if (Date.now() - p > 8e3) {
E.cancel();
o.ShowAlert("录音时间大于8s", [ "Yes" ], function(e) {});
} else if (null != p) {
E.release();
var e = Date.now() - p;
console.log("record time。。。。。  " + e);
var _ = E.getVoiceData(t.SpeechFile);
console.log("sound data。。。。。  " + _);
_ && setTimeout(function() {
var e = t.SpeechFile;
E.play(e);
E.writeVoice(e, _);
}, 2e3);
}
}, this);
f.on(cc.Node.EventType.TOUCH_CANCEL, function() {
E.cancel();
cc.log("取消录音");
}, this);
EventManager.on(this.node, RefreshInfo, this.EventTest);
var M = cc.find("uipanel/btn_fps", this.node);
ua.darkButton(M, function() {
console.log("setDisplayStats-", !cc.debug.isDisplayStats());
cc.debug.setDisplayStats(!cc.debug.isDisplayStats());
});
var P = cc.find("uipanel/btn_showpopLayer", this.node);
ua.darkButton(P, function() {
ua.loadPrefabRes("prefabs/poplayer", function(e) {
if (e) {
cc.director.getScene().getChildByName("Canvas").addChild(e);
var _ = e.getComponent("poplayer");
_ && _.show();
}
});
});
var L = cc.find("content/sp3", this.node);
L.isGray = !1;
var V = cc.find("uipanel/btn_GrayRenderCom", this.node);
ua.darkButton(V, function() {
var e = L.getComponent(cc.Sprite);
if (0 == L.isGray) {
var _ = cc.MaterialVariant.createWithBuiltin("2d-gray-sprite");
e.setMaterial(0, _);
} else {
var t = cc.MaterialVariant.createWithBuiltin("2d-sprite");
e.setMaterial(0, t);
}
L.isGray = !L.isGray;
});
var m = cc.find("uipanel/btn_loadbundle", this.node);
ua.darkButton(m, function() {
var e = cc.assetManager.getBundle("Testbundle");
if (e) {
console.log("have already loaded bundle.");
var _ = window.SayHello;
_ && _.Say();
e.loadScene("bundlescene", function(e, _) {
e ? console.log("load bundle scene error") : cc.director.runScene(_);
});
} else o.gLoadBUndle("http://192.168.65.172/hotupversion/remote/Testbundle", {
onFileProgress: function(e, _) {
return console.log("bundle progress==", e, _);
}
}, function(e, _) {
if (e) return console.error(e);
console.log("load bundle successfully.", _);
var t = window.SayHello;
t && t.Say();
_.loadScene("bundlescene", function(e, _) {
e ? console.log("load bundle scene error") : cc.director.runScene(_);
});
});
});
var g = cc.find("uipanel/btn_goslot", this.node);
ua.darkButton(g, function() {
cc.director.loadScene("SlotScene");
});
cc.find("content/sp1", this.node).getComponent(cc.RenderComponent).getMaterial(0);
var U = cc.find("garpgicsnode", this.node), H = U.getComponent(cc.Graphics);
U.on(cc.Node.EventType.TOUCH_START, function(e) {
var _ = e.getTouches(), t = _[0].getLocation();
_[0].getLocationInView();
t = R.parent.convertToNodeSpaceAR(t);
var T = o.GgetTwoV2Angle(R.getPosition(), t);
R.angle = -T;
H.moveTo(t.x, t.y);
});
U.on(cc.Node.EventType.TOUCH_MOVE, function(e) {
var _ = e.getTouches()[0].getLocation();
_ = R.parent.convertToNodeSpaceAR(_);
var t = o.GgetTwoV2Angle(R.getPosition(), _);
R.angle = -t;
H.lineTo(_.x, _.y);
H.stroke();
});
var y = cc.view.getVisibleSize(), F = cc.v2(-y.width / 2, y.height / 2), G = cc.v2(y.width / 2, -y.height / 2), w = o.GgetTwoV2Angle(F, G);
cc.find("uipanel/New Sprite", this.node).angle = -w;
var v = cc.view.getVisibleSize();
(U = U.getComponent(cc.Graphics)).moveTo(-v.width / 2, v.height / 2);
U.quadraticCurveTo(0, 0, v.width / 2, v.height / 2);
U.stroke();
},
startMove: function() {
var e = this, _ = (cc.find("garpgicsnode", this.node), cc.find("uipanel/btn_goslot", this.node)), t = cc.view.getVisibleSize(), T = [ cc.v2(-t.width / 2, t.height / 2), cc.v2(0, 0), cc.v2(t.width / 2, t.height / 2) ], S = cc.bezierTo(2, T);
_.setPosition(cc.v2(-t.width / 2, t.height / 2));
var n = cc.callFunc(function() {
_.stopAllActions();
e.startMove();
}), i = cc.sequence(S, n);
_.runAction(cc.repeatForever(i));
},
EventTest: function(e) {
e.stopPropagation();
o.ShowAlert("事件传来的参数" + JSON.stringify(e.detail), []);
},
onDestroy: function() {
this._super();
}
});
cc._RF.pop();
}, {
BaseComponent: "BaseComponent",
ConstantItem: "ConstantItem",
Devices: "Devices",
Global: "Global",
Package: "Package",
VoiceNative: "VoiceNative",
i18n: "i18n",
xxtea: "xxtea"
} ],
Testts: [ function(e, _, t) {
"use strict";
cc._RF.push(_, "5a00cnrQ/9L/Y0QWJw10Tsi", "Testts");
var T = this && this.__extends || function() {
var e = function(_, t) {
return (e = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, _) {
e.__proto__ = _;
} || function(e, _) {
for (var t in _) _.hasOwnProperty(t) && (e[t] = _[t]);
})(_, t);
};
return function(_, t) {
e(_, t);
function T() {
this.constructor = _;
}
_.prototype = null === t ? Object.create(t) : (T.prototype = t.prototype, new T());
};
}(), S = this && this.__decorate || function(e, _, t, T) {
var S, n = arguments.length, i = n < 3 ? _ : null === T ? T = Object.getOwnPropertyDescriptor(_, t) : T;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, _, t, T); else for (var o = e.length - 1; o >= 0; o--) (S = e[o]) && (i = (n < 3 ? S(i) : n > 3 ? S(_, t, i) : S(_, t)) || i);
return n > 3 && i && Object.defineProperty(_, t, i), i;
};
Object.defineProperty(t, "__esModule", {
value: !0
});
var n = cc._decorator, i = n.ccclass, o = n.property, E = e("./Script/core/xxtea.js"), R = function(e) {
T(_, e);
function _() {
var _ = null !== e && e.apply(this, arguments) || this;
_.label = null;
_.text = "hello";
return _;
}
_.prototype.start = function() {
cc.log("test ts Start" + this.text);
var e = E.encryptToString("adadjaojdaj", "poker");
console.log("encrypt_data=", e);
var _ = function(e) {
cc.log(e);
return e.toString();
}(66666666);
cc.log(typeof _);
cc.log(this.addSum(1, 2, 3));
cc.log(cc.ENGINE_VERSION);
};
_.prototype.addSum = function() {
for (var e = [], _ = 0; _ < arguments.length; _++) e[_] = arguments[_];
for (var t = 0, T = 0, S = e; T < S.length; T++) {
t += S[T];
}
return t;
};
_.prototype.Hello = function() {
return cc.v2(0, 0);
};
S([ o(cc.Label) ], _.prototype, "label", void 0);
S([ o ], _.prototype, "text", void 0);
return _ = S([ i ], _);
}(cc.Component);
t.default = R;
cc._RF.pop();
}, {
"./Script/core/xxtea.js": "xxtea"
} ],
VersionManager: [ function(e, _, t) {
"use strict";
cc._RF.push(_, "5cca3EkU1NJZ4QUch/IWwni", "VersionManager");
var T = e("HttpHelper"), S = e("Devices"), n = "", i = "", o = "";
if (cc && cc.sys.isNative) {
n = jsb.fileUtils.getWritablePath() + "packageTemp/";
i = jsb.fileUtils.getWritablePath() + "package/";
o = jsb.fileUtils.getWritablePath() + "config/appinfoiii.json";
}
var E = e("Global"), R = {
remoteCfg: null,
remoteMd5Cfg: "",
localCfg: "",
stateCode: "",
totalDownSize: 0,
downedSize: 0,
checkUpdate: function(e, _, t) {
cc.log("checkUpdate----", e);
this.downcall = _;
this.progressCall = t;
this.remoteCfg = e;
this.parseLocalCfg();
},
downRemoteMd5: function(e) {
var _ = this;
cc.log("下载远程md5,", e);
T.sendHttpRequest(e, function(e) {
if (null != e) if (E.isjson(e)) {
_.remoteMd5Cfg = JSON.parse(e);
_.comparefiles();
} else _.callFunWithState(11, "远程md5-json不合法"); else _.callFunWithState(2, "获取MD5配置文件失败");
});
},
comparefiles: function() {
for (var e = this.localCfg.files, _ = this.remoteMd5Cfg.files, t = new Array(), T = {}, S = {}, n = 0; n < e.length; n++) {
var i = (R = e[n]).filename, o = R.md5, E = R.size;
T[i] = {
md5: o,
fileSize: E
};
}
for (n = 0; n < _.length; n++) {
var R;
i = (R = _[n]).filename, o = R.md5, E = R.size;
S[i] = {
md5: o,
fileSize: E
};
}
for (var r in S) {
var s = S[r], I = s.md5;
E = s.fileSize;
T[r] ? I != T[r].md5 && t.push({
fileName: r,
md5: I,
fileSize: E
}) : t.push({
fileName: r,
md5: I,
fileSize: E
});
}
for (var a in t) {
E = t[a].fileSize;
this.totalDownSize = this.totalDownSize + E;
}
this.downFiles(t);
},
downFiles: function(e) {
if (0 != e.length) {
var _ = this, t = e;
_.DownIndex = 0;
(function e(T) {
var S = _.BaseUrl, o = t[T].fileName, R = t[T].fileSize, r = S + o, s = n + o, I = i + o, a = n + E.GgetDirByUrl(o), c = i + E.GgetDirByUrl(o);
E.GcreateDir(a);
E.GcreateDir(c);
t[T].tempfile = s;
t[T].realfile = I;
cc.log("下载=====", r);
E.GDownFile(r, function(T) {
if (T) {
E.GwriteDataToFile(T, s);
_.downedSize = _.downedSize + R;
if (_.DownIndex < t.length - 1) {
_.DownIndex = _.DownIndex + 1;
_.progressCall && _.progressCall(Math.floor(_.DownIndex / t.length * 100), (_.downedSize / 1e3).toFixed(1), (_.totalDownSize / 1e3).toFixed(1));
e(_.DownIndex);
} else {
_.progressCall && _.progressCall(Math.floor(100), (_.downedSize / 1e3).toFixed(1), (_.totalDownSize / 1e3).toFixed(1));
cc.log("下载完成***");
_.MoveFiles(t);
}
} else _.callFunWithState(3, "下载单个文件失败=" + r);
});
})(_.DownIndex);
} else this.MoveDone();
},
MoveFiles: function(e) {
this.moveStep = 0;
var _ = this;
(function t(T) {
var S = e[T].tempfile, n = e[T].realfile, R = E.GgetDataFromFile(S);
if (R) {
E.GwriteDataToFile(R, n);
if (_.moveStep < e.length - 1) {
_.moveStep = _.moveStep + 1;
t(_.moveStep);
} else _.MoveDone();
} else {
jsb.fileUtils.removeDirectory(i);
jsb.fileUtils.createDirectory(i);
jsb.fileUtils.removeFile(o);
_.callFunWithState(4, "移动文件失败" + S);
}
})(this.moveStep);
},
MoveDone: function() {
cc.log("移动成功****");
var e = JSON.stringify(this.remoteMd5Cfg, null, 4);
E.GcreateDir(jsb.fileUtils.getWritablePath() + "config");
E.GwriteStringToFile(e, o);
this.callFunWithState(100, "更新成功");
},
ReStartGame: function() {
cc.log("重启***");
cc.audioEngine.stopAll();
cc.game.restart();
},
RemoveTemp: function() {
if (cc.sys.isNative) {
jsb.fileUtils.removeDirectory(i);
jsb.fileUtils.createDirectory(i);
jsb.fileUtils.removeFile(o);
}
},
callFunWithState: function(e, _, t) {
if (this.downcall) {
console.log(_ + ":" + e);
this.downcall(e, t);
}
},
parseLocalCfg: function() {
var e = this, _ = o;
if (jsb.fileUtils.isFileExist(_)) {
console.log("读取包外配置");
var t = jsb.fileUtils.getStringFromFile(_);
if (!E.isjson(t)) {
e.RemoveTemp();
e.callFunWithState(9, "包外json配置不合法");
return;
}
e.localCfg = JSON.parse(t);
e.parseRemoteCfg();
} else {
console.log("读取包内配置");
cc.resources.load("appinfoiii", function(_, t) {
if (_) {
cc.log("读取包内配置失败" + _);
e.callFunWithState(5, "读取包内配置失败，请检查本地配置");
} else {
e.localCfg = t.json;
e.parseRemoteCfg();
}
});
}
},
getScriptVersion: function() {
return this.localCfg.scriptVersion;
},
getH5ScriptVersion: function() {
var e = this;
cc.resources.load("appinfoiii", function(_, t) {
if (_) {
cc.log("读取包内配置失败" + _);
e.callFunWithState(5, "读取包内配置失败，请检查本地配置");
} else e.localCfg = t.json;
});
},
parseRemoteCfg: function() {
if (0 != cc.sys.isNative && null != this.remoteCfg) {
var e = this;
T.sendHttpRequest(this.remoteCfg, function(_) {
if (null != _) if (E.isjson(_)) {
e.remoteCfg = JSON.parse(_);
var t = e.localCfg.scriptVersion, T = e.remoteCfg.scriptVersion, n = e.remoteCfg.debugScriptVersion, i = e.remoteCfg.supportBinarys, o = e.remoteCfg.forcedBinaryVersions, R = e.remoteCfg.channels, r = e.remoteCfg.debugUIDs, s = e.remoteCfg.binaryUrl[window.DISTRIBUTE_CHANNEL] || e.remoteCfg[0], I = cc.sys.localStorage.getItem("debugId");
if (E.GIsArrContain(R, window.DISTRIBUTE_CHANNEL)) if (E.GIsArrContain(i, S.getAppVersion())) if (E.GIsArrContain(o, S.getAppVersion())) e.callFunWithState(8, "强制更新", s); else {
console.log("本地脚本号==" + t);
console.log("远程debug版本号==" + n);
console.log("远程版本号==" + T);
if (E.GIsArrContain(r, I)) {
if (parseInt(t) != parseInt(n)) {
console.log("走测试玩家----热更新");
var a = e.remoteCfg.debugBaseUrl, c = (a = cc.js.formatStr(a, n)) + e.remoteCfg.debugConfigFile;
e.BaseUrl = a;
e.downRemoteMd5(c);
return;
}
e.callFunWithState(0, "测试玩家版本和远程一样");
} else if (parseInt(t) == parseInt(T)) e.callFunWithState(0, "不用更新-本地和远程版本一致:" + t); else {
console.log("走正式----热更新");
var N = e.remoteCfg.baseUrl;
c = (N = cc.js.formatStr(N, T)) + e.remoteCfg.configFile;
e.BaseUrl = N;
e.downRemoteMd5(c);
}
} else e.callFunWithState(6, "不支持热更新的2进制版本号" + S.getAppVersion()); else e.callFunWithState(7, "不支持热更新的渠道号" + window.DISTRIBUTE_CHANNEL);
} else e.callFunWithState(10, "远程配置json不合法"); else e.callFunWithState(1, "获取版本配置文件失败");
});
}
}
};
_.exports = R;
cc._RF.pop();
}, {
Devices: "Devices",
Global: "Global",
HttpHelper: "HttpHelper"
} ],
VoiceNative: [ function(e, _, t) {
"use strict";
cc._RF.push(_, "6659eBg8ldPA6/b57j6ol8I", "VoiceNative");
var T = 12, S = 128 - T;
function n(e) {
e -= S;
var _ = Math.floor(e / T) + S, t = e % T + S;
return String.fromCharCode(_) + String.fromCharCode(t);
}
for (var i = {}, o = {}, E = 0; E < 256; ++E) {
var R = null, r = E + 1;
R = r >= S ? n(r) : String.fromCharCode(r);
i[E] = R;
o[R] = E;
}
function s(e) {
var _ = "", t = e.length;
cc.log("encode, len=" + t + ", data=" + e);
var T = t >> 16 & 255, S = t >> 8 & 255, n = 255 & t;
_ += i[t >> 24 & 255];
_ += i[T];
_ += i[S];
_ += i[n];
for (var o = 0; o < e.length; ++o) _ += i[e[o]];
return _;
}
var I = "com/casino/game/VoiceRecorder", a = cc.Class({
extends: cc.Component,
properties: {
_voiceMediaPath: null
},
onLoad: function() {},
init: function() {
if (cc.sys.isNative) {
this._voiceMediaPath = jsb.fileUtils.getWritablePath() + "voicemsgs/";
this.setStorageDir(this._voiceMediaPath);
}
},
prepare: function(e) {
if (cc.sys.isNative) {
cc.audioEngine.pauseAll();
this.clearCache(e);
cc.sys.isNative && (cc.sys.os == cc.sys.OS_ANDROID ? jsb.reflection.callStaticMethod(I, "prepare", "(Ljava/lang/String;)V", e) : cc.sys.os == cc.sys.OS_IOS && jsb.reflection.callStaticMethod("VoiceSDK", "prepareRecord:", e));
}
},
release: function() {
if (cc.sys.isNative) {
cc.audioEngine.resumeAll();
cc.sys.isNative && (cc.sys.os == cc.sys.OS_ANDROID ? jsb.reflection.callStaticMethod(I, "release", "()V") : cc.sys.os == cc.sys.OS_IOS && jsb.reflection.callStaticMethod("VoiceSDK", "finishRecord"));
}
},
cancel: function() {
if (cc.sys.isNative) {
cc.audioEngine.resumeAll();
cc.sys.isNative && (cc.sys.os == cc.sys.OS_ANDROID ? jsb.reflection.callStaticMethod(I, "cancel", "()V") : cc.sys.os == cc.sys.OS_IOS && jsb.reflection.callStaticMethod("VoiceSDK", "cancelRecord"));
}
},
writeVoice: function(e, _) {
if (cc.sys.isNative && _ && _.length > 0) {
var t = this._voiceMediaPath + e;
this.clearCache(e);
jsb.fileUtils.writeDataToFile(_, t);
}
},
clearCache: function(e) {
if (cc.sys.isNative) {
var _ = this._voiceMediaPath + e;
jsb.fileUtils.isFileExist(_) && jsb.fileUtils.removeFile(_);
jsb.fileUtils.isFileExist(_ + ".wav") && jsb.fileUtils.removeFile(_ + ".wav");
}
},
play: function(e) {
if (cc.sys.isNative) {
cc.audioEngine.pauseAll();
cc.sys.os == cc.sys.OS_ANDROID ? jsb.reflection.callStaticMethod("com/casino/game/VoicePlayer", "play", "(Ljava/lang/String;)V", e) : cc.sys.os == cc.sys.OS_IOS && jsb.reflection.callStaticMethod("VoiceSDK", "play:", e);
}
},
isSpeechPlaying: function() {
if (cc.sys.isNative) return cc.sys.os == cc.sys.OS_ANDROID ? jsb.reflection.callStaticMethod("com/casino/game/VoicePlayer", "isPlay", "()Z") : cc.sys.os == cc.sys.OS_IOS && jsb.reflection.callStaticMethod("VoiceSDK", "isPlay:");
},
getVoiceData: function(e) {
if (cc.sys.isNative) {
var _ = this._voiceMediaPath + e;
console.log("VoiceNative getVoiceData:" + _);
var t = jsb.fileUtils.getDataFromFile(_);
if (t) {
return t;
}
}
return null;
},
getDataString: function(e) {
return s(e);
},
setStorageDir: function(e) {
if (cc.sys.isNative) if (cc.sys.os == cc.sys.OS_ANDROID) jsb.reflection.callStaticMethod(I, "setStorageDir", "(Ljava/lang/String;)V", e); else if (cc.sys.os == cc.sys.OS_IOS) {
jsb.reflection.callStaticMethod("VoiceSDK", "setStorageDir:", e);
jsb.fileUtils.isDirectoryExist(e) || jsb.fileUtils.createDirectory(e);
}
}
});
a = new a();
_.exports = a;
cc._RF.pop();
}, {} ],
WsTest: [ function(e, _, t) {
"use strict";
cc._RF.push(_, "e5e9fObFGlLQbIbtk/t0ooz", "WsTest");
cc.Class({
extends: cc.Component,
properties: {},
start: function() {
var e = this;
this._wsiSendBinary = new WebSocket("ws://127.0.0.1:9001");
this._wsiSendBinary.binaryType = "arraybuffer";
this._wsiSendBinary.onopen = function(_) {
cc.log("websocket  open");
e._wsiSendBinary.send(JSON.stringify({
funcName: "auth",
uid: Number(new Date())
}));
e._wsiSendBinary.send(JSON.stringify({
funcName: "enterroom",
roomid: 444
}));
};
this._wsiSendBinary.onmessage = function(_) {
cc.log("websocket  onmessage", _.data);
var t = JSON.parse(_.data);
"chatText" == t.funcName && e.addText(t.txt);
};
this._wsiSendBinary.onerror = function(e) {
cc.log("websocket  onerror");
};
this._wsiSendBinary.onclose = function(e) {
cc.log("websocket  onclose");
};
var _ = cc.find("uipanel/sendbtn", this.node);
ua.darkButton(_, function(_) {
cc.log("send");
e.sendText();
});
},
sendText: function() {
var e = cc.find("uipanel/Edit", this.node).getComponent(cc.EditBox), _ = e.string;
cc.log("txt==", _);
this._wsiSendBinary.send(JSON.stringify({
funcName: "chatText",
txt: _
}));
e.string = "";
},
addText: function(e) {
var _ = cc.find("uipanel/scrollview", this.node), t = cc.instantiate(cc.find("uipanel/item", this.node));
t.getComponent(cc.Label).string = e;
t.x = 0;
t.active = !0;
var T = _.getComponent(cc.ScrollView);
T.content.addChild(t);
T.scrollToBottom(.5);
}
});
cc._RF.pop();
}, {} ],
ball: [ function(e, _, t) {
"use strict";
cc._RF.push(_, "cf9a69rTylNR4vuXlstck3D", "ball");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {},
tap: function() {
var e = this.node.getComponent(cc.RigidBody);
console.log("ball tap====", e);
e.applyForceToCenter(new cc.Vec2(0, 6e5), !0);
},
start: function() {
console.log("start", this.node.y);
},
printlog: function() {
this.node.getComponent(cc.RigidBody).linearVelocity;
},
onBeginContact: function(e, _, t) {
console.log("ball onBeginContact");
},
onEndContact: function(e, _, t) {
console.log("ball onEndContact");
},
onPreSolve: function(e, _, t) {
console.log("ball onPreSolve");
},
onPostSolve: function(e, _, t) {
console.log("ball onPostSolve");
},
update: function(e) {}
});
cc._RF.pop();
}, {} ],
chooseupdate: [ function(e, _, t) {
"use strict";
cc._RF.push(_, "5a10feVxjlCLr90Fw2jtkf1", "chooseupdate");
var T = e("BaseComponent");
cc.Class({
extends: T,
properties: {
AimType: {
default: 1,
override: !0
}
},
onDestroy: function() {
this._super();
},
onLoad: function() {
this._super();
this.content = this.node.getChildByName("bg").getChildByName("ScrollView").getChildByName("view").getChildByName("content");
this.item = this.node.getChildByName("bg").getChildByName("item");
this.tiptext = this.node.getChildByName("bg").getChildByName("tiptext");
},
initData: function(e, _) {
this.call = _;
this.initView(e);
},
initView: function(e) {
var _ = this, t = this;
this.tiptext.getComponent(cc.Label).string = e.tips;
var T = e.items, S = function(e) {
i = cc.instantiate(_.item);
_.content.addChild(i);
i.active = !0;
i.getChildByName("text").getComponent(cc.Label).string = T[e].text;
ua.darkButton(i, function() {
t.call && t.call(e, t);
});
};
for (var n in T) {
var i;
S(n);
}
},
onbackpress: function() {
this._super();
},
start: function() {}
});
cc._RF.pop();
}, {
BaseComponent: "BaseComponent"
} ],
ch: [ function(e, _, t) {
"use strict";
cc._RF.push(_, "2d2c7B6fVVH4p3u1YQFpkXF", "ch");
_.exports = {
STR_COREPLAY_BUTTON_FOLD: "弃牌",
STR_COREPLAY_BUTTON_CHECK: "看牌",
STR_COREPLAY_BUTTON_CALL: "跟注 %s",
STR_COREPLAY_BUTTON_RAISE: "加注",
STR_COREPLAY_BUTTON_CONFIRM: "确定",
STR_COREPLAY_BUTTON_ALLIN: "全下",
STR_COREPLAY_BUTTON_PREP_CHECKORFOLD: "看/弃",
STR_COREPLAY_BUTTON_PREP_AUTOCHECK: "看牌",
STR_COREPLAY_BUTTON_PREP_CALL: "跟注 %s",
STR_COREPLAY_BUTTON_PREP_CALLANY: "跟任何注",
STR_INFORMATION_TILLE_1: "个人信息",
STR_INFORMATION_TILLE_2: "道具清单",
STR_INFORMATION_TILLE_3: "快捷文字",
STR_INFORMATION_TILLE_4: "快捷语音",
STR_INFORMATION_TILLE_5: "数据统计",
STR_INFORMATION_PERSONAL_LV: "等级",
STR_INFORMATION_PERSONAL_ID: "ID",
STR_INFORMATION_PERSONAL_NAME: "昵称",
STR_INFORMATION_PERSONAL_MALE: "男性",
STR_INFORMATION_PERSONAL_FEMALE: "女性",
STR_INFORMATION_PERSONAL_ADDRESS: "地址",
STR_INFORMATION_PERSONAL_ADDRESS_NULL: "未知",
STR_INFORMATION_PERSONAL_SIGNATURE: "签名",
STR_INFORMATION_PERSONAL_PHOTO_DEFAULT: "上传一张新照片",
STR_INFORMATION_PERSONAL_PHOTO_INREVIEW: "审核中",
STR_INFORMATION_ITEMLIST_TIME: "天",
STR_INFORMATION_ITEMLIST_TIME_HOUR: "小时",
STR_INFORMATION_QUICKCHAT_WORDS: "快捷文字 %d",
STR_INFORMATION_QUICKCHAT_WORDS_DEFAULT_1: "游戏开始了，我已经准备好赢钱了",
STR_INFORMATION_QUICKCHAT_WORDS_DEFAULT_2: "不要耽误时间了，赶快下注吧",
STR_INFORMATION_QUICKCHAT_WORDS_DEFAULT_3: "手牌这么好，看来这局是我赢了。",
STR_INFORMATION_QUICKCHAT_WORDS_DEFAULT_4: "让我all-in，怕的人就赶快弃牌吧。",
STR_INFORMATION_QUICKCHAT_WORDS_DEFAULT_5: "虽然这局我赢了，但是我依然不会手下留情的",
STR_INFORMATION_QUICKCHAT_WORDS_DEFAULT_6: "弃牌也未必代表我输了,让我先休息一下。",
STR_INFORMATION_QUICKCHAT_WORDS_DEFAULT_7: "你牌打得真好，连我都忍不住要称赞你了",
STR_INFORMATION_QUICKCHAT_WORDS_DEFAULT_8: "居然有这种事，简直不能相信",
STR_INFORMATION_QUICKCHAT_WORDS_DEFAULT_9: "这一局我没认真玩，下次不会输了。",
STR_INFORMATION_QUICKCHAT_WORDS_DEFAULT_10: "我大发慈悲的离开了，你们就庆幸吧。",
STR_INFORMATION_QUICKCHAT_WORDS_DEFAULT_NULL: "点击此处输入您的快捷文字",
STR_INFORMATION_QUICKCHAT_VOICE: "快捷语音 %d",
STR_INFORMATION_QUICKCHAT_VOICE_DEFAULT: "长按此处进行录音",
STR_INFORMATION_QUICKCHAT_VOICE_ENTERTITLE: "点击此处输入标题",
STR_INFORMATION_QUICKCHAT_VOICE_RECORDING: "正在录入",
STR_INFORMATION_STATISTICS_ID: "ID:",
STR_INFORMATION_STATISTICS_GAMES: "游戏局数:",
STR_INFORMATION_STATISTICS_WINS: "获胜局数",
STR_INFORMATION_STATISTICS_LOSE: "失败局数",
STR_INFORMATION_STATISTICS_WINRATE: "胜率:",
STR_INFORMATION_STATISTICS_SHOWINRIVER: "亮牌率:",
STR_INFORMATION_STATISTICS_FOLDINPREFLOP: "首轮弃牌率:",
STR_INFORMATION_STATISTICS_ALLININPREFLOP: "首轮全下率:",
STR_INFORMATION_STATISTICS_HIGHESTCHIP: "历史最多筹码:",
STR_INFORMATION_STATISTICS_MOSTWIN: "最大赢取:",
STR_INFORMATION_STATISTICS_BESTCARDS: "最大牌型:",
STR_INFORMATION_STATISTICS_GIVECHIPTOFRIEND: "赠送好友免费筹码次数:",
STR_INFORMATION_STATISTICS_GIVECHIPTOFRIEND_TIMES: "次",
STR_INFORMATION_STATISTICS_GIVECHIPINGAME: "赠送玩家筹码次数:",
STR_INFORMATION_STATISTICS_GIVECHIPINGAME_TIMES: "次",
STR_INFORMATION_ITEMLIST_ITEM_TITLE: "您拥有的：",
STR_INFORMATION_ITEMLIST_PATCH_TITLE: "您可兑换：",
STR_RANKING_TITLE_MAIN: "排行版",
STR_RANKING_TITLE_1: "总筹码",
STR_RANKING_TITLE_2: "单词赢取倍率",
STR_RANKING_TITLE_3: "筹码波动",
STR_RANKING_TITLE_4: "今日赢取",
STR_RANKING_TITLE_5: "互动",
STR_RANKING_GMT_GMT: "格林威治时间",
STR_RANKING_GMT_EXPLAIN: "游戏服务器采用格林威治时间为标准。此处显示的是格林威治时间，请各位玩家注意。",
STR_RANKING_TOP_TOP: "前列",
STR_RANKING_RANKING_NOPLAYER: "排行榜上没有玩家",
STR_CHAT_EXPRESSION_TITLE: "表情",
STR_CHAT_QUICKWORDS_TITLE: "快捷文字",
STR_CHAT_QUICKVOICES_TITLE: "快捷语音",
STR_CHAT_INPUT_DEFAULT: "点击此处输入您的文字",
STR_CHAT_INPUT_DEFAULT_IOS: "点击此处输入您的文字",
STR_CHAT_QUICKVOICE_NOVICE: "没有快捷语音",
STR_CHAT_QUICKVOICE_NOTITLE: "没有输入描述",
STR_TABLEBOARD_CAHT_NOQUICKVOICE: "您目前还没有预先录入的快捷语音。",
STR_TABLEBOARD_CHAT_NOQUICKTEXT: "您目前还没有预先输入的快捷文字。",
STR_TABLEBOARD_RECORDING_COUNTDOWN: "剩余%d 秒",
STR_FRIENDS_TITLE: "您的好友",
STR_FRIENDS_NOFRIENDS: "您目前还没有好友。点击右上角的搜索按键，您可以通过玩家昵称找到相应的玩家。在牌桌界面和主界面上点击玩家头像，点击加好友按键也能轻松的发送好友申请，快去尝试下吧。",
STR_FRIENDS_FRIENDS_UPDATE: "优先显示更新了照片的好友",
STR_FRIENDS_FRIENDS_OL: "优先显示在线的好友",
STR_FRIENDS_FRIENDS_ACTIVE: "优先显示较活跃的好友",
STR_FRIENDS_FRIENDS_MAX: "MAX",
STR_FRIENDS_FRIENDS_INFORMATION_LV: "等级:",
STR_FRIENDS_FRIENDS_INFORMATION_MALE: "男性",
STR_FRIENDS_FRIENDS_INFORMATION_FEMALE: "女性",
STR_FRIENDS_FRIENDS_INFORMATION_ADDRESS: "地址",
STR_FRIENDS_FRIENDS_INFORMATION_DEFAULT: "显示您给予了该玩家多少赞，评论和免费筹码赠送次数",
STR_FRIENDS_FRIENDS_INFORMATION_NOPHOTO: "该玩家没有上传任何照片",
STR_FRIENDS_FRIENDS_INFORMATION_GAMES: "游戏",
STR_FRIENDS_FRIENDS_INFORMATION_WIN: "胜利",
STR_FRIENDS_FRIENDS_INFORMATION_LOSE: "失败",
STR_FRIENDS_FRIENDS_INFORMATION_WINRATE: "胜率:",
STR_FRIENDS_FRIENDS_INFORMATION_SHOWINRIVER: "亮牌率:",
STR_FRIENDS_FRIENDS_INFORMATION_FOLDINPREFLOP: "首轮弃牌率:",
STR_FRIENDS_FRIENDS_INFORMATION_ALLININPREFLOP: "首轮全下率:",
STR_FRIENDS_FRIENDS_INFORMATION_HIGHESTCHIP: "历史最多筹码:",
STR_FRIENDS_FRIENDS_INFORMATION_MOSTWIN: "最大赢取:",
STR_FRIENDS_FRIENDS_INFORMATION_BESTCARDS: "最大牌型:",
STR_FRIENDS_FRIENDS_SEARCHTITLE: "搜索到的好友",
STR_FRIENDS_FRIENDS_SEARCHTIPS: "请至少输入四个字符来搜索昵称",
STR_FRIENDS_FRIENDS_SEARCH: "根据玩家昵称找到了 %d 个玩家。最多能显示 %d 个相关玩家。",
STR_LOGIN_PHONELOGIN: "手机登录",
STR_LOGIN_ACCOUNTLOGIN: "账号登陆",
STR_LOGIN_FACEBOOKLOGIN: "Facebook登陆",
STR_LOGIN_GUESTLOGIN: "游客登陆",
STR_LOGIN_ACCOUNTLOGIN_ACCOUNT: "输入您的邮箱",
STR_LOGIN_ACCOUNTLOGIN_PASSWORD: "输入您的密码",
STR_LOGIN_ACCOUNTLOGIN_AUTOLOGIN: "自动登录",
STR_LOGIN_ACCOUNTLOGIN_RETRIEVEPASSWORD: "找回密码",
STR_LOGIN_ACCOUNTLOGIN_LOGIN: "登录",
STR_LOGIN_ACCOUNTLOGIN_REGISTER: "注册",
STR_LOGIN_ACCOUNTLOGIN_REGISTERACCOUNT: "请输入您的邮箱",
STR_LOGIN_ACCOUNTLOGIN_REGISTERENTERPASSWORD: "请输入密码",
STR_LOGIN_ACCOUNTLOGIN_REGISTERCONFRIMPASSWORD: "请确认密码",
STR_LOGIN_ACCOUNTLOGIN_REGISTERREGISTER: "注册",
STR_LOGIN_ACCOUNTLOGIN_RETRIEVEPASSWORD_EXPLAIN: "如果你想找回密码，请输入你注册账号时所使用的邮箱，我们会将密码找回邮件发送至该邮箱中。",
STR_LOGIN_ACCOUNTLOGIN_RETRIEVEPASSWORD_ENTER: "请输入你的注册邮箱",
STR_LOGIN_ACCOUNTLOGIN_RETRIEVEPASSWORD_SENDEMAIL: "发送邮件",
STR_LOGIN_TERMSOFSERVICE: "用户协议",
STR_LOBBY_TITLE: "房间",
STR_LOBBY_ID: "房间ID",
STR_LOBBY_BLIND: "盲注 %s/%s",
STR_LOBBY_5PLAYERS: "5人场",
STR_LOBBY_9PLAYERS: "9人场",
STR_LOBBY_FULL: "满房间",
STR_LOBBY_EMPTY: "空房间",
STR_SIT_ROOMID: "房间ID %d",
STR_SIT_BLIND: "大小盲注 %s/%s",
STR_SIT_MINBLIND: "最小带入",
STR_SIT_MAXBLIND: "最大带入",
STR_SIT_AUTOSIT: "筹码不足时自动带入筹码并坐下",
STR_SIT_LEAVE: "离开",
STR_SIT_SIT: "坐下",
STR_SIT_NOCHIP: "筹码不足",
STR_SIT_SHOP: "商店",
STR_INVITE_TITLE: "和您的朋友一起玩",
STR_INVITE_BUTTON: "邀请到牌桌",
STR_INVITE_NOFRIEND: "很遗憾，您还没有任何好友。快去和其他玩家交友吧。",
STR_INVITE_UNKNOWN: "地址未知",
STR_MES_FRIEND_TITLE: "好友消息",
STR_MES_SYSTEM_TITLE: "系统消息",
STR_MES_ADDFRIEND_RCCEIVE: "%s 想要和您成为好友。请问你要同意吗？",
STR_MES_ADDFRIEND_AGREE: "恭喜！%s 已经通过了您的好友申请，您可以在好友界面找到他。",
STR_MES_ADDFRIEND_YOUAGREE: "您通过了 %s 的好友申请，您可以在好友界面找到他。",
STR_MES_CHIPS_GIVE: "%s 赠送给您 %d 免费筹码，快来接受吧。",
STR_MES_CHIPS_RECEIVE: "您接受了来自 %s 的 %d 免费筹码。",
STR_MES_MESSAGE_NULL: "目前为止没有消息。",
STR_MES_MONTH_JAN: "一月",
STR_MES_MONTH_FEB: "二月",
STR_MES_MONTH_MAR: "三月",
STR_MES_MONTH_APR: "四月",
STR_MES_MONTH_MAY: "五月",
STR_MES_MONTH_JUN: "六月",
STR_MES_MONTH_JUL: "七月",
STR_MES_MONTH_AUG: "八月",
STR_MES_MONTH_SEP: "九月",
STR_MES_MONTH_OCT: "十月",
STR_MES_MONTH_NOV: "十一月",
STR_MES_MONTH_DEC: "十二月",
STR_HOMESCREEN_OLPLAYER: "%s 玩家在线",
STR_HOMESCREEN_PHOTOUPLOAD: "你的好友 %s 更新了照片",
STR_HOMESCREEN_NOUPLOAD: "没有好友更新照片",
STR_EVENT_BACK: "返回",
STR_ANNOUNCEMENT_TITLE: "公告",
STR_PLAYER_INF_NAME: "姓名",
STR_PLAYER_INF_TITLE_PHOTO: "照片",
STR_PLAYER_INF_TITLE_ACHIEVEMENTS: "成就",
STR_PLAYER_INF_LV: "等级",
STR_PLAYER_INF_MALE: "男性",
STR_PLAYER_INF_FEMALE: "女性",
STR_PLAYER_INF_ADDRESS: "地址",
STR_PLAYER_INF_BUTTON_BLOCK: "点击这里屏蔽玩家",
STR_PLAYER_INF_BLOCKBUTTON: "屏蔽",
STR_PLAYER_INF_BUTTON_UNLOCK: "点击这里解除屏蔽",
STR_PLAYER_INF_UNLOCKBUTTON: "解除屏蔽",
STR_PLAYER_INF_BUTTON_REPORT: "点击这里举报玩家头像",
STR_PLAYER_INF_REPORTBUTTON: "举报",
STR_PLAYER_INF_BLOCK: "屏蔽后，你将不会再收到任何来自该玩家的文字，语音或表情。您确定要屏蔽这名玩家吗？",
STR_PLAYER_INF_UNBLOCK: "解除对该玩家的屏蔽后，你可以再次收到来自该玩家的文字，语音或表情。",
STR_PLAYER_INF_REPORT: "有多名玩家举报此头像后，该头像将被屏蔽。我们将尽快进行审核。您确定要举报这个头像吗？",
STR_PLAYER_PHOTO_NULL: "该玩家并未上传任何照片。",
STR_CHECKPHOTO_NOAUTHORITY: "抱歉，由于该玩家的设置，您没有查看该玩家照片的权限。",
STR_PLAYER_PHOTO_CRITICTITLE: "评论",
STR_PLAYER_STATISTICS_GAMES: "游戏局数:",
STR_PLAYER_STATISTICS_WINS: "胜利",
STR_PLAYER_STATISTICS_LOSE: "失败",
STR_PLAYER_STATISTICS_WINRATE: "胜率:",
STR_PLAYER_STATISTICS_SHOWINRIVER: "亮牌率:",
STR_PLAYER_STATISTICS_FOLDINPREFLOP: "首轮弃牌率:",
STR_PLAYER_STATISTICS_ALLININPREFLOP: "首轮全下率:",
STR_PLAYER_STATISTICS_HIGHESTCHIPS: "历史最多筹码:",
STR_PLAYER_STATISTICS_MOSTWIN: "最大赢取:",
STR_PLAYER_STATISTICS_BTESTCARD: "最大牌型:",
STR_PLAYER_STATISTICS_MINS: "%s 分钟",
STR_PLAYER_ACHIEVEMENT_NULL: "该玩家还没有获得任何成就。",
STR_LOGINREWARD_TITLE: "连续登陆奖励",
STR_LOGINREWARD_DAY: "第 %d 天",
STR_LOGINREWARD_RECEIVED: "已经领取",
STR_LOGINREWARD_TIPS: "如果你您保持连续登陆，您将获得更丰厚的奖励。",
STR_LOGINREWARD_SUCCESS: "恭喜你领取了每日登录奖励 %d %s。",
STR_ABOUTUS_STAFF: "Poker Royal Texas Hold'em Staff List\n\n\nGameDesinger\n\nStone\nJohn Smith\n\n\nProgrammer\n\nJack\nWillian\nHaven \nSpiro\nBob\nRussell\n\n\nArtDesinger\n\nPantheon\nEmma\nMandy\n\n\nGameTester\n\nJoffence\nDoris\n\n\nSpecial Thanks\n\nChris\nAlex\nMatata\nBlank",
STR_BUTTON_YES: "是",
STR_BUTTON_NO: "否",
STR_BUTTON_OK: "确定",
STR_BUTTON_IGNORE: "忽略",
STR_BUTTON_AGREE: "同意",
STR_OPTIONS_TITLE: "设置",
STR_OPTIONS_VOICE: "语音",
STR_OPTIONS_SOUND: "音效",
STR_OPTIONS_AUTOSIT: "自动坐下",
STR_OPTIONS_VIBRATION: "震动",
STR_OPTIONS_FOLLOW: "允许好友跟踪",
STR_OPTIONS_INVITE: "接受邀请信息",
STR_OPTIONS_SEEPHOTOS: "谁能查看我的照片",
STR_OPTIONS_CHOSEN_YES: "是",
STR_OPTIONS_CHOSEN_NO: "否",
STR_OPTIONS_SEEPHOTOS_FRIEND: "仅仅好友可查看",
STR_OPTIONS_SEEPHOTOS_NOONE: "所有人都无法查看",
STR_OPTIONS_SEEPHOTOS_ANYONE: "任何人都可查看",
STR_OPTIONS_RATE: "评价游戏",
STR_OPTIONS_CACHE: "清除缓存",
STR_OPTIONS_CACHE_CONFIRM: "清除缓存将会删除您已经下载的头像，照片。您确定要清除缓存吗？",
STR_OPTIONS_CACHE_CLEARED: "缓存已经清理成功。",
STR_OPTIONS_ABOUT: "关于我们",
STR_OPTIONS_REPORT: "报告问题",
STR_OPTIONS_FOLLOWUS: "关注我们",
STR_OPTIONS_CONTACT: "联系我们",
STR_LOADING_1: "把你的朋友带到游戏中来，但也别忘了在现实中和他们一起玩。",
STR_LOADING_2: "与他人交流时请务必保持礼貌，在尊重别人的同时，你会得到他人的尊重。",
STR_LOADING_3: "永远不要尝试在牌桌上调戏荷官，不论他们有多英俊或者多性感。",
STR_LOADING_4: "如果在你在游戏中感受到了挫折，不要气馁，生活并没有抛弃你。",
STR_LOADING_5: "做任何事情都要适度，包括玩皇家德州扑克哦。",
STR_LOADING_6: "请记得每天打开好友信息，点击赠送筹码按键向好友赠送免费筹码。",
STR_LOADING_7: "轮到自己时，点击左下的筹码，可以快速选择加注金额。",
STR_LOADING_8: "在牌桌上查看玩家详情的时候再次点击玩家头像，就可以屏蔽烦人的玩家欧。",
STR_LOADING_9: "如果要和玩家私聊，请记得使用玩家详细信息界面的语音按键。",
STR_LOADING_10: "请不要忘记查看活动欧，说不定会有惊喜的。",
STR_LOADING_11: "保持连续登录，能够获得最好的奖励。",
STR_LOADING_END: "随时保持一颗平常心，胜利不要兴奋，失败也不要沮丧。",
STR_TABLEBOARD_ID: "房间ID %d 大小盲注 %s/%s",
STR_CARDTYPE_HIGH_CARD: "高牌",
STR_CARDTYPE_PAIR_CARD: "一对",
STR_CARDTYPE_TWO_PAIRS_CARD: "两对",
STR_CARDTYPE_THREE_CARD: "三条",
STR_CARDTYPE_STRAIGHT: "顺子",
STR_CARDTYPE_FLUSH: "同花",
STR_CARDTYPE_FULL_HOUSE: "葫芦",
STR_CARDTYPE_FOUR_OF_A_KIND: "四条",
STR_CARDTYPE_STRAIGHT_FLUSH: "同花顺",
STR_CARDTYPE_ROYAL_FLUSH: "皇家同花顺",
STR_TABLEBOARD_EXP: "经验",
STR_QUESTS_TITLE: "任务",
STR_QUESTS_RECEIVEBUTTON: "领取",
STR_ACHIEVEMENTS_TITLE: "成就",
STR_LVUP_TITLE: "恭喜",
STR_LVUP_TEXT: "恭喜您成功升至%d级，并且获得了%s的奖励筹码。",
STR_SHOP_TITLE: "商店",
STR_SHOP_BUTTON: "购买",
STR_ALMS_TITLE: "复活",
STR_ALMS_TEXT: "尊敬的玩家，由于您当前的钻石与筹码数过少，系统为您发放 %s 筹码。您今日还能领取 %d 次的救济金。",
STR_BUG_REPORT: "点击提交问题",
STR_BUG_INPUT: "请输入您要提交的问题",
STR_BUG_TIP: "您的问题已经提交服务器。我们的客服将尽快解答您的疑问",
STR_BUG_TIME: "提交时间",
STR_BUG_WAIT: "等待客服回复",
STR_BUG_RESPONSETIME: "回复时间",
STR_BUG_DELTIP: "您确定要删除这个问题吗?",
STR_BUG_VIEW: "查看详情",
STR_BUG_COMMIT: "提交",
STR_BUG_DELTIPDONE: "删除成功",
STR_BUG_DELTIPFAIL: "删除失败",
STR_BUG_COMMIT_TIP: "提交失败",
STR_POKER_ROOM_BET: "赌注 %s/%s",
STR_POKERTABLEBOARD_ID: "房间ID%d最小/最大 赌注%s%s",
STR_POKER_PRE_BET: "赌注",
STR_POKER_TYPE_POK9: "Pok9",
STR_POKER_TYPE_POK8: "Pok8",
STR_POKER_TYPE_TONG: "三条",
STR_POKER_TYPE_SAM_LUEANG: "三公",
STR_POKER_TYPE_STRAIGHT_FLUSH: "同花顺",
STR_POKER_TYPE_STRAIGHT: "顺子",
STR_POKER_TYPE_SCORE_0: "Score 0",
STR_POKER_TYPE_SCORE_1: "Score 1",
STR_POKER_TYPE_SCORE_2: "Score 2",
STR_POKER_TYPE_SCORE_3: "Score 3",
STR_POKER_TYPE_SCORE_4: "Score 4",
STR_POKER_TYPE_SCORE_5: "Score 5",
STR_POKER_TYPE_SCORE_6: "Score 6",
STR_POKER_TYPE_SCORE_7: "Score 7",
STR_POKER_TYPE_SCORE_8: "Score 8",
STR_POKER_TYPE_SCORE_0_9: "Score 0-9",
STR_POKER_TYPE_SCORE_9: "Score 9",
STR_POKER_INTRUUCE: "牌型说明",
STR_POKER_INTRUUCE1: "牌力大小由上至下排序",
STR_POKER_INTRUUCE2: "这些牌为0点",
STR_POKER_INTRUUCE3: "这些牌为1-9点",
STR_POKER_INTRUUCE4: "所有手牌点数相加，取个位数",
STR_POKER_INTRUUCE5: "2张初始牌为9点",
STR_POKER_INTRUUCE6: "2张初始牌为8点",
STR_POKER_INTRUUCE7: "KA2、A23不是顺子",
STR_POKER_INTRUUCE8: "牌型的赔率倍数",
STR_POKER_INTRUUCE9: "2张同花",
STR_POKER_INTRUUCE10: "3张同花",
STR_POKER_INTRUUCE11: "本局游戏结束后，将离开座位",
STR_POKER_INTRUUCE12: "本局游戏结束后，将离开座位并退出房间",
STR_WIN_STREAK: "连胜:",
STR_PLAYER: "玩家",
STR_DEAR: "庄家",
STR_GAME_GOTODEAR: "点击上庄",
STR_CHIP_NOT_ENOUGH: "筹码不足,至少%s筹码才能上庄,是否去商店？",
STR_POKERTABLEBOARD_ID1: "最小/最大 赌注%s/%s",
STR_GAME_GOTODEAR_1: "上庄成功，需要连续坐庄5场才能离座",
STR_GAME_GOTODEAR_2: "一位玩家上庄成功",
STR_STATIC_BIGWIN: "最大赢取:",
STR_CARDTYPE100: "3卡组 JQK",
STR_CARDTYPE101: "同花顺",
STR_CARDTYPE102: "一对",
STR_CARDTYPE103: "顺子",
STR_CARDTYPE104: "3张牌是顺序",
STR_ADDFRIEND_ONESELF: "您的好友数目已经达到了上限。您可以去商城购买通讯录来提升好友上限。",
STR_ADDFRIEND_OTHERS: "很遗憾，对方玩家的好友数目已经达到上限了。您现在无法把他加为好友。",
STR_MESSRECEIVE_UNDONE: "该消息中附带的所有物品已经被您领取过了。",
STR_LOGIN_WORNING: "您的账号已经被冻结。如果您有任何疑问，请发送邮件到我们的客服邮箱。",
STR_LOGIN_INFO_ERROR: "您输入的账号或密码有错误。请检查后重新输入。",
STR_LOGIN_INFO_NULL: "登录账号或密码不能为空，请输入。",
STR_LOGIN_EMALL_REGISTERED: "您输入的邮箱地址已经被注册。请重新输入可使用的邮箱地址。",
STR_LOGIN_EMAIL_ERROR: "您输入的邮箱格式有错误。请检查后重新输入。",
STR_LOGIN_PASSWORD_SHORT: "账号密码要求6-16位英文字母或数字。请重新输入您的密码。",
STR_LOGIN_PASSWORD_DIFFERENT: "您两次输入的密码不一致。请检查后重新输入。",
STR_LOGIN_PASSWORD_CHARACTER: "账号密码中不能包含除了英文字母和数字外的其他字符。请重新输入您的密码。",
STR_LOGIN_REGISTER_SUCCESS: "恭喜您成功注册了皇家德州扑克的账号。赶快点击OK来加入游戏吧！",
STR_LOGIN_RETRIEVE_SUCCESS: "密码找回邮件已经发送，请到您的邮箱中查收。如未收到，请稍等片刻再次查看。",
STR_LOGIN_RETRIEVE_FAIL: "您输出的账号邮箱地址没有注册。请检查并重新输入已注册的邮箱地址。",
STR_MAIN_LOGOFF: "您确定要登出游戏吗？",
STR_MAIN_QUIT: "您确定要退出游戏吗？",
STR_SHOP_CHIP: "您的筹码不足，想去商城买点筹码吗？",
STR_SHOP_DIAMOND: "您的钻石不足，想去商城买点钻石吗？",
STR_SHOP_BUYSUCCESSFUL: "您已经成功购买了商品 %s。",
STR_SHOP_REACHLIMIT: "您已经达到了该道具的购买上限。",
STR_SHOP_BUYFAIL: "抱歉，商品购买失败，请重试。",
STR_PLAYERSEARCH_SHORT: "搜索好友时请至少输入四个英文字符或数字。",
STR_PLAYERSEARCH_LONG: "搜索好友时至多只能输入十六个英文字符或数字。",
STR_FRIEND_HAVEADDED: "该玩家已经在你的好友名单里了。",
STR_FRIEND_LIMIT: "您的好友数量已经达到达到上限了。您可以去商城购买通讯录来提升好友上限。",
STR_FRIEND_FOLLOW: "您的好友 %s 正在注额 %d/%d 的房间中打牌。您确定跟踪他进入此房间吗？",
STR_FRIEND_DEL: "您确定要删除这名好友吗？",
STR_FRIEND_ADDYOURSELF: "您不能添加自身为好友。",
STR_PRESENT_NOTFRIEND: "只有好友之间才能赠送免费筹码。您和这位玩家还不是好友，无法赠送。",
STR_PRESENT_DONE: "今天您已经向这位好友赠送过免费筹码了。明天才可以再次赠送欧。",
STR_PERSONAL_NAME_SHORT: "您输入的昵称过短。请至少输入4个英文字母或数字。",
STR_PERSONAL_NAME_LONG: "您输入的昵称过长。最多能够输入16个英文字母或数字。",
STR_PERSONAL_NAME_REPEAK: "您输入的昵称和其他玩家的昵称重复了。请重新想个好昵称吧。",
STR_PERSONAL_NAME_ILLEGAL: "您输入的昵称中包含了违规字符。请只使用英文字母和数字。",
STR_PERSONAL_SIGNATURE_LONG: "您输入的签名过长。最多能够输入120个字符。",
STR_PERSONAL_RECORDING_SHORT: "您的录音时间过短。请多说点吧。",
STR_PERSONAL_QUICKVOICE_PLAY: "在语音播放时不能播放其他语音消息。",
STR_PERSONAL_QUICKVOICE_RECORD: "在语音播放时不能录入其他语音消息。",
STR_PERSONAL_QUICKVOICE_DEL: "您确定要删除这条快捷语音吗？",
STR_PERSONAL_PHOTO_DEL: "您确定要删除这张照片吗？",
STR_PERSONAL_PHOTO_LIMIT: "您的照片数目已经达到上限了。您可以去商城购买相册来提升照片上限。",
STR_PERSONAL_ACCOUNT_BINDING: "您输入的邮箱地址已经被注册。请重新输入可使用的邮箱地址。",
STR_PERSONAL_ITEMEXCHANGE_301002: "恭喜您，您已经成功兑换了%d个钻石，相应的碎片系统会自动扣除。",
STR_PERSONAL_ITEMEXCHANGE_302003: "恭喜您，您已经成功兑换了%d个放大镜，相应的碎片系统会自动扣除。",
STR_PERSONAL_ITEMEXCHANGE_302001: "恭喜您，您已经成功兑换了%d个麦克风到道具，相应的碎片会自动扣除。",
STR_PERSONAL_ITEMEXCHANGE_302002: "恭喜您，您已经成功兑换了%d个互动表情道具，相应的碎片会自动扣除。",
STR_PERSONAL_BINDIN: "请使用您的常用邮箱进行账号绑定。绑定后的账号能够在其他设备上游戏使用账号登录。",
STR_ITEM_TUREEYE_NULL: "您的放大镜数量不足，想要去商城购买一些吗？",
STR_REPORT_PHOTO_CONFRIM: "您确定要举报这张照片吗？有多名玩家举报此照片后，该照片将被屏蔽。我们将尽快进行审核。",
STR_REPORT_PHOTO_REPEAK: "您已经举报过这张照片。请不要重复举报。",
STR_SITDOWN_LIMIT: "此房间人数已满，无法进入。请选择其他有空位的房间。",
STR_SITDOWN_FULL: "这个房间没有空位。点击“YES”，系统将为您自动匹配到另一个新房间。点击“NO”，您将留在目前房间观战。",
STR_SITDOWN_REPEAK: "你已经在座位上了。",
STR_SITDOWN_NOTEMPTY: "您选择的座位已经被其他玩家占据了，请选择其他的空座位。",
STR_TABLE_RECORDIND_SHORT: "您录音的时间过短，请重新录音。",
STR_ITEM_VOICE_NULL: "您的麦克风不够了，想要去商城购买一些麦克风吗？",
STR_ITEM_VOICE_STAND: "您目前还未坐下，还不能够使用语音功能。",
STR_ITEM_CHAT_STAND: "您目前还未坐下，还不能发送文字和表情。",
STR_ITEM_EXPRESSION_NULL: "您的互动表情不够了，想要去商城购买一些互动表情吗？",
STR_TABLE_LEAVE_SEAT: "离开座位会让您失去已下注的筹码。您确定要现在离开座位吗？",
STR_TABLE_LEAVE_ROOM: "离开房间会让您失去已下注的筹码。您确定要现在离开房间吗？",
STR_INVITE_RECEIVE: "玩家 %s 邀请您参加牌局，点击确认。",
STR_INVITE_CONFRIM: "玩家 %s 邀请您参加他的牌局。房间ID %d，大小盲注 %s / %s。你确定要加入牌局吗？",
STR_INVITE_CONFRIM1: "玩家 %s 邀请您参加他的牌局。房间ID %d，赌注 %s / %s。你确定要加入牌局吗？",
STR_INVITE_SAMEROOM: "您和该玩家已经在同一房间中了。",
STR_MISSION_COMPLETE: "您完成了一个任务，快去领取奖励吧。",
STR_MUTE_ON: "您已成功开启静音功能。",
STR_MUTE_OFF: "您已成功关闭静音功能。",
STR_EQUIPMENT_MICROPHONE: "启动麦克风功能失败，请允许本游戏使用手机麦克风功能。请检查手机设置。",
STR_ACHIEVEMENT_SUCCESS: "恭喜！您成功领取了成就奖励 %d %s.",
STR_LOGIN_OTHERDEVICES: "您的账号已经在其他地方登录了。请检查您的账号密码安全，以避免损失。如果您有任何疑问，请发送邮件到我们的客服邮箱。",
STR_NETWORK_REQUEST: "发生错误%d, 网络请求失败。请检查您的网络环境，并稍后尝试。",
STR_NETWORK_ERROR_CHECK: "网络发生错误,连接断开。请检查您的设备或网络设置.",
STR_UNKNOWN_ERROR: "发生未知错误，游戏无法正常进行。您可以通过我们的客服邮箱告知我们错误情况。",
STR_ERROR_DATA: "出现数据错误，请退回至登陆界面重新登录游戏。",
STR_EVALUATION_TEXT: "尊敬的玩家，您现在可以对我们的游戏进行评价了，进行评价后您将会获得奖励。请问是否跳转至相关页面？",
STR_GOOGLEPLAY_ERROR_1: "进行购买操作时所需的一项或多项 Google Play 服务目前无法使用。",
STR_GOOGLEPLAY_ERROR_2: "更新Google Play服务后才能进行购买。",
STR_GOOGLEPLAY_ERROR_3: "您的手机中没有Google Play服务，您必须先安装该服务才能进行购买。",
STR_GOOGLEPLAY_ERROR_4: "您必须先启用Google Play服务才能进行购买。",
STR_ITEM_NAME_301001: "筹码",
STR_ITEM_NAME_301002: "钻石",
STR_ITEM_NAME_302001: "麦克风",
STR_ITEM_NAME_302002: "互动表情",
STR_ITEM_NAME_302003: "放大镜",
STR_ITEM_NAME_303001: "金筹码",
STR_ITEM_NAME_304001: "通讯录",
STR_ITEM_NAME_304002: "相册",
STR_ITEM_DESC_301001: "表示玩家的筹码个数，财富衡量单位",
STR_ITEM_DESC_301002: "表示玩家的钻石个数，财富衡量单位",
STR_ITEM_DESC_302001: "使用语音功能需要消耗的道具，每使用1次语音消耗1个。",
STR_ITEM_DESC_302002: "使用互动表情需要消耗的道具，每使用1次互动表情消耗1个。",
STR_ITEM_DESC_302003: "使用后可以查看玩家的游戏数据，每查看1名玩家消耗1个，效果持续 %d 分钟。",
STR_ITEM_DESC_303001: "增加任务筹码奖励的道具，所有任务的筹码奖励变为 %s 倍，持续 %d 天。",
STR_ITEM_DESC_304001: "提升好友数量上限的道具。初始上限为 %d 个好友。每拥有1个通讯录，上限提升 %d 个。",
STR_ITEM_DESC_304002: "提升照片数量上限的道具。初始上限为 %d 张照片。每拥有1个相册，上限提升 %d 个。",
STR_GOODS_NAME_401001: "%d 钻石包",
STR_GOODS_NAME_401002: "%d 钻石包",
STR_GOODS_NAME_401003: "%d 钻石包",
STR_GOODS_NAME_401004: "%d 钻石包",
STR_GOODS_NAME_402001: "%d 筹码包",
STR_GOODS_NAME_402002: "%d 筹码包",
STR_GOODS_NAME_402003: "%d 筹码包",
STR_GOODS_NAME_402004: "%d 筹码包",
STR_GOODS_NAME_403001: "%d 麦克风包",
STR_GOODS_NAME_403002: "%d 麦克风包",
STR_GOODS_NAME_404001: "%d 表情包",
STR_GOODS_NAME_404002: "%d 表情包",
STR_GOODS_NAME_405001: "%d 放大镜包",
STR_GOODS_NAME_406001: "金筹码",
STR_GOODS_NAME_407001: "通讯录",
STR_GOODS_NAME_408001: "相册",
STR_GOODS_DESC_401001: "%d 个钻石",
STR_GOODS_DESC_401002: "%d 个钻石",
STR_GOODS_DESC_401003: "%d 个钻石",
STR_GOODS_DESC_401004: "%d 个钻石",
STR_GOODS_DESC_402001: "%d 个筹码",
STR_GOODS_DESC_402002: "%d 个筹码",
STR_GOODS_DESC_402003: "%d 个筹码",
STR_GOODS_DESC_402004: "%d 个筹码",
STR_GOODS_DESC_403001: "%d 个麦克风。使用语音功能需要消耗的道具，每使用1次语音消耗1个。",
STR_GOODS_DESC_403002: "%d 个麦克风。使用语音功能需要消耗的道具，每使用1次语音消耗1个。",
STR_GOODS_DESC_404001: "%d 个互动表情。使用互动表情需要消耗的道具，每使用1次互动表情消耗1个。",
STR_GOODS_DESC_404002: "%d 个互动表情。使用互动表情需要消耗的道具，每使用1次互动表情消耗1个。",
STR_GOODS_DESC_405001: "%d 个放大镜。使用后可以查看玩家的游戏数据，每查看1名玩家消耗1个，效果持续 %d 分钟。",
STR_GOODS_DESC_406001: "增加任务筹码奖励的道具，所有任务的筹码奖励变为 %d 倍，持续 %d 天。多次购买，持续时间加长。",
STR_GOODS_DESC_407001: "提升好友数量上限的道具。初始上限为 %d 个好友。每拥有1个通讯录，上限提升 %d 个。最多购买 %d个，价格根据购买数变化。",
STR_GOODS_DESC_408001: "提升照片数量上限的道具。初始上限为 %d 张照片。每拥有1个相册，上限提升 %d 个。最多购买 %d个，价格根据购买数变化",
STR_QUEST_DESC_101101: "完成3盘牌局",
STR_QUEST_DESC_101201: "游戏时间经过5分钟",
STR_QUEST_DESC_102101: "赢得2盘牌局",
STR_QUEST_DESC_102201: "在Preflop圈就赢得牌局3次",
STR_QUEST_DESC_102301: "亮牌赢得牌局2次",
STR_QUEST_DESC_103101: "赢取的筹码（未抽成前）是本局投入筹码的5倍以上,1次",
STR_QUEST_DESC_104101: "在4个奖池以上的牌局中赢的全部奖池，1次",
STR_QUEST_DESC_105101: "ALL IN后赢得牌局3次",
STR_QUEST_DESC_106101: "5人及其以上ALL IN，并最终赢得牌局,1次",
STR_QUEST_DESC_107101: "亮牌时，以同样的牌型击败其他玩家，1次",
STR_QUEST_DESC_108101: "亮牌时，以高牌牌型赢得1次牌局",
STR_QUEST_DESC_108201: "亮牌时，以一对牌型赢得1次牌局",
STR_QUEST_DESC_108301: "亮牌时，以两对牌型赢得1次牌局",
STR_QUEST_DESC_108401: "亮牌时，以三条牌型赢得1次牌局",
STR_QUEST_DESC_108501: "亮牌时，以顺子牌型赢得1次牌局",
STR_QUEST_DESC_108601: "亮牌时，以同花牌型赢得1次牌局",
STR_QUEST_DESC_108701: "亮牌时，以葫芦牌型赢得1次牌局",
STR_QUEST_DESC_109101: "聊天（包括表情，文字，互动表情，语音）20次",
STR_QUEST_DESC_110101: "评论玩家的照片5次",
STR_QUEST_DESC_101102: "完成10盘牌局",
STR_QUEST_DESC_101202: "游戏时间经过15分钟",
STR_QUEST_DESC_102102: "赢得5盘牌局",
STR_QUEST_DESC_102202: "在Preflop圈就赢得牌局9次",
STR_QUEST_DESC_102302: "亮牌赢得牌局5次",
STR_QUEST_DESC_103102: "赢取的筹码（未抽成前）是本局投入筹码的5倍以上,3次",
STR_QUEST_DESC_104102: "在4个奖池以上的牌局中赢的全部奖池，2次",
STR_QUEST_DESC_105102: "ALL IN后赢得牌局9次",
STR_QUEST_DESC_106102: "5人及其以上ALL IN，并最终赢得牌局,2次",
STR_QUEST_DESC_107102: "亮牌时，以同样的牌型击败其他玩家，2次",
STR_QUEST_DESC_108102: "亮牌时，以高牌牌型赢得2次牌局",
STR_QUEST_DESC_108202: "亮牌时，以一对牌型赢得2次牌局",
STR_QUEST_DESC_108302: "亮牌时，以两对牌型赢得2次牌局",
STR_QUEST_DESC_108402: "亮牌时，以三条牌型赢得2次牌局",
STR_QUEST_DESC_108502: "亮牌时，以顺子牌型赢得2次牌局",
STR_QUEST_DESC_108602: "亮牌时，以同花牌型赢得2次牌局",
STR_QUEST_DESC_108702: "亮牌时，以葫芦牌型赢得2次牌局",
STR_QUEST_DESC_109102: "聊天（包括表情，文字，互动表情，语音）50次",
STR_QUEST_DESC_110102: "评论玩家的照片25次",
STR_QUEST_DESC_101103: "完成30盘牌局",
STR_QUEST_DESC_101203: "游戏时间经过30分钟",
STR_QUEST_DESC_102103: "赢得10盘牌局",
STR_QUEST_DESC_102203: "在Preflop圈就赢得牌局15次",
STR_QUEST_DESC_102303: "亮牌赢得牌局10次",
STR_QUEST_DESC_103103: "赢取的筹码（未抽成前）是本局投入筹码的5倍以上,5次",
STR_QUEST_DESC_104103: "在4个奖池以上的牌局中赢的全部奖池，3次",
STR_QUEST_DESC_105103: "ALL IN后赢得牌局15次",
STR_QUEST_DESC_106103: "5人及其以上ALL IN，并最终赢得牌局,3次",
STR_QUEST_DESC_107103: "亮牌时，以同样的牌型击败其他玩家，3次",
STR_QUEST_DESC_108103: "亮牌时，以高牌牌型赢得3次牌局",
STR_QUEST_DESC_108203: "亮牌时，以一对牌型赢得3次牌局",
STR_QUEST_DESC_108303: "亮牌时，以两对牌型赢得3次牌局",
STR_QUEST_DESC_108403: "亮牌时，以三条牌型赢得3次牌局",
STR_QUEST_DESC_108503: "亮牌时，以顺子牌型赢得3次牌局",
STR_QUEST_DESC_108603: "亮牌时，以同花牌型赢得3次牌局",
STR_QUEST_DESC_108703: "亮牌时，以葫芦牌型赢得3次牌局",
STR_QUEST_DESC_109103: "聊天（包括表情，文字，互动表情，语音）100次",
STR_QUEST_DESC_110103: "评论玩家的照片50次",
STR_ACHIVEVMENT_DESC_201001: "等级达到5级",
STR_ACHIVEVMENT_DESC_201002: "等级达到10级",
STR_ACHIVEVMENT_DESC_201003: "等级达到20级",
STR_ACHIVEVMENT_DESC_201004: "等级达到35级",
STR_ACHIVEVMENT_DESC_201005: "等级达到50级",
STR_ACHIVEVMENT_DESC_202001: "资产总量达到100万",
STR_ACHIVEVMENT_DESC_202002: "资产总量达到1000万",
STR_ACHIVEVMENT_DESC_202003: "资产总量达到1亿",
STR_ACHIVEVMENT_DESC_202004: "资产总量达到10亿",
STR_ACHIVEVMENT_DESC_202005: "资产总量达到100亿",
STR_ACHIVEVMENT_DESC_203001: "完成50场牌局",
STR_ACHIVEVMENT_DESC_203002: "完成500场牌局",
STR_ACHIVEVMENT_DESC_203003: "完成2500场牌局",
STR_ACHIVEVMENT_DESC_203004: "完成10000场牌局",
STR_ACHIVEVMENT_DESC_203005: "完成25000场牌局",
STR_ACHIVEVMENT_DESC_203006: "完成50000场牌局",
STR_ACHIVEVMENT_DESC_203007: "完成100000场牌局",
STR_ACHIVEVMENT_DESC_204001: "赢得10次牌局",
STR_ACHIVEVMENT_DESC_204002: "赢得100次牌局",
STR_ACHIVEVMENT_DESC_204003: "赢得500次牌局",
STR_ACHIVEVMENT_DESC_204004: "赢得2000次牌局",
STR_ACHIVEVMENT_DESC_204005: "赢得5000次牌局",
STR_ACHIVEVMENT_DESC_204006: "赢得10000次牌局",
STR_ACHIVEVMENT_DESC_204007: "赢得20000次牌局",
STR_ACHIVEVMENT_DESC_205001: "在Preflop圈就赢的牌局达到5场",
STR_ACHIVEVMENT_DESC_205002: "在Preflop圈就赢的牌局达到50场",
STR_ACHIVEVMENT_DESC_205003: "在Preflop圈就赢的牌局达到500场",
STR_ACHIVEVMENT_DESC_205004: "在Preflop圈就赢的牌局达到2500场",
STR_ACHIVEVMENT_DESC_205005: "在Preflop圈就赢的牌局达到10000场",
STR_ACHIVEVMENT_DESC_206001: "ALL IN后并最终赢牌的牌局达到5场",
STR_ACHIVEVMENT_DESC_206002: "ALL IN后并最终赢牌的牌局达到50场",
STR_ACHIVEVMENT_DESC_206003: "ALL IN后并最终赢牌的牌局达到500场",
STR_ACHIVEVMENT_DESC_206004: "ALL IN后并最终赢牌的牌局达到2500场",
STR_ACHIVEVMENT_DESC_206005: "ALL IN后并最终赢牌的牌局达到10000场",
STR_ACHIVEVMENT_DESC_207001: "亮牌时，以高牌牌型赢得牌局达到5场",
STR_ACHIVEVMENT_DESC_207002: "亮牌时，以高牌牌型赢得牌局达到50场",
STR_ACHIVEVMENT_DESC_207003: "亮牌时，以高牌牌型赢得牌局达到250场",
STR_ACHIVEVMENT_DESC_207004: "亮牌时，以高牌牌型赢得牌局达到1000场",
STR_ACHIVEVMENT_DESC_207005: "亮牌时，以高牌牌型赢得牌局达到3000场",
STR_ACHIVEVMENT_DESC_208001: "亮牌时，以一对牌型赢得牌局达到5场",
STR_ACHIVEVMENT_DESC_208002: "亮牌时，以一对牌型赢得牌局达到50场",
STR_ACHIVEVMENT_DESC_208003: "亮牌时，以一对牌型赢得牌局达到500场",
STR_ACHIVEVMENT_DESC_208004: "亮牌时，以一对牌型赢得牌局达到2000场",
STR_ACHIVEVMENT_DESC_208005: "亮牌时，以一对牌型赢得牌局达到5000场",
STR_ACHIVEVMENT_DESC_209001: "亮牌时，以两对牌型赢得牌局达到5场",
STR_ACHIVEVMENT_DESC_209002: "亮牌时，以两对牌型赢得牌局达到50场",
STR_ACHIVEVMENT_DESC_209003: "亮牌时，以两对牌型赢得牌局达到500场",
STR_ACHIVEVMENT_DESC_209004: "亮牌时，以两对牌型赢得牌局达到2000场",
STR_ACHIVEVMENT_DESC_209005: "亮牌时，以两对牌型赢得牌局达到5000场",
STR_ACHIVEVMENT_DESC_210001: "亮牌时，以三条牌型赢得牌局达到5场",
STR_ACHIVEVMENT_DESC_210002: "亮牌时，以三条牌型赢得牌局达到50场",
STR_ACHIVEVMENT_DESC_210003: "亮牌时，以三条牌型赢得牌局达到500场",
STR_ACHIVEVMENT_DESC_210004: "亮牌时，以三条牌型赢得牌局达到2000场",
STR_ACHIVEVMENT_DESC_210005: "亮牌时，以三条牌型赢得牌局达到5000场",
STR_ACHIVEVMENT_DESC_211001: "亮牌时，以顺子牌型赢得牌局达到5场",
STR_ACHIVEVMENT_DESC_211002: "亮牌时，以顺子牌型赢得牌局达到50场",
STR_ACHIVEVMENT_DESC_211003: "亮牌时，以顺子牌型赢得牌局达到500场",
STR_ACHIVEVMENT_DESC_211004: "亮牌时，以顺子牌型赢得牌局达到2000场",
STR_ACHIVEVMENT_DESC_211005: "亮牌时，以顺子牌型赢得牌局达到5000场",
STR_ACHIVEVMENT_DESC_212001: "亮牌时，以同花牌型赢得牌局达到5场",
STR_ACHIVEVMENT_DESC_212002: "亮牌时，以同花牌型赢得牌局达到50场",
STR_ACHIVEVMENT_DESC_212003: "亮牌时，以同花牌型赢得牌局达到250场",
STR_ACHIVEVMENT_DESC_212004: "亮牌时，以同花牌型赢得牌局达到1000场",
STR_ACHIVEVMENT_DESC_212005: "亮牌时，以同花牌型赢得牌局达到3000场",
STR_ACHIVEVMENT_DESC_213001: "亮牌时，以葫芦牌型赢得牌局达到3场",
STR_ACHIVEVMENT_DESC_213002: "亮牌时，以葫芦牌型赢得牌局达到30场",
STR_ACHIVEVMENT_DESC_213003: "亮牌时，以葫芦牌型赢得牌局达到200场",
STR_ACHIVEVMENT_DESC_213004: "亮牌时，以葫芦牌型赢得牌局达到500场",
STR_ACHIVEVMENT_DESC_213005: "亮牌时，以葫芦牌型赢得牌局达到1000场",
STR_ACHIVEVMENT_DESC_214001: "亮牌时，以四条牌型赢得牌局达到2场",
STR_ACHIVEVMENT_DESC_214002: "亮牌时，以四条牌型赢得牌局达到10场",
STR_ACHIVEVMENT_DESC_214003: "亮牌时，以四条牌型赢得牌局达到50场",
STR_ACHIVEVMENT_DESC_214004: "亮牌时，以四条牌型赢得牌局达到200场",
STR_ACHIVEVMENT_DESC_214005: "亮牌时，以四条牌型赢得牌局达到500场",
STR_ACHIVEVMENT_DESC_215001: "亮牌时，获得过所有数字的四条，从A到K",
STR_ACHIVEVMENT_DESC_216001: "亮牌时，以同花顺牌型赢得牌局达到1场",
STR_ACHIVEVMENT_DESC_216002: "亮牌时，以同花顺牌型赢得牌局达到5场",
STR_ACHIVEVMENT_DESC_216003: "亮牌时，以同花顺牌型赢得牌局达到20场",
STR_ACHIVEVMENT_DESC_216004: "亮牌时，以同花顺牌型赢得牌局达到50场",
STR_ACHIVEVMENT_DESC_216005: "亮牌时，以同花顺牌型赢得牌局达到100场",
STR_ACHIVEVMENT_DESC_217001: "亮牌时，以皇家同花顺牌型赢得牌局达到1场",
STR_ACHIVEVMENT_DESC_217002: "亮牌时，以皇家同花顺牌型赢得牌局达到2场",
STR_ACHIVEVMENT_DESC_217003: "亮牌时，以皇家同花顺牌型赢得牌局达到5场",
STR_ACHIVEVMENT_DESC_217004: "亮牌时，以皇家同花顺牌型赢得牌局达到10场",
STR_ACHIVEVMENT_DESC_217005: "亮牌时，以皇家同花顺牌型赢得牌局达到20场",
STR_ACHIVEVMENT_DESC_218001: "获得所有花色的皇家同花顺",
STR_ACHIVEVMENT_DESC_219001: "使用20次语音",
STR_ACHIVEVMENT_DESC_219002: "使用100次语音",
STR_ACHIVEVMENT_DESC_219003: "使用500次语音",
STR_ACHIVEVMENT_DESC_219004: "使用2500次语音",
STR_ACHIVEVMENT_DESC_219005: "使用10000次语音",
STR_ACHIVEVMENT_DESC_220001: "使用50次互动表情",
STR_ACHIVEVMENT_DESC_220002: "使用250次互动表情",
STR_ACHIVEVMENT_DESC_220003: "使用1000次互动表情",
STR_ACHIVEVMENT_DESC_220004: "使用5000次互动表情",
STR_ACHIVEVMENT_DESC_220005: "使用20000次互动表情",
STR_ACHIVEVMENT_DESC_221001: "好友数量达到5人",
STR_ACHIVEVMENT_DESC_221002: "好友数量达到20人",
STR_ACHIVEVMENT_DESC_221003: "好友数量达到50人",
STR_ACHIVEVMENT_DESC_222001: "上传过1张照片",
STR_ACHIVEVMENT_DESC_222002: "上传过10张照片",
STR_ACHIVEVMENT_DESC_222003: "上传过100张照片",
STR_ACHIVEVMENT_DESC_223001: "得到5个赞",
STR_ACHIVEVMENT_DESC_223002: "得到50个赞",
STR_ACHIVEVMENT_DESC_223003: "得到500个赞",
STR_ACHIVEVMENT_DESC_224001: "送出5个赞",
STR_ACHIVEVMENT_DESC_224002: "送出50个赞",
STR_ACHIVEVMENT_DESC_224003: "送出500个赞",
STR_ACHIVEVMENT_DESC_225001: "自己的照片获得评论10次",
STR_ACHIVEVMENT_DESC_225002: "自己的照片获得评论100次",
STR_ACHIVEVMENT_DESC_225003: "自己的照片获得评论1000次",
STR_ACHIVEVMENT_DESC_226001: "评论其他人照片10次",
STR_ACHIVEVMENT_DESC_226002: "评论其他人照片100次",
STR_ACHIVEVMENT_DESC_226003: "评论其他人照片1000次",
STR_ACHIVEVMENT_DESC_227001: "完成5个任务",
STR_ACHIVEVMENT_DESC_227002: "完成50个任务",
STR_ACHIVEVMENT_DESC_227003: "完成500个任务",
STR_ACHIVEVMENT_DESC_227004: "完成2500个任务",
STR_ACHIVEVMENT_DESC_227005: "完成10000个任务",
STR_ACHIVEVMENT_DESC_228001: "兑换5次道具",
STR_ACHIVEVMENT_DESC_228002: "兑换50次道具",
STR_ACHIVEVMENT_DESC_228003: "兑换500次道具",
STR_ACHIVEVMENT_DESC_229001: "牌桌上赠送其他玩家筹码10次",
STR_ACHIVEVMENT_DESC_229002: "牌桌上赠送其他玩家筹码100次",
STR_ACHIVEVMENT_DESC_229003: "牌桌上赠送其他玩家筹码1000次",
STR_ACHIVEVMENT_DESC_230001: "赠送好友免费筹码10次",
STR_ACHIVEVMENT_DESC_230002: "赠送好友免费筹码100次",
STR_ACHIVEVMENT_DESC_230003: "赠送好友免费筹码1000次",
STR_ACHIVEVMENT_DESC_231001: "获得免费筹码总量达到10万",
STR_ACHIVEVMENT_DESC_231002: "获得免费筹码总量达到25万",
STR_ACHIVEVMENT_DESC_231003: "获得免费筹码总量达到100万",
STR_ACHIVEVMENT_DESC_232001: "累计登陆天数达到5天",
STR_ACHIVEVMENT_DESC_232002: "累计登陆天数达到25天",
STR_ACHIVEVMENT_DESC_232003: "累计登陆天数达到100天",
STR_ACHIVEVMENT_DESC_232004: "累计登陆天数达到250天",
STR_ACHIVEVMENT_DESC_232005: "累计登陆天数达到500天",
STR_LOGIN_VERSION: "版本号：",
STR_INFORMATION_PERSONAL_SIGNATURE_DEFAULT: "这位玩家还没有留下任何笔迹。想更引人关注吗？留下一段个性签名吧。",
STR_MESS_EVALUATION_TITLE: "感谢您的评价",
STR_MESS_EVALUATION_CONTENT: "因为您对于我们游戏的支持与评价，系统为您发放%d筹码的奖励，请及时领取。"
};
cc._RF.pop();
}, {} ],
en: [ function(e, _, t) {
"use strict";
cc._RF.push(_, "45e5cQaRXhIbLRP7QZnXbpz", "en");
_.exports = {
STR_COREPLAY_BUTTON_FOLD: "Fold",
STR_COREPLAY_BUTTON_CHECK: "Check",
STR_COREPLAY_BUTTON_CALL: "Call %s",
STR_COREPLAY_BUTTON_RAISE: "Raise",
STR_COREPLAY_BUTTON_CONFIRM: "Confirm",
STR_COREPLAY_BUTTON_ALLIN: "All-In",
STR_COREPLAY_BUTTON_PREP_CHECKORFOLD: "Check/Fold",
STR_COREPLAY_BUTTON_PREP_AUTOCHECK: "Check",
STR_COREPLAY_BUTTON_PREP_CALL: "Call %s",
STR_COREPLAY_BUTTON_PREP_CALLANY: "Call Any",
STR_INFORMATION_TILLE_1: "INFORMATION",
STR_INFORMATION_TILLE_2: "ITEMS LIST",
STR_INFORMATION_TILLE_3: "QUICK WORDS",
STR_INFORMATION_TILLE_4: "QUICK VOICES",
STR_INFORMATION_TILLE_5: "STATISTICS",
STR_INFORMATION_PERSONAL_LV: "Level",
STR_INFORMATION_PERSONAL_ID: "ID",
STR_INFORMATION_PERSONAL_NAME: "Name",
STR_INFORMATION_PERSONAL_MALE: "Male",
STR_INFORMATION_PERSONAL_FEMALE: "Female",
STR_INFORMATION_PERSONAL_ADDRESS: "Address: ",
STR_INFORMATION_PERSONAL_ADDRESS_NULL: "Unknown",
STR_INFORMATION_PERSONAL_SIGNATURE: "Signature:",
STR_INFORMATION_PERSONAL_PHOTO_DEFAULT: "NEW PHOTO",
STR_INFORMATION_PERSONAL_PHOTO_INREVIEW: "IN REVIEW",
STR_INFORMATION_ITEMLIST_TIME: "Day",
STR_INFORMATION_ITEMLIST_TIME_HOUR: "Hour",
STR_INFORMATION_QUICKCHAT_WORDS: "Quick Words %d",
STR_INFORMATION_QUICKCHAT_WORDS_DEFAULT_1: "The game started off, and I'm prepared to win!",
STR_INFORMATION_QUICKCHAT_WORDS_DEFAULT_2: "Don't waste time, please make your play.",
STR_INFORMATION_QUICKCHAT_WORDS_DEFAULT_3: "I got very strong cards to win this time.",
STR_INFORMATION_QUICKCHAT_WORDS_DEFAULT_4: "I'm going to All-In. Fold your cards quickly if you are afraid.",
STR_INFORMATION_QUICKCHAT_WORDS_DEFAULT_5: "I won this hand, and I certainly won't hold back on you on the next.",
STR_INFORMATION_QUICKCHAT_WORDS_DEFAULT_6: '"Fold" doesn\'t mean I lose. I just want to take a break.',
STR_INFORMATION_QUICKCHAT_WORDS_DEFAULT_7: "I have to say you play cards surprisingly well.",
STR_INFORMATION_QUICKCHAT_WORDS_DEFAULT_8: "I can't believe this thing could happen.",
STR_INFORMATION_QUICKCHAT_WORDS_DEFAULT_9: "I didn't play seriously, next time I won't lose.",
STR_INFORMATION_QUICKCHAT_WORDS_DEFAULT_10: "You are so lucky I am leaving now.",
STR_INFORMATION_QUICKCHAT_WORDS_DEFAULT_NULL: "Click here to enter your Quick Words",
STR_INFORMATION_QUICKCHAT_VOICE: "Quick Voice %d",
STR_INFORMATION_QUICKCHAT_VOICE_DEFAULT: "Hold here to record",
STR_INFORMATION_QUICKCHAT_VOICE_ENTERTITLE: "Click here to enter the title",
STR_INFORMATION_QUICKCHAT_VOICE_RECORDING: "Recording",
STR_INFORMATION_STATISTICS_ID: "ID:",
STR_INFORMATION_STATISTICS_GAMES: "Hands:",
STR_INFORMATION_STATISTICS_WINS: "Win",
STR_INFORMATION_STATISTICS_LOSE: "Lose",
STR_INFORMATION_STATISTICS_WINRATE: "Win Rate:",
STR_INFORMATION_STATISTICS_SHOWINRIVER: "Show in River:",
STR_INFORMATION_STATISTICS_FOLDINPREFLOP: "Pre-flop Fold:",
STR_INFORMATION_STATISTICS_ALLININPREFLOP: "Pre-flop All-In:",
STR_INFORMATION_STATISTICS_HIGHESTCHIP: "Most Chips:",
STR_INFORMATION_STATISTICS_MOSTWIN: "Biggest Pot Won:",
STR_INFORMATION_STATISTICS_BESTCARDS: "Best Hand:",
STR_INFORMATION_STATISTICS_GIVECHIPTOFRIEND: "Sent Free Chips to Friends",
STR_INFORMATION_STATISTICS_GIVECHIPTOFRIEND_TIMES: "Times",
STR_INFORMATION_STATISTICS_GIVECHIPINGAME: "Gave Chips to Other Players",
STR_INFORMATION_STATISTICS_GIVECHIPINGAME_TIMES: "Times",
STR_INFORMATION_ITEMLIST_ITEM_TITLE: "YOU HAVE:",
STR_INFORMATION_ITEMLIST_PATCH_TITLE: "YOU CAN CHANGE:",
STR_RANKING_TITLE_MAIN: "RANKING",
STR_RANKING_TITLE_1: "TOP CHIPS",
STR_RANKING_TITLE_2: "EARNING RATE",
STR_RANKING_TITLE_3: "GAIN TODAY",
STR_RANKING_TITLE_4: "WINS TODAY",
STR_RANKING_TITLE_5: "INTERACTION",
STR_RANKING_GMT_GMT: "GMT",
STR_RANKING_GMT_EXPLAIN: "The server uses the GMT as the time standard. So the GMT is displayed in our game. Please be attention.",
STR_RANKING_TOP_TOP: "TOP",
STR_RANKING_RANKING_NOPLAYER: "No player in the ranking list.",
STR_CHAT_EXPRESSION_TITLE: "Expressions",
STR_CHAT_QUICKWORDS_TITLE: "Quick Words",
STR_CHAT_QUICKVOICES_TITLE: "Quick Voices",
STR_CHAT_INPUT_DEFAULT: "Please enter text here",
STR_CHAT_INPUT_DEFAULT_IOS: "Please enter text here",
STR_CHAT_QUICKVOICE_NOVICE: "No Quick Voice",
STR_CHAT_QUICKVOICE_NOTITLE: "No description",
STR_TABLEBOARD_CAHT_NOQUICKVOICE: "You haven't recorded any Quick Voices yet.",
STR_TABLEBOARD_CHAT_NOQUICKTEXT: "You haven't recorded any Quick Words yet.",
STR_TABLEBOARD_RECORDING_COUNTDOWN: "Remain %d seconds",
STR_FRIENDS_TITLE: "YOUR FRIENDS",
STR_FRIENDS_NOFRIENDS: "You have no friends so far. Please click the searching botton on the top right corner to find the player by using the player's nickname. Also, you can click the player's portrait in Play Table UI or Main UI to send the friend request. Go and try it now!",
STR_FRIENDS_FRIENDS_UPDATE: "Show friends who updated new photos first",
STR_FRIENDS_FRIENDS_OL: "Show online friends first",
STR_FRIENDS_FRIENDS_ACTIVE: "Show active friends first",
STR_FRIENDS_FRIENDS_MAX: "MAX",
STR_FRIENDS_FRIENDS_INFORMATION_LV: "Level",
STR_FRIENDS_FRIENDS_INFORMATION_MALE: "Male",
STR_FRIENDS_FRIENDS_INFORMATION_FEMALE: "Female",
STR_FRIENDS_FRIENDS_INFORMATION_ADDRESS: "Address: ",
STR_FRIENDS_FRIENDS_INFORMATION_DEFAULT: "Likes, comments and free Chips you gave to this friend.",
STR_FRIENDS_FRIENDS_INFORMATION_NOPHOTO: "This player haven't uploaded any photos.",
STR_FRIENDS_FRIENDS_INFORMATION_GAMES: "Hands:",
STR_FRIENDS_FRIENDS_INFORMATION_WIN: "Win",
STR_FRIENDS_FRIENDS_INFORMATION_LOSE: "Lose",
STR_FRIENDS_FRIENDS_INFORMATION_WINRATE: "Win Rate:",
STR_FRIENDS_FRIENDS_INFORMATION_SHOWINRIVER: "Show in River:",
STR_FRIENDS_FRIENDS_INFORMATION_FOLDINPREFLOP: "Pre-flop Fold:",
STR_FRIENDS_FRIENDS_INFORMATION_ALLININPREFLOP: "Pre-flop All-In:",
STR_FRIENDS_FRIENDS_INFORMATION_HIGHESTCHIP: "Most Chips:",
STR_FRIENDS_FRIENDS_INFORMATION_MOSTWIN: "Biggest Pot Won:",
STR_FRIENDS_FRIENDS_INFORMATION_BESTCARDS: "Best Hand:",
STR_FRIENDS_FRIENDS_SEARCHTITLE: "SEARCH PLAYERS",
STR_FRIENDS_FRIENDS_SEARCHTIPS: "Please enter at least four characters to search one player's nickname.",
STR_FRIENDS_FRIENDS_SEARCH: "Find %d player(s) according to the players' nickname. At most display %d players.",
STR_LOGIN_PHONELOGIN: "Phone Login",
STR_LOGIN_ACCOUNTLOGIN: "Account Login",
STR_LOGIN_FACEBOOKLOGIN: "FACEBOOK Login",
STR_LOGIN_GUESTLOGIN: "Guest Login",
STR_LOGIN_ACCOUNTLOGIN_ACCOUNT: "Please enter your email address ",
STR_LOGIN_ACCOUNTLOGIN_PASSWORD: "Please enter your password",
STR_LOGIN_ACCOUNTLOGIN_AUTOLOGIN: "Auto Login",
STR_LOGIN_ACCOUNTLOGIN_RETRIEVEPASSWORD: "Request Password",
STR_LOGIN_ACCOUNTLOGIN_LOGIN: "LOGIN",
STR_LOGIN_ACCOUNTLOGIN_REGISTER: "REGISTER",
STR_LOGIN_ACCOUNTLOGIN_REGISTERACCOUNT: "Please enter your email address ",
STR_LOGIN_ACCOUNTLOGIN_REGISTERENTERPASSWORD: "Please enter your password",
STR_LOGIN_ACCOUNTLOGIN_REGISTERCONFRIMPASSWORD: "Confirm Password",
STR_LOGIN_ACCOUNTLOGIN_REGISTERREGISTER: "REGISTER",
STR_LOGIN_ACCOUNTLOGIN_RETRIEVEPASSWORD_EXPLAIN: "If you forgot your password, please enter the email address used for registration. We will send a new password to this email.",
STR_LOGIN_ACCOUNTLOGIN_RETRIEVEPASSWORD_ENTER: "Please enter your registration email address",
STR_LOGIN_ACCOUNTLOGIN_RETRIEVEPASSWORD_SENDEMAIL: "SEND EMAIL",
STR_LOGIN_TERMSOFSERVICE: "TERMS OF SERVICE",
STR_LOBBY_TITLE: "CASINO LOBBY",
STR_LOBBY_ID: "ID",
STR_LOBBY_BLIND: "Blind %s/%s",
STR_LOBBY_5PLAYERS: "5 Players",
STR_LOBBY_9PLAYERS: "9 Players",
STR_LOBBY_FULL: "Full Room",
STR_LOBBY_EMPTY: "Empty Room",
STR_SIT_ROOMID: "ROOM ID %d",
STR_SIT_BLIND: "Small/Big Blind %s/%s",
STR_SIT_MINBLIND: "MIN",
STR_SIT_MAXBLIND: "MAX",
STR_SIT_AUTOSIT: "Auto take chips and sit down when chip is not enough.",
STR_SIT_LEAVE: "LEAVE",
STR_SIT_SIT: "SIT DOWN",
STR_SIT_NOCHIP: "Your chip is not enough.",
STR_SIT_SHOP: "SHOP",
STR_INVITE_TITLE: "PLAY WITH YOUR FRIENDS!",
STR_INVITE_BUTTON: "CALL TO TABLE",
STR_INVITE_NOFRIEND: "Currently there is nobody on your friends list. Go and make some friends! ",
STR_INVITE_UNKNOWN: "Address\nUnknown",
STR_MES_FRIEND_TITLE: "FRIEND MESSAGE",
STR_MES_SYSTEM_TITLE: "SYSTEM MESSAGE",
STR_MES_ADDFRIEND_RCCEIVE: "Do you want to accept %s as your friend?",
STR_MES_ADDFRIEND_AGREE: "%s accepted you as his/her friend. You can find %s in your friends list.",
STR_MES_ADDFRIEND_YOUAGREE: "Your accepted %s as your friend. You can find him/her in your friends list.",
STR_MES_CHIPS_GIVE: "%s gave you %d free chips. Click to accept.",
STR_MES_CHIPS_RECEIVE: "You acceptd %d free chips from %s.",
STR_MES_MESSAGE_NULL: "There's no message so far.",
STR_MES_MONTH_JAN: "Jan.",
STR_MES_MONTH_FEB: "Feb.",
STR_MES_MONTH_MAR: "Mar.",
STR_MES_MONTH_APR: "Apr.",
STR_MES_MONTH_MAY: "May",
STR_MES_MONTH_JUN: "Jun.",
STR_MES_MONTH_JUL: "Jul.",
STR_MES_MONTH_AUG: "Aug.",
STR_MES_MONTH_SEP: "Sep.",
STR_MES_MONTH_OCT: "Oct.",
STR_MES_MONTH_NOV: "Nov.",
STR_MES_MONTH_DEC: "Dec.",
STR_HOMESCREEN_OLPLAYER: "%s Players Online!",
STR_HOMESCREEN_PHOTOUPLOAD: "Your friend %s uploaded new photos.",
STR_HOMESCREEN_NOUPLOAD: "No friends uploaded photos.",
STR_EVENT_BACK: "BACK",
STR_ANNOUNCEMENT_TITLE: "ANNOUNCEMENT",
STR_PLAYER_INF_NAME: "Name:",
STR_PLAYER_INF_TITLE_PHOTO: "PHOTOS",
STR_PLAYER_INF_TITLE_ACHIEVEMENTS: "ACHIEVEMENTS",
STR_PLAYER_INF_LV: "Level",
STR_PLAYER_INF_MALE: "Male",
STR_PLAYER_INF_FEMALE: "Female",
STR_PLAYER_INF_ADDRESS: "Address: ",
STR_PLAYER_INF_BUTTON_BLOCK: "Click here to block this player",
STR_PLAYER_INF_BLOCKBUTTON: "BLOCK",
STR_PLAYER_INF_BUTTON_UNLOCK: "Click here to unblock this player",
STR_PLAYER_INF_UNLOCKBUTTON: "UNBLOCK",
STR_PLAYER_INF_BUTTON_REPORT: "Click here to report this player's portrait",
STR_PLAYER_INF_REPORTBUTTON: "REPORT",
STR_PLAYER_INF_BLOCK: "After blocking, you will not receive any message, voice or emoji from this player. Are you sure to block this player?",
STR_PLAYER_INF_UNBLOCK: "Unblock this player, you can receive the message, voice or emoji from this player again.",
STR_PLAYER_INF_REPORT: "Report this player if you feel sick about his/her portrait. And his/her portrait will be blocked through several reports. We will review the portrait as soon as possible. Are you sure to report this portrait?",
STR_PLAYER_PHOTO_NULL: "This player haven't uploaded any photos.",
STR_CHECKPHOTO_NOAUTHORITY: "Sorry, you can't access this page due to the player's privacy settings.",
STR_PLAYER_PHOTO_CRITICTITLE: "Comment",
STR_PLAYER_STATISTICS_GAMES: "Hands:",
STR_PLAYER_STATISTICS_WINS: "Win",
STR_PLAYER_STATISTICS_LOSE: "Lose",
STR_PLAYER_STATISTICS_WINRATE: "Win Rate:",
STR_PLAYER_STATISTICS_SHOWINRIVER: "Show in River:",
STR_PLAYER_STATISTICS_FOLDINPREFLOP: "Pre-flop Fold:",
STR_PLAYER_STATISTICS_ALLININPREFLOP: "Pre-flop All-In:",
STR_PLAYER_STATISTICS_HIGHESTCHIPS: "Most Chips:",
STR_PLAYER_STATISTICS_MOSTWIN: "Biggest Pot Won:",
STR_PLAYER_STATISTICS_BTESTCARD: "Best Hand:",
STR_PLAYER_STATISTICS_MINS: "%s mins",
STR_PLAYER_ACHIEVEMENT_NULL: "This player has not unlocked any achievements yet.",
STR_LOGINREWARD_TITLE: "LOGIN REWARD",
STR_LOGINREWARD_DAY: "DAY %d",
STR_LOGINREWARD_RECEIVED: "Have received",
STR_LOGINREWARD_TIPS: "If you keep continuous login,you can get more huge rewards.",
STR_LOGINREWARD_SUCCESS: "You got %d %s by daily login.",
STR_ABOUTUS_STAFF: "Poker Royal Texas Hold'em Staff List\n\n\nGameDesinger\n\nStone\nJohn Smith\n\n\nProgrammer\n\nJack\nWillian\nHaven \nSpiro\nBob\nRussell\n\n\nArtDesinger\n\nPantheon\nEmma\nMandy\n\n\nGameTester\n\nJoffence\nDoris\n\n\nSpecial Thanks\n\nChris\nAlex\nMatata\nBlank",
STR_BUTTON_YES: "YES",
STR_BUTTON_NO: "NO",
STR_BUTTON_OK: "OK",
STR_BUTTON_IGNORE: "IGNORE",
STR_BUTTON_AGREE: "AGREE",
STR_OPTIONS_TITLE: "OPTIONS",
STR_OPTIONS_VOICE: "VOICE",
STR_OPTIONS_SOUND: "SOUND",
STR_OPTIONS_AUTOSIT: "SIT DOWN AUTO",
STR_OPTIONS_VIBRATION: "VIBRATION",
STR_OPTIONS_FOLLOW: "ALLOW FRIENDS TO FOLLOW",
STR_OPTIONS_INVITE: "RECIEVE INVATATION MESSAGE",
STR_OPTIONS_SEEPHOTOS: "WHO CAN SEE MY PHOTOS",
STR_OPTIONS_CHOSEN_YES: "Yes",
STR_OPTIONS_CHOSEN_NO: "No",
STR_OPTIONS_SEEPHOTOS_FRIEND: "Only friends",
STR_OPTIONS_SEEPHOTOS_NOONE: "No one",
STR_OPTIONS_SEEPHOTOS_ANYONE: "Anyone",
STR_OPTIONS_RATE: "RATE OUR GAME",
STR_OPTIONS_CACHE: "CLEAR PORTRAIT CACHE",
STR_OPTIONS_CACHE_CONFIRM: "Clear cache will delete the portraits and photos you downloaded. Are you sure you want to clear the cache?",
STR_OPTIONS_CACHE_CLEARED: "Clear cache successed",
STR_OPTIONS_ABOUT: "ABOUT US",
STR_OPTIONS_REPORT: "Report issues",
STR_OPTIONS_FOLLOWUS: "Follow us @FaceBook",
STR_OPTIONS_CONTACT: "CONTACT US",
STR_LOADING_1: "Bring your friends to play our game together. Also, don't forget to play with them offline.",
STR_LOADING_2: "Please be polite when communicating with others. It's the way to repect each other.",
STR_LOADING_3: "No matter how handsome and beautiful the dealers are, never try to take liberties with them in game.",
STR_LOADING_4: "Never give up when you meet setback in game, the life will not abandon you.",
STR_LOADING_5: "Do everything in moderation including play Poker Royal.",
STR_LOADING_6: "Remember to send free chips to your friends at their player profile every day.",
STR_LOADING_7: "Click the chip symbol in the botton left corner to chose how much you want to raise .",
STR_LOADING_8: "You can block an opponent's chat messages by clicking the player's avatar in his player profile.",
STR_LOADING_9: "Click the voice button in another player's profile to send a private message.",
STR_LOADING_10: "Don't forget to check the activities daily. There might be a a new bonus waiting for you.",
STR_LOADING_11: "The rewards will grow better with every continuous login.",
STR_LOADING_END: "Maintaining peace of mind. Do not pleased by external gains or saddened by personal losses.",
STR_TABLEBOARD_ID: "Room ID %d Blind %s/%s",
STR_CARDTYPE_HIGH_CARD: "HIGH CARD",
STR_CARDTYPE_PAIR_CARD: "A PAIR",
STR_CARDTYPE_TWO_PAIRS_CARD: "TWO PAIRS",
STR_CARDTYPE_THREE_CARD: "THREE OF A KIND",
STR_CARDTYPE_STRAIGHT: "STRAIGHT",
STR_CARDTYPE_FLUSH: "FLUSH",
STR_CARDTYPE_FULL_HOUSE: "FULL HOUSE",
STR_CARDTYPE_FOUR_OF_A_KIND: "FOUR OF A KIND",
STR_CARDTYPE_STRAIGHT_FLUSH: "STRAIGHT FLUSH",
STR_CARDTYPE_ROYAL_FLUSH: "ROYAL STRAIGHT FLUSH",
STR_TABLEBOARD_EXP: "EXP",
STR_QUESTS_TITLE: "QUESTS",
STR_QUESTS_RECEIVEBUTTON: "RECEIVE",
STR_ACHIEVEMENTS_TITLE: "ACHIEVEMENTS",
STR_LVUP_TITLE: "CONGRATULATIONS",
STR_LVUP_TEXT: "You reached Level %d and got the rewards %s chips.",
STR_SHOP_TITLE: "SHOP",
STR_SHOP_BUTTON: "BUY",
STR_ALMS_TITLE: "RENASCENCE",
STR_ALMS_TEXT: "Your chips and diamonds is not enough, you have %d chance(s) left to get %s free chips today.",
STR_BUG_REPORT: "Click here to submit your new problem",
STR_BUG_INPUT: "Please enter your questions.",
STR_BUG_TIP: "Your questions have been submitted. We will answer your question as soon as possible. ",
STR_BUG_TIME: "Submission Time",
STR_BUG_WAIT: "Wait for the reply",
STR_BUG_RESPONSETIME: "Reply Time",
STR_BUG_DELTIP: "Are you sure to delete this question?",
STR_BUG_VIEW: "View Details ",
STR_BUG_COMMIT: "Commit",
STR_BUG_DELTIPDONE: "Delete Success!",
STR_BUG_DELTIPFAIL: "Delete Fail!",
STR_BUG_COMMIT_TIP: "Commit Fail!",
STR_POKER_ROOM_BET: "Bet %s/%s",
STR_POKERTABLEBOARD_ID: "Room ID %d Min/Max Bet %s/%s",
STR_POKER_PRE_BET: "Bet",
STR_POKER_TYPE_POK9: "Pok9",
STR_POKER_TYPE_POK8: "Pok8",
STR_POKER_TYPE_TONG: "Tong",
STR_POKER_TYPE_SAM_LUEANG: "Sam Lueang",
STR_POKER_TYPE_STRAIGHT_FLUSH: "Straight Flush",
STR_POKER_TYPE_STRAIGHT: "Straight",
STR_POKER_TYPE_SCORE_0: "Score 0",
STR_POKER_TYPE_SCORE_1: "Score 1",
STR_POKER_TYPE_SCORE_2: "Score 2",
STR_POKER_TYPE_SCORE_3: "Score 3",
STR_POKER_TYPE_SCORE_4: "Score 4",
STR_POKER_TYPE_SCORE_5: "Score 5",
STR_POKER_TYPE_SCORE_6: "Score 6",
STR_POKER_TYPE_SCORE_7: "Score 7",
STR_POKER_TYPE_SCORE_8: "Score 8",
STR_POKER_TYPE_SCORE_0_9: "Score 0-9",
STR_POKER_TYPE_SCORE_9: "Score 9",
STR_POKER_INTRUUCE: "Card type description",
STR_POKER_INTRUUCE1: "The force of the cards is sorted from top to bottom",
STR_POKER_INTRUUCE2: "These cards are 0 points",
STR_POKER_INTRUUCE3: "These cards are 1-9 points",
STR_POKER_INTRUUCE4: "Add up all your card's points and take the single digits",
STR_POKER_INTRUUCE5: "2 initial cards' points is 9 ",
STR_POKER_INTRUUCE6: "2 initial cards' points is 8",
STR_POKER_INTRUUCE7: "KA2.A23 is not straight",
STR_POKER_INTRUUCE8: "Odds multiples of the card type",
STR_POKER_INTRUUCE9: "2 cards flush",
STR_POKER_INTRUUCE10: "3 cards flush",
STR_POKER_INTRUUCE11: "After the game is over, you will leave your seat",
STR_POKER_INTRUUCE12: "After the game is over, you will leave your seat and exit room",
STR_WIN_STREAK: "Winning Streak:",
STR_PLAYER: "Player",
STR_DEAR: "Dear",
STR_GAME_GOTODEAR: "Click Go Dear",
STR_CHIP_NOT_ENOUGH: "Your chip is not enough.At least %s chips can change dealer .Do you go to the store?",
STR_POKERTABLEBOARD_ID1: "Min/Max Bet %s/%s",
STR_GAME_GOTODEAR_1: "Dealer change success, 5 times after you can leave dealer's seat.\n",
STR_GAME_GOTODEAR_2: "A Player Go Dear Success!",
STR_STATIC_BIGWIN: "Biggest Win:\n",
STR_CARDTYPE100: "3 card group JQK",
STR_CARDTYPE101: "Straight Flush",
STR_CARDTYPE102: "A PAIR",
STR_CARDTYPE103: "Straight",
STR_CARDTYPE104: "The three CARDS are the order",
STR_ADDFRIEND_ONESELF: "You can not add more friends now. If you want to increase your friends limit, please buy the Mail List item at the shop.",
STR_ADDFRIEND_OTHERS: "Unfortunately, the player's number of friends has reached the limit. You can not add him as a friend right now.",
STR_MESSRECEIVE_UNDONE: "You have got all the attached things in this message.",
STR_LOGIN_WORNING: "Your account was frozen. If you have any questions, please contact the customer service.",
STR_LOGIN_INFO_ERROR: "Unable to log in. Please ensure that your email and password are correct.",
STR_LOGIN_INFO_NULL: "Account and password can not be blank. Please enter.",
STR_LOGIN_EMALL_REGISTERED: "This email is already registered. Please use a different one.",
STR_LOGIN_EMAIL_ERROR: "Wrong email format. Please check again.",
STR_LOGIN_PASSWORD_SHORT: "The password should consist of 6-16 letters or numbers. Please re-enter your password.",
STR_LOGIN_PASSWORD_DIFFERENT: "Password and confirmation password do not match. Please double-check.",
STR_LOGIN_PASSWORD_CHARACTER: "The password can only include numbers and letters. Please re-enter your password.",
STR_LOGIN_REGISTER_SUCCESS: "Congratulations, you have successfully registered your account. Click Ok to join the game now.",
STR_LOGIN_RETRIEVE_SUCCESS: "Password recovery email has been sent. Please check your mailbox. Please wait if there is some delay.",
STR_LOGIN_RETRIEVE_FAIL: "The email address entered is not connected to a registered account. Please double-check.",
STR_MAIN_LOGOFF: "Are you sure you want to log out? ",
STR_MAIN_QUIT: "Are you sure to close our game?",
STR_SHOP_CHIP: "You do not have enough chips. Do you want to buy some at the shop?",
STR_SHOP_DIAMOND: "You do not have enough diamonds. Do you want to buy some at the shop?",
STR_SHOP_BUYSUCCESSFUL: "You have successfully purchased the goods %s.",
STR_SHOP_REACHLIMIT: "You reach the purchasing limitaton of this item.",
STR_SHOP_BUYFAIL: "Sorry, trade failed, please try it again.",
STR_PLAYERSEARCH_SHORT: "Please enter 4 characters at least to search for a friend.",
STR_PLAYERSEARCH_LONG: "Please enter 16 characters at most to search for a friend.",
STR_FRIEND_HAVEADDED: "This player is already existed in your friend list.",
STR_FRIEND_LIMIT: "You can not add more friends now. If you want to increase your friends limit, please buy the Mail List item at the shop.",
STR_FRIEND_FOLLOW: "Are you sure you want to join your friend %s's table? The Bet are %d/%d.",
STR_FRIEND_DEL: "Are you sure you want to remove this friend from your friends list?",
STR_FRIEND_ADDYOURSELF: "You can't add yourself to your friends list.",
STR_PRESENT_NOTFRIEND: "Sorry, free chips only can be given to the one who is your friend.",
STR_PRESENT_DONE: "You have already given the free chips to this friend today. Please try again tomorrow.",
STR_PERSONAL_NAME_SHORT: "Your nickname should be at least 4 letters or numbers.",
STR_PERSONAL_NAME_LONG: "Your nickname should be no more than 16 letters or numbers.",
STR_PERSONAL_NAME_REPEAK: "This nickname already exists. Please enter a new one.",
STR_PERSONAL_NAME_ILLEGAL: "This nickname includes characters that are not supported. Please retry using only numbers and letters.",
STR_PERSONAL_SIGNATURE_LONG: "Your signature is too long. Please stay within 120 characters.",
STR_PERSONAL_RECORDING_SHORT: "The recording time is too short.",
STR_PERSONAL_QUICKVOICE_PLAY: "Only one voice can be played at a time.",
STR_PERSONAL_QUICKVOICE_RECORD: "Can't record voice messages when another one is playing.",
STR_PERSONAL_QUICKVOICE_DEL: "Are you sure you want to delete this Quick Voice?",
STR_PERSONAL_PHOTO_DEL: "Are you sure you want to delete this photo?",
STR_PERSONAL_PHOTO_LIMIT: "You can not upload more photos now. If you want to increase your photo limit, please buy the Album item at the shop.",
STR_PERSONAL_ACCOUNT_BINDING: "This email is already registered. Please use a different one.",
STR_PERSONAL_ITEMEXCHANGE_301002: "Congratulations! You have successfully exchange %d Diamond. The equal patch of Diamond will be deducted automatically.",
STR_PERSONAL_ITEMEXCHANGE_302003: "Congratulations! You have successfully exchange %d Magnifier. The equal patch of Magnifier will be deducted automatically.",
STR_PERSONAL_ITEMEXCHANGE_302001: "Congratulations! You have successfully exchange %d Microphones. The equal patch of Microphone will be deducted automatically.",
STR_PERSONAL_ITEMEXCHANGE_302002: "Congratulations! You have successfully exchange %d Emoji. The equal patch of Emoji will be deducted automatically.",
STR_PERSONAL_BINDIN: "Please connect your email address to your account. So, you can use this account to log in from other devices.",
STR_ITEM_TUREEYE_NULL: "Magnifier is not enough. You should go shopping now.",
STR_REPORT_PHOTO_CONFRIM: "Are you sure you want to report this photo? After several reports it will be blocked. We will review it as soon as possible.",
STR_REPORT_PHOTO_REPEAK: "You have already reported this photo.",
STR_SITDOWN_LIMIT: "This room is full. Please try another one.",
STR_SITDOWN_FULL: 'This room is full. Click "Yes" to be automatically matched to a new room, or "No" to stay in the current room.',
STR_SITDOWN_REPEAK: "You have sat down.",
STR_SITDOWN_NOTEMPTY: "Please choose another seat, this seat is occupied.",
STR_TABLE_RECORDIND_SHORT: "The recording time is too short. Please try again.",
STR_ITEM_VOICE_NULL: "Microphone is not enough. Shopping now!",
STR_ITEM_VOICE_STAND: "You need to sit down to use the Voice function.",
STR_ITEM_CHAT_STAND: "You need to sit down to interact with other players.",
STR_ITEM_EXPRESSION_NULL: "Emoji is not enough. Shopping now!",
STR_TABLE_LEAVE_SEAT: "Are you sure you want to leave your seat? The chips you have bet will be lost.",
STR_TABLE_LEAVE_ROOM: "Are you sure you want to exit to lobby? The chips you have bet will be lost.",
STR_INVITE_RECEIVE: "%s invites you to join his/her game. Click here to confirm.",
STR_INVITE_CONFRIM: "%s invites you to join his/her game. The room ID is %d, Blind %s/%s. Are you sure to join?",
STR_INVITE_CONFRIM1: "%s invites you to join his/her game. The room ID is %d, Bet %s/%s. Are you sure to join?",
STR_INVITE_SAMEROOM: "This player and you are in the same room now.",
STR_MISSION_COMPLETE: "You have completed a quest. Go to reap your reward!",
STR_MUTE_ON: "You have activated the mute function.",
STR_MUTE_OFF: "You have deactivated the mute function.",
STR_EQUIPMENT_MICROPHONE: "Recording failed. Please look in your phone settings to check whether you allow this game to use your microphone.",
STR_ACHIEVEMENT_SUCCESS: "Congratulations! You receive the achievement reward %d %s.",
STR_LOGIN_OTHERDEVICES: "Your account has currently logined from another device. If that is not you, please change your password and contact the customer service immediately.",
STR_NETWORK_REQUEST: "Error %d ,network request failed. Please check your internet connection and try again.",
STR_NETWORK_ERROR_CHECK: "Network error. Please check your device or the network setting.",
STR_UNKNOWN_ERROR: "Unknow error ooccurred, the game can not operate normally. Please contact our customer service email to report this unknow error.",
STR_ERROR_DATA: "Game data error,please login again.",
STR_EVALUATION_TEXT: "Dear player, you could rate our game now. A well bonus will be awarded after your rating. Do you want to rate it now?",
STR_GOOGLEPLAY_ERROR_1: "This purchase action requires one or more Google Play services that are not currently available. ",
STR_GOOGLEPLAY_ERROR_2: "This purchase action requires an update for Google Play Services.",
STR_GOOGLEPLAY_ERROR_3: "This purchase action won't run without Google Play services, which are missing from your phone.",
STR_GOOGLEPLAY_ERROR_4: "This purchase action won't work unless you enable Google Play services.",
STR_ITEM_NAME_301001: "Chips",
STR_ITEM_NAME_301002: "Diamond(s)",
STR_ITEM_NAME_302001: "Microphones",
STR_ITEM_NAME_302002: "Emoji",
STR_ITEM_NAME_302003: "Magnifiers",
STR_ITEM_NAME_303001: "Golden Chip",
STR_ITEM_NAME_304001: "Mail List",
STR_ITEM_NAME_304002: "Album",
STR_ITEM_DESC_301001: "Present the total chips of players. And it is the measurement of property.",
STR_ITEM_DESC_301002: "Present the total diamonds of players. And it is the measurement of property.",
STR_ITEM_DESC_302001: "Necessary item to use the voice function. For every voice message, a Microphone is used up.",
STR_ITEM_DESC_302002: "Necessary item to use Emoji. For every Emoji used, one is used up.",
STR_ITEM_DESC_302003: "Use this item to peek at your opponent's poker statistics. One Magnifier lasts for %d mins.",
STR_ITEM_DESC_303001: "The Golden Chip %s the rewards received from completed quests. It lasts for %d days.",
STR_ITEM_DESC_304001: "It can increase the quantity of adding friends. The original ceiling is 50.One item can increase 5 more spaces. ",
STR_ITEM_DESC_304002: "It can increase the quantity of uploading photos. The original ceiling is 50.One item can increase 2 more spaces. ",
STR_GOODS_NAME_401001: "%d Diamond Pack",
STR_GOODS_NAME_401002: "%d Diamond Pack",
STR_GOODS_NAME_401003: "%d Diamond Pack",
STR_GOODS_NAME_401004: "%d Diamond Pack",
STR_GOODS_NAME_402001: "%d Chip Pack",
STR_GOODS_NAME_402002: "%d Chip Pack",
STR_GOODS_NAME_402003: "%d Chip Pack",
STR_GOODS_NAME_402004: "%d Chip Pack",
STR_GOODS_NAME_403001: "%d Microphone Pack",
STR_GOODS_NAME_403002: "%d Microphone Pack",
STR_GOODS_NAME_404001: "%d Emoji Pack",
STR_GOODS_NAME_404002: "%d Emoji Pack",
STR_GOODS_NAME_405001: "%d Magnifier Pack",
STR_GOODS_NAME_406001: "Golden Chip",
STR_GOODS_NAME_407001: "Mail List",
STR_GOODS_NAME_408001: "Album",
STR_GOODS_DESC_401001: "Contains %d Diamonds.",
STR_GOODS_DESC_401002: "Contains %d Diamonds",
STR_GOODS_DESC_401003: "Contains %d Diamonds",
STR_GOODS_DESC_401004: "Contains %d Diamonds",
STR_GOODS_DESC_402001: "Contains %d Chips",
STR_GOODS_DESC_402002: "Contains %d Chips",
STR_GOODS_DESC_402003: "Contains %d Chips",
STR_GOODS_DESC_402004: "Contains %d Chips",
STR_GOODS_DESC_403001: "Contains %d Microphones. One Microphone can be used once.",
STR_GOODS_DESC_403002: "Contains %d Microphones. One Microphone can be used once.",
STR_GOODS_DESC_404001: "Contains %d Emoji. One Emoji can be used once.",
STR_GOODS_DESC_404002: "Contains %d Emoji. One Emoji can be used once.",
STR_GOODS_DESC_405001: "Contains %d Magnifiers. Use this item to peek at your opponent's poker statistics. One Magnifier lasts for %d mins.",
STR_GOODS_DESC_406001: "The Golden Chip %s the rewards received from completed quests. Buying more than one will increase the duration by %d days each.",
STR_GOODS_DESC_407001: "The Mail List increases your friends limit. The initial level is %d, and each Mail List increases it by %d. The price will increase with purchasing volume. Moreover, all %d Mail Lists can be purchased.",
STR_GOODS_DESC_408001: "The Album increases your photo limit. The initial level is %d, and each Album increases it by %d. The price will increase with purchasing volume. Moreover, all %d Albums can be purchased.",
STR_QUEST_DESC_101101: "Play 3 hands",
STR_QUEST_DESC_101201: "Playing for 5 mins",
STR_QUEST_DESC_102101: "Win 2 hands",
STR_QUEST_DESC_102201: "Steal 3 pots pre-flop",
STR_QUEST_DESC_102301: "Win 2 hands at showdown",
STR_QUEST_DESC_103101: "Win a pot that is at least 5 times your bet",
STR_QUEST_DESC_104101: "Win a pot and at least 3 side-pots at once",
STR_QUEST_DESC_105101: "Win 3 hands after going All-In",
STR_QUEST_DESC_106101: "Win 1 hand with at least 5 players going All-In ",
STR_QUEST_DESC_107101: "Win 1 pot with the same hand category as your opponents at showdown",
STR_QUEST_DESC_108101: "Win 1 hand with HIGH CARD at showdown",
STR_QUEST_DESC_108201: "Win 1 hand with A PAIR at showdown",
STR_QUEST_DESC_108301: "Win 1 hand with TWO PAIRS at showdown",
STR_QUEST_DESC_108401: "Win 1 hand with 3 OF A KIND at showdown",
STR_QUEST_DESC_108501: "Win 1 hand with STRAIGHT at showdown",
STR_QUEST_DESC_108601: "Win 1 hand with FLUSH at showdown",
STR_QUEST_DESC_108701: "Win 1 hand with a FULL HOUSE at showdown",
STR_QUEST_DESC_109101: "Interact with others for 20 times",
STR_QUEST_DESC_110101: "Comment on others' photos for 5 times",
STR_QUEST_DESC_101102: "Play 10 hands",
STR_QUEST_DESC_101202: "Play for 15 mins",
STR_QUEST_DESC_102102: "Win 5 hands",
STR_QUEST_DESC_102202: "Steal 9 pots pre-flop",
STR_QUEST_DESC_102302: "Win 5 hands at showdown",
STR_QUEST_DESC_103102: "Win a pot that is at least 5 times your bet for 3 times",
STR_QUEST_DESC_104102: "Win a pot and at least 3 side-pots for 2 times",
STR_QUEST_DESC_105102: "Win 9 hands after going All-In",
STR_QUEST_DESC_106102: "Win 2 hands with at least 5 players going All-In",
STR_QUEST_DESC_107102: "Win 2 pots with the same hand category as your opponents at showdown",
STR_QUEST_DESC_108102: "Win 2 hand with HIGH CARD at showdown",
STR_QUEST_DESC_108202: "Win 2 hand with A PAIR at showdown",
STR_QUEST_DESC_108302: "Win 2 hand with TWO PAIRS at showdown",
STR_QUEST_DESC_108402: "Win 2 hand with 3 OF A KIND at showdown",
STR_QUEST_DESC_108502: "Win 2 hand with STRAIGHT at showdown",
STR_QUEST_DESC_108602: "Win 2 hand with FLUSH at showdown",
STR_QUEST_DESC_108702: "Win 2 hand with a FULL HOUSE at showdown",
STR_QUEST_DESC_109102: "Interact with others for 50 times",
STR_QUEST_DESC_110102: "Comment on others' photos for 25 times",
STR_QUEST_DESC_101103: "Play 30 hands",
STR_QUEST_DESC_101203: "Play for 30 mins",
STR_QUEST_DESC_102103: "Win 10 hands",
STR_QUEST_DESC_102203: "Steal 15 pots pre-flop",
STR_QUEST_DESC_102303: "Win 10 hands at showdown",
STR_QUEST_DESC_103103: "Win a pot that it at least 5 times your bet for 5 times",
STR_QUEST_DESC_104103: "Win a pot and at least 3 side-pots at once for 3 times",
STR_QUEST_DESC_105103: "Win 15 hands after going All-In",
STR_QUEST_DESC_106103: "Win 3 hands with at least 5 players going All-In",
STR_QUEST_DESC_107103: "Win 3 pots with the same hand category as your opponents at showdown",
STR_QUEST_DESC_108103: "Win 3 hand with HIGH CARD at showdown",
STR_QUEST_DESC_108203: "Win 3 hand with A PAIR at showdown",
STR_QUEST_DESC_108303: "Win 3 hand with TWO PAIRS at showdown",
STR_QUEST_DESC_108403: "Win 3 hand with 3 OF A KIND at showdown",
STR_QUEST_DESC_108503: "Win 3 hand with STRAIGHT at showdown",
STR_QUEST_DESC_108603: "Win 3 hand with FLUSH at showdown",
STR_QUEST_DESC_108703: "Win 3 hand with a FULL HOUSE at showdown",
STR_QUEST_DESC_109103: "Interact with others for 100 times",
STR_QUEST_DESC_110103: "Comment on others' photos for 50 times",
STR_ACHIVEVMENT_DESC_201001: "Reach level 5",
STR_ACHIVEVMENT_DESC_201002: "Reach level 10",
STR_ACHIVEVMENT_DESC_201003: "Reach level 20",
STR_ACHIVEVMENT_DESC_201004: "Reach level 35",
STR_ACHIVEVMENT_DESC_201005: "Reach level 50",
STR_ACHIVEVMENT_DESC_202001: "Have 1 million chips",
STR_ACHIVEVMENT_DESC_202002: "Have 10 million chips",
STR_ACHIVEVMENT_DESC_202003: "Have 100 million chips",
STR_ACHIVEVMENT_DESC_202004: "Have 1 billion chips",
STR_ACHIVEVMENT_DESC_202005: "Have 10 billion chips",
STR_ACHIVEVMENT_DESC_203001: "Play 50 hands",
STR_ACHIVEVMENT_DESC_203002: "Play 500 hands",
STR_ACHIVEVMENT_DESC_203003: "Play 2500 hands",
STR_ACHIVEVMENT_DESC_203004: "Play 10000 hands",
STR_ACHIVEVMENT_DESC_203005: "Play 25000 hands",
STR_ACHIVEVMENT_DESC_203006: "Play 50000 hands",
STR_ACHIVEVMENT_DESC_203007: "Play 100000 hands",
STR_ACHIVEVMENT_DESC_204001: "Win 10 hands",
STR_ACHIVEVMENT_DESC_204002: "Win 100 hands",
STR_ACHIVEVMENT_DESC_204003: "Win 500 hands",
STR_ACHIVEVMENT_DESC_204004: "Win 2000 hands",
STR_ACHIVEVMENT_DESC_204005: "Win 5000 hands",
STR_ACHIVEVMENT_DESC_204006: "Win 10000 hands",
STR_ACHIVEVMENT_DESC_204007: "Win 20000 hands",
STR_ACHIVEVMENT_DESC_205001: "Steal 5 pots pre-flop",
STR_ACHIVEVMENT_DESC_205002: "Steal 50 pots pre-flop",
STR_ACHIVEVMENT_DESC_205003: "Steal 500 pots pre-flop",
STR_ACHIVEVMENT_DESC_205004: "Steal 2500 pots pre-flop",
STR_ACHIVEVMENT_DESC_205005: "Steal 10000 pots pre-flop",
STR_ACHIVEVMENT_DESC_206001: "Win 5 hands after going All-In",
STR_ACHIVEVMENT_DESC_206002: "Win 50 hands after going All-In",
STR_ACHIVEVMENT_DESC_206003: "Win 500 hands after going All-In",
STR_ACHIVEVMENT_DESC_206004: "Win 2500 hands after going All-In",
STR_ACHIVEVMENT_DESC_206005: "Win 10000 hands after going All-In",
STR_ACHIVEVMENT_DESC_207001: "Win 5 hands with HIGH CARD at showdown",
STR_ACHIVEVMENT_DESC_207002: "Win 50 hands with HIGH CARD at showdown",
STR_ACHIVEVMENT_DESC_207003: "Win 250 hands with HIGH CARD at showdown",
STR_ACHIVEVMENT_DESC_207004: "Win 1000 hands with HIGH CARD at showdown",
STR_ACHIVEVMENT_DESC_207005: "Win 3000 hands with HIGH CARD at showdown",
STR_ACHIVEVMENT_DESC_208001: "Win 5 hands with A PAIR at showdown",
STR_ACHIVEVMENT_DESC_208002: "Win 50 hands with A PAIR at showdown",
STR_ACHIVEVMENT_DESC_208003: "Win 500 hands with A PAIR at showdown",
STR_ACHIVEVMENT_DESC_208004: "Win 2000 hands with A PAIR at showdown",
STR_ACHIVEVMENT_DESC_208005: "Win 5000 hands with A PAIR at showdown",
STR_ACHIVEVMENT_DESC_209001: "Win 5 hands with TWO PAIRS at showdown",
STR_ACHIVEVMENT_DESC_209002: "Win 50 hands with TWO PAIRS at showdown",
STR_ACHIVEVMENT_DESC_209003: "Win 500 hands with TWO PAIRS at showdown",
STR_ACHIVEVMENT_DESC_209004: "Win 2000 hands with TWO PAIRS at showdown",
STR_ACHIVEVMENT_DESC_209005: "Win 5000 hands with TWO PAIRS at showdown",
STR_ACHIVEVMENT_DESC_210001: "Win 5 hands with 3 OF A KIND at showdown",
STR_ACHIVEVMENT_DESC_210002: "Win 50 hands with 3 OF A KIND at showdown",
STR_ACHIVEVMENT_DESC_210003: "Win 500 hands with 3 OF A KIND at showdown",
STR_ACHIVEVMENT_DESC_210004: "Win 2000 hands with 3 OF A KIND at showdown",
STR_ACHIVEVMENT_DESC_210005: "Win 5000 hands with 3 OF A KIND at showdown",
STR_ACHIVEVMENT_DESC_211001: "Win 5 hands with STRAIGHT at showdown",
STR_ACHIVEVMENT_DESC_211002: "Win 50 hands with STRAIGHT at showdown",
STR_ACHIVEVMENT_DESC_211003: "Win 500 hands with STRAIGHT at showdown",
STR_ACHIVEVMENT_DESC_211004: "Win 2000 hands with STRAIGHT at showdown",
STR_ACHIVEVMENT_DESC_211005: "Win 5000 hands with STRAIGHT at showdown",
STR_ACHIVEVMENT_DESC_212001: "Win 5 hands with FLUSH at showdown",
STR_ACHIVEVMENT_DESC_212002: "Win 50 hands with FLUSH at showdown",
STR_ACHIVEVMENT_DESC_212003: "Win 250 hands with FLUSH at showdown",
STR_ACHIVEVMENT_DESC_212004: "Win 1000 hands with FLUSH at showdown",
STR_ACHIVEVMENT_DESC_212005: "Win 3000 hands with FLUSH at showdown",
STR_ACHIVEVMENT_DESC_213001: "Win 3 hands with FULL HOUSE at showdown",
STR_ACHIVEVMENT_DESC_213002: "Win 30 hands with FULL HOUSE at showdown",
STR_ACHIVEVMENT_DESC_213003: "Win 200 hands with FULL HOUSE at showdown",
STR_ACHIVEVMENT_DESC_213004: "Win 500 hands with FULL HOUSE at showdown",
STR_ACHIVEVMENT_DESC_213005: "Win 1000 hands with FULL HOUSE at showdown",
STR_ACHIVEVMENT_DESC_214001: "Win 2 hands with 4 OF A KIND at showdown",
STR_ACHIVEVMENT_DESC_214002: "Win 10 hands with 4 OF A KIND at showdown",
STR_ACHIVEVMENT_DESC_214003: "Win 50 hands with 4 OF A KIND at showdown",
STR_ACHIVEVMENT_DESC_214004: "Win 200 hands with 4 OF A KIND at showdown",
STR_ACHIVEVMENT_DESC_214005: "Win 500 hands with 4 OF A KIND at showdown",
STR_ACHIVEVMENT_DESC_215001: "Get all 4 OF A KIND (from 2 to A)",
STR_ACHIVEVMENT_DESC_216001: "Win 1 hand with STRAIGHT FLUSH at showdown",
STR_ACHIVEVMENT_DESC_216002: "Win 5 hands with STRAIGHT FLUSH at showdown",
STR_ACHIVEVMENT_DESC_216003: "Win 20 hands with STRAIGHT FLUSH at showdown",
STR_ACHIVEVMENT_DESC_216004: "Win 50 hands with STRAIGHT FLUSH at showdown",
STR_ACHIVEVMENT_DESC_216005: "Win 100 hands with STRAIGHT FLUSH at showdown",
STR_ACHIVEVMENT_DESC_217001: "Win 1 hand with ROYAL STRAIGHT FLUSH at showdown",
STR_ACHIVEVMENT_DESC_217002: "Win 2 hands with ROYAL STRAIGHT FLUSH at showdown",
STR_ACHIVEVMENT_DESC_217003: "Win 5 hands with ROYAL STRAIGHT FLUSH at showdown",
STR_ACHIVEVMENT_DESC_217004: "Win 10 hands with ROYAL STRAIGHT FLUSH at showdown",
STR_ACHIVEVMENT_DESC_217005: "Win 20 hands with ROYAL STRAIGHT FLUSH at showdown",
STR_ACHIVEVMENT_DESC_218001: "Get all ROYAL STRAIGHT FLUSH (spade,heart,club,diamond)",
STR_ACHIVEVMENT_DESC_219001: "Use voice for 20 times",
STR_ACHIVEVMENT_DESC_219002: "Use voice for 100 times",
STR_ACHIVEVMENT_DESC_219003: "Use voice for 500 times",
STR_ACHIVEVMENT_DESC_219004: "Use voice for 2500 times",
STR_ACHIVEVMENT_DESC_219005: "Use voice for 10000 times",
STR_ACHIVEVMENT_DESC_220001: "Use emoji for 50 times",
STR_ACHIVEVMENT_DESC_220002: "Use emoji for 250 times",
STR_ACHIVEVMENT_DESC_220003: "Use emoji for 1000 times",
STR_ACHIVEVMENT_DESC_220004: "Use emoji for 5000 times",
STR_ACHIVEVMENT_DESC_220005: "Use emoji for 20000 times",
STR_ACHIVEVMENT_DESC_221001: "Get 5 friends",
STR_ACHIVEVMENT_DESC_221002: "Get 20 friends",
STR_ACHIVEVMENT_DESC_221003: "Get 50 friends",
STR_ACHIVEVMENT_DESC_222001: "Upload 1 photo",
STR_ACHIVEVMENT_DESC_222002: "Upload 10 photos",
STR_ACHIVEVMENT_DESC_222003: "Upload 100 photos",
STR_ACHIVEVMENT_DESC_223001: 'Receive 5 "Like"',
STR_ACHIVEVMENT_DESC_223002: 'Receive 50 "Like"',
STR_ACHIVEVMENT_DESC_223003: 'Receive 500 "Like"',
STR_ACHIVEVMENT_DESC_224001: 'Give 5 "Like"',
STR_ACHIVEVMENT_DESC_224002: 'Give 50 "Like"',
STR_ACHIVEVMENT_DESC_224003: 'Give 500 "Like"',
STR_ACHIVEVMENT_DESC_225001: "Receive 10 comments on photos",
STR_ACHIVEVMENT_DESC_225002: "Receive 100 comments on photos",
STR_ACHIVEVMENT_DESC_225003: "Receive 1000 comments on photos",
STR_ACHIVEVMENT_DESC_226001: "Comment on others' photos 10 times",
STR_ACHIVEVMENT_DESC_226002: "Comment on others' photos 100 times",
STR_ACHIVEVMENT_DESC_226003: "Comment on others' photos 1000 times",
STR_ACHIVEVMENT_DESC_227001: "Complete 5 quests",
STR_ACHIVEVMENT_DESC_227002: "Complete 50 quests",
STR_ACHIVEVMENT_DESC_227003: "Complete 500 quests",
STR_ACHIVEVMENT_DESC_227004: "Complete 2500 quests",
STR_ACHIVEVMENT_DESC_227005: "Complete 10000 quests",
STR_ACHIVEVMENT_DESC_228001: "Exchange items for 5 times",
STR_ACHIVEVMENT_DESC_228002: "Exchange items for 50 times",
STR_ACHIVEVMENT_DESC_228003: "Exchange items for 500 times",
STR_ACHIVEVMENT_DESC_229001: "Give chips to other players in-game for 10 times",
STR_ACHIVEVMENT_DESC_229002: "Give chips to other players in-game for 100 times",
STR_ACHIVEVMENT_DESC_229003: "Give chips to other players in-game for 1000 times",
STR_ACHIVEVMENT_DESC_230001: "Give free chips to your friends for 10 times",
STR_ACHIVEVMENT_DESC_230002: "Give free chips to your friends for 100 times",
STR_ACHIVEVMENT_DESC_230003: "Give free chips to your friends for 1000 times",
STR_ACHIVEVMENT_DESC_231001: "Get 100000 free chips",
STR_ACHIVEVMENT_DESC_231002: "Get 250000 free chips",
STR_ACHIVEVMENT_DESC_231003: "Get 1 million free chips",
STR_ACHIVEVMENT_DESC_232001: "Login to the game 5 days in total",
STR_ACHIVEVMENT_DESC_232002: "Login to the game 25 days in total",
STR_ACHIVEVMENT_DESC_232003: "Login to the game 100 days in total",
STR_ACHIVEVMENT_DESC_232004: "Login to the game 250 days in total",
STR_ACHIVEVMENT_DESC_232005: "Login to the game 500 days in total",
STR_LOGIN_VERSION: "Version:",
STR_INFORMATION_PERSONAL_SIGNATURE_DEFAULT: "Leave visitors a message by adding a personal signature.",
STR_MESS_EVALUATION_TITLE: "Thanks for Your Rating",
STR_MESS_EVALUATION_CONTENT: "Due to your support and rating of our game, %d free chips has been sent in this Message. Please get it through clicking the wallet in the bottom right corner."
};
cc._RF.pop();
}, {} ],
i18n: [ function(e, _, t) {
"use strict";
cc._RF.push(_, "93789C/shtIL6entYsZPjee", "i18n");
var T = e("polyglot"), S = cc.sys.language;
"zh" !== S && (S = "en");
var n = e(S), i = new T({
phrases: n,
allowMissing: !0
});
_.exports = {
init: function(_) {
n = e(S = _);
i.replace(n);
},
t: function(e, _) {
return i.t(e, _);
}
};
cc._RF.pop();
}, {
polyglot: "polyglot"
} ],
polyglot: [ function(e, _, t) {
(function(e) {
"use strict";
cc._RF.push(_, "69decSgpRlE1rzEKp0RzG3V", "polyglot");
function T(e) {
"@babel/helpers - typeof";
return (T = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
return typeof e;
} : function(e) {
return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
})(e);
}
(function(e, S) {
"function" == typeof define && define.amd ? define([], function() {
return S(e);
}) : "object" === ("undefined" == typeof t ? "undefined" : T(t)) ? _.exports = S(e) : e.Polyglot = S(e);
})("undefined" != typeof e ? e : void 0, function(e) {
var _ = String.prototype.replace;
function t(e) {
e = e || {};
this.phrases = {};
this.extend(e.phrases || {});
this.currentLocale = e.locale || "en";
this.allowMissing = !!e.allowMissing;
this.warn = e.warn || C;
}
t.VERSION = "1.0.0";
t.prototype.locale = function(e) {
e && (this.currentLocale = e);
return this.currentLocale;
};
t.prototype.extend = function(e, _) {
var t;
for (var S in e) if (e.hasOwnProperty(S)) {
t = e[S];
_ && (S = _ + "." + S);
"object" === T(t) ? this.extend(t, S) : this.phrases[S] = t;
}
};
t.prototype.unset = function(e, _) {
var t;
if ("string" == typeof e) delete this.phrases[e]; else for (var S in e) if (e.hasOwnProperty(S)) {
t = e[S];
_ && (S = _ + "." + S);
"object" === T(t) ? this.unset(t, S) : delete this.phrases[S];
}
};
t.prototype.clear = function() {
this.phrases = {};
};
t.prototype.replace = function(e) {
this.clear();
this.extend(e);
};
t.prototype.t = function(e, _) {
var t, T;
"number" == typeof (_ = null == _ ? {} : _) && (_ = {
smart_count: _
});
if ("string" == typeof this.phrases[e]) t = this.phrases[e]; else if ("string" == typeof _._) t = _._; else if (this.allowMissing) t = e; else {
this.warn('Missing translation for key: "' + e + '"');
T = e;
}
if ("string" == typeof t) {
_ = A(_);
T = N(T = r(t, this.currentLocale, _.smart_count), _);
}
return T;
};
t.prototype.has = function(e) {
return e in this.phrases;
};
var S = "||||", n = {
chinese: function(e) {
return 0;
},
german: function(e) {
return 1 !== e ? 1 : 0;
},
french: function(e) {
return e > 1 ? 1 : 0;
},
russian: function(e) {
return e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2;
},
czech: function(e) {
return 1 === e ? 0 : e >= 2 && e <= 4 ? 1 : 2;
},
polish: function(e) {
return 1 === e ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2;
},
icelandic: function(e) {
return e % 10 != 1 || e % 100 == 11 ? 1 : 0;
}
}, i = {
chinese: [ "fa", "id", "ja", "ko", "lo", "ms", "th", "tr", "zh" ],
german: [ "da", "de", "en", "es", "fi", "el", "he", "hu", "it", "nl", "no", "pt", "sv" ],
french: [ "fr", "tl", "pt-br" ],
russian: [ "hr", "ru" ],
czech: [ "cs", "sk" ],
polish: [ "pl" ],
icelandic: [ "is" ]
};
function o(e) {
var _, t, T, S = {};
for (_ in e) if (e.hasOwnProperty(_)) {
t = e[_];
for (T in t) S[t[T]] = _;
}
return S;
}
var E = /^\s+|\s+$/g;
function R(e) {
return _.call(e, E, "");
}
function r(e, _, t) {
var T;
return null != t && e ? R((T = e.split(S))[I(_, t)] || T[0]) : e;
}
function s(e) {
var _ = o(i);
return _[e] || _.en;
}
function I(e, _) {
return n[s(e)](_);
}
var a = /\$/g, c = "$$$$";
function N(e, t) {
for (var T in t) if ("_" !== T && t.hasOwnProperty(T)) {
var S = t[T];
"string" == typeof S && (S = _.call(t[T], a, c));
e = _.call(e, new RegExp("%\\{" + T + "\\}", "g"), S);
}
return e;
}
function C(_) {
e.console && e.console.warn && e.console.warn("WARNING: " + _);
}
function A(e) {
var _ = {};
for (var t in e) _[t] = e[t];
return _;
}
return t;
});
cc._RF.pop();
}).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
}, {} ],
poplayer: [ function(e, _, t) {
"use strict";
cc._RF.push(_, "a7524VdX5NCHaVy3DcwaMB3", "poplayer");
var T = e("BaseComponent");
cc.Class({
extends: T,
properties: {
AimType: {
default: 1,
override: !0
}
},
onDestroy: function() {
this._super();
},
onLoad: function() {
this._super();
var e = this, _ = this.node.getChildByName("bg").getChildByName("btn_close");
ua.darkButton(_, function() {
e.bClose();
});
},
onbackpress: function() {
this._super();
},
start: function() {}
});
cc._RF.pop();
}, {
BaseComponent: "BaseComponent"
} ],
textinput: [ function(e, _, t) {
"use strict";
cc._RF.push(_, "0043b7TOBhKiYqrFXaldTiM", "textinput");
var T = e("BaseComponent");
cc.Class({
extends: T,
properties: {
AimType: {
default: 2,
override: !0
}
},
onDestroy: function() {
this._super();
},
onLoad: function() {
this._super();
var e = this, _ = this.node.getChildByName("uicontent").getChildByName("panel").getChildByName("btn_done");
ua.darkButton(_, function() {
if (e.call) {
var _ = e.Editbox.getComponent(cc.EditBox).string;
window.Save.set("LastHoturl", _);
e.call(_);
}
e.bClose();
});
this.Editbox = this.node.getChildByName("uicontent").getChildByName("panel").getChildByName("EditBox");
},
show: function(e) {
this.call = e;
var _ = window.Save.get("LastHoturl", null);
_ && (this.Editbox.getComponent(cc.EditBox).string = _);
this.Editbox.getComponent(cc.EditBox).setFocus();
},
onbackpress: function() {
this._super();
},
start: function() {}
});
cc._RF.pop();
}, {
BaseComponent: "BaseComponent"
} ],
th: [ function(e, _, t) {
"use strict";
cc._RF.push(_, "8500782U4xMr4qYmU3oN13C", "th");
_.exports = {
STR_COREPLAY_BUTTON_FOLD: "หมอบ",
STR_COREPLAY_BUTTON_CHECK: "ผ่าน",
STR_COREPLAY_BUTTON_CALL: "สู้%s",
STR_COREPLAY_BUTTON_RAISE: "เกทับ",
STR_COREPLAY_BUTTON_CONFIRM: "",
STR_COREPLAY_BUTTON_ALLIN: "All In",
STR_COREPLAY_BUTTON_PREP_CHECKORFOLD: "ผ่าน/หมอบ",
STR_COREPLAY_BUTTON_PREP_AUTOCHECK: "ผ่าน",
STR_COREPLAY_BUTTON_PREP_CALL: "สู้%s",
STR_COREPLAY_BUTTON_PREP_CALLANY: "สู้อัตโนมัติ",
STR_INFORMATION_TILLE_1: "ข้อมูลส่วนตัว",
STR_INFORMATION_TILLE_2: "รายการไอเทม",
STR_INFORMATION_TILLE_3: "ข้อความสำเร็จรูป",
STR_INFORMATION_TILLE_4: "เสียงสำเร็จรูป",
STR_INFORMATION_TILLE_5: "ข้อมูลสถิติ",
STR_INFORMATION_PERSONAL_LV: "Lv.",
STR_INFORMATION_PERSONAL_ID: "ID",
STR_INFORMATION_PERSONAL_NAME: "ชื่อ",
STR_INFORMATION_PERSONAL_MALE: "ชาย",
STR_INFORMATION_PERSONAL_FEMALE: "หญิง",
STR_INFORMATION_PERSONAL_ADDRESS: "ที่อยู่：",
STR_INFORMATION_PERSONAL_ADDRESS_NULL: "ไม่ทราบ",
STR_INFORMATION_PERSONAL_SIGNATURE: "เซ็นชื่อ：",
STR_INFORMATION_PERSONAL_PHOTO_DEFAULT: "อัพโหลดใหม่ 1รูป",
STR_INFORMATION_PERSONAL_PHOTO_INREVIEW: "ตรวจสอบอยู่",
STR_INFORMATION_ITEMLIST_TIME: "วัน",
STR_INFORMATION_ITEMLIST_TIME_HOUR: "ชม.",
STR_INFORMATION_QUICKCHAT_WORDS: "",
STR_INFORMATION_QUICKCHAT_WORDS_DEFAULT_1: "เกมส์เริ่มแล้ว ฉันพร้อมชนะแล้วนะ",
STR_INFORMATION_QUICKCHAT_WORDS_DEFAULT_2: "อย่าช้าสิ รีบลงเดิมพันหน่อย",
STR_INFORMATION_QUICKCHAT_WORDS_DEFAULT_3: "ไพ่ในมือดีมากๆ ดูเหมือนรอบนี้ฉันจะชนะแล้ว",
STR_INFORMATION_QUICKCHAT_WORDS_DEFAULT_4: "ฉันall in กลัวก็หมอบไพ่ไปนะ",
STR_INFORMATION_QUICKCHAT_WORDS_DEFAULT_5: "แม้ว่ารอบนี้ฉันชนะแล้ว แต่ฉันก็ไม่ปราณีหรอกนะ",
STR_INFORMATION_QUICKCHAT_WORDS_DEFAULT_6: "หมอบก็ไม่ได้แสดงว่าฉันแพ้นะ ฉันแค่อยากพัก",
STR_INFORMATION_QUICKCHAT_WORDS_DEFAULT_7: "คุณเล่นไพ่ได้ดีมาก จนฉันอยากยกนิ้วให้เลย",
STR_INFORMATION_QUICKCHAT_WORDS_DEFAULT_8: "ถึงแม้จะมีเรื่องแบบนี้ แต่อย่าไปเชื่อ",
STR_INFORMATION_QUICKCHAT_WORDS_DEFAULT_9: "รอบนี้ฉันไม่ได้จริงจัง ครั้งหน้าไม่แพ้แน่",
STR_INFORMATION_QUICKCHAT_WORDS_DEFAULT_10: "ฉันยอมออกไปแล้ว พวกเธอก็โชคดีนะ",
STR_INFORMATION_QUICKCHAT_WORDS_DEFAULT_NULL: "กดตรงนี้กรอกข้อความสำเร็จรูปของคุณ",
STR_INFORMATION_QUICKCHAT_VOICE: "",
STR_INFORMATION_QUICKCHAT_VOICE_DEFAULT: "กดค้างตรงนี้บันทึกเสียง",
STR_INFORMATION_QUICKCHAT_VOICE_ENTERTITLE: "กดตรงนี้กรอกหัวเรื่อง",
STR_INFORMATION_QUICKCHAT_VOICE_RECORDING: "กำลังบันทึกเสียง",
STR_INFORMATION_STATISTICS_ID: "ID:",
STR_INFORMATION_STATISTICS_GAMES: "จำนวนรอบไพ่:",
STR_INFORMATION_STATISTICS_WINS: "จำนวนรอบชนะ:",
STR_INFORMATION_STATISTICS_LOSE: "จำนวนรอบแพ้:",
STR_INFORMATION_STATISTICS_WINRATE: "อัตราชนะ:",
STR_INFORMATION_STATISTICS_SHOWINRIVER: "อัตราเปิดไพ่:",
STR_INFORMATION_STATISTICS_FOLDINPREFLOP: "อัตราหมอบ：",
STR_INFORMATION_STATISTICS_ALLININPREFLOP: "อัตราall inหลังแจกไพ่：",
STR_INFORMATION_STATISTICS_HIGHESTCHIP: "ประวัติชิปมากสุด:",
STR_INFORMATION_STATISTICS_MOSTWIN: "ชนะมากสุด:",
STR_INFORMATION_STATISTICS_BESTCARDS: "รูปแบบไพ่ใหญ่สุด:",
STR_INFORMATION_STATISTICS_GIVECHIPTOFRIEND: "จำนวนครั้งส่งชิปฟรีให้เพื่อน:",
STR_INFORMATION_STATISTICS_GIVECHIPTOFRIEND_TIMES: "ครั้ง",
STR_INFORMATION_STATISTICS_GIVECHIPINGAME: "จำนวนครั้งส่งชิปให้ผู้เล่น:",
STR_INFORMATION_STATISTICS_GIVECHIPINGAME_TIMES: "ครั้ง",
STR_INFORMATION_ITEMLIST_ITEM_TITLE: "ที่คุณมีอยู่:",
STR_INFORMATION_ITEMLIST_PATCH_TITLE: "คุณสามารถแลกได้:",
STR_RANKING_TITLE_MAIN: "แรงกิ้งค์",
STR_RANKING_TITLE_1: "ชิปรวม",
STR_RANKING_TITLE_2: "อัตรากำไร",
STR_RANKING_TITLE_3: "ได้รับชิปวันนี้",
STR_RANKING_TITLE_4: "ชนะวันนี้",
STR_RANKING_TITLE_5: "ปฎิสัมพันธ์",
STR_RANKING_GMT_GMT: "เวลาGMT",
STR_RANKING_GMT_EXPLAIN: "เกมส์ใช้เวลาตามGMTเป็นมาตรฐาน ที่นี้แสดงเวลาแบบGMT ผู้เล่นทุกท่านโปรดทราบ",
STR_RANKING_TOP_TOP: "แถวหน้า",
STR_RANKING_RANKING_NOPLAYER: "แรงกิ้งค์ยังไม่มีผู้เล่น",
STR_CHAT_EXPRESSION_TITLE: "อิโมจิแสดงสีหน้า",
STR_CHAT_QUICKWORDS_TITLE: "ข้อความสำเร็จรูป",
STR_CHAT_QUICKVOICES_TITLE: "เสียงสำเร็จรูป",
STR_CHAT_INPUT_DEFAULT: "กดตรงนี้กรอกตัวอักษร",
STR_CHAT_INPUT_DEFAULT_IOS: "กดตรงนี้กรอกตัวอักษร",
STR_CHAT_QUICKVOICE_NOVICE: "",
STR_CHAT_QUICKVOICE_NOTITLE: "ยังไม่ได้กรอกคำบรรยาย",
STR_TABLEBOARD_CAHT_NOQUICKVOICE: "ตอนนี้คุณยังไม่มีเสียงสำเร็จรูปที่บันทึกไว้",
STR_TABLEBOARD_CHAT_NOQUICKTEXT: "ตอนนี้คุณยังไม่มีข้อความสำเร็จรูปที่บันทึกไว้",
STR_TABLEBOARD_RECORDING_COUNTDOWN: "เหลือ%dวินาที",
STR_FRIENDS_TITLE: "เพื่อนของคุณ",
STR_FRIENDS_NOFRIENDS: "ตอนนี้คุณยังไม่มีเพื่อน กดปุ่มค้นหาที่บนมุมขวา คุณสามารถใช้ชื่อผู้เล่นหาผู้เล่นที่สอดคล้อง ที่หน้าหลักโต๊ะเกมส์และหน้าหลักเกมส์ กดที่รูปโปรไฟต์ผู้เล่น กดปุ่มเพิ่มเป็นเพื่อน ก็จะส่งคำขอได้ง่ายๆ รีบมาลองดูนะ",
STR_FRIENDS_FRIENDS_UPDATE: "แสดงรูปภาพล่าสุดของเพื่อนก่อน",
STR_FRIENDS_FRIENDS_OL: "แสดงเพื่อนที่ออนไลน์อยู่ก่อน",
STR_FRIENDS_FRIENDS_ACTIVE: "แสดงเพื่อนที่ใช้งานอยู่ก่อน",
STR_FRIENDS_FRIENDS_MAX: "MAX",
STR_FRIENDS_FRIENDS_INFORMATION_LV: "Lv.",
STR_FRIENDS_FRIENDS_INFORMATION_MALE: "ชาย",
STR_FRIENDS_FRIENDS_INFORMATION_FEMALE: "หญิง",
STR_FRIENDS_FRIENDS_INFORMATION_ADDRESS: "ที่อยู่：",
STR_FRIENDS_FRIENDS_INFORMATION_DEFAULT: "แสดงจำนวนการส่งไลก์ คอนเม้นต์และส่งชิปฟรีให้ผู้เล่นคนนี้แล้วเท่าไหร่",
STR_FRIENDS_FRIENDS_INFORMATION_NOPHOTO: "ผู้เล่นคนนี้ไม่ได้อัพโหลดรูปใดๆ เลย",
STR_FRIENDS_FRIENDS_INFORMATION_GAMES: "เกมส์",
STR_FRIENDS_FRIENDS_INFORMATION_WIN: "ชนะ ",
STR_FRIENDS_FRIENDS_INFORMATION_LOSE: "แพ้",
STR_FRIENDS_FRIENDS_INFORMATION_WINRATE: "อัตราชนะ:",
STR_FRIENDS_FRIENDS_INFORMATION_SHOWINRIVER: "อัตราเปิดไพ่:",
STR_FRIENDS_FRIENDS_INFORMATION_FOLDINPREFLOP: "อัตราหมอบ：",
STR_FRIENDS_FRIENDS_INFORMATION_ALLININPREFLOP: "อัตราall inหลังแจกไพ่:",
STR_FRIENDS_FRIENDS_INFORMATION_HIGHESTCHIP: "ประวัติชิปมากสุด:",
STR_FRIENDS_FRIENDS_INFORMATION_MOSTWIN: "ชนะมากสุด:",
STR_FRIENDS_FRIENDS_INFORMATION_BESTCARDS: "รูปแบบไพ่ใหญ่สุด:",
STR_FRIENDS_FRIENDS_SEARCHTITLE: "เพื่อนที่ค้นหาพบ",
STR_FRIENDS_FRIENDS_SEARCHTIPS: "กรุณากรอกอย่างน้อย4ตัวอักษร เพื่อค้นหาชื่อ",
STR_FRIENDS_FRIENDS_SEARCH: "ตามชื่อผู้เล่นพบแล้ว %dคน แสดงผู้เล่นคล้ายกันมากสุด %dคน",
STR_LOGIN_PHONELOGIN: "โทรศัพท์",
STR_LOGIN_ACCOUNTLOGIN: "บัญชี",
STR_LOGIN_FACEBOOKLOGIN: "Facebook",
STR_LOGIN_GUESTLOGIN: "นักท่องเที่ยว",
STR_LOGIN_ACCOUNTLOGIN_ACCOUNT: "กรอกอีเมลของคุณ",
STR_LOGIN_ACCOUNTLOGIN_PASSWORD: "กรอกรหัสผ่านของคุณ",
STR_LOGIN_ACCOUNTLOGIN_AUTOLOGIN: "ล็อกอินอัตโนมัต",
STR_LOGIN_ACCOUNTLOGIN_RETRIEVEPASSWORD: "กู้คืนรหัสผ่าน",
STR_LOGIN_ACCOUNTLOGIN_LOGIN: "ล็อกอิน",
STR_LOGIN_ACCOUNTLOGIN_REGISTER: "ลงทะเบียน",
STR_LOGIN_ACCOUNTLOGIN_REGISTERACCOUNT: "กรุณากรอกอีเมลของคุณ",
STR_LOGIN_ACCOUNTLOGIN_REGISTERENTERPASSWORD: "กรุณากรอกรหัสผ่านของคุณ",
STR_LOGIN_ACCOUNTLOGIN_REGISTERCONFRIMPASSWORD: "กรุณายืนยันรหัสผ่าน",
STR_LOGIN_ACCOUNTLOGIN_REGISTERREGISTER: "ลงทะเบียน",
STR_LOGIN_ACCOUNTLOGIN_RETRIEVEPASSWORD_EXPLAIN: "หากคุณต้องการกู้คืนรหัสผ่าน กรุณากรอกอีเมลที่ใช้ลงทะเบียนแล้ว เราจะส่งรหัสผ่านไปที่อีเมลนี้",
STR_LOGIN_ACCOUNTLOGIN_RETRIEVEPASSWORD_ENTER: "กรุณากรอกอีเมลที่ลงทะเบียนของคุณ",
STR_LOGIN_ACCOUNTLOGIN_RETRIEVEPASSWORD_SENDEMAIL: "ส่งอีเมล",
STR_LOGIN_TERMSOFSERVICE: "ข้อตกลงผู้ใช้",
STR_LOBBY_TITLE: "ห้อง",
STR_LOBBY_ID: "ห้องID",
STR_LOBBY_BLIND: "บลายด์ %s/%s",
STR_LOBBY_5PLAYERS: "ห้อง5คน",
STR_LOBBY_9PLAYERS: "ห้อง9คน",
STR_LOBBY_FULL: "ห้องเต็ม",
STR_LOBBY_EMPTY: "ห้องว่าง",
STR_SIT_ROOMID: "ห้องID %d",
STR_SIT_BLIND: "บิ๊ก/สมอลบลายด์ %s/%s",
STR_SIT_MINBLIND: "นำเข้าน้อยสุด",
STR_SIT_MAXBLIND: "นำเข้ามากสุด",
STR_SIT_AUTOSIT: "เมื่อชิปไม่พอนำชิปเข้าอัตโนมัตพร้อมทั้งนั่งลง",
STR_SIT_LEAVE: "",
STR_SIT_SIT: "นั่งลง",
STR_SIT_NOCHIP: "ชิปไม่พอ",
STR_SIT_SHOP: "ห้าง",
STR_INVITE_TITLE: "เล่นกับเพื่อนของคุณ",
STR_INVITE_BUTTON: "เชิญมาที่ห้องเกมส์",
STR_INVITE_NOFRIEND: "เสียใจด้วย คุณยังไม่มีเพื่อน รีบไปเป็นเพื่อนกับผู้เล่นคนอื่นเร็ว",
STR_INVITE_UNKNOWN: "ที่อยู่     ไม่ทราบ",
STR_MES_FRIEND_TITLE: "ข้อมูลเพื่อน",
STR_MES_SYSTEM_TITLE: "ข้อมูลระบบ",
STR_MES_ADDFRIEND_RCCEIVE: "%s ต้องการเป็นเพื่อนกับคุณ คุณต้องการยินยอมไหม？",
STR_MES_ADDFRIEND_AGREE: "ยินดีด้วย！%sยอมรับคำร้องขอเป็นเพื่อนของคุณแล้ว คุณสามารถหาเขาได้ที่หน้าหลักเพื่อน\n",
STR_MES_ADDFRIEND_YOUAGREE: " คุณยอมรับคำร้องขอเป็นเพื่อนของ%sแล้ว คุณสามารถหาเขาได้ที่หน้าหลักเพื่อน\n",
STR_MES_CHIPS_GIVE: "%sส่ง %dชิปฟรีให้คุณ รีบมารับเร็ว",
STR_MES_CHIPS_RECEIVE: "คุณรับ %dชิปฟรี ที่มาจาก%s ",
STR_MES_MESSAGE_NULL: "ตอนนี้ยังไม่มีข้อมูล",
STR_MES_MONTH_JAN: "ม.ค.",
STR_MES_MONTH_FEB: "ก.พ.",
STR_MES_MONTH_MAR: "มี.ค.",
STR_MES_MONTH_APR: "เม.ย.",
STR_MES_MONTH_MAY: "พ.ค.",
STR_MES_MONTH_JUN: "มิ.ย.",
STR_MES_MONTH_JUL: "ก.ค.",
STR_MES_MONTH_AUG: "ส.ค.",
STR_MES_MONTH_SEP: "ก.ย.",
STR_MES_MONTH_OCT: "ต.ค.",
STR_MES_MONTH_NOV: "พ.ย.",
STR_MES_MONTH_DEC: "ธ.ค.",
STR_HOMESCREEN_OLPLAYER: " ผู้เล่นออนไลน์:%s",
STR_HOMESCREEN_PHOTOUPLOAD: "เพื่อนของคุณ %s อัพเดทรูปภาพใหม่แล้ว",
STR_HOMESCREEN_NOUPLOAD: " ยังไม่มีเพื่อนอัพเดทรูปภาพใหม่",
STR_EVENT_BACK: "กลับ",
STR_ANNOUNCEMENT_TITLE: "ประกาศ",
STR_PLAYER_INF_NAME: "",
STR_PLAYER_INF_TITLE_PHOTO: "รูปภาพ",
STR_PLAYER_INF_TITLE_ACHIEVEMENTS: "ผลงาน",
STR_PLAYER_INF_LV: "Lv.",
STR_PLAYER_INF_MALE: "ชาย",
STR_PLAYER_INF_FEMALE: "หญิง",
STR_PLAYER_INF_ADDRESS: "ที่อยู่",
STR_PLAYER_INF_BUTTON_BLOCK: "กดตรงนี้บล็อกผู้เล่น",
STR_PLAYER_INF_BLOCKBUTTON: "บล็อก",
STR_PLAYER_INF_BUTTON_UNLOCK: "",
STR_PLAYER_INF_UNLOCKBUTTON: "ปลดบล็อก",
STR_PLAYER_INF_BUTTON_REPORT: "กดตรงนี้รายงานรูปโปรไฟต์ผู้เล่น",
STR_PLAYER_INF_REPORTBUTTON: "รายงาน",
STR_PLAYER_INF_BLOCK: "หลังจากบล็อกแล้ว คุณจะไม่สามารถได้รับข้อความ เสียง หรืออิโมจิที่มาจากผู้เล่นคนนี้อีก คุณแน่ใจหรือไม่ว่าจะบล็อกผู้เล่นคนนี้？",
STR_PLAYER_INF_UNBLOCK: "หลังจากปลดบล็อกผู้เล่นคนนี้แล้ว คุณสามารถได้รับข้อความ เสียง หรืออิโมจิที่มาจากผู้เล่นคนนี้ได้อีกครั้ง",
STR_PLAYER_INF_REPORT: "หลังจากมีผู้เล่นจำนวนมากรายงานรูปโปรไฟต์นี้ รูปโปรไฟต์นี้จะถูกบล็อก เราจะรีบดำเนินการตรวจสอบโดยเร็ว คุณแน่ใจหรือไม่ว่าจะรายงานรูปโปรไฟต์นี้？",
STR_PLAYER_PHOTO_NULL: "ผู้เล่นคนนี้ไม่ได้อัพโหลดรูปใดๆ เลย",
STR_CHECKPHOTO_NOAUTHORITY: "ขออภัย เนื่องจากการตั้งค่าของผู้เล่นคนนี้ คุณไม่มีสิทธิ์ตรวจเช็ครูปของผู้เล่นคนนี้",
STR_PLAYER_PHOTO_CRITICTITLE: "คอมเม้นต์",
STR_PLAYER_STATISTICS_GAMES: "จำนวนรอบไพ่:",
STR_PLAYER_STATISTICS_WINS: "ชนะ",
STR_PLAYER_STATISTICS_LOSE: "แพ้",
STR_PLAYER_STATISTICS_WINRATE: "อัตราชนะ:",
STR_PLAYER_STATISTICS_SHOWINRIVER: "อัตราเปิดไพ่:",
STR_PLAYER_STATISTICS_FOLDINPREFLOP: "อัตราหมอบ：",
STR_PLAYER_STATISTICS_ALLININPREFLOP: "อัตราall inหลังแจกไพ่：",
STR_PLAYER_STATISTICS_HIGHESTCHIPS: "ประวัติชิปมากสุด:",
STR_PLAYER_STATISTICS_MOSTWIN: "ชนะมากสุด:",
STR_PLAYER_STATISTICS_BTESTCARD: "รูปแบบไพ่ใหญ่สุด:",
STR_PLAYER_STATISTICS_MINS: "%s นาที",
STR_PLAYER_ACHIEVEMENT_NULL: "ผู้เล่นคนนี้ยังไม่ได้รับผลงานใดๆ เลย",
STR_LOGINREWARD_TITLE: "รางวัลล็อกอินต่อเนื่อง",
STR_LOGINREWARD_DAY: "วันที่%d",
STR_LOGINREWARD_RECEIVED: "รับแล้ว",
STR_LOGINREWARD_TIPS: "หากคุณรักษาการล็อกอินต่อนเนื่องไว้ คุณจะได้รับรางวัลมากยิ่งขึ้น",
STR_LOGINREWARD_SUCCESS: "",
STR_ABOUTUS_STAFF: "Poker Royal Texas Hold'em Staff List\n\n\nGameDesinger\n\nStone\nJohn Smith\n\n\nProgrammer\n\nJack\nWillian\nHaven \nSpiro\nBob\nRussell\n\n\nArtDesinger\n\nPantheon\nEmma\nMandy\n\n\nGameTester\n\nJoffence\nDoris\n\n\nSpecial Thanks\n\nChris\nAlex\nMatata\nBlank",
STR_BUTTON_YES: "ใช่",
STR_BUTTON_NO: "ไม่ใช่",
STR_BUTTON_OK: "ยืนยัน",
STR_BUTTON_IGNORE: "",
STR_BUTTON_AGREE: "ตกลง",
STR_OPTIONS_TITLE: "ตั้งค่า",
STR_OPTIONS_VOICE: "เสียง",
STR_OPTIONS_SOUND: "เสียงซาวด์",
STR_OPTIONS_AUTOSIT: "นั่งอัตโนมัต",
STR_OPTIONS_VIBRATION: "สั่น",
STR_OPTIONS_FOLLOW: "ยินยอมให้ผู้เล่นติดตาม",
STR_OPTIONS_INVITE: "รับข้อมูลการเชิญ",
STR_OPTIONS_SEEPHOTOS: "ใครสามารถดูรูปของฉันได้",
STR_OPTIONS_CHOSEN_YES: "ใช่",
STR_OPTIONS_CHOSEN_NO: "ไม่ใช่",
STR_OPTIONS_SEEPHOTOS_FRIEND: "เฉพาะเพื่อนที่ดูได้",
STR_OPTIONS_SEEPHOTOS_NOONE: "ทุกคนไม่สามารถดูได้",
STR_OPTIONS_SEEPHOTOS_ANYONE: "ทุกคนสามารถดูได้",
STR_OPTIONS_RATE: "ให้คะแนนเกมส์",
STR_OPTIONS_CACHE: "ล้างแคช",
STR_OPTIONS_CACHE_CONFIRM: "ล้างแคชจะลบรูปโปรไฟต์ รูปภาพที่คุณได้โหลดแล้ว คุณแน่ใจหรือไม่ว่าจะล้างแคช？",
STR_OPTIONS_CACHE_CLEARED: "ล้างแคชสำเร็จ",
STR_OPTIONS_ABOUT: "เกี่ยวกับเรา",
STR_OPTIONS_REPORT: "รายงานปัญหา",
STR_OPTIONS_FOLLOWUS: "ติดตามเรา",
STR_OPTIONS_CONTACT: "ติดต่อเรา",
STR_LOADING_1: "นำเพื่อนมาที่เกมส์ แต่ก็อย่าลืมว่าในความเป็นจริงก็เล่นด้วยอยู่",
STR_LOADING_2: "สื่อสารกับคนอื่นกรุณารักษามารยาท ในขณะที่เคารพผู้อื่นนั้น คุณก็จะได้รับการเคารพจากคนอื่นเช่นกัน",
STR_LOADING_3: "ในห้องเกมส์อย่าได้ลวนลามเจ้ามือ แม้ว่าพวกเขาจะหล่อหรือเซ็กซี่มากก็ตาม",
STR_LOADING_4: "หากอยู่ในเกมส์ได้รับความล้มเหลวขัดข้อง ไม่ต้องท้อไป ชีวิตไม่ได้ทอดทิ้งคุณ",
STR_LOADING_5: "ทำเรื่องอะไรก็ตามต้องการระดับความเหมาะสม รวมทั้งการเล่นโป๊กเกอร์รอยัล",
STR_LOADING_6: "กรุณาอย่าลืมเปิดข้อมูลเพื่อนทุกวัน กดปุ่มส่งชิปส่งชิปฟรีให้เพื่อน",
STR_LOADING_7: "เมื่อถึงรอบคุณแล้ว กดชิปด้านล่างซ้าย ก็สามารถเลือกจำนวนเงินเกทับแบบเร็วได้",
STR_LOADING_8: "ตอนที่ตรวจเช็คข้อมูลผู้เล่น กดที่รูปโปรไฟต์อีกครั้ง ก็สามารถบล็อกผู้เล่นน่ารำคาญได้",
STR_LOADING_9: "หากต้องการคุยกันส่วนตัว กรุณาอย่าลืมใช้ปุ่มเสียงที่หน้ารายละเอียดข้อมูลผู้เล่น",
STR_LOADING_10: "กรุณาอย่าลืมตรวจเช็คกิจกรรมนะ ไม่แน่อาจมีเซอร์ไพรส์",
STR_LOADING_11: "รักษาการล็อกอินต่อเนื่อง จะได้รับรางวัลที่ดีที่สุด",
STR_LOADING_END: "รักษาจิตใจให้ปกติอยู่ตลอดเวลา ชนะก็ไม่ต้องตื่นเต้น แพ้ก็ไม่ต้องหดหู่ใจ",
STR_TABLEBOARD_ID: "ห้องID%d บิ๊ก/สมอบลายด์ %s/%s",
STR_CARDTYPE_HIGH_CARD: "ไพ่สูง",
STR_CARDTYPE_PAIR_CARD: "1คู่",
STR_CARDTYPE_TWO_PAIRS_CARD: "2คู่",
STR_CARDTYPE_THREE_CARD: "ตอง",
STR_CARDTYPE_STRAIGHT: "สเตรท",
STR_CARDTYPE_FLUSH: "ฟลัช",
STR_CARDTYPE_FULL_HOUSE: "ฟูลเฮ้าท์",
STR_CARDTYPE_FOUR_OF_A_KIND: "โฟร์การ์ด",
STR_CARDTYPE_STRAIGHT_FLUSH: "สเตรทฟลัช",
STR_CARDTYPE_ROYAL_FLUSH: "รอยัลสเตรทฟลัช",
STR_TABLEBOARD_EXP: "Exp.",
STR_QUESTS_TITLE: "ภารกิจ",
STR_QUESTS_RECEIVEBUTTON: "กดรับ",
STR_ACHIEVEMENTS_TITLE: "ผลงาน",
STR_LVUP_TITLE: "ยินดีด้วย！",
STR_LVUP_TEXT: "ยินดีด้วย คุณอัพเกรดถึงLv.%d ได้รับรางวัล %sชิปแล้ว",
STR_SHOP_TITLE: " ห้าง",
STR_SHOP_BUTTON: "ซื้อ",
STR_ALMS_TITLE: "ฟื้นคืนชีพ",
STR_ALMS_TEXT: "ผู้เล่นที่น่ารัก เนื่องจากตอนนี้จำนวนชิปและเพชรของคุณน้อยมาก ระบบส่ง %sชิปให้คุณ วันนี้คุณยังสามารถได้รับเงินสงเคราะห์อีก %dครั้ง",
STR_BUG_REPORT: "กดส่งคำถาม",
STR_BUG_INPUT: "กรุณากรอกคำถามที่คุณต้องการส่ง",
STR_BUG_TIP: "คำถามของคุณส่งให้เซิร์ฟเวอร์แล้ว ฝ่ายบริการลูกค้าจะเร่งแก้ไขและตอบกลับโดยเร็ว",
STR_BUG_TIME: "เวลาส่ง",
STR_BUG_WAIT: "รอฝ่ายบริการลูกค้าตอบกลับ",
STR_BUG_RESPONSETIME: "เวลาตอบกลับ",
STR_BUG_DELTIP: "คุณแน่ใจหรือไม่ว่าจะลบคำถามนี้？",
STR_BUG_VIEW: "ดูรายละเอียด",
STR_BUG_COMMIT: "ส่ง",
STR_BUG_DELTIPDONE: "ลบสำเร็จ",
STR_BUG_DELTIPFAIL: "ลบล้มเหลว",
STR_BUG_COMMIT_TIP: "ส่งล้มเหลว",
STR_POKER_ROOM_BET: "เดิมพัน%s/%s",
STR_POKERTABLEBOARD_ID: "ห้องID%d น้อยสุด/มากสุด เดิมพัน%s/%s",
STR_POKER_PRE_BET: "เดิมพัน",
STR_POKER_TYPE_POK9: "ป๊อก9",
STR_POKER_TYPE_POK8: "ป๊อก8",
STR_POKER_TYPE_TONG: "ตอง",
STR_POKER_TYPE_SAM_LUEANG: "สามเหลือง",
STR_POKER_TYPE_STRAIGHT_FLUSH: "ไพ่เรียงดอก",
STR_POKER_TYPE_STRAIGHT: "ไพ่เรียง",
STR_POKER_TYPE_SCORE_0: "0แต้ม",
STR_POKER_TYPE_SCORE_1: "1แต้ม",
STR_POKER_TYPE_SCORE_2: "2แต้ม",
STR_POKER_TYPE_SCORE_3: "3แต้ม",
STR_POKER_TYPE_SCORE_4: "4แต้ม",
STR_POKER_TYPE_SCORE_5: "5แต้ม",
STR_POKER_TYPE_SCORE_6: "6แต้ม",
STR_POKER_TYPE_SCORE_7: "7แต้ม",
STR_POKER_TYPE_SCORE_8: "8แต้ม",
STR_POKER_TYPE_SCORE_0_9: "ไพ่นับแต้ม 0-9",
STR_POKER_TYPE_SCORE_9: "9แต้ม",
STR_POKER_INTRUUCE: "อธิบายรูปแบบไพ่",
STR_POKER_INTRUUCE1: "ไพ่ใหญ่น้อยดูจากบนลงล่าง",
STR_POKER_INTRUUCE2: "ไพ่เหล่านี้คือ 0แต้ม",
STR_POKER_INTRUUCE3: "ไพ่เหล่านี้คือ1-9แต้ม",
STR_POKER_INTRUUCE4: "ไพ่ในมือบวกรวมกัน นับแต้มแค่หลักหน่อย",
STR_POKER_INTRUUCE5: "ไพ่2ใบแรกคือ9แต้ม",
STR_POKER_INTRUUCE6: "ไพ่2ใบแรกคือ8แต้ม",
STR_POKER_INTRUUCE7: "KA2、A24 ไม่ใช่ไพ่เรียง",
STR_POKER_INTRUUCE8: "อัตราการจ่ายนับเด้ง",
STR_POKER_INTRUUCE9: "ไพ่ 2ใบทีมีดอกเหมือนกัน",
STR_POKER_INTRUUCE10: "ไพ่ 3ใบที่มีดอกเหมือนกัน （เทียบไพ่โดยดูแต้ม）",
STR_POKER_INTRUUCE11: "จบไพ่รอบนี้แล้ว ออกจากห้อง",
STR_POKER_INTRUUCE12: "หลังจากไพ่รอบนี้จบ ลุกจากที่นั่งและออกจากห้อง\n",
STR_WIN_STREAK: "ชนะต่อเนื่อง:",
STR_PLAYER: "ผู้เล่น",
STR_DEAR: "เจ้ามือ",
STR_GAME_GOTODEAR: "กดเป็นเจ้ามือ",
STR_CHIP_NOT_ENOUGH: "ชิปไม่เพียงพอ อย่างน้อย%s ชิป ถึงจะเป็นเจ้ามือได้ ไปที่ห้างหรือไม่？",
STR_POKERTABLEBOARD_ID1: "น้อยสุด/มากสุด เดิมพัน%s/%s",
STR_GAME_GOTODEAR_1: "เป็นเจ้ามือสำเร็จ ต้องเล่นให้ครบ 5รอบถึงจะออกได้\n",
STR_GAME_GOTODEAR_2: "ผู้เล่นเป็นเจ้ามือสำเร็จ",
STR_STATIC_BIGWIN: "ชนะมากสุด:",
STR_CARDTYPE100: "ไพ่ 3ใบในกลุ่ม JQK",
STR_CARDTYPE101: "ไพ่ 3ใบเรียงกันและมีดอกเหมือนกัน",
STR_CARDTYPE102: "ไพ่ 2ใบทีมีแต้มเหมือนกัน  ",
STR_CARDTYPE103: "ไพ่เรียง",
STR_CARDTYPE104: "ไพ่ 3ใบเรียงกัน ดอกไม่เหมือนกัน",
STR_ADDFRIEND_ONESELF: "จำนวนเพื่อนของคุณได้ถึงขีดจำกัดแล้ว คุณสามารถไปซื้อไอเทมสมุดรายชื่อได้ที่ห้าง เพื่ออัพระดับขีดจำกัดเพื่อน ",
STR_ADDFRIEND_OTHERS: "เสียใจด้วย จำนวนเพื่อนของฝ่ายตรงข้ามได้ถึงขีดจำกัดแล้ว ตอนนี้คุณไม่สามารถเพิ่มเขาเป็นเพื่อนได้",
STR_MESSRECEIVE_UNDONE: "ของรางวัลที่อยู่ในข้อมูลนี้ได้ถูกคุณกดรับแล้วเรียบร้อย",
STR_LOGIN_WORNING: "บัญชีของคุณถูกอายัญ หากคุณมีข้อสงสัย กรุณาส่งอีเมลมาที่ฝ่ายบริการของเรา",
STR_LOGIN_INFO_ERROR: "คุณกรอกบัญชีหรือรหัสผ่านไม่ถูกต้อง กรุณากรอกใหม่อีกครั้ง",
STR_LOGIN_INFO_NULL: "ล็อกอินบัญชีหรือรหัสผ่านไม่สามารถเว้นว่างได้ กรุณากรอกด้วย",
STR_LOGIN_EMALL_REGISTERED: "อีเมลที่คุณกรอกเคยถูกลงทะเบียนแล้ว กรุณากรอกอีเมลที่สามารถใช้งานได้ใหม่อีกครั้ง",
STR_LOGIN_EMAIL_ERROR: "คุณกรอกรูปแบบอีเมลผิดพลาด กรุณากรอกใหม่อีกครั้ง",
STR_LOGIN_PASSWORD_SHORT: "รหัสบัญชีอย่างน้อย6-16ตัวอักษร กรุณากรอกรหัสผ่านของคุณใหม่อีกครั้ง",
STR_LOGIN_PASSWORD_DIFFERENT: "คุณกรอกรหัสผ่านทั้งสองครั้งไม่เหมือนกัน กรุณากรอกใหม่อีกครั้ง",
STR_LOGIN_PASSWORD_CHARACTER: "รหัสผ่านไม่รวมสัญลักษณ์อื่น นอกจากอักษรภาษาอังกฤษและตัวเลข กรุณากรอกใหม่อีกครั้ง",
STR_LOGIN_REGISTER_SUCCESS: "ยินดีด้วย คุณลงทะเบียนบัญชีโป๊กเกอร์รอยัลสำเร็จ กดOKเข้าร่วมเกมส์เร็ว！",
STR_LOGIN_RETRIEVE_SUCCESS: "ส่งรหัสผ่านกู้คืนอีเมลเรียบร้อยแล้ว กรุณาเข้าอีเมลเพื่อตรวจรับ หากไม่ได้รับ กรุณารอสักครู่แล้วเช็คอีกครั้ง",
STR_LOGIN_RETRIEVE_FAIL: "บัญชีอีเมลที่คุณกรอกยังไม่ได้ลงทะเบียน กรุณาตรวจสอบและกรอกอีเมลที่ได้ลงทะเบียนแล้ว",
STR_MAIN_LOGOFF: "คุณแน่ใจหรือไม่ว่าจะล็อกเอาท์จากเกมส์？",
STR_MAIN_QUIT: "คุณแน่ใจหรือไม่ว่าจะออกจากเกมส์？",
STR_SHOP_CHIP: "ชิปของคุณไม่พอ ต้องการไปซื้อชิปที่ห้างหน่อยไหม？",
STR_SHOP_DIAMOND: "เพชรของคุณไม่พอ ต้องการไปซื้อเพชรที่ห้างหน่อยไหม？",
STR_SHOP_BUYSUCCESSFUL: "คุณได้ซื้อสินค้าสำเร็จแล้ว%s。",
STR_SHOP_REACHLIMIT: "คุณได้ซื้อไอเทมนี้ถึงขีดจำกัดแล้ว",
STR_SHOP_BUYFAIL: "ขออภัย ซื้อสินค้าล้มเหลว กรุณาลองใหม่อีกครั้ง",
STR_PLAYERSEARCH_SHORT: "เวลาค้นหาเพื่อน อย่างน้อยกรอก4ตัวอักษรภาษาอักกฤษหรือตัวเลข",
STR_PLAYERSEARCH_LONG: "เวลาค้นหาเพื่อน อย่างมากกรอกได้16ตัวอักษรภาษาอักกฤษหรือตัวเลข",
STR_FRIEND_HAVEADDED: "ผู้เล่นคนนี้อยู่ในรายการเพื่อนแล้ว",
STR_FRIEND_LIMIT: "จำนวนเพื่อนของคุณได้ถึงขีดจำกัดแล้ว คุณสามารถไปซื้อไอเทมสมุดรายชื่อได้ที่ห้าง เพื่ออัพระดับขีดจำกัดเพื่อน ",
STR_FRIEND_FOLLOW: "%s เพื่อนของคุณ กำลังเล่นไพ่อยู่ในห้อง%d/%d คุณยืนยันว่าจะตามเขาไปที่ห้องนั้นไหม？",
STR_FRIEND_DEL: "คุณแน่ใจว่าจะลบเพื่อนคนนี้หรือไม่？",
STR_FRIEND_ADDYOURSELF: "คุณไม่สามารถเพื่มตัวเองเป็นเพื่อนได้",
STR_PRESENT_NOTFRIEND: "เป็นเพื่อนถึงจะส่งชิปฟรีได้ คุณกับผู้เล่นคนนี้ยังไม่ได้เป็นเพื่อนกัน ส่งชิปให้ไม่ได้",
STR_PRESENT_DONE: "วันนี้คุณได้ส่งชิปให้เพื่อนคนนี้แล้ว พรุ่งนี้ค่อยส่งให้ใหม่นะ",
STR_PERSONAL_NAME_SHORT: "คุณกรอกชื่อสั้นเกินไป กรุณากรอกอย่างน้อย4ตัวอักษรภาษาอังกฤษหรือตัวเลข",
STR_PERSONAL_NAME_LONG: "คุณกรอกชื่อยาวเกินไป กรอกมากสุด16ตัวอักษรภาษาอังกฤษหรือตัวเลข",
STR_PERSONAL_NAME_REPEAK: "คุณกรอกชื่อซ้ำกับผู้อื่น กรุณากรอกชื่อใหม่อีกครั้ง",
STR_PERSONAL_NAME_ILLEGAL: "คุณกรอกชื่อผิดกฏ กรุณาใช้อักษรภาษาอังกฤษหรือตัวเลขกรอก",
STR_PERSONAL_SIGNATURE_LONG: "คุณกรอกสเตตัสยาวเกินไป กรอกได้มากสุด 120ตัวอักษร",
STR_PERSONAL_RECORDING_SHORT: "คุณอัดเสียงสั้นเกินไป กรุณาพูดยาวหน่อย",
STR_PERSONAL_QUICKVOICE_PLAY: "ตอนที่กำลังเล่นเสียง ไม่สามารถเปิดเสียงอื่นๆ ได้",
STR_PERSONAL_QUICKVOICE_RECORD: "ตอนที่กำลังเล่นเสียง ไม่สามารถอัดเสียงอื่นๆ ได้",
STR_PERSONAL_QUICKVOICE_DEL: "คุณแน่ใจหรือไม่ว่าจะลบเสียงสำเร็จรูปนี้？",
STR_PERSONAL_PHOTO_DEL: "คุณแน่ใจหรือไม่ว่าจะลบรูปภาพนี้？",
STR_PERSONAL_PHOTO_LIMIT: "จำนวนรูปภาพของคุณได้ถึงขีดจำกัดแล้ว คุณสามารถไปซื้อไอเทมอัลบัมรูปได้ที่ห้าง เพื่ออัพระดับขีดจำกัดรูปภาพ",
STR_PERSONAL_ACCOUNT_BINDING: "อีเมลที่คุณกรอกเคยถูกลงทะเบียนแล้ว กรุณากรอกอีเมลที่สามารถใช้งานได้ใหม่อีกครั้ง",
STR_PERSONAL_ITEMEXCHANGE_301002: "ยินดีด้วย คุณแลกเพชร%dเม็ดสำเร็จ ชิ้นส่วนที่สอดคล้องจะหักโดยอัตโนมัต",
STR_PERSONAL_ITEMEXCHANGE_302003: "ยินดีด้วย คุณแลกแว่นขยาย%dชิ้นสำเร็จ ชิ้นส่วนที่สอดคล้องจะหักโดยอัตโนมัต",
STR_PERSONAL_ITEMEXCHANGE_302001: "ยินดีด้วย คุณแลกไอเทมไมโครโฟน%dชิ้นสำเร็จ ชิ้นส่วนที่สอดคล้องจะหักโดยอัตโนมัต",
STR_PERSONAL_ITEMEXCHANGE_302002: "ยินดีด้วย คุณแลกไอเทมอิโมจิ%dชิ้นสำเร็จ ชิ้นส่วนที่สอดคล้องจะหักโดยอัตโนมัต",
STR_PERSONAL_BINDIN: "กรุณาใช้อีเมลที่ใช้งานอยู่เป็นประจำในการผูกบัญชี หลังจากผูกบัญชีแล้วจะสามารถใช้บัญชีล็อกอินเกมส์กับอุปกรณ์เครื่องอื่นได้",
STR_ITEM_TUREEYE_NULL: "จำนวนแว่นขยายของคุณไม่พอ ต้องการไปซื้อที่ห้างหน่อยไหม？",
STR_REPORT_PHOTO_CONFRIM: "คุณแน่ใจหรือไม่ว่าจะรายงานรูปภาพนี้？หลังจากรูปนี้ถูกผู้เล่นจำนวนมากรายงาน รูปภาพนี้จะถูกบล็อก เราจะเร่งดำเนินการตรวจสอบ",
STR_REPORT_PHOTO_REPEAK: "คุณได้รายงานรูปภาพนี้แล้ว กรุณาอย่ารายงานซ้ำ",
STR_SITDOWN_LIMIT: "จำนวนคนในห้องนี้เต็ม ไม่สามารถเข้าได้ กรุณาเลือกห้องอื่นที่มีที่ว่าง",
STR_SITDOWN_FULL: "ห้องนี้ไม่มีที่ว่าง กด“YES” ระบบจะจัดให้คุณไปอยู่ที่ห้องใหม่โดยอัตโนมัต กด“NO”คุณจะอยู่ที่เดิมเป็นผู้ชม",
STR_SITDOWN_REPEAK: "",
STR_SITDOWN_NOTEMPTY: "ที่นั่งที่คุณเลือกถูกผู้เล่นท่านอื่นนั่งแล้ว กรุณาเลือกที่นั่งว่างอื่น",
STR_TABLE_RECORDIND_SHORT: "คุณอัดเสียงสั้นเกินไป กรุณาอัดเสียงใหม่อีกครั้ง",
STR_ITEM_VOICE_NULL: "ไมโครโฟนของคุณไม่พอแล้ว ต้องการไปซื้อไมโครโฟนที่ห้างหน่อยไหม？",
STR_ITEM_VOICE_STAND: "ตอนนี้คุณยังไม่ได้นั่งลง ยังไม่สามารถใช้ฟังก์ชั่นสนทนาด้วยเสียงได้",
STR_ITEM_CHAT_STAND: "ตอนนี้คุณยังไม่ได้นั่งลง ยังไม่สามารถใช้การแชทและอิโมจิได้",
STR_ITEM_EXPRESSION_NULL: "อิโมจิของคุณไม่พอแล้ว ต้องการไปซื้ออิโมจิที่ห้างหน่อยไหม？",
STR_TABLE_LEAVE_SEAT: "ออกจากที่นั่งคุณจะเสียชิปที่ลงเดิมพันไปแล้ว คุณแน่ใจหรือไม่ว่าจะออกจากที่นั่งตอนนี้？",
STR_TABLE_LEAVE_ROOM: "ออกจากห้องคุณจะเสียชิปที่ลงเดิมพันไปแล้ว คุณแน่ใจหรือไม่ว่าจะออกจากห้องตอนนี้？",
STR_INVITE_RECEIVE: "ผู้เล่น%s เชิญคุณเข้าร่วมเล่นไพ่ กดยืนยัน",
STR_INVITE_CONFRIM: "ผู้เล่น%s เชิญคุณเข้าร่วมเล่นไพ่ ห้องID %d บิ๊กสมอลบลายด์%s / %s คุณแน่ใจหรือไม่ว่าต้องการเข้าร่วมเล่นไพ่？",
STR_INVITE_CONFRIM1: "ผู้เล่น%s เชิญคุณเข้าร่วมห้องเกมส์ของเขา\nห้องID%d เดิมพัน%s / %s\nคุณยืนยันจะเข้าร่วมห้องเกมส์ไหม？",
STR_INVITE_SAMEROOM: "คุณและผู้เล่นคนนี้อยู่ในห้องเดียวกันแล้ว",
STR_MISSION_COMPLETE: "คุณเสร็จสิ้น1ภารกิจแล้ว รีบไปกดรับรางวัลเร็ว",
STR_MUTE_ON: "คุณเปิดฟังก์ชั่นเงียบสำเร็จ",
STR_MUTE_OFF: "คุณปิดฟังก์ชั่นเงียบสำเร็จ",
STR_EQUIPMENT_MICROPHONE: "เปิดฟังก์ชั่นไมโครโฟนล้มเหลว กรุณายินยอมให้เกมส์เข้าใช้งานฟังก์ชั่นไมโครโฟนบนมือถือ กรุณาตรวจสอบการตั้งค่ามือถือ",
STR_ACHIEVEMENT_SUCCESS: "ยินดีด้วย！คุณกดรับรางวัลผลงานสำเร็จแล้ว%d %s.",
STR_LOGIN_OTHERDEVICES: "บัญชีของคุณถูกใช้งานที่อื่นแล้ว กรุณาตรวจสอบความปลอดภัยของรหัสผ่านบัญชีของคุณ เพื่อป้องกันความเสียหาย หากคุณมีข้อสงสัย กรุณาส่งอีเมลมาที่ฝ่ายบริการเรา",
STR_NETWORK_REQUEST: "เกิดข้อผิดพลาด%d คำร้องขออินเตอร์เน็ตล้มเหลว กรุณาตรวจสอบสภาพอินเตอร์เน็ตและลองใหม่อีกครั้ง",
STR_NETWORK_ERROR_CHECK: "อินเตอร์เน็ตเกิดข้อผิดพลาด การเชื่อมต่อถูกตัดขาด กรุณาตรวจสอบอุปกรณ์หรือการตั้งค่าอินเตอร์เน็ต",
STR_UNKNOWN_ERROR: "เกิดข้อผิดพลาดที่ระบุไม่ได้ เกมส์ไม่สามารถเข้าเล่นได้ปกติ คุณสามารถส่งอีเมลแจ้งฝ่ายบริการบอกรายละเอียดของข้อผิดพลาด",
STR_ERROR_DATA: "ข้อมูลเกมส์error กรุณาล็อกอินเกมส์ใหม่อีกครั้ง",
STR_EVALUATION_TEXT: "ผู้เล่นที่น่ารัก ตอนนี้คุณสามารถทำการให้คะแนนเกมส์เราได้แล้ว หลังจากให้คะแนนแล้วจะได้รับรางวัล ขอทราบว่าต้องการไปยังหน้าที่สอดคล้องหรือไม่？",
STR_GOOGLEPLAY_ERROR_1: "ในการซื้อนี้ต้องมีบริการGoogle Play หนึ่งรายการหรือมากกว่า ซึ่งตอนนี้ยังไม่สามารถใช้งานได้",
STR_GOOGLEPLAY_ERROR_2: "หลังอัพเดทบริการGoogle Playแล้ว ถึงจะสามารถทำการซื้อได้",
STR_GOOGLEPLAY_ERROR_3: "โทรศัพท์ของคุณไม่มีบริการGoogle Play คุณจำเป็นต้องติดตั้งบริการนี้ก่อน ถึงจะสามารถทำการซื้อได้",
STR_GOOGLEPLAY_ERROR_4: "คุณจำเป็นต้องเปิดบริการGoogle Playก่อน ถึงจะทำการซื้อได้",
STR_ITEM_NAME_301001: "ชิป",
STR_ITEM_NAME_301002: "เพชร",
STR_ITEM_NAME_302001: "ไมโครโฟน",
STR_ITEM_NAME_302002: "อิโมจิ",
STR_ITEM_NAME_302003: "แว่นขยาย",
STR_ITEM_NAME_303001: "ชิปทองคำ",
STR_ITEM_NAME_304001: "สมุดรายชื่อ",
STR_ITEM_NAME_304002: "อัลบัมรูป",
STR_ITEM_DESC_301001: "",
STR_ITEM_DESC_301002: "",
STR_ITEM_DESC_302001: "ใช้ฟังก์ชั่นสนทนาต้องเสียไอเทม ทุกครั้งที่ใช้สนทนา1ครั้ง ต้องเสีย1ไอเทม",
STR_ITEM_DESC_302002: "ใช้อิโมจิต้องเสียไอเทม ทุกครั้งที่ใช้อิโมจิ1ครั้ง ต้องเสีย1ไอเทม",
STR_ITEM_DESC_302003: "หลังจากใช้แล้ว สามารถตรวจเช็คข้อมูลเกมส์ของผู้เล่นได้ ทุกครั้งที่ตรวจเช็คผู้เล่น1ชื่อ ต้องเสีย1ไอเทม มีผลต่อเนื่อง%dนาที",
STR_ITEM_DESC_303001: "เพิ่มไอเทมของภารกิจรางวัลชิป ทุกภารกิจรางวัลชิปเปลี่ยนเป็น %sเท่า ต่อเนื่อง %dวัน",
STR_ITEM_DESC_304001: "",
STR_ITEM_DESC_304002: "",
STR_GOODS_NAME_401001: "%d แพ็คเพชร",
STR_GOODS_NAME_401002: "%d แพ็คเพชร",
STR_GOODS_NAME_401003: "%d แพ็คเพชร",
STR_GOODS_NAME_401004: "%d แพ็คเพชร",
STR_GOODS_NAME_402001: "%d แพ็คชิป",
STR_GOODS_NAME_402002: "%d แพ็คชิป",
STR_GOODS_NAME_402003: "%d แพ็คชิป",
STR_GOODS_NAME_402004: "%d แพ็คชิป",
STR_GOODS_NAME_403001: "%d แพ็คไมโครโฟน",
STR_GOODS_NAME_403002: "%d แพ็คไมโครโฟน",
STR_GOODS_NAME_404001: "%d แพ็คอิโมจิ",
STR_GOODS_NAME_404002: "%d แพ็คอิโมจิ",
STR_GOODS_NAME_405001: "%d แพ็คแว่นขยาย",
STR_GOODS_NAME_406001: "ชิปทองคำ",
STR_GOODS_NAME_407001: "สมุดรายชื่อ",
STR_GOODS_NAME_408001: "อัลบัมรูป",
STR_GOODS_DESC_401001: "เพชร %dเม็ด",
STR_GOODS_DESC_401002: "เพชร %dเม็ด",
STR_GOODS_DESC_401003: "เพชร %dเม็ด",
STR_GOODS_DESC_401004: "เพชร %dเม็ด",
STR_GOODS_DESC_402001: "%d ชิป",
STR_GOODS_DESC_402002: "%d ชิป",
STR_GOODS_DESC_402003: "%d ชิป",
STR_GOODS_DESC_402004: "%d ชิป",
STR_GOODS_DESC_403001: "ไมโครโฟน%dชิ้น ใช้ฟังก์ชั่นสนทนาต้องเสียไอเทม ทุกครั้งที่ใช้สนทนา1ครั้ง ต้องเสีย1ไอเทม",
STR_GOODS_DESC_403002: "ไมโครโฟน%dชิ้น ใช้ฟังก์ชั่นสนทนาต้องเสียไอเทม ทุกครั้งที่ใช้สนทนา1ครั้ง ต้องเสีย 1ไอเทม",
STR_GOODS_DESC_404001: "อิโมจิ%dชิ้น ใช้อิโมจิต้องเสียไอเทม ทุกครั้งที่ใช้อิโมจิ1ครั้ง ต้องเสียไอเทมอิโมจิ1ชิ้น",
STR_GOODS_DESC_404002: "อิโมจิ%dชิ้น ใช้อิโมจิต้องเสียไอเทม ทุกครั้งที่ใช้อิโมจิ1ครั้ง ต้องเสียไอเทมอิโมจิ1ชิ้น",
STR_GOODS_DESC_405001: "แว่นขยาย%dชิ้น หลังจากใช้แล้ว สามารถตรวจเช็คข้อมูลเกมส์ของผู้เล่นได้ ทุกครั้งที่ตรวจเช็คผู้เล่น1ชื่อ ต้องเสีย1ไอเทม มีผลต่อเนื่อง%dนาที",
STR_GOODS_DESC_406001: "เพิ่มไอเทมของภารกิจรางวัลชิป ทุกภารกิจรางวัลชิปเปลี่ยนเป็น %sเท่า ต่อเนื่อง %dวัน ซื้อหลายครั้ง เวลาต่อเนื่องยาวขึ้น",
STR_GOODS_DESC_407001: "ไอเทมอัพเกรดจำนวนเพื่อน เริ่มต้นจำกัดที่เพื่อน%dคน ทุกการมีสมุดรายชื่อ1ชิ้น ขีดจำกัดอัพเป็น%dคน ซื้อได้มากสุด%dชิ้น ราคาเปลี่ยนตามจำนวนที่ซื้อ",
STR_GOODS_DESC_408001: "ไอเทมอัพเกรดจำนวนรูปภาพ เริ่มต้นจำกัดรูปภาพ%dรูป ทุกการมีอัลบัมรูป1ชิ้น ขีดจำกัดอัพเป็น%dรูป ซื้อได้มากสุด%dชิ้น ราคาเปลี่ยนตามจำนวนที่ซื้อ",
STR_QUEST_DESC_101101: "เล่นไพ่ครบ 3รอบ",
STR_QUEST_DESC_101201: "เล่นเกมส์ 5นาที",
STR_QUEST_DESC_102101: "ชนะ 2รอบ",
STR_QUEST_DESC_102201: "ในช่วงPreflopชนะ 3ครั้ง",
STR_QUEST_DESC_102301: "หงายไพ่ชนะ 2ครั้ง",
STR_QUEST_DESC_103101: "ชิปชนะ(ยังไงเก็บค่าต๋ง)\nคือชิปที่ลงในรอบนี้เพิ่ม\n5เท่าขึ้นไป 1ครั้ง",
STR_QUEST_DESC_104101: "รอบที่มีชิปกองกลาง\nมากกว่า4 ชนะชิป\nทั้งหมด 1ครั้ง",
STR_QUEST_DESC_105101: "หลังจาก ALL In\nชนะไพ่ 3ครั้ง",
STR_QUEST_DESC_106101: "5คนหรือมากกว่าALL IN\nและชนะในที่สุด 1ครั้ง",
STR_QUEST_DESC_107101: "ตอนหงายไพ่ ใช้ไพ่\nรอยัลสเตรทฟลัช\nชนะ 1รอบ",
STR_QUEST_DESC_108101: "ตอนหงายไพ่ ใช้ไพ่สูง\nชนะ 1ครั้ง",
STR_QUEST_DESC_108201: "ตอนหงายไพ่ ใช้ไพ่1คู่\nชนะ 1ครั้ง",
STR_QUEST_DESC_108301: "ตอนหงายไพ่ ใช้ไพ่2คู่\nชนะ 1ครั้ง",
STR_QUEST_DESC_108401: "ตอนหงายไพ่ ใช้\nไพ่ตองชนะ 1ครั้ง",
STR_QUEST_DESC_108501: "ตอนหงายไพ่ ใช้\nไพ่สเตรทชนะ 1ครั้ง",
STR_QUEST_DESC_108601: "ตอนหงายไพ่ ใช้\nไพ่ฟลัชชนะ 1ครั้ง",
STR_QUEST_DESC_108701: "ตอนหงายไพ่ ใช้ไพ่\nฟูลเฮ้าท์ชนะ 1ครั้ง",
STR_QUEST_DESC_109101: "พูดคุย (รวมทั้งอิโมจิ\nแชท สนทนา) 20ครั้ง",
STR_QUEST_DESC_110101: "คอมเม้นต์รูปภาพ\nผู้เล่น 5ครั้ง",
STR_QUEST_DESC_101102: "เล่นไพ่ครบ 10รอบ",
STR_QUEST_DESC_101202: "เวลาเล่นเกมส์ผ่าน 15นาที",
STR_QUEST_DESC_102102: "ชนะ 5รอบ",
STR_QUEST_DESC_102202: "ในช่วงPreflopชนะ 9ครั้ง",
STR_QUEST_DESC_102302: "หงายไพ่ชนะ 5ครั้ง",
STR_QUEST_DESC_103102: "ชิปชนะ(ยังไงเก็บค่าต๋ง)\nคือชิปที่ลงในรอบนี้เพิ่ม\n5เท่าขึ้นไป 3ครั้ง",
STR_QUEST_DESC_104102: "รอบที่มีชิปกองกลาง\nมากกว่า4 ชนะชิป\nทั้งหมด 2ครั้ง",
STR_QUEST_DESC_105102: "หลังจาก ALL In\nชนะไพ่ 9ครั้ง",
STR_QUEST_DESC_106102: "5คนหรือมากกว่าALL IN\nและชนะในที่สุด 2ครั้ง",
STR_QUEST_DESC_107102: "ตอนหงายไพ่ ใช้รูปแบบ\nไพ่เหมือนกันชนะ\nผู้เล่นคนอื่น 2ครั้ง",
STR_QUEST_DESC_108102: "ตอนหงายไพ่ ใช้ไพ่สูง\nชนะ 2ครั้ง",
STR_QUEST_DESC_108202: "ตอนหงายไพ่ ใช้ไพ่1คู่\nชนะ 2ครั้ง",
STR_QUEST_DESC_108302: "ตอนหงายไพ่ ใช้ไพ่2คู่\nชนะ 2ครั้ง",
STR_QUEST_DESC_108402: "ตอนหงายไพ่ ใช้\nไพ่ตองชนะ 2ครั้ง",
STR_QUEST_DESC_108502: "ตอนหงายไพ่ ใช้\nไพ่สเตรทชนะ 2ครั้ง",
STR_QUEST_DESC_108602: "ตอนหงายไพ่ ใช้\nไพ่ฟลัชชนะ 2ครั้ง",
STR_QUEST_DESC_108702: "ตอนหงายไพ่ ใช้\nไพ่ฟูลเฮ้าท์ชนะ 2ครั้ง",
STR_QUEST_DESC_109102: "พูดคุย (รวมทั้งอิโมจิ\nแชท สนทนา) 50ครั้ง",
STR_QUEST_DESC_110102: "คอมเม้นต์รูปภาพ\nผู้เล่น 25ครั้ง",
STR_QUEST_DESC_101103: "เล่นไพ่ครบ 30รอบ",
STR_QUEST_DESC_101203: "เวลาเล่นเกมส์ผ่าน 30นาที",
STR_QUEST_DESC_102103: "ชนะ 10รอบ",
STR_QUEST_DESC_102203: "หลังแจกไพ่ชนะ 15ครั้ง",
STR_QUEST_DESC_102303: "หงายไพ่ชนะ 10ครั้ง",
STR_QUEST_DESC_103103: "ชิปชนะ(ยังไงเก็บค่าต๋ง)\nคือชิปที่ลงในรอบนี้เพิ่ม\n5เท่าขึ้นไป 1ครั้ง",
STR_QUEST_DESC_104103: "รอบที่มีชิปกองกลาง\nมากกว่า4 ชนะชิป\nทั้งหมด 3ครั้ง",
STR_QUEST_DESC_105103: "หลังจาก ALL In\nชนะไพ่ 15ครั้ง",
STR_QUEST_DESC_106103: "5คนหรือมากกว่าALL IN\nและชนะในที่สุด 3ครั้ง",
STR_QUEST_DESC_107103: "ตอนหงายไพ่ ใช้รูปแบบ\nไพ่เหมือนกันชนะผู้เล่น\nคนอื่น 3ครั้ง",
STR_QUEST_DESC_108103: "ตอนหงายไพ่ ใช้ไพ่สูง\nชนะ 3ครั้ง",
STR_QUEST_DESC_108203: "ตอนหงายไพ่ ใช้ไพ่1คู่\nชนะ 3ครั้ง",
STR_QUEST_DESC_108303: "ตอนหงายไพ่ ใช้ไพ่2คู่\nชนะ 3ครั้ง",
STR_QUEST_DESC_108403: "ตอนหงายไพ่ ใช้\nไพ่ตองชนะ 3ครั้ง",
STR_QUEST_DESC_108503: "ตอนหงายไพ่ ใช้ไพ่\nสเตรทชนะ 3ครั้ง",
STR_QUEST_DESC_108603: "ตอนหงายไพ่ ใช้ไพ่\nฟลัชชนะ 3ครั้ง",
STR_QUEST_DESC_108703: "ตอนหงายไพ่ ใช้ไพ่\nฟูลเฮ้าท์ชนะ 3ครั้ง",
STR_QUEST_DESC_109103: "พูดคุย (รวมทั้งอิโมจิ\nแชท สนทนา) 100ครั้ง",
STR_QUEST_DESC_110103: "คอมเม้นต์รูปภาพ\nผู้เล่น 50ครั้ง",
STR_ACHIVEVMENT_DESC_201001: "อัพเลเวลถึง 5",
STR_ACHIVEVMENT_DESC_201002: "อัพเลเวลถึง 10",
STR_ACHIVEVMENT_DESC_201003: "อัพเลเวลถึง 20",
STR_ACHIVEVMENT_DESC_201004: "อัพเลเวลถึง 35",
STR_ACHIVEVMENT_DESC_201005: "อัพเลเวลถึง 50",
STR_ACHIVEVMENT_DESC_202001: "ทรัพย์สินรวม 1ล้าน",
STR_ACHIVEVMENT_DESC_202002: "ทรัพย์สินรวม 10ล้าน",
STR_ACHIVEVMENT_DESC_202003: "ทรัพย์สินรวม 100ล้าน",
STR_ACHIVEVMENT_DESC_202004: "ทรัพย์สินรวม 1000ล้าน",
STR_ACHIVEVMENT_DESC_202005: "ทรัพย์สินรวม\n10000ล้าน",
STR_ACHIVEVMENT_DESC_203001: "เล่นไพ่ครบ 50รอบ",
STR_ACHIVEVMENT_DESC_203002: "เล่นไพ่ครบ 500รอบ",
STR_ACHIVEVMENT_DESC_203003: "เล่นไพ่ครบ 2500รอบ",
STR_ACHIVEVMENT_DESC_203004: "เล่นไพ่ครบ 10000รอบ",
STR_ACHIVEVMENT_DESC_203005: "เล่นไพ่ครบ 25000รอบ",
STR_ACHIVEVMENT_DESC_203006: "เล่นไพ่ครบ 50000รอบ",
STR_ACHIVEVMENT_DESC_203007: "เล่นไพ่ครบ 100000รอบ",
STR_ACHIVEVMENT_DESC_204001: "ชนะ 10รอบ",
STR_ACHIVEVMENT_DESC_204002: "ชนะ 100รอบ",
STR_ACHIVEVMENT_DESC_204003: "ชนะ 500รอบ",
STR_ACHIVEVMENT_DESC_204004: "ชนะ 2000รอบ",
STR_ACHIVEVMENT_DESC_204005: "ชนะ 5000รอบ",
STR_ACHIVEVMENT_DESC_204006: "ชนะ 10000รอบ",
STR_ACHIVEVMENT_DESC_204007: "ชนะ 20000รอบ",
STR_ACHIVEVMENT_DESC_205001: "ในช่วงPreflop\nชนะ 5รอบ",
STR_ACHIVEVMENT_DESC_205002: "ในช่วงPreflop\nชนะ 50รอบ",
STR_ACHIVEVMENT_DESC_205003: "ในช่วงPreflop\nชนะ 500รอบ",
STR_ACHIVEVMENT_DESC_205004: "ในช่วงPreflop\nชนะ 2500รอบ",
STR_ACHIVEVMENT_DESC_205005: "ในช่วงPreflop\nชนะ 10000รอบ",
STR_ACHIVEVMENT_DESC_206001: "หลังจาก ALL In\nชนะไพ่ 5รอบ",
STR_ACHIVEVMENT_DESC_206002: "หลังจาก ALL In\nชนะไพ่ 50รอบ",
STR_ACHIVEVMENT_DESC_206003: "หลังจาก ALL In\nชนะไพ่ 500รอบ",
STR_ACHIVEVMENT_DESC_206004: "หลังจาก ALL In\nชนะไพ่ 2500รอบ",
STR_ACHIVEVMENT_DESC_206005: "หลังจาก ALL In\nชนะไพ่ 10000รอบ",
STR_ACHIVEVMENT_DESC_207001: "ตอนหงายไพ่ ใช้ไพ่สูง\nชนะ 5รอบ",
STR_ACHIVEVMENT_DESC_207002: "ตอนหงายไพ่ ใช้ไพ่สูง\nชนะ 50รอบ",
STR_ACHIVEVMENT_DESC_207003: "ตอนหงายไพ่ ใช้ไพ่สูง\nชนะ 250รอบ",
STR_ACHIVEVMENT_DESC_207004: "ตอนหงายไพ่ ใช้ไพ่สูง\nชนะ 1000รอบ",
STR_ACHIVEVMENT_DESC_207005: "ตอนหงายไพ่ ใช้ไพ่สูง\nชนะ 3000รอบ",
STR_ACHIVEVMENT_DESC_208001: "ตอนหงายไพ่ ใช้ไพ่1คู่\nชนะ 5รอบ",
STR_ACHIVEVMENT_DESC_208002: "ตอนหงายไพ่ ใช้ไพ่1คู่\nชนะ 50รอบ",
STR_ACHIVEVMENT_DESC_208003: "ตอนหงายไพ่ ใช้ไพ่1คู่\nชนะ 500รอบ",
STR_ACHIVEVMENT_DESC_208004: "ตอนหงายไพ่ ใช้ไพ่1คู่\nชนะ 2000รอบ",
STR_ACHIVEVMENT_DESC_208005: "ตอนหงายไพ่ ใช้ไพ่1คู่\nชนะ 5000รอบ",
STR_ACHIVEVMENT_DESC_209001: "ตอนหงายไพ่ ใช้ไพ่2คู่\nชนะ 5รอบ",
STR_ACHIVEVMENT_DESC_209002: "ตอนหงายไพ่ ใช้ไพ่2คู่\nชนะ 50รอบ",
STR_ACHIVEVMENT_DESC_209003: "ตอนหงายไพ่ ใช้ไพ่2คู่\nชนะ 500รอบ",
STR_ACHIVEVMENT_DESC_209004: "ตอนหงายไพ่ ใช้ไพ่2คู่\nชนะ 2000รอบ",
STR_ACHIVEVMENT_DESC_209005: "ตอนหงายไพ่ ใช้ไพ่2คู่\nชนะ 5000รอบ",
STR_ACHIVEVMENT_DESC_210001: "ตอนหงายไพ่ ใช้\nไพ่ตองชนะ 5รอบ",
STR_ACHIVEVMENT_DESC_210002: "ตอนหงายไพ่ ใช้\nไพ่ตองชนะ 50รอบ",
STR_ACHIVEVMENT_DESC_210003: "ตอนหงายไพ่ ใช้\nไพ่ตองชนะ 500รอบ",
STR_ACHIVEVMENT_DESC_210004: "ตอนหงายไพ่ ใช้\nไพ่ตองชนะ 2000รอบ",
STR_ACHIVEVMENT_DESC_210005: "ตอนหงายไพ่ ใช้\nไพ่ตองชนะ 5000รอบ",
STR_ACHIVEVMENT_DESC_211001: "ตอนหงายไพ่ ใช้\nไพ่สเตรทชนะ 5รอบ",
STR_ACHIVEVMENT_DESC_211002: "ตอนหงายไพ่ ใช้\nไพ่สเตรทชนะ 50รอบ",
STR_ACHIVEVMENT_DESC_211003: "ตอนหงายไพ่ ใช้\nไพ่สเตรทชนะ 500รอบ",
STR_ACHIVEVMENT_DESC_211004: "ตอนหงายไพ่ ใช้\nไพ่สเตรทชนะ 2000รอบ",
STR_ACHIVEVMENT_DESC_211005: "ตอนหงายไพ่ ใช้\nไพ่สเตรทชนะ 5000รอบ",
STR_ACHIVEVMENT_DESC_212001: "ตอนหงายไพ่ ใช้\nไพ่ฟลัชชนะ 5รอบ",
STR_ACHIVEVMENT_DESC_212002: "ตอนหงายไพ่ ใช้\nไพ่ฟลัชชนะ 50รอบ",
STR_ACHIVEVMENT_DESC_212003: "ตอนหงายไพ่ ใช้\nไพ่ฟลัชชนะ 250รอบ",
STR_ACHIVEVMENT_DESC_212004: "ตอนหงายไพ่ ใช้\nไพ่ฟลัชชนะ 1000รอบ",
STR_ACHIVEVMENT_DESC_212005: "ตอนหงายไพ่ ใช้\nไพ่ฟลัชชนะ 3000รอบ",
STR_ACHIVEVMENT_DESC_213001: "ตอนหงายไพ่ ใช้\nไพ่ฟูลเฮ้าท์ชนะ 3รอบ",
STR_ACHIVEVMENT_DESC_213002: "ตอนหงายไพ่ ใช้\nไพ่ฟูลเฮ้าท์ชนะ 30รอบ",
STR_ACHIVEVMENT_DESC_213003: "ตอนหงายไพ่ ใช้\nไพ่ฟูลเฮ้าท์ชนะ 200รอบ",
STR_ACHIVEVMENT_DESC_213004: "ตอนหงายไพ่ ใช้\nไพ่ฟูลเฮ้าท์ชนะ 500รอบ",
STR_ACHIVEVMENT_DESC_213005: "ตอนหงายไพ่ ใช้\nไพ่ฟูลเฮ้าท์ชนะ 1000รอบ",
STR_ACHIVEVMENT_DESC_214001: "ตอนหงายไพ่ ใช้\nไพ่โฟร์การ์ดชนะ 2รอบ",
STR_ACHIVEVMENT_DESC_214002: "ตอนหงายไพ่ ใช้\nไพ่โฟร์การ์ดชนะ 10รอบ",
STR_ACHIVEVMENT_DESC_214003: "ตอนหงายไพ่ ใช้\nไพ่โฟร์การ์ดชนะ 50รอบ",
STR_ACHIVEVMENT_DESC_214004: "ตอนหงายไพ่ ใช้\nไพ่โฟร์การ์ดชนะ 200รอบ",
STR_ACHIVEVMENT_DESC_214005: "ตอนหงายไพ่ ใช้\nไพ่โฟร์การ์ดชนะ 500รอบ",
STR_ACHIVEVMENT_DESC_215001: "ตอนหงายไพ่ ได้รับ\nไพ่โฟร์การ์ดทุกเลข\nเริ่มA-K",
STR_ACHIVEVMENT_DESC_216001: "ตอนหงายไพ่ ใช้\nไพ่ฟลัชชนะ 1รอบ",
STR_ACHIVEVMENT_DESC_216002: "ตอนหงายไพ่ ใช้\nไพ่ฟลัชชนะ 5รอบ",
STR_ACHIVEVMENT_DESC_216003: "ตอนหงายไพ่ ใช้\nไพ่ฟลัชชนะ 20รอบ",
STR_ACHIVEVMENT_DESC_216004: "ตอนหงายไพ่ ใช้\nไพ่ฟลัชชนะ 50รอบ",
STR_ACHIVEVMENT_DESC_216005: "ตอนหงายไพ่ ใช้\nไพ่ฟลัชชนะ 100รอบ",
STR_ACHIVEVMENT_DESC_217001: "ตอนหงายไพ่ ใช้\nไพ่รอยัลสเตรทฟลัช\nชนะ 1รอบ",
STR_ACHIVEVMENT_DESC_217002: "ตอนหงายไพ่ ใช้\nไพ่รอยัลสเตรทฟลัช\nชนะ 2รอบ",
STR_ACHIVEVMENT_DESC_217003: "ตอนหงายไพ่ ใช้\nไพ่รอยัลสเตรทฟลัช\nชนะ 5รอบ",
STR_ACHIVEVMENT_DESC_217004: "ตอนหงายไพ่ ใช้\nไพ่รอยัลสเตรทฟลัช\nชนะ 10รอบ",
STR_ACHIVEVMENT_DESC_217005: "ตอนหงายไพ่ ใช้\nไพ่รอยัลสเตรทฟลัช\nชนะ 20รอบ",
STR_ACHIVEVMENT_DESC_218001: "ได้รับไพ่รอยัลสเตรทฟลัช\nทุกดอกและสี",
STR_ACHIVEVMENT_DESC_219001: "ใช้สนทนาเสียง 20ครั้ง",
STR_ACHIVEVMENT_DESC_219002: "ใช้สนทนาเสียง 100ครั้ง",
STR_ACHIVEVMENT_DESC_219003: "ใช้สนทนาเสียง 500ครั้ง",
STR_ACHIVEVMENT_DESC_219004: "ใช้สนทนาเสียง 2500ครั้ง",
STR_ACHIVEVMENT_DESC_219005: "ใช้สนทนาเสียง 10000ครั้ง",
STR_ACHIVEVMENT_DESC_220001: "ใช้อิโมจิ 50ครั้ง",
STR_ACHIVEVMENT_DESC_220002: "ใช้อิโมจิ 250ครั้ง",
STR_ACHIVEVMENT_DESC_220003: "ใช้อิโมจิ 1000ครั้ง",
STR_ACHIVEVMENT_DESC_220004: "ใช้อิโมจิ 5000ครั้ง",
STR_ACHIVEVMENT_DESC_220005: "ใช้อิโมจิ 20000ครั้ง",
STR_ACHIVEVMENT_DESC_221001: "จำนวนเพื่อนถึง 5คน",
STR_ACHIVEVMENT_DESC_221002: "จำนวนเพื่อนถึง 20คน",
STR_ACHIVEVMENT_DESC_221003: "จำนวนเพื่อนถึง 50คน",
STR_ACHIVEVMENT_DESC_222001: "อัพโหลดรูป 1รูป",
STR_ACHIVEVMENT_DESC_222002: "อัพโหลดรูป 10รูป",
STR_ACHIVEVMENT_DESC_222003: "อัพโหลดรูป 100รูป",
STR_ACHIVEVMENT_DESC_223001: "ได้รับกดไลค์ 5ครั้ง",
STR_ACHIVEVMENT_DESC_223002: "ได้รับกดไลค์ 50ครั้ง",
STR_ACHIVEVMENT_DESC_223003: "ได้รับกดไลค์ 500ครั้ง",
STR_ACHIVEVMENT_DESC_224001: "ให้ไลค์ 5ครั้ง",
STR_ACHIVEVMENT_DESC_224002: "ให้ไลค์ 50ครั้ง",
STR_ACHIVEVMENT_DESC_224003: "ให้ไลค์ 500ครั้ง",
STR_ACHIVEVMENT_DESC_225001: "รูปของตัวเองได้รับ\nคอมเม้นต์ 10ครั้ง",
STR_ACHIVEVMENT_DESC_225002: "รูปของตัวเองได้รับ\nคอมเม้นต์ 100ครั้ง",
STR_ACHIVEVMENT_DESC_225003: "รูปของตัวเองได้รับ\nคอมเม้นต์ 1000ครั้ง",
STR_ACHIVEVMENT_DESC_226001: "คอมเม้นต์รูป\nคนอื่น 10ครั้ง",
STR_ACHIVEVMENT_DESC_226002: "คอมเม้นต์รูป\nคนอื่น 100ครั้ง",
STR_ACHIVEVMENT_DESC_226003: "คอมเม้นต์รูป\nคนอื่น 1000ครั้ง",
STR_ACHIVEVMENT_DESC_227001: "เสร็จ 5ภารกิจ",
STR_ACHIVEVMENT_DESC_227002: "เสร็จ 50ภารกิจ",
STR_ACHIVEVMENT_DESC_227003: "เสร็จ 500ภารกิจ",
STR_ACHIVEVMENT_DESC_227004: "เสร็จ 2500ภารกิจ",
STR_ACHIVEVMENT_DESC_227005: "เสร็จ 10000ภารกิจ",
STR_ACHIVEVMENT_DESC_228001: "แลกไอเทม 5ครั้ง",
STR_ACHIVEVMENT_DESC_228002: "แลกไอเทม 50ครั้ง",
STR_ACHIVEVMENT_DESC_228003: "แลกไอเทม 500ครั้ง",
STR_ACHIVEVMENT_DESC_229001: "ให้ชิปผู้เล่นคนอื่น\nบนโต๊ะไพ่ 10ครั้ง",
STR_ACHIVEVMENT_DESC_229002: "ให้ชิปผู้เล่นคนอื่น\nบนโต๊ะไพ่ 100ครั้ง",
STR_ACHIVEVMENT_DESC_229003: "ให้ชิปผู้เล่นคนอื่น\nบนโต๊ะไพ่ 1000ครั้ง",
STR_ACHIVEVMENT_DESC_230001: "ส่งชิปฟรีให้เพื่อน 10ครั้ง",
STR_ACHIVEVMENT_DESC_230002: "ส่งชิปฟรีให้เพื่อน 100ครั้ง",
STR_ACHIVEVMENT_DESC_230003: "ส่งชิปฟรีให้เพื่อน 1000ครั้ง",
STR_ACHIVEVMENT_DESC_231001: "ได้รับชิปฟรีรวมถึง100000",
STR_ACHIVEVMENT_DESC_231002: "ได้รับชิปฟรีรวมถึง250000",
STR_ACHIVEVMENT_DESC_231003: "ได้รับชิปฟรีรวมถึง 1ล้าน",
STR_ACHIVEVMENT_DESC_232001: "จำนวนวันล็อกอิน\nสะสมติดถึง 5วัน",
STR_ACHIVEVMENT_DESC_232002: "จำนวนวันล็อกอิน\nสะสมติดถึง 25วัน",
STR_ACHIVEVMENT_DESC_232003: "จำนวนวันล็อกอิน\nสะสมติดถึง 100วัน",
STR_ACHIVEVMENT_DESC_232004: "จำนวนวันล็อกอิน\nสะสมติดถึง 250วัน",
STR_ACHIVEVMENT_DESC_232005: "จำนวนวันล็อกอิน\nสะสมติดถึง 500วัน",
STR_LOGIN_VERSION: "เวอร์ชั่น：",
STR_INFORMATION_PERSONAL_SIGNATURE_DEFAULT: "ผู้เล่นคนนี้ยังไม่ได้เขียนข้อความใดๆ เลย อยากให้คนติดตามเยอะๆ ไหม？\nเขียนสเตตัสสักหน่อยนะ",
STR_MESS_EVALUATION_TITLE: "ขอบคุณสำหรับการให้คะแนน",
STR_MESS_EVALUATION_CONTENT: "เพราะว่าคุณได้ให้การสนับสนุนและให้คะแนนเกมส์ของเราระบบได้ส่ง%d เป็นชิปรางวัลให้คุณ กรุณากดรับด่วน"
};
cc._RF.pop();
}, {} ],
use_reversed_rotateBy: [ function(e, _, t) {
"use strict";
cc._RF.push(_, "a261fWUgbhIiYQZHN4wUmEx", "use_reversed_rotateBy");
cc.RotateBy._reverse = !0;
cc._RF.pop();
}, {} ],
xxtea: [ function(e, _, t) {
"use strict";
cc._RF.push(_, "639b6ohfOFGqbHyT0ZVfBTi", "xxtea");
var T = e("buffer").Buffer, S = 2654435769;
function n(e, _) {
var t = e.length, T = t << 2;
if (_) {
var S = e[t - 1];
if (S < (T -= 4) - 3 || S > T) return null;
T = S;
}
for (var n = new Uint8Array(T), i = 0; i < T; ++i) n[i] = e[i >> 2] >> ((3 & i) << 3);
return n;
}
function i(e, _) {
var t, T = e.length, S = T >> 2;
0 != (3 & T) && ++S;
_ ? (t = new Uint32Array(S + 1))[S] = T : t = new Uint32Array(S);
for (var n = 0; n < T; ++n) t[n >> 2] |= e[n] << ((3 & n) << 3);
return t;
}
function o(e, _, t, T, S, n) {
return (t >>> 5 ^ _ << 2) + (_ >>> 3 ^ t << 4) ^ (e ^ _) + (n[3 & T ^ S] ^ t);
}
function E(e) {
if (e.length < 16) {
var _ = new Uint8Array(16);
_.set(e);
e = _;
}
return e;
}
function R(e, _) {
var t, T, n, i, E, R, r = e.length, s = r - 1;
T = e[s];
n = 0;
for (R = 0 | Math.floor(6 + 52 / r); R > 0; --R) {
i = (n += S) >>> 2 & 3;
for (E = 0; E < s; ++E) {
t = e[E + 1];
T = e[E] += o(n, t, T, E, i, _);
}
t = e[0];
T = e[s] += o(n, t, T, E, i, _);
}
return e;
}
function r(e, _) {
var t, T, n, i, E, R = e.length, r = R - 1;
t = e[0];
for (n = Math.floor(6 + 52 / R) * S; 0 !== n; n -= S) {
i = n >>> 2 & 3;
for (E = r; E > 0; --E) {
T = e[E - 1];
t = e[E] -= o(n, t, T, E, i, _);
}
T = e[r];
t = e[0] -= o(n, t, T, E, i, _);
}
return e;
}
function s(e) {
for (var _ = e.length, t = new Uint8Array(3 * _), T = 0, S = 0; S < _; S++) {
var n = e.charCodeAt(S);
if (n < 128) t[T++] = n; else if (n < 2048) {
t[T++] = 192 | n >> 6;
t[T++] = 128 | 63 & n;
} else {
if (!(n < 55296 || n > 57343)) {
if (S + 1 < _) {
var i = e.charCodeAt(S + 1);
if (n < 56320 && 56320 <= i && i <= 57343) {
var o = 65536 + ((1023 & n) << 10 | 1023 & i);
t[T++] = 240 | o >> 18;
t[T++] = 128 | o >> 12 & 63;
t[T++] = 128 | o >> 6 & 63;
t[T++] = 128 | 63 & o;
S++;
continue;
}
}
throw new Error("Malformed string");
}
t[T++] = 224 | n >> 12;
t[T++] = 128 | n >> 6 & 63;
t[T++] = 128 | 63 & n;
}
}
return t.subarray(0, T);
}
function I(e, _) {
for (var t = new Uint16Array(_), T = 0, S = 0, n = e.length; T < _ && S < n; T++) {
var i = e[S++];
switch (i >> 4) {
case 0:
case 1:
case 2:
case 3:
case 4:
case 5:
case 6:
case 7:
t[T] = i;
break;

case 12:
case 13:
if (!(S < n)) throw new Error("Unfinished UTF-8 octet sequence");
t[T] = (31 & i) << 6 | 63 & e[S++];
break;

case 14:
if (!(S + 1 < n)) throw new Error("Unfinished UTF-8 octet sequence");
t[T] = (15 & i) << 12 | (63 & e[S++]) << 6 | 63 & e[S++];
break;

case 15:
if (!(S + 2 < n)) throw new Error("Unfinished UTF-8 octet sequence");
var o = ((7 & i) << 18 | (63 & e[S++]) << 12 | (63 & e[S++]) << 6 | 63 & e[S++]) - 65536;
if (!(0 <= o && o <= 1048575)) throw new Error("Character outside valid Unicode range: 0x" + o.toString(16));
t[T++] = o >> 10 & 1023 | 55296;
t[T] = 1023 & o | 56320;
break;

default:
throw new Error("Bad UTF-8 encoding 0x" + i.toString(16));
}
}
T < _ && (t = t.subarray(0, T));
return String.fromCharCode.apply(String, t);
}
function a(e, _) {
for (var t = [], T = new Uint16Array(32768), S = 0, n = 0, i = e.length; S < _ && n < i; S++) {
var o = e[n++];
switch (o >> 4) {
case 0:
case 1:
case 2:
case 3:
case 4:
case 5:
case 6:
case 7:
T[S] = o;
break;

case 12:
case 13:
if (!(n < i)) throw new Error("Unfinished UTF-8 octet sequence");
T[S] = (31 & o) << 6 | 63 & e[n++];
break;

case 14:
if (!(n + 1 < i)) throw new Error("Unfinished UTF-8 octet sequence");
T[S] = (15 & o) << 12 | (63 & e[n++]) << 6 | 63 & e[n++];
break;

case 15:
if (!(n + 2 < i)) throw new Error("Unfinished UTF-8 octet sequence");
var E = ((7 & o) << 18 | (63 & e[n++]) << 12 | (63 & e[n++]) << 6 | 63 & e[n++]) - 65536;
if (!(0 <= E && E <= 1048575)) throw new Error("Character outside valid Unicode range: 0x" + E.toString(16));
T[S++] = E >> 10 & 1023 | 55296;
T[S] = 1023 & E | 56320;
break;

default:
throw new Error("Bad UTF-8 encoding 0x" + o.toString(16));
}
if (S >= 32766) {
var R = S + 1;
t.push(String.fromCharCode.apply(String, T.subarray(0, R)));
_ -= R;
S = -1;
}
}
S > 0 && t.push(String.fromCharCode.apply(String, T.subarray(0, S)));
return t.join("");
}
function c(e) {
var _ = e.length;
return 0 === _ ? "" : _ < 32767 ? I(e, _) : a(e, _);
}
function N(e, _) {
"string" == typeof e && (e = s(e));
"string" == typeof _ && (_ = s(_));
return void 0 === e || null === e || 0 === e.length ? e : n(R(i(e, !0), i(E(_), !1)), !1);
}
function C(e, _) {
"string" == typeof e && (e = new T(e, "base64"));
"string" == typeof _ && (_ = s(_));
return void 0 === e || null === e || 0 === e.length ? e : n(r(i(e, !1), i(E(_), !1)), !0);
}
_.exports = Object.create(null, {
toBytes: {
value: s
},
toString: {
value: c
},
encrypt: {
value: N
},
encryptToString: {
value: function(e, _) {
return new T(N(e, _)).toString("base64");
}
},
decrypt: {
value: C
},
decryptToString: {
value: function(e, _) {
return c(C(e, _));
}
}
});
cc._RF.pop();
}, {
buffer: 2
} ],
zh: [ function(e, _, t) {
"use strict";
cc._RF.push(_, "a6b10GfdmNMvoO9FiRQgmv1", "zh");
_.exports = {
STR_COREPLAY_BUTTON_FOLD: "弃牌",
STR_COREPLAY_BUTTON_CHECK: "看牌",
STR_COREPLAY_BUTTON_CALL: "跟注 %s",
STR_COREPLAY_BUTTON_RAISE: "加注",
STR_COREPLAY_BUTTON_CONFIRM: "确定",
STR_COREPLAY_BUTTON_ALLIN: "全下",
STR_COREPLAY_BUTTON_PREP_CHECKORFOLD: "看/弃",
STR_COREPLAY_BUTTON_PREP_AUTOCHECK: "看牌",
STR_COREPLAY_BUTTON_PREP_CALL: "跟注 %s",
STR_COREPLAY_BUTTON_PREP_CALLANY: "跟任何注",
STR_INFORMATION_TILLE_1: "个人信息",
STR_INFORMATION_TILLE_2: "道具清单",
STR_INFORMATION_TILLE_3: "快捷文字",
STR_INFORMATION_TILLE_4: "快捷语音",
STR_INFORMATION_TILLE_5: "数据统计",
STR_INFORMATION_PERSONAL_LV: "等级",
STR_INFORMATION_PERSONAL_ID: "ID",
STR_INFORMATION_PERSONAL_NAME: "昵称",
STR_INFORMATION_PERSONAL_MALE: "男性",
STR_INFORMATION_PERSONAL_FEMALE: "女性",
STR_INFORMATION_PERSONAL_ADDRESS: "地址",
STR_INFORMATION_PERSONAL_ADDRESS_NULL: "未知",
STR_INFORMATION_PERSONAL_SIGNATURE: "签名",
STR_INFORMATION_PERSONAL_PHOTO_DEFAULT: "上传一张新照片",
STR_INFORMATION_PERSONAL_PHOTO_INREVIEW: "审核中",
STR_INFORMATION_ITEMLIST_TIME: "天",
STR_INFORMATION_ITEMLIST_TIME_HOUR: "小时",
STR_INFORMATION_QUICKCHAT_WORDS: "快捷文字 %d",
STR_INFORMATION_QUICKCHAT_WORDS_DEFAULT_1: "游戏开始了，我已经准备好赢钱了",
STR_INFORMATION_QUICKCHAT_WORDS_DEFAULT_2: "不要耽误时间了，赶快下注吧",
STR_INFORMATION_QUICKCHAT_WORDS_DEFAULT_3: "手牌这么好，看来这局是我赢了。",
STR_INFORMATION_QUICKCHAT_WORDS_DEFAULT_4: "让我all-in，怕的人就赶快弃牌吧。",
STR_INFORMATION_QUICKCHAT_WORDS_DEFAULT_5: "虽然这局我赢了，但是我依然不会手下留情的",
STR_INFORMATION_QUICKCHAT_WORDS_DEFAULT_6: "弃牌也未必代表我输了,让我先休息一下。",
STR_INFORMATION_QUICKCHAT_WORDS_DEFAULT_7: "你牌打得真好，连我都忍不住要称赞你了",
STR_INFORMATION_QUICKCHAT_WORDS_DEFAULT_8: "居然有这种事，简直不能相信",
STR_INFORMATION_QUICKCHAT_WORDS_DEFAULT_9: "这一局我没认真玩，下次不会输了。",
STR_INFORMATION_QUICKCHAT_WORDS_DEFAULT_10: "我大发慈悲的离开了，你们就庆幸吧。",
STR_INFORMATION_QUICKCHAT_WORDS_DEFAULT_NULL: "点击此处输入您的快捷文字",
STR_INFORMATION_QUICKCHAT_VOICE: "快捷语音 %d",
STR_INFORMATION_QUICKCHAT_VOICE_DEFAULT: "长按此处进行录音",
STR_INFORMATION_QUICKCHAT_VOICE_ENTERTITLE: "点击此处输入标题",
STR_INFORMATION_QUICKCHAT_VOICE_RECORDING: "正在录入",
STR_INFORMATION_STATISTICS_ID: "ID:",
STR_INFORMATION_STATISTICS_GAMES: "游戏局数:",
STR_INFORMATION_STATISTICS_WINS: "获胜局数",
STR_INFORMATION_STATISTICS_LOSE: "失败局数",
STR_INFORMATION_STATISTICS_WINRATE: "胜率:",
STR_INFORMATION_STATISTICS_SHOWINRIVER: "亮牌率:",
STR_INFORMATION_STATISTICS_FOLDINPREFLOP: "首轮弃牌率:",
STR_INFORMATION_STATISTICS_ALLININPREFLOP: "首轮全下率:",
STR_INFORMATION_STATISTICS_HIGHESTCHIP: "历史最多筹码:",
STR_INFORMATION_STATISTICS_MOSTWIN: "最大赢取:",
STR_INFORMATION_STATISTICS_BESTCARDS: "最大牌型:",
STR_INFORMATION_STATISTICS_GIVECHIPTOFRIEND: "赠送好友免费筹码次数:",
STR_INFORMATION_STATISTICS_GIVECHIPTOFRIEND_TIMES: "次",
STR_INFORMATION_STATISTICS_GIVECHIPINGAME: "赠送玩家筹码次数:",
STR_INFORMATION_STATISTICS_GIVECHIPINGAME_TIMES: "次",
STR_INFORMATION_ITEMLIST_ITEM_TITLE: "您拥有的：",
STR_INFORMATION_ITEMLIST_PATCH_TITLE: "您可兑换：",
STR_RANKING_TITLE_MAIN: "排行版",
STR_RANKING_TITLE_1: "总筹码",
STR_RANKING_TITLE_2: "单词赢取倍率",
STR_RANKING_TITLE_3: "筹码波动",
STR_RANKING_TITLE_4: "今日赢取",
STR_RANKING_TITLE_5: "互动",
STR_RANKING_GMT_GMT: "格林威治时间",
STR_RANKING_GMT_EXPLAIN: "游戏服务器采用格林威治时间为标准。此处显示的是格林威治时间，请各位玩家注意。",
STR_RANKING_TOP_TOP: "前列",
STR_RANKING_RANKING_NOPLAYER: "排行榜上没有玩家",
STR_CHAT_EXPRESSION_TITLE: "表情",
STR_CHAT_QUICKWORDS_TITLE: "快捷文字",
STR_CHAT_QUICKVOICES_TITLE: "快捷语音",
STR_CHAT_INPUT_DEFAULT: "点击此处输入您的文字",
STR_CHAT_INPUT_DEFAULT_IOS: "点击此处输入您的文字",
STR_CHAT_QUICKVOICE_NOVICE: "没有快捷语音",
STR_CHAT_QUICKVOICE_NOTITLE: "没有输入描述",
STR_TABLEBOARD_CAHT_NOQUICKVOICE: "您目前还没有预先录入的快捷语音。",
STR_TABLEBOARD_CHAT_NOQUICKTEXT: "您目前还没有预先输入的快捷文字。",
STR_TABLEBOARD_RECORDING_COUNTDOWN: "剩余%d 秒",
STR_FRIENDS_TITLE: "您的好友",
STR_FRIENDS_NOFRIENDS: "您目前还没有好友。点击右上角的搜索按键，您可以通过玩家昵称找到相应的玩家。在牌桌界面和主界面上点击玩家头像，点击加好友按键也能轻松的发送好友申请，快去尝试下吧。",
STR_FRIENDS_FRIENDS_UPDATE: "优先显示更新了照片的好友",
STR_FRIENDS_FRIENDS_OL: "优先显示在线的好友",
STR_FRIENDS_FRIENDS_ACTIVE: "优先显示较活跃的好友",
STR_FRIENDS_FRIENDS_MAX: "MAX",
STR_FRIENDS_FRIENDS_INFORMATION_LV: "等级:",
STR_FRIENDS_FRIENDS_INFORMATION_MALE: "男性",
STR_FRIENDS_FRIENDS_INFORMATION_FEMALE: "女性",
STR_FRIENDS_FRIENDS_INFORMATION_ADDRESS: "地址",
STR_FRIENDS_FRIENDS_INFORMATION_DEFAULT: "显示您给予了该玩家多少赞，评论和免费筹码赠送次数",
STR_FRIENDS_FRIENDS_INFORMATION_NOPHOTO: "该玩家没有上传任何照片",
STR_FRIENDS_FRIENDS_INFORMATION_GAMES: "游戏",
STR_FRIENDS_FRIENDS_INFORMATION_WIN: "胜利",
STR_FRIENDS_FRIENDS_INFORMATION_LOSE: "失败",
STR_FRIENDS_FRIENDS_INFORMATION_WINRATE: "胜率:",
STR_FRIENDS_FRIENDS_INFORMATION_SHOWINRIVER: "亮牌率:",
STR_FRIENDS_FRIENDS_INFORMATION_FOLDINPREFLOP: "首轮弃牌率:",
STR_FRIENDS_FRIENDS_INFORMATION_ALLININPREFLOP: "首轮全下率:",
STR_FRIENDS_FRIENDS_INFORMATION_HIGHESTCHIP: "历史最多筹码:",
STR_FRIENDS_FRIENDS_INFORMATION_MOSTWIN: "最大赢取:",
STR_FRIENDS_FRIENDS_INFORMATION_BESTCARDS: "最大牌型:",
STR_FRIENDS_FRIENDS_SEARCHTITLE: "搜索到的好友",
STR_FRIENDS_FRIENDS_SEARCHTIPS: "请至少输入四个字符来搜索昵称",
STR_FRIENDS_FRIENDS_SEARCH: "根据玩家昵称找到了 %d 个玩家。最多能显示 %d 个相关玩家。",
STR_LOGIN_PHONELOGIN: "手机登录",
STR_LOGIN_ACCOUNTLOGIN: "账号登陆",
STR_LOGIN_FACEBOOKLOGIN: "Facebook登陆",
STR_LOGIN_GUESTLOGIN: "游客登陆",
STR_LOGIN_ACCOUNTLOGIN_ACCOUNT: "输入您的邮箱",
STR_LOGIN_ACCOUNTLOGIN_PASSWORD: "输入您的密码",
STR_LOGIN_ACCOUNTLOGIN_AUTOLOGIN: "自动登录",
STR_LOGIN_ACCOUNTLOGIN_RETRIEVEPASSWORD: "找回密码",
STR_LOGIN_ACCOUNTLOGIN_LOGIN: "登录",
STR_LOGIN_ACCOUNTLOGIN_REGISTER: "注册",
STR_LOGIN_ACCOUNTLOGIN_REGISTERACCOUNT: "请输入您的邮箱",
STR_LOGIN_ACCOUNTLOGIN_REGISTERENTERPASSWORD: "请输入密码",
STR_LOGIN_ACCOUNTLOGIN_REGISTERCONFRIMPASSWORD: "请确认密码",
STR_LOGIN_ACCOUNTLOGIN_REGISTERREGISTER: "注册",
STR_LOGIN_ACCOUNTLOGIN_RETRIEVEPASSWORD_EXPLAIN: "如果你想找回密码，请输入你注册账号时所使用的邮箱，我们会将密码找回邮件发送至该邮箱中。",
STR_LOGIN_ACCOUNTLOGIN_RETRIEVEPASSWORD_ENTER: "请输入你的注册邮箱",
STR_LOGIN_ACCOUNTLOGIN_RETRIEVEPASSWORD_SENDEMAIL: "发送邮件",
STR_LOGIN_TERMSOFSERVICE: "用户协议",
STR_LOBBY_TITLE: "房间",
STR_LOBBY_ID: "房间ID",
STR_LOBBY_BLIND: "盲注 %s/%s",
STR_LOBBY_5PLAYERS: "5人场",
STR_LOBBY_9PLAYERS: "9人场",
STR_LOBBY_FULL: "满房间",
STR_LOBBY_EMPTY: "空房间",
STR_SIT_ROOMID: "房间ID %d",
STR_SIT_BLIND: "大小盲注 %s/%s",
STR_SIT_MINBLIND: "最小带入",
STR_SIT_MAXBLIND: "最大带入",
STR_SIT_AUTOSIT: "筹码不足时自动带入筹码并坐下",
STR_SIT_LEAVE: "离开",
STR_SIT_SIT: "坐下",
STR_SIT_NOCHIP: "筹码不足",
STR_SIT_SHOP: "商店",
STR_INVITE_TITLE: "和您的朋友一起玩",
STR_INVITE_BUTTON: "邀请到牌桌",
STR_INVITE_NOFRIEND: "很遗憾，您还没有任何好友。快去和其他玩家交友吧。",
STR_INVITE_UNKNOWN: "地址未知",
STR_MES_FRIEND_TITLE: "好友消息",
STR_MES_SYSTEM_TITLE: "系统消息",
STR_MES_ADDFRIEND_RCCEIVE: "%s 想要和您成为好友。请问你要同意吗？",
STR_MES_ADDFRIEND_AGREE: "恭喜！%s 已经通过了您的好友申请，您可以在好友界面找到他。",
STR_MES_ADDFRIEND_YOUAGREE: "您通过了 %s 的好友申请，您可以在好友界面找到他。",
STR_MES_CHIPS_GIVE: "%s 赠送给您 %d 免费筹码，快来接受吧。",
STR_MES_CHIPS_RECEIVE: "您接受了来自 %s 的 %d 免费筹码。",
STR_MES_MESSAGE_NULL: "目前为止没有消息。",
STR_MES_MONTH_JAN: "一月",
STR_MES_MONTH_FEB: "二月",
STR_MES_MONTH_MAR: "三月",
STR_MES_MONTH_APR: "四月",
STR_MES_MONTH_MAY: "五月",
STR_MES_MONTH_JUN: "六月",
STR_MES_MONTH_JUL: "七月",
STR_MES_MONTH_AUG: "八月",
STR_MES_MONTH_SEP: "九月",
STR_MES_MONTH_OCT: "十月",
STR_MES_MONTH_NOV: "十一月",
STR_MES_MONTH_DEC: "十二月",
STR_HOMESCREEN_OLPLAYER: "%s 玩家在线",
STR_HOMESCREEN_PHOTOUPLOAD: "你的好友 %s 更新了照片",
STR_HOMESCREEN_NOUPLOAD: "没有好友更新照片",
STR_EVENT_BACK: "返回",
STR_ANNOUNCEMENT_TITLE: "公告",
STR_PLAYER_INF_NAME: "姓名",
STR_PLAYER_INF_TITLE_PHOTO: "照片",
STR_PLAYER_INF_TITLE_ACHIEVEMENTS: "成就",
STR_PLAYER_INF_LV: "等级",
STR_PLAYER_INF_MALE: "男性",
STR_PLAYER_INF_FEMALE: "女性",
STR_PLAYER_INF_ADDRESS: "地址",
STR_PLAYER_INF_BUTTON_BLOCK: "点击这里屏蔽玩家",
STR_PLAYER_INF_BLOCKBUTTON: "屏蔽",
STR_PLAYER_INF_BUTTON_UNLOCK: "点击这里解除屏蔽",
STR_PLAYER_INF_UNLOCKBUTTON: "解除屏蔽",
STR_PLAYER_INF_BUTTON_REPORT: "点击这里举报玩家头像",
STR_PLAYER_INF_REPORTBUTTON: "举报",
STR_PLAYER_INF_BLOCK: "屏蔽后，你将不会再收到任何来自该玩家的文字，语音或表情。您确定要屏蔽这名玩家吗？",
STR_PLAYER_INF_UNBLOCK: "解除对该玩家的屏蔽后，你可以再次收到来自该玩家的文字，语音或表情。",
STR_PLAYER_INF_REPORT: "有多名玩家举报此头像后，该头像将被屏蔽。我们将尽快进行审核。您确定要举报这个头像吗？",
STR_PLAYER_PHOTO_NULL: "该玩家并未上传任何照片。",
STR_CHECKPHOTO_NOAUTHORITY: "抱歉，由于该玩家的设置，您没有查看该玩家照片的权限。",
STR_PLAYER_PHOTO_CRITICTITLE: "评论",
STR_PLAYER_STATISTICS_GAMES: "游戏局数:",
STR_PLAYER_STATISTICS_WINS: "胜利",
STR_PLAYER_STATISTICS_LOSE: "失败",
STR_PLAYER_STATISTICS_WINRATE: "胜率:",
STR_PLAYER_STATISTICS_SHOWINRIVER: "亮牌率:",
STR_PLAYER_STATISTICS_FOLDINPREFLOP: "首轮弃牌率:",
STR_PLAYER_STATISTICS_ALLININPREFLOP: "首轮全下率:",
STR_PLAYER_STATISTICS_HIGHESTCHIPS: "历史最多筹码:",
STR_PLAYER_STATISTICS_MOSTWIN: "最大赢取:",
STR_PLAYER_STATISTICS_BTESTCARD: "最大牌型:",
STR_PLAYER_STATISTICS_MINS: "%s 分钟",
STR_PLAYER_ACHIEVEMENT_NULL: "该玩家还没有获得任何成就。",
STR_LOGINREWARD_TITLE: "连续登陆奖励",
STR_LOGINREWARD_DAY: "第 %d 天",
STR_LOGINREWARD_RECEIVED: "已经领取",
STR_LOGINREWARD_TIPS: "如果你您保持连续登陆，您将获得更丰厚的奖励。",
STR_LOGINREWARD_SUCCESS: "恭喜你领取了每日登录奖励 %d %s。",
STR_ABOUTUS_STAFF: "Poker Royal Texas Hold'em Staff List\n\n\nGameDesinger\n\nStone\nJohn Smith\n\n\nProgrammer\n\nJack\nWillian\nHaven \nSpiro\nBob\nRussell\n\n\nArtDesinger\n\nPantheon\nEmma\nMandy\n\n\nGameTester\n\nJoffence\nDoris\n\n\nSpecial Thanks\n\nChris\nAlex\nMatata\nBlank",
STR_BUTTON_YES: "是",
STR_BUTTON_NO: "否",
STR_BUTTON_OK: "确定",
STR_BUTTON_IGNORE: "忽略",
STR_BUTTON_AGREE: "同意",
STR_OPTIONS_TITLE: "设置",
STR_OPTIONS_VOICE: "语音",
STR_OPTIONS_SOUND: "音效",
STR_OPTIONS_AUTOSIT: "自动坐下",
STR_OPTIONS_VIBRATION: "震动",
STR_OPTIONS_FOLLOW: "允许好友跟踪",
STR_OPTIONS_INVITE: "接受邀请信息",
STR_OPTIONS_SEEPHOTOS: "谁能查看我的照片",
STR_OPTIONS_CHOSEN_YES: "是",
STR_OPTIONS_CHOSEN_NO: "否",
STR_OPTIONS_SEEPHOTOS_FRIEND: "仅仅好友可查看",
STR_OPTIONS_SEEPHOTOS_NOONE: "所有人都无法查看",
STR_OPTIONS_SEEPHOTOS_ANYONE: "任何人都可查看",
STR_OPTIONS_RATE: "评价游戏",
STR_OPTIONS_CACHE: "清除缓存",
STR_OPTIONS_CACHE_CONFIRM: "清除缓存将会删除您已经下载的头像，照片。您确定要清除缓存吗？",
STR_OPTIONS_CACHE_CLEARED: "缓存已经清理成功。",
STR_OPTIONS_ABOUT: "关于我们",
STR_OPTIONS_REPORT: "报告问题",
STR_OPTIONS_FOLLOWUS: "关注我们",
STR_OPTIONS_CONTACT: "联系我们",
STR_LOADING_1: "把你的朋友带到游戏中来，但也别忘了在现实中和他们一起玩。",
STR_LOADING_2: "与他人交流时请务必保持礼貌，在尊重别人的同时，你会得到他人的尊重。",
STR_LOADING_3: "永远不要尝试在牌桌上调戏荷官，不论他们有多英俊或者多性感。",
STR_LOADING_4: "如果在你在游戏中感受到了挫折，不要气馁，生活并没有抛弃你。",
STR_LOADING_5: "做任何事情都要适度，包括玩皇家德州扑克哦。",
STR_LOADING_6: "请记得每天打开好友信息，点击赠送筹码按键向好友赠送免费筹码。",
STR_LOADING_7: "轮到自己时，点击左下的筹码，可以快速选择加注金额。",
STR_LOADING_8: "在牌桌上查看玩家详情的时候再次点击玩家头像，就可以屏蔽烦人的玩家欧。",
STR_LOADING_9: "如果要和玩家私聊，请记得使用玩家详细信息界面的语音按键。",
STR_LOADING_10: "请不要忘记查看活动欧，说不定会有惊喜的。",
STR_LOADING_11: "保持连续登录，能够获得最好的奖励。",
STR_LOADING_END: "随时保持一颗平常心，胜利不要兴奋，失败也不要沮丧。",
STR_TABLEBOARD_ID: "房间ID %d 大小盲注 %s/%s",
STR_CARDTYPE_HIGH_CARD: "高牌",
STR_CARDTYPE_PAIR_CARD: "一对",
STR_CARDTYPE_TWO_PAIRS_CARD: "两对",
STR_CARDTYPE_THREE_CARD: "三条",
STR_CARDTYPE_STRAIGHT: "顺子",
STR_CARDTYPE_FLUSH: "同花",
STR_CARDTYPE_FULL_HOUSE: "葫芦",
STR_CARDTYPE_FOUR_OF_A_KIND: "四条",
STR_CARDTYPE_STRAIGHT_FLUSH: "同花顺",
STR_CARDTYPE_ROYAL_FLUSH: "皇家同花顺",
STR_TABLEBOARD_EXP: "经验",
STR_QUESTS_TITLE: "任务",
STR_QUESTS_RECEIVEBUTTON: "领取",
STR_ACHIEVEMENTS_TITLE: "成就",
STR_LVUP_TITLE: "恭喜",
STR_LVUP_TEXT: "恭喜您成功升至%d级，并且获得了%s的奖励筹码。",
STR_SHOP_TITLE: "商店",
STR_SHOP_BUTTON: "购买",
STR_ALMS_TITLE: "复活",
STR_ALMS_TEXT: "尊敬的玩家，由于您当前的钻石与筹码数过少，系统为您发放 %s 筹码。您今日还能领取 %d 次的救济金。",
STR_BUG_REPORT: "点击提交问题",
STR_BUG_INPUT: "请输入您要提交的问题",
STR_BUG_TIP: "您的问题已经提交服务器。我们的客服将尽快解答您的疑问",
STR_BUG_TIME: "提交时间",
STR_BUG_WAIT: "等待客服回复",
STR_BUG_RESPONSETIME: "回复时间",
STR_BUG_DELTIP: "您确定要删除这个问题吗?",
STR_BUG_VIEW: "查看详情",
STR_BUG_COMMIT: "提交",
STR_BUG_DELTIPDONE: "删除成功",
STR_BUG_DELTIPFAIL: "删除失败",
STR_BUG_COMMIT_TIP: "提交失败",
STR_POKER_ROOM_BET: "赌注 %s/%s",
STR_POKERTABLEBOARD_ID: "房间ID%d最小/最大 赌注%s%s",
STR_POKER_PRE_BET: "赌注",
STR_POKER_TYPE_POK9: "Pok9",
STR_POKER_TYPE_POK8: "Pok8",
STR_POKER_TYPE_TONG: "三条",
STR_POKER_TYPE_SAM_LUEANG: "三公",
STR_POKER_TYPE_STRAIGHT_FLUSH: "同花顺",
STR_POKER_TYPE_STRAIGHT: "顺子",
STR_POKER_TYPE_SCORE_0: "Score 0",
STR_POKER_TYPE_SCORE_1: "Score 1",
STR_POKER_TYPE_SCORE_2: "Score 2",
STR_POKER_TYPE_SCORE_3: "Score 3",
STR_POKER_TYPE_SCORE_4: "Score 4",
STR_POKER_TYPE_SCORE_5: "Score 5",
STR_POKER_TYPE_SCORE_6: "Score 6",
STR_POKER_TYPE_SCORE_7: "Score 7",
STR_POKER_TYPE_SCORE_8: "Score 8",
STR_POKER_TYPE_SCORE_0_9: "Score 0-9",
STR_POKER_TYPE_SCORE_9: "Score 9",
STR_POKER_INTRUUCE: "牌型说明",
STR_POKER_INTRUUCE1: "牌力大小由上至下排序",
STR_POKER_INTRUUCE2: "这些牌为0点",
STR_POKER_INTRUUCE3: "这些牌为1-9点",
STR_POKER_INTRUUCE4: "所有手牌点数相加，取个位数",
STR_POKER_INTRUUCE5: "2张初始牌为9点",
STR_POKER_INTRUUCE6: "2张初始牌为8点",
STR_POKER_INTRUUCE7: "KA2、A23不是顺子",
STR_POKER_INTRUUCE8: "牌型的赔率倍数",
STR_POKER_INTRUUCE9: "2张同花",
STR_POKER_INTRUUCE10: "3张同花",
STR_POKER_INTRUUCE11: "本局游戏结束后，将离开座位",
STR_POKER_INTRUUCE12: "本局游戏结束后，将离开座位并退出房间",
STR_WIN_STREAK: "连胜:",
STR_PLAYER: "玩家",
STR_DEAR: "庄家",
STR_GAME_GOTODEAR: "点击上庄",
STR_CHIP_NOT_ENOUGH: "筹码不足,至少%s筹码才能上庄,是否去商店？",
STR_POKERTABLEBOARD_ID1: "最小/最大 赌注%s/%s",
STR_GAME_GOTODEAR_1: "上庄成功，需要连续坐庄5场才能离座",
STR_GAME_GOTODEAR_2: "一位玩家上庄成功",
STR_STATIC_BIGWIN: "最大赢取:",
STR_CARDTYPE100: "3卡组 JQK",
STR_CARDTYPE101: "同花顺",
STR_CARDTYPE102: "一对",
STR_CARDTYPE103: "顺子",
STR_CARDTYPE104: "3张牌是顺序",
STR_ADDFRIEND_ONESELF: "您的好友数目已经达到了上限。您可以去商城购买通讯录来提升好友上限。",
STR_ADDFRIEND_OTHERS: "很遗憾，对方玩家的好友数目已经达到上限了。您现在无法把他加为好友。",
STR_MESSRECEIVE_UNDONE: "该消息中附带的所有物品已经被您领取过了。",
STR_LOGIN_WORNING: "您的账号已经被冻结。如果您有任何疑问，请发送邮件到我们的客服邮箱。",
STR_LOGIN_INFO_ERROR: "您输入的账号或密码有错误。请检查后重新输入。",
STR_LOGIN_INFO_NULL: "登录账号或密码不能为空，请输入。",
STR_LOGIN_EMALL_REGISTERED: "您输入的邮箱地址已经被注册。请重新输入可使用的邮箱地址。",
STR_LOGIN_EMAIL_ERROR: "您输入的邮箱格式有错误。请检查后重新输入。",
STR_LOGIN_PASSWORD_SHORT: "账号密码要求6-16位英文字母或数字。请重新输入您的密码。",
STR_LOGIN_PASSWORD_DIFFERENT: "您两次输入的密码不一致。请检查后重新输入。",
STR_LOGIN_PASSWORD_CHARACTER: "账号密码中不能包含除了英文字母和数字外的其他字符。请重新输入您的密码。",
STR_LOGIN_REGISTER_SUCCESS: "恭喜您成功注册了皇家德州扑克的账号。赶快点击OK来加入游戏吧！",
STR_LOGIN_RETRIEVE_SUCCESS: "密码找回邮件已经发送，请到您的邮箱中查收。如未收到，请稍等片刻再次查看。",
STR_LOGIN_RETRIEVE_FAIL: "您输出的账号邮箱地址没有注册。请检查并重新输入已注册的邮箱地址。",
STR_MAIN_LOGOFF: "您确定要登出游戏吗？",
STR_MAIN_QUIT: "您确定要退出游戏吗？",
STR_SHOP_CHIP: "您的筹码不足，想去商城买点筹码吗？",
STR_SHOP_DIAMOND: "您的钻石不足，想去商城买点钻石吗？",
STR_SHOP_BUYSUCCESSFUL: "您已经成功购买了商品 %s。",
STR_SHOP_REACHLIMIT: "您已经达到了该道具的购买上限。",
STR_SHOP_BUYFAIL: "抱歉，商品购买失败，请重试。",
STR_PLAYERSEARCH_SHORT: "搜索好友时请至少输入四个英文字符或数字。",
STR_PLAYERSEARCH_LONG: "搜索好友时至多只能输入十六个英文字符或数字。",
STR_FRIEND_HAVEADDED: "该玩家已经在你的好友名单里了。",
STR_FRIEND_LIMIT: "您的好友数量已经达到达到上限了。您可以去商城购买通讯录来提升好友上限。",
STR_FRIEND_FOLLOW: "您的好友 %s 正在注额 %d/%d 的房间中打牌。您确定跟踪他进入此房间吗？",
STR_FRIEND_DEL: "您确定要删除这名好友吗？",
STR_FRIEND_ADDYOURSELF: "您不能添加自身为好友。",
STR_PRESENT_NOTFRIEND: "只有好友之间才能赠送免费筹码。您和这位玩家还不是好友，无法赠送。",
STR_PRESENT_DONE: "今天您已经向这位好友赠送过免费筹码了。明天才可以再次赠送欧。",
STR_PERSONAL_NAME_SHORT: "您输入的昵称过短。请至少输入4个英文字母或数字。",
STR_PERSONAL_NAME_LONG: "您输入的昵称过长。最多能够输入16个英文字母或数字。",
STR_PERSONAL_NAME_REPEAK: "您输入的昵称和其他玩家的昵称重复了。请重新想个好昵称吧。",
STR_PERSONAL_NAME_ILLEGAL: "您输入的昵称中包含了违规字符。请只使用英文字母和数字。",
STR_PERSONAL_SIGNATURE_LONG: "您输入的签名过长。最多能够输入120个字符。",
STR_PERSONAL_RECORDING_SHORT: "您的录音时间过短。请多说点吧。",
STR_PERSONAL_QUICKVOICE_PLAY: "在语音播放时不能播放其他语音消息。",
STR_PERSONAL_QUICKVOICE_RECORD: "在语音播放时不能录入其他语音消息。",
STR_PERSONAL_QUICKVOICE_DEL: "您确定要删除这条快捷语音吗？",
STR_PERSONAL_PHOTO_DEL: "您确定要删除这张照片吗？",
STR_PERSONAL_PHOTO_LIMIT: "您的照片数目已经达到上限了。您可以去商城购买相册来提升照片上限。",
STR_PERSONAL_ACCOUNT_BINDING: "您输入的邮箱地址已经被注册。请重新输入可使用的邮箱地址。",
STR_PERSONAL_ITEMEXCHANGE_301002: "恭喜您，您已经成功兑换了%d个钻石，相应的碎片系统会自动扣除。",
STR_PERSONAL_ITEMEXCHANGE_302003: "恭喜您，您已经成功兑换了%d个放大镜，相应的碎片系统会自动扣除。",
STR_PERSONAL_ITEMEXCHANGE_302001: "恭喜您，您已经成功兑换了%d个麦克风到道具，相应的碎片会自动扣除。",
STR_PERSONAL_ITEMEXCHANGE_302002: "恭喜您，您已经成功兑换了%d个互动表情道具，相应的碎片会自动扣除。",
STR_PERSONAL_BINDIN: "请使用您的常用邮箱进行账号绑定。绑定后的账号能够在其他设备上游戏使用账号登录。",
STR_ITEM_TUREEYE_NULL: "您的放大镜数量不足，想要去商城购买一些吗？",
STR_REPORT_PHOTO_CONFRIM: "您确定要举报这张照片吗？有多名玩家举报此照片后，该照片将被屏蔽。我们将尽快进行审核。",
STR_REPORT_PHOTO_REPEAK: "您已经举报过这张照片。请不要重复举报。",
STR_SITDOWN_LIMIT: "此房间人数已满，无法进入。请选择其他有空位的房间。",
STR_SITDOWN_FULL: "这个房间没有空位。点击“YES”，系统将为您自动匹配到另一个新房间。点击“NO”，您将留在目前房间观战。",
STR_SITDOWN_REPEAK: "你已经在座位上了。",
STR_SITDOWN_NOTEMPTY: "您选择的座位已经被其他玩家占据了，请选择其他的空座位。",
STR_TABLE_RECORDIND_SHORT: "您录音的时间过短，请重新录音。",
STR_ITEM_VOICE_NULL: "您的麦克风不够了，想要去商城购买一些麦克风吗？",
STR_ITEM_VOICE_STAND: "您目前还未坐下，还不能够使用语音功能。",
STR_ITEM_CHAT_STAND: "您目前还未坐下，还不能发送文字和表情。",
STR_ITEM_EXPRESSION_NULL: "您的互动表情不够了，想要去商城购买一些互动表情吗？",
STR_TABLE_LEAVE_SEAT: "离开座位会让您失去已下注的筹码。您确定要现在离开座位吗？",
STR_TABLE_LEAVE_ROOM: "离开房间会让您失去已下注的筹码。您确定要现在离开房间吗？",
STR_INVITE_RECEIVE: "玩家 %s 邀请您参加牌局，点击确认。",
STR_INVITE_CONFRIM: "玩家 %s 邀请您参加他的牌局。房间ID %d，大小盲注 %s / %s。你确定要加入牌局吗？",
STR_INVITE_CONFRIM1: "玩家 %s 邀请您参加他的牌局。房间ID %d，赌注 %s / %s。你确定要加入牌局吗？",
STR_INVITE_SAMEROOM: "您和该玩家已经在同一房间中了。",
STR_MISSION_COMPLETE: "您完成了一个任务，快去领取奖励吧。",
STR_MUTE_ON: "您已成功开启静音功能。",
STR_MUTE_OFF: "您已成功关闭静音功能。",
STR_EQUIPMENT_MICROPHONE: "启动麦克风功能失败，请允许本游戏使用手机麦克风功能。请检查手机设置。",
STR_ACHIEVEMENT_SUCCESS: "恭喜！您成功领取了成就奖励 %d %s.",
STR_LOGIN_OTHERDEVICES: "您的账号已经在其他地方登录了。请检查您的账号密码安全，以避免损失。如果您有任何疑问，请发送邮件到我们的客服邮箱。",
STR_NETWORK_REQUEST: "发生错误%d, 网络请求失败。请检查您的网络环境，并稍后尝试。",
STR_NETWORK_ERROR_CHECK: "网络发生错误,连接断开。请检查您的设备或网络设置.",
STR_UNKNOWN_ERROR: "发生未知错误，游戏无法正常进行。您可以通过我们的客服邮箱告知我们错误情况。",
STR_ERROR_DATA: "出现数据错误，请退回至登陆界面重新登录游戏。",
STR_EVALUATION_TEXT: "尊敬的玩家，您现在可以对我们的游戏进行评价了，进行评价后您将会获得奖励。请问是否跳转至相关页面？",
STR_GOOGLEPLAY_ERROR_1: "进行购买操作时所需的一项或多项 Google Play 服务目前无法使用。",
STR_GOOGLEPLAY_ERROR_2: "更新Google Play服务后才能进行购买。",
STR_GOOGLEPLAY_ERROR_3: "您的手机中没有Google Play服务，您必须先安装该服务才能进行购买。",
STR_GOOGLEPLAY_ERROR_4: "您必须先启用Google Play服务才能进行购买。",
STR_ITEM_NAME_301001: "筹码",
STR_ITEM_NAME_301002: "钻石",
STR_ITEM_NAME_302001: "麦克风",
STR_ITEM_NAME_302002: "互动表情",
STR_ITEM_NAME_302003: "放大镜",
STR_ITEM_NAME_303001: "金筹码",
STR_ITEM_NAME_304001: "通讯录",
STR_ITEM_NAME_304002: "相册",
STR_ITEM_DESC_301001: "表示玩家的筹码个数，财富衡量单位",
STR_ITEM_DESC_301002: "表示玩家的钻石个数，财富衡量单位",
STR_ITEM_DESC_302001: "使用语音功能需要消耗的道具，每使用1次语音消耗1个。",
STR_ITEM_DESC_302002: "使用互动表情需要消耗的道具，每使用1次互动表情消耗1个。",
STR_ITEM_DESC_302003: "使用后可以查看玩家的游戏数据，每查看1名玩家消耗1个，效果持续 %d 分钟。",
STR_ITEM_DESC_303001: "增加任务筹码奖励的道具，所有任务的筹码奖励变为 %s 倍，持续 %d 天。",
STR_ITEM_DESC_304001: "提升好友数量上限的道具。初始上限为 %d 个好友。每拥有1个通讯录，上限提升 %d 个。",
STR_ITEM_DESC_304002: "提升照片数量上限的道具。初始上限为 %d 张照片。每拥有1个相册，上限提升 %d 个。",
STR_GOODS_NAME_401001: "%d 钻石包",
STR_GOODS_NAME_401002: "%d 钻石包",
STR_GOODS_NAME_401003: "%d 钻石包",
STR_GOODS_NAME_401004: "%d 钻石包",
STR_GOODS_NAME_402001: "%d 筹码包",
STR_GOODS_NAME_402002: "%d 筹码包",
STR_GOODS_NAME_402003: "%d 筹码包",
STR_GOODS_NAME_402004: "%d 筹码包",
STR_GOODS_NAME_403001: "%d 麦克风包",
STR_GOODS_NAME_403002: "%d 麦克风包",
STR_GOODS_NAME_404001: "%d 表情包",
STR_GOODS_NAME_404002: "%d 表情包",
STR_GOODS_NAME_405001: "%d 放大镜包",
STR_GOODS_NAME_406001: "金筹码",
STR_GOODS_NAME_407001: "通讯录",
STR_GOODS_NAME_408001: "相册",
STR_GOODS_DESC_401001: "%d 个钻石",
STR_GOODS_DESC_401002: "%d 个钻石",
STR_GOODS_DESC_401003: "%d 个钻石",
STR_GOODS_DESC_401004: "%d 个钻石",
STR_GOODS_DESC_402001: "%d 个筹码",
STR_GOODS_DESC_402002: "%d 个筹码",
STR_GOODS_DESC_402003: "%d 个筹码",
STR_GOODS_DESC_402004: "%d 个筹码",
STR_GOODS_DESC_403001: "%d 个麦克风。使用语音功能需要消耗的道具，每使用1次语音消耗1个。",
STR_GOODS_DESC_403002: "%d 个麦克风。使用语音功能需要消耗的道具，每使用1次语音消耗1个。",
STR_GOODS_DESC_404001: "%d 个互动表情。使用互动表情需要消耗的道具，每使用1次互动表情消耗1个。",
STR_GOODS_DESC_404002: "%d 个互动表情。使用互动表情需要消耗的道具，每使用1次互动表情消耗1个。",
STR_GOODS_DESC_405001: "%d 个放大镜。使用后可以查看玩家的游戏数据，每查看1名玩家消耗1个，效果持续 %d 分钟。",
STR_GOODS_DESC_406001: "增加任务筹码奖励的道具，所有任务的筹码奖励变为 %d 倍，持续 %d 天。多次购买，持续时间加长。",
STR_GOODS_DESC_407001: "提升好友数量上限的道具。初始上限为 %d 个好友。每拥有1个通讯录，上限提升 %d 个。最多购买 %d个，价格根据购买数变化。",
STR_GOODS_DESC_408001: "提升照片数量上限的道具。初始上限为 %d 张照片。每拥有1个相册，上限提升 %d 个。最多购买 %d个，价格根据购买数变化",
STR_QUEST_DESC_101101: "完成3盘牌局",
STR_QUEST_DESC_101201: "游戏时间经过5分钟",
STR_QUEST_DESC_102101: "赢得2盘牌局",
STR_QUEST_DESC_102201: "在Preflop圈就赢得牌局3次",
STR_QUEST_DESC_102301: "亮牌赢得牌局2次",
STR_QUEST_DESC_103101: "赢取的筹码（未抽成前）是本局投入筹码的5倍以上,1次",
STR_QUEST_DESC_104101: "在4个奖池以上的牌局中赢的全部奖池，1次",
STR_QUEST_DESC_105101: "ALL IN后赢得牌局3次",
STR_QUEST_DESC_106101: "5人及其以上ALL IN，并最终赢得牌局,1次",
STR_QUEST_DESC_107101: "亮牌时，以同样的牌型击败其他玩家，1次",
STR_QUEST_DESC_108101: "亮牌时，以高牌牌型赢得1次牌局",
STR_QUEST_DESC_108201: "亮牌时，以一对牌型赢得1次牌局",
STR_QUEST_DESC_108301: "亮牌时，以两对牌型赢得1次牌局",
STR_QUEST_DESC_108401: "亮牌时，以三条牌型赢得1次牌局",
STR_QUEST_DESC_108501: "亮牌时，以顺子牌型赢得1次牌局",
STR_QUEST_DESC_108601: "亮牌时，以同花牌型赢得1次牌局",
STR_QUEST_DESC_108701: "亮牌时，以葫芦牌型赢得1次牌局",
STR_QUEST_DESC_109101: "聊天（包括表情，文字，互动表情，语音）20次",
STR_QUEST_DESC_110101: "评论玩家的照片5次",
STR_QUEST_DESC_101102: "完成10盘牌局",
STR_QUEST_DESC_101202: "游戏时间经过15分钟",
STR_QUEST_DESC_102102: "赢得5盘牌局",
STR_QUEST_DESC_102202: "在Preflop圈就赢得牌局9次",
STR_QUEST_DESC_102302: "亮牌赢得牌局5次",
STR_QUEST_DESC_103102: "赢取的筹码（未抽成前）是本局投入筹码的5倍以上,3次",
STR_QUEST_DESC_104102: "在4个奖池以上的牌局中赢的全部奖池，2次",
STR_QUEST_DESC_105102: "ALL IN后赢得牌局9次",
STR_QUEST_DESC_106102: "5人及其以上ALL IN，并最终赢得牌局,2次",
STR_QUEST_DESC_107102: "亮牌时，以同样的牌型击败其他玩家，2次",
STR_QUEST_DESC_108102: "亮牌时，以高牌牌型赢得2次牌局",
STR_QUEST_DESC_108202: "亮牌时，以一对牌型赢得2次牌局",
STR_QUEST_DESC_108302: "亮牌时，以两对牌型赢得2次牌局",
STR_QUEST_DESC_108402: "亮牌时，以三条牌型赢得2次牌局",
STR_QUEST_DESC_108502: "亮牌时，以顺子牌型赢得2次牌局",
STR_QUEST_DESC_108602: "亮牌时，以同花牌型赢得2次牌局",
STR_QUEST_DESC_108702: "亮牌时，以葫芦牌型赢得2次牌局",
STR_QUEST_DESC_109102: "聊天（包括表情，文字，互动表情，语音）50次",
STR_QUEST_DESC_110102: "评论玩家的照片25次",
STR_QUEST_DESC_101103: "完成30盘牌局",
STR_QUEST_DESC_101203: "游戏时间经过30分钟",
STR_QUEST_DESC_102103: "赢得10盘牌局",
STR_QUEST_DESC_102203: "在Preflop圈就赢得牌局15次",
STR_QUEST_DESC_102303: "亮牌赢得牌局10次",
STR_QUEST_DESC_103103: "赢取的筹码（未抽成前）是本局投入筹码的5倍以上,5次",
STR_QUEST_DESC_104103: "在4个奖池以上的牌局中赢的全部奖池，3次",
STR_QUEST_DESC_105103: "ALL IN后赢得牌局15次",
STR_QUEST_DESC_106103: "5人及其以上ALL IN，并最终赢得牌局,3次",
STR_QUEST_DESC_107103: "亮牌时，以同样的牌型击败其他玩家，3次",
STR_QUEST_DESC_108103: "亮牌时，以高牌牌型赢得3次牌局",
STR_QUEST_DESC_108203: "亮牌时，以一对牌型赢得3次牌局",
STR_QUEST_DESC_108303: "亮牌时，以两对牌型赢得3次牌局",
STR_QUEST_DESC_108403: "亮牌时，以三条牌型赢得3次牌局",
STR_QUEST_DESC_108503: "亮牌时，以顺子牌型赢得3次牌局",
STR_QUEST_DESC_108603: "亮牌时，以同花牌型赢得3次牌局",
STR_QUEST_DESC_108703: "亮牌时，以葫芦牌型赢得3次牌局",
STR_QUEST_DESC_109103: "聊天（包括表情，文字，互动表情，语音）100次",
STR_QUEST_DESC_110103: "评论玩家的照片50次",
STR_ACHIVEVMENT_DESC_201001: "等级达到5级",
STR_ACHIVEVMENT_DESC_201002: "等级达到10级",
STR_ACHIVEVMENT_DESC_201003: "等级达到20级",
STR_ACHIVEVMENT_DESC_201004: "等级达到35级",
STR_ACHIVEVMENT_DESC_201005: "等级达到50级",
STR_ACHIVEVMENT_DESC_202001: "资产总量达到100万",
STR_ACHIVEVMENT_DESC_202002: "资产总量达到1000万",
STR_ACHIVEVMENT_DESC_202003: "资产总量达到1亿",
STR_ACHIVEVMENT_DESC_202004: "资产总量达到10亿",
STR_ACHIVEVMENT_DESC_202005: "资产总量达到100亿",
STR_ACHIVEVMENT_DESC_203001: "完成50场牌局",
STR_ACHIVEVMENT_DESC_203002: "完成500场牌局",
STR_ACHIVEVMENT_DESC_203003: "完成2500场牌局",
STR_ACHIVEVMENT_DESC_203004: "完成10000场牌局",
STR_ACHIVEVMENT_DESC_203005: "完成25000场牌局",
STR_ACHIVEVMENT_DESC_203006: "完成50000场牌局",
STR_ACHIVEVMENT_DESC_203007: "完成100000场牌局",
STR_ACHIVEVMENT_DESC_204001: "赢得10次牌局",
STR_ACHIVEVMENT_DESC_204002: "赢得100次牌局",
STR_ACHIVEVMENT_DESC_204003: "赢得500次牌局",
STR_ACHIVEVMENT_DESC_204004: "赢得2000次牌局",
STR_ACHIVEVMENT_DESC_204005: "赢得5000次牌局",
STR_ACHIVEVMENT_DESC_204006: "赢得10000次牌局",
STR_ACHIVEVMENT_DESC_204007: "赢得20000次牌局",
STR_ACHIVEVMENT_DESC_205001: "在Preflop圈就赢的牌局达到5场",
STR_ACHIVEVMENT_DESC_205002: "在Preflop圈就赢的牌局达到50场",
STR_ACHIVEVMENT_DESC_205003: "在Preflop圈就赢的牌局达到500场",
STR_ACHIVEVMENT_DESC_205004: "在Preflop圈就赢的牌局达到2500场",
STR_ACHIVEVMENT_DESC_205005: "在Preflop圈就赢的牌局达到10000场",
STR_ACHIVEVMENT_DESC_206001: "ALL IN后并最终赢牌的牌局达到5场",
STR_ACHIVEVMENT_DESC_206002: "ALL IN后并最终赢牌的牌局达到50场",
STR_ACHIVEVMENT_DESC_206003: "ALL IN后并最终赢牌的牌局达到500场",
STR_ACHIVEVMENT_DESC_206004: "ALL IN后并最终赢牌的牌局达到2500场",
STR_ACHIVEVMENT_DESC_206005: "ALL IN后并最终赢牌的牌局达到10000场",
STR_ACHIVEVMENT_DESC_207001: "亮牌时，以高牌牌型赢得牌局达到5场",
STR_ACHIVEVMENT_DESC_207002: "亮牌时，以高牌牌型赢得牌局达到50场",
STR_ACHIVEVMENT_DESC_207003: "亮牌时，以高牌牌型赢得牌局达到250场",
STR_ACHIVEVMENT_DESC_207004: "亮牌时，以高牌牌型赢得牌局达到1000场",
STR_ACHIVEVMENT_DESC_207005: "亮牌时，以高牌牌型赢得牌局达到3000场",
STR_ACHIVEVMENT_DESC_208001: "亮牌时，以一对牌型赢得牌局达到5场",
STR_ACHIVEVMENT_DESC_208002: "亮牌时，以一对牌型赢得牌局达到50场",
STR_ACHIVEVMENT_DESC_208003: "亮牌时，以一对牌型赢得牌局达到500场",
STR_ACHIVEVMENT_DESC_208004: "亮牌时，以一对牌型赢得牌局达到2000场",
STR_ACHIVEVMENT_DESC_208005: "亮牌时，以一对牌型赢得牌局达到5000场",
STR_ACHIVEVMENT_DESC_209001: "亮牌时，以两对牌型赢得牌局达到5场",
STR_ACHIVEVMENT_DESC_209002: "亮牌时，以两对牌型赢得牌局达到50场",
STR_ACHIVEVMENT_DESC_209003: "亮牌时，以两对牌型赢得牌局达到500场",
STR_ACHIVEVMENT_DESC_209004: "亮牌时，以两对牌型赢得牌局达到2000场",
STR_ACHIVEVMENT_DESC_209005: "亮牌时，以两对牌型赢得牌局达到5000场",
STR_ACHIVEVMENT_DESC_210001: "亮牌时，以三条牌型赢得牌局达到5场",
STR_ACHIVEVMENT_DESC_210002: "亮牌时，以三条牌型赢得牌局达到50场",
STR_ACHIVEVMENT_DESC_210003: "亮牌时，以三条牌型赢得牌局达到500场",
STR_ACHIVEVMENT_DESC_210004: "亮牌时，以三条牌型赢得牌局达到2000场",
STR_ACHIVEVMENT_DESC_210005: "亮牌时，以三条牌型赢得牌局达到5000场",
STR_ACHIVEVMENT_DESC_211001: "亮牌时，以顺子牌型赢得牌局达到5场",
STR_ACHIVEVMENT_DESC_211002: "亮牌时，以顺子牌型赢得牌局达到50场",
STR_ACHIVEVMENT_DESC_211003: "亮牌时，以顺子牌型赢得牌局达到500场",
STR_ACHIVEVMENT_DESC_211004: "亮牌时，以顺子牌型赢得牌局达到2000场",
STR_ACHIVEVMENT_DESC_211005: "亮牌时，以顺子牌型赢得牌局达到5000场",
STR_ACHIVEVMENT_DESC_212001: "亮牌时，以同花牌型赢得牌局达到5场",
STR_ACHIVEVMENT_DESC_212002: "亮牌时，以同花牌型赢得牌局达到50场",
STR_ACHIVEVMENT_DESC_212003: "亮牌时，以同花牌型赢得牌局达到250场",
STR_ACHIVEVMENT_DESC_212004: "亮牌时，以同花牌型赢得牌局达到1000场",
STR_ACHIVEVMENT_DESC_212005: "亮牌时，以同花牌型赢得牌局达到3000场",
STR_ACHIVEVMENT_DESC_213001: "亮牌时，以葫芦牌型赢得牌局达到3场",
STR_ACHIVEVMENT_DESC_213002: "亮牌时，以葫芦牌型赢得牌局达到30场",
STR_ACHIVEVMENT_DESC_213003: "亮牌时，以葫芦牌型赢得牌局达到200场",
STR_ACHIVEVMENT_DESC_213004: "亮牌时，以葫芦牌型赢得牌局达到500场",
STR_ACHIVEVMENT_DESC_213005: "亮牌时，以葫芦牌型赢得牌局达到1000场",
STR_ACHIVEVMENT_DESC_214001: "亮牌时，以四条牌型赢得牌局达到2场",
STR_ACHIVEVMENT_DESC_214002: "亮牌时，以四条牌型赢得牌局达到10场",
STR_ACHIVEVMENT_DESC_214003: "亮牌时，以四条牌型赢得牌局达到50场",
STR_ACHIVEVMENT_DESC_214004: "亮牌时，以四条牌型赢得牌局达到200场",
STR_ACHIVEVMENT_DESC_214005: "亮牌时，以四条牌型赢得牌局达到500场",
STR_ACHIVEVMENT_DESC_215001: "亮牌时，获得过所有数字的四条，从A到K",
STR_ACHIVEVMENT_DESC_216001: "亮牌时，以同花顺牌型赢得牌局达到1场",
STR_ACHIVEVMENT_DESC_216002: "亮牌时，以同花顺牌型赢得牌局达到5场",
STR_ACHIVEVMENT_DESC_216003: "亮牌时，以同花顺牌型赢得牌局达到20场",
STR_ACHIVEVMENT_DESC_216004: "亮牌时，以同花顺牌型赢得牌局达到50场",
STR_ACHIVEVMENT_DESC_216005: "亮牌时，以同花顺牌型赢得牌局达到100场",
STR_ACHIVEVMENT_DESC_217001: "亮牌时，以皇家同花顺牌型赢得牌局达到1场",
STR_ACHIVEVMENT_DESC_217002: "亮牌时，以皇家同花顺牌型赢得牌局达到2场",
STR_ACHIVEVMENT_DESC_217003: "亮牌时，以皇家同花顺牌型赢得牌局达到5场",
STR_ACHIVEVMENT_DESC_217004: "亮牌时，以皇家同花顺牌型赢得牌局达到10场",
STR_ACHIVEVMENT_DESC_217005: "亮牌时，以皇家同花顺牌型赢得牌局达到20场",
STR_ACHIVEVMENT_DESC_218001: "获得所有花色的皇家同花顺",
STR_ACHIVEVMENT_DESC_219001: "使用20次语音",
STR_ACHIVEVMENT_DESC_219002: "使用100次语音",
STR_ACHIVEVMENT_DESC_219003: "使用500次语音",
STR_ACHIVEVMENT_DESC_219004: "使用2500次语音",
STR_ACHIVEVMENT_DESC_219005: "使用10000次语音",
STR_ACHIVEVMENT_DESC_220001: "使用50次互动表情",
STR_ACHIVEVMENT_DESC_220002: "使用250次互动表情",
STR_ACHIVEVMENT_DESC_220003: "使用1000次互动表情",
STR_ACHIVEVMENT_DESC_220004: "使用5000次互动表情",
STR_ACHIVEVMENT_DESC_220005: "使用20000次互动表情",
STR_ACHIVEVMENT_DESC_221001: "好友数量达到5人",
STR_ACHIVEVMENT_DESC_221002: "好友数量达到20人",
STR_ACHIVEVMENT_DESC_221003: "好友数量达到50人",
STR_ACHIVEVMENT_DESC_222001: "上传过1张照片",
STR_ACHIVEVMENT_DESC_222002: "上传过10张照片",
STR_ACHIVEVMENT_DESC_222003: "上传过100张照片",
STR_ACHIVEVMENT_DESC_223001: "得到5个赞",
STR_ACHIVEVMENT_DESC_223002: "得到50个赞",
STR_ACHIVEVMENT_DESC_223003: "得到500个赞",
STR_ACHIVEVMENT_DESC_224001: "送出5个赞",
STR_ACHIVEVMENT_DESC_224002: "送出50个赞",
STR_ACHIVEVMENT_DESC_224003: "送出500个赞",
STR_ACHIVEVMENT_DESC_225001: "自己的照片获得评论10次",
STR_ACHIVEVMENT_DESC_225002: "自己的照片获得评论100次",
STR_ACHIVEVMENT_DESC_225003: "自己的照片获得评论1000次",
STR_ACHIVEVMENT_DESC_226001: "评论其他人照片10次",
STR_ACHIVEVMENT_DESC_226002: "评论其他人照片100次",
STR_ACHIVEVMENT_DESC_226003: "评论其他人照片1000次",
STR_ACHIVEVMENT_DESC_227001: "完成5个任务",
STR_ACHIVEVMENT_DESC_227002: "完成50个任务",
STR_ACHIVEVMENT_DESC_227003: "完成500个任务",
STR_ACHIVEVMENT_DESC_227004: "完成2500个任务",
STR_ACHIVEVMENT_DESC_227005: "完成10000个任务",
STR_ACHIVEVMENT_DESC_228001: "兑换5次道具",
STR_ACHIVEVMENT_DESC_228002: "兑换50次道具",
STR_ACHIVEVMENT_DESC_228003: "兑换500次道具",
STR_ACHIVEVMENT_DESC_229001: "牌桌上赠送其他玩家筹码10次",
STR_ACHIVEVMENT_DESC_229002: "牌桌上赠送其他玩家筹码100次",
STR_ACHIVEVMENT_DESC_229003: "牌桌上赠送其他玩家筹码1000次",
STR_ACHIVEVMENT_DESC_230001: "赠送好友免费筹码10次",
STR_ACHIVEVMENT_DESC_230002: "赠送好友免费筹码100次",
STR_ACHIVEVMENT_DESC_230003: "赠送好友免费筹码1000次",
STR_ACHIVEVMENT_DESC_231001: "获得免费筹码总量达到10万",
STR_ACHIVEVMENT_DESC_231002: "获得免费筹码总量达到25万",
STR_ACHIVEVMENT_DESC_231003: "获得免费筹码总量达到100万",
STR_ACHIVEVMENT_DESC_232001: "累计登陆天数达到5天",
STR_ACHIVEVMENT_DESC_232002: "累计登陆天数达到25天",
STR_ACHIVEVMENT_DESC_232003: "累计登陆天数达到100天",
STR_ACHIVEVMENT_DESC_232004: "累计登陆天数达到250天",
STR_ACHIVEVMENT_DESC_232005: "累计登陆天数达到500天",
STR_LOGIN_VERSION: "版本号：",
STR_INFORMATION_PERSONAL_SIGNATURE_DEFAULT: "这位玩家还没有留下任何笔迹。想更引人关注吗？留下一段个性签名吧。",
STR_MESS_EVALUATION_TITLE: "感谢您的评价",
STR_MESS_EVALUATION_CONTENT: "因为您对于我们游戏的支持与评价，系统为您发放%d筹码的奖励，请及时领取。"
};
cc._RF.pop();
}, {} ]
}, {}, [ "CastTest", "VoiceNative", "ball", "Chanel", "ConstantItem", "PhysicsCenter", "AdaptBg", "AdaptCanvas", "AdaptUI", "Base64Tool", "BaseComponent", "Global", "KeypadDispatch", "Save", "VersionManager", "xxtea", "GameClient", "HttpHelper", "OnlineWS", "Onlinedef", "Package", "Devices", "DevicesAndroid", "DevicesIos", "DevicesWeb", "Sound", "AlertIII", "chooseupdate", "LaunchScene", "LoginScene", "MainScene", "poplayer", "Slot", "SlotScene", "TestScene", "textinput", "WsTest", "Testts", "LabelLocalized", "ch", "en", "th", "zh", "i18n", "polyglot", "use_reversed_rotateBy" ]);