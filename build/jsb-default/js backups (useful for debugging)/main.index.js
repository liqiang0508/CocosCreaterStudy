window.__require = function e(t, _, n) {
function i(T, o) {
if (!_[T]) {
if (!t[T]) {
var E = T.split("/");
E = E[E.length - 1];
if (!t[E]) {
var r = "function" == typeof __require && __require;
if (!o && r) return r(E, !0);
if (S) return S(E, !0);
throw new Error("Cannot find module '" + T + "'");
}
T = E;
}
var s = _[T] = {
exports: {}
};
t[T][0].call(s.exports, function(e) {
return i(t[T][1][e] || e);
}, s, s.exports, e, t, _, n);
}
return _[T].exports;
}
for (var S = "function" == typeof __require && __require, T = 0; T < n.length; T++) i(n[T]);
return i;
}({
AdaptBg: [ function(e, t) {
"use strict";
cc._RF.push(t, "ee625B2iPdOz4Trq3USAlCq", "AdaptBg");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {},
start: function() {
cc.find("Canvas").on("resize", this.resize.bind(this));
this.resize();
},
resize: function() {
var e = cc.view.getVisibleSize(), t = Math.min(this.node.width / e.width, this.node.height / e.height);
this.node.scale = this.node.scale / t;
}
});
cc._RF.pop();
}, {} ],
AdaptCanvas: [ function(e, t) {
"use strict";
cc._RF.push(t, "3d5f7WCRqhE5bZ5is2EOwx6", "AdaptCanvas");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {
this.resize();
cc.find("Canvas").on("resize", this.resize.bind(this));
},
start: function() {},
resize: function() {
var e = cc.view.getDesignResolutionSize(), t = cc.view.getVisibleSize();
if (t.width / e.width > t.height / e.height) {
cc.Canvas.instance.fitHeight = !0;
cc.Canvas.instance.fitWidth = !1;
} else {
cc.Canvas.instance.fitHeight = !1;
cc.Canvas.instance.fitWidth = !0;
}
}
});
cc._RF.pop();
}, {} ],
AdaptUI: [ function(e, t) {
"use strict";
cc._RF.push(t, "7f436dxylZH4bCxvIF2a+LV", "AdaptUI");
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
AlertIII: [ function(e, t) {
"use strict";
cc._RF.push(t, "fcc45vfYNtImpD7O5BXoNrL", "AlertIII");
var _ = e("BaseComponent");
cc.Class({
extends: _,
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
var e = this;
this._super();
var t = this.node.getChildByName("bg").getChildByName("text");
t.getComponent(cc.Label).string = "LOL";
this.text = t;
var _ = this.node.getChildByName("bg").getChildByName("btn_yes"), n = this.node.getChildByName("bg").getChildByName("btn_no"), i = this.node.getChildByName("bg").getChildByName("btn_middle");
this.btnyes = _;
this.btn_no = n;
this.btn_middle = i;
ua.darkButton(i, function() {
e.BtnCall(2);
e.bClose();
});
ua.darkButton(_, function() {
e.BtnCall(1);
e.bClose();
});
ua.darkButton(n, function() {
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
showAlert: function(e, t, _) {
this.EnterAni();
this.setTitle(e);
this.setButtonInfo(t);
this.AddClickBtnCall(_);
},
AddClickBtnCall: function(e) {
this.ClickCall = e;
},
BtnCall: function(e) {
this.ClickCall && this.ClickCall(e);
},
setButtonText: function(e, t) {
var _ = e.getChildByName("Background").getChildByName("Label");
_ && (_.getComponent(cc.Label).string = t);
},
start: function() {}
});
cc._RF.pop();
}, {
BaseComponent: "BaseComponent"
} ],
Base64Tool: [ function(e, t) {
"use strict";
cc._RF.push(t, "04561E7wzpHiKoMn1wok8WB", "Base64Tool");
var _ = e("buffer").Buffer, n = {
encode: function(e) {
return new _(e).toString("base64");
},
decode: function(e) {
return new _(e, "base64").toString();
}
};
t.exports = n;
cc._RF.pop();
}, {
buffer: 6
} ],
BaseComponent: [ function(e, t) {
"use strict";
cc._RF.push(t, "8e980PYoChFa6X8R9XVV7PJ", "BaseComponent");
var _ = e("KeypadDispatch");
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
if (e) UiManager.gLoadPrefabRes("prefabs/rotateLoading", function(e) {
if (e) {
cc.director.getScene().getChildByName("Canvas").addChild(e);
e.setName("rotateLoading");
}
}); else {
var t = cc.director.getScene().getChildByName("Canvas").getChildByName("rotateLoading");
t && t.removeFromParent();
}
},
onLoad: function() {
_.getInstance().add(this);
},
start: function() {},
onDestroy: function() {
this.node.targetOff(this);
_.getInstance().remove();
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
var t = cc.spawn(cc.scaleTo(.1, .7), cc.fadeTo(.08, 0)), _ = cc.callFunc(function() {
e && e();
}), n = cc.sequence(t, _);
this.node.runAction(n);
var i = this.node.getChildByName("mask");
i && (i.opacity = 0);
}
if (2 == this.AimType) {
t = cc.fadeTo(.15, 0), _ = cc.callFunc(function() {
e && e();
}), n = cc.sequence(t, _);
this.node.runAction(n);
}
},
onbackpress: function() {
this.bClose();
},
EnterAni: function(e) {
if (1 == this.AimType) {
var t = this.node.getChildByName("mask");
this.node.opacity = 10;
this.node.Scale = .5;
var _ = cc.spawn(cc.scaleTo(.1, 1.05), cc.fadeTo(.1, 180)), n = cc.spawn(cc.scaleTo(.05, 1), cc.fadeTo(.05, 255)), i = cc.callFunc(function() {
e && e();
t && (t.opacity = 125);
}), S = cc.sequence(_, n, i);
this.node.runAction(S);
}
if (2 == this.AimType) {
(t = this.node.getChildByName("mask")) && (t.opacity = 0);
_ = cc.fadeTo(.15, 255), n = cc.callFunc(function() {
e && e();
t && (t.opacity = 225);
}), S = cc.sequence(_, n);
this.node.runAction(S);
}
}
});
cc._RF.pop();
}, {
KeypadDispatch: "KeypadDispatch"
} ],
BubbleScene: [ function(e, t) {
"use strict";
cc._RF.push(t, "056f1Xf3tBLE5KzIZKhSnU6", "BubbleScene");
var _ = e("BaseComponent");
cc.Class({
extends: _,
properties: {},
start: function() {
window.GameState = 0;
this.content = cc.find("content", this.node);
this.scoreText = cc.find("uipanel/scoretxt", this.node);
this.ball = cc.find("ball", this.node);
this.schedule(this.CreateBubble, 1);
this.Score = 0;
var e = cc.find("uipanel/btn_pause", this.node);
ua.darkButton(e, function() {
0 == window.GameState ? window.GameState = 1 : window.GameState = 0;
});
},
addScore: function() {
this.Score = this.Score + 1;
this.scoreText.getComponent(cc.Label).string = "Score:" + this.Score;
cc.tween(this.scoreText).to(.08, {
scale: 1.1
}).to(.05, {
scale: .8
}).to(.05, {
scale: 1
}).start();
},
CreateBubble: function() {
var e = this;
if (1 != window.GameState) {
var t = cc.instantiate(this.ball);
t.active = !0;
t.getComponent("Bubble").setClickCall(function() {
e.addScore();
});
this.content.addChild(t);
t.x = 0;
t.y = 0;
}
}
});
cc._RF.pop();
}, {
BaseComponent: "BaseComponent"
} ],
Bubble: [ function(e, t) {
"use strict";
cc._RF.push(t, "588d51xwI9Hoqya8KILiGGJ", "Bubble");
cc.Class({
extends: cc.Component,
properties: {
life: {
type: cc.Integer,
default: 5
}
},
start: function() {
var e = this;
this.Speed = cc.v2(1e3 * Math.random() - 500, 1e3 * Math.random() - 500);
this.ScreenSize = cc.view.getVisibleSize();
ua.ClickNode(this.node, function() {
if (1 != window.GameState) {
e.ClickCall && e.ClickCall();
e.node.removeFromParent();
e.node.destroy();
}
});
},
onDestroy: function() {
this.node.targetOff(this);
},
setClickCall: function(e) {
this.ClickCall = e;
},
update: function(e) {
if (1 != window.GameState) {
this.node.x = this.node.x + this.Speed.x * e;
this.node.y = this.node.y + this.Speed.y * e;
if (this.node.x <= -(this.ScreenSize.width / 2 - this.node.width / 2)) {
this.node.x = -(this.ScreenSize.width / 2 - this.node.width / 2);
this.Speed.x = -this.Speed.x;
this.life = this.life - 1;
}
if (this.node.x >= this.ScreenSize.width / 2 - this.node.width / 2) {
this.node.x = this.ScreenSize.width / 2 - this.node.width / 2;
this.Speed.x = -this.Speed.x;
this.life = this.life - 1;
}
if (this.node.y <= -(this.ScreenSize.height / 2 - this.node.height / 2)) {
this.node.y = -(this.ScreenSize.height / 2 - this.node.height / 2);
this.Speed.y = -this.Speed.y;
this.life = this.life - 1;
}
if (this.node.y >= this.ScreenSize.height / 2 - this.node.height / 2) {
this.node.y = this.ScreenSize.height / 2 - this.node.height / 2;
this.Speed.y = -this.Speed.y;
this.life = this.life - 1;
}
if (0 == this.life) {
this.node.removeFromParent();
this.node.destroy();
}
}
}
});
cc._RF.pop();
}, {} ],
CastTest: [ function(e, t) {
"use strict";
cc._RF.push(t, "27518R8AWdKgbFqyhaZ2dB+", "CastTest");
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
var e = this, t = this;
this.img = cc.find("img", this.node);
this.img.setPosition(cc.v2(0, 0));
window.EventManager.on(this.node, "gameover", function() {
console.log("game over====");
});
var _ = cc.find("uipanel/firebtn", this.node);
ua.darkButton(_, function() {
cc.log("firebtn*****vec", t.forceVec);
var _ = cc.v2(t.forceVec.x, t.forceVec.y).mul(6e5);
cc.log("firebtn*****force", _);
e.img.getComponent(cc.RigidBody).applyForceToCenter(_);
});
ua.darkButton(this.node, function(e) {
var _ = e.getTouches()[0].getLocation();
_ = t.img.parent.convertToNodeSpaceAR(_);
var n = t.img.getPosition().subSelf(_).normalizeSelf();
cc.log("v===", n);
t.forceVec = n;
});
},
onTouchStart: function() {
this.graphic_line.clear();
},
onTouchMove: function(e) {
this.graphic_line.clear();
this._cur_length = 0;
var t = e.getStartLocation(), _ = e.getLocation();
this.drawRayCast(t, _.subSelf(t).normalizeSelf());
this.graphic_line.stroke();
},
onTouchEnd: function() {
this.graphic_line.clear();
},
drawRayCast: function(e, t) {
var _ = 1440 - this._cur_length;
if (!(_ <= 0)) {
var n = e.add(t.mul(_)), i = cc.director.getPhysicsManager().rayCast(e, n, cc.RayCastType.Closest);
if (i.length > 0) {
var S = i[0], T = S.point;
this.drawAimLine(e, T);
var o = T.sub(e).mag();
this._cur_length += o;
var E = S.normal, r = t, s = r.sub(E.mul(2 * r.dot(E)));
this.drawRayCast(T, s);
} else this.drawAimLine(e, n);
}
},
drawAimLine: function(e, t) {
var _ = this.graphic_line.node.convertToNodeSpaceAR(e);
this.graphic_line.moveTo(_.x, _.y);
this.graphic_line.strokeColor = new cc.Color().fromHEX("#ffffff");
this.graphic_line.lineWidth = 2;
var n = t.sub(e), i = Math.round(n.mag() / 35);
n.normalizeSelf().mulSelf(35);
for (var S = 0; S < i; S++) {
_.addSelf(n);
this.graphic_line.circle(_.x, _.y, 6);
}
},
start: function() {},
update: function() {},
onBeginContact: function() {
console.log("onBeginContact");
},
onEndContact: function() {
console.log("onEndContact");
},
onPreSolve: function() {
console.log("onPreSolve");
},
onPostSolve: function() {
console.log("onPostSolve");
},
onCollisionEnter: function() {
console.log("onCollisionEnter");
}
});
cc._RF.pop();
}, {} ],
Chanel: [ function(e, t) {
"use strict";
cc._RF.push(t, "15547fdAgdMZo3lwC1nVArs", "Chanel");
var _ = {
WIN32: 0,
IOS_APPSTORE: 1,
H5: 2,
ANDROID_GOOGLE_PLAY: 3
};
window.chanel = _;
cc.sys.isBrowser ? window.DISTRIBUTE_CHANNEL = _.H5 : cc.sys.isNative && cc.sys.os == cc.sys.OS_ANDROID ? window.DISTRIBUTE_CHANNEL = _.ANDROID_GOOGLE_PLAY : cc.sys.isNative && cc.sys.os == cc.sys.OS_IOS ? window.DISTRIBUTE_CHANNEL = _.IOS_APPSTORE : window.DISTRIBUTE_CHANNEL = _.WIN32;
cc._RF.pop();
}, {} ],
ConstantItem: [ function(e, t) {
"use strict";
cc._RF.push(t, "597b04MNS9KfIVJ0rR+fn0e", "ConstantItem");
var _ = {
1: {}
};
_[1].ID = 1;
_[1].Name = "钻石包_1";
_[1].Type = 0;
_[1].PriceType = 2;
_[1].Price = 35;
_[1].PriceBeforeDiscount = 0;
_[1].Time = 0;
_[1].StorePosition = 1101;
_[1].InfoVersion = 0;
_[1].AddGem = 6;
_[1].AddInteractiveItem = 0;
_[1].AddSpeechItem = 0;
_[1].DiscountBuyItem = 0;
_[1].AddChip = 0;
_[1].MinRandomChip = 0;
_[1].MaxRandomChip = 0;
_[2] = {};
_[2].ID = 2;
_[2].Name = "钻石包_2";
_[2].Type = 0;
_[2].PriceType = 2;
_[2].Price = 175;
_[2].PriceBeforeDiscount = 0;
_[2].Time = 0;
_[2].StorePosition = 1102;
_[2].InfoVersion = 0;
_[2].AddGem = 31;
_[2].AddInteractiveItem = 0;
_[2].AddSpeechItem = 0;
_[2].DiscountBuyItem = 0;
_[2].AddChip = 0;
_[2].MinRandomChip = 0;
_[2].MaxRandomChip = 0;
_[3] = {};
_[3].ID = 3;
_[3].Name = "钻石包_3";
_[3].Type = 0;
_[3].PriceType = 2;
_[3].Price = 699;
_[3].PriceBeforeDiscount = 0;
_[3].Time = 0;
_[3].StorePosition = 1103;
_[3].InfoVersion = 0;
_[3].AddGem = 132;
_[3].AddInteractiveItem = 0;
_[3].AddSpeechItem = 0;
_[3].DiscountBuyItem = 0;
_[3].AddChip = 0;
_[3].MinRandomChip = 0;
_[3].MaxRandomChip = 0;
_[4] = {};
_[4].ID = 4;
_[4].Name = "钻石包_4";
_[4].Type = 0;
_[4].PriceType = 2;
_[4].Price = 1750;
_[4].PriceBeforeDiscount = 0;
_[4].Time = 0;
_[4].StorePosition = 1104;
_[4].InfoVersion = 0;
_[4].AddGem = 336;
_[4].AddInteractiveItem = 0;
_[4].AddSpeechItem = 0;
_[4].DiscountBuyItem = 0;
_[4].AddChip = 0;
_[4].MinRandomChip = 0;
_[4].MaxRandomChip = 0;
_[5] = {};
_[5].ID = 5;
_[5].Name = "钻石包_5";
_[5].Type = 0;
_[5].PriceType = 2;
_[5].Price = 3500;
_[5].PriceBeforeDiscount = 0;
_[5].Time = 0;
_[5].StorePosition = 1105;
_[5].InfoVersion = 0;
_[5].AddGem = 690;
_[5].AddInteractiveItem = 0;
_[5].AddSpeechItem = 0;
_[5].DiscountBuyItem = 0;
_[5].AddChip = 0;
_[5].MinRandomChip = 0;
_[5].MaxRandomChip = 0;
_[6] = {};
_[6].ID = 6;
_[6].Name = "周卡";
_[6].Type = 7;
_[6].PriceType = 2;
_[6].Price = 175;
_[6].PriceBeforeDiscount = 0;
_[6].Time = 168;
_[6].StorePosition = 0;
_[6].InfoVersion = 0;
_[6].AddGem = 15;
_[6].AddInteractiveItem = 0;
_[6].AddSpeechItem = 0;
_[6].DiscountBuyItem = 0;
_[6].AddChip = 0;
_[6].MinRandomChip = 0;
_[6].MaxRandomChip = 0;
_[7] = {};
_[7].ID = 7;
_[7].Name = "月卡";
_[7].Type = 7;
_[7].PriceType = 2;
_[7].Price = 699;
_[7].PriceBeforeDiscount = 0;
_[7].Time = 720;
_[7].StorePosition = 0;
_[7].InfoVersion = 0;
_[7].AddGem = 100;
_[7].AddInteractiveItem = 0;
_[7].AddSpeechItem = 0;
_[7].DiscountBuyItem = 0;
_[7].AddChip = 0;
_[7].MinRandomChip = 0;
_[7].MaxRandomChip = 0;
_[16] = {};
_[16].ID = 16;
_[16].Name = "互动道具包_1";
_[16].Type = 0;
_[16].PriceType = 0;
_[16].Price = 1e3;
_[16].PriceBeforeDiscount = 0;
_[16].Time = 0;
_[16].StorePosition = 2104;
_[16].InfoVersion = 0;
_[16].AddGem = 0;
_[16].AddInteractiveItem = 25;
_[16].AddSpeechItem = 0;
_[16].DiscountBuyItem = 0;
_[16].AddChip = 0;
_[16].MinRandomChip = 0;
_[16].MaxRandomChip = 0;
_[17] = {};
_[17].ID = 17;
_[17].Name = "互动道具包_2";
_[17].Type = 0;
_[17].PriceType = 0;
_[17].Price = 6e3;
_[17].PriceBeforeDiscount = 0;
_[17].Time = 0;
_[17].StorePosition = 2105;
_[17].InfoVersion = 0;
_[17].AddGem = 0;
_[17].AddInteractiveItem = 150;
_[17].AddSpeechItem = 0;
_[17].DiscountBuyItem = 0;
_[17].AddChip = 0;
_[17].MinRandomChip = 0;
_[17].MaxRandomChip = 0;
_[18] = {};
_[18].ID = 18;
_[18].Name = "互动道具包_3";
_[18].Type = 0;
_[18].PriceType = 0;
_[18].Price = 24e3;
_[18].PriceBeforeDiscount = 0;
_[18].Time = 0;
_[18].StorePosition = 2106;
_[18].InfoVersion = 0;
_[18].AddGem = 0;
_[18].AddInteractiveItem = 660;
_[18].AddSpeechItem = 0;
_[18].DiscountBuyItem = 0;
_[18].AddChip = 0;
_[18].MinRandomChip = 0;
_[18].MaxRandomChip = 0;
_[19] = {};
_[19].ID = 19;
_[19].Name = "喇叭包_1";
_[19].Type = 0;
_[19].PriceType = 0;
_[19].Price = 2500;
_[19].PriceBeforeDiscount = 0;
_[19].Time = 0;
_[19].StorePosition = 2101;
_[19].InfoVersion = 0;
_[19].AddGem = 0;
_[19].AddInteractiveItem = 0;
_[19].AddSpeechItem = 25;
_[19].DiscountBuyItem = 0;
_[19].AddChip = 0;
_[19].MinRandomChip = 0;
_[19].MaxRandomChip = 0;
_[20] = {};
_[20].ID = 20;
_[20].Name = "喇叭包_2";
_[20].Type = 0;
_[20].PriceType = 0;
_[20].Price = 15e3;
_[20].PriceBeforeDiscount = 0;
_[20].Time = 0;
_[20].StorePosition = 2102;
_[20].InfoVersion = 0;
_[20].AddGem = 0;
_[20].AddInteractiveItem = 0;
_[20].AddSpeechItem = 150;
_[20].DiscountBuyItem = 0;
_[20].AddChip = 0;
_[20].MinRandomChip = 0;
_[20].MaxRandomChip = 0;
_[21] = {};
_[21].ID = 21;
_[21].Name = "喇叭包_3";
_[21].Type = 0;
_[21].PriceType = 0;
_[21].Price = 6e4;
_[21].PriceBeforeDiscount = 0;
_[21].Time = 0;
_[21].StorePosition = 2103;
_[21].InfoVersion = 0;
_[21].AddGem = 0;
_[21].AddInteractiveItem = 0;
_[21].AddSpeechItem = 600;
_[21].DiscountBuyItem = 0;
_[21].AddChip = 0;
_[21].MinRandomChip = 0;
_[21].MaxRandomChip = 0;
_[22] = {};
_[22].ID = 22;
_[22].Name = "喇叭包_4";
_[22].Type = 0;
_[22].PriceType = 1;
_[22].Price = 10;
_[22].PriceBeforeDiscount = 0;
_[22].Time = 0;
_[22].StorePosition = 2107;
_[22].InfoVersion = 0;
_[22].AddGem = 0;
_[22].AddInteractiveItem = 0;
_[22].AddSpeechItem = 1;
_[22].DiscountBuyItem = 0;
_[22].AddChip = 0;
_[22].MinRandomChip = 0;
_[22].MaxRandomChip = 0;
_[4004] = {};
_[4004].ID = 4004;
_[4004].Name = "饮品_鲜榨果汁";
_[4004].Type = 4;
_[4004].PriceType = 0;
_[4004].Price = 3500;
_[4004].PriceBeforeDiscount = 0;
_[4004].Time = 24;
_[4004].StorePosition = 4101;
_[4004].InfoVersion = 0;
_[4004].AddGem = 0;
_[4004].AddInteractiveItem = 0;
_[4004].AddSpeechItem = 0;
_[4004].DiscountBuyItem = 0;
_[4004].AddChip = 0;
_[4004].MinRandomChip = 0;
_[4004].MaxRandomChip = 0;
_[4009] = {};
_[4009].ID = 4009;
_[4009].Name = "饮品_鸡尾酒（血腥玛丽）";
_[4009].Type = 4;
_[4009].PriceType = 0;
_[4009].Price = 3500;
_[4009].PriceBeforeDiscount = 0;
_[4009].Time = 24;
_[4009].StorePosition = 4102;
_[4009].InfoVersion = 0;
_[4009].AddGem = 0;
_[4009].AddInteractiveItem = 0;
_[4009].AddSpeechItem = 0;
_[4009].DiscountBuyItem = 0;
_[4009].AddChip = 0;
_[4009].MinRandomChip = 0;
_[4009].MaxRandomChip = 0;
_[4013] = {};
_[4013].ID = 4013;
_[4013].Name = "美食_棒棒糖";
_[4013].Type = 4;
_[4013].PriceType = 0;
_[4013].Price = 4500;
_[4013].PriceBeforeDiscount = 0;
_[4013].Time = 24;
_[4013].StorePosition = 4105;
_[4013].InfoVersion = 0;
_[4013].AddGem = 0;
_[4013].AddInteractiveItem = 0;
_[4013].AddSpeechItem = 0;
_[4013].DiscountBuyItem = 0;
_[4013].AddChip = 0;
_[4013].MinRandomChip = 0;
_[4013].MaxRandomChip = 0;
_[4014] = {};
_[4014].ID = 4014;
_[4014].Name = "美食_提拉米苏";
_[4014].Type = 4;
_[4014].PriceType = 0;
_[4014].Price = 5500;
_[4014].PriceBeforeDiscount = 0;
_[4014].Time = 24;
_[4014].StorePosition = 4107;
_[4014].InfoVersion = 0;
_[4014].AddGem = 0;
_[4014].AddInteractiveItem = 0;
_[4014].AddSpeechItem = 0;
_[4014].DiscountBuyItem = 0;
_[4014].AddChip = 0;
_[4014].MinRandomChip = 0;
_[4014].MaxRandomChip = 0;
_[4019] = {};
_[4019].ID = 4019;
_[4019].Name = "美食_冰淇林";
_[4019].Type = 4;
_[4019].PriceType = 0;
_[4019].Price = 5500;
_[4019].PriceBeforeDiscount = 0;
_[4019].Time = 24;
_[4019].StorePosition = 4106;
_[4019].InfoVersion = 0;
_[4019].AddGem = 0;
_[4019].AddInteractiveItem = 0;
_[4019].AddSpeechItem = 0;
_[4019].DiscountBuyItem = 0;
_[4019].AddChip = 0;
_[4019].MinRandomChip = 0;
_[4019].MaxRandomChip = 0;
_[4023] = {};
_[4023].ID = 4023;
_[4023].Name = "烟_雪茄";
_[4023].Type = 4;
_[4023].PriceType = 0;
_[4023].Price = 4500;
_[4023].PriceBeforeDiscount = 0;
_[4023].Time = 24;
_[4023].StorePosition = 4103;
_[4023].InfoVersion = 0;
_[4023].AddGem = 0;
_[4023].AddInteractiveItem = 0;
_[4023].AddSpeechItem = 0;
_[4023].DiscountBuyItem = 0;
_[4023].AddChip = 0;
_[4023].MinRandomChip = 0;
_[4023].MaxRandomChip = 0;
_[4024] = {};
_[4024].ID = 4024;
_[4024].Name = "烟_烟斗";
_[4024].Type = 4;
_[4024].PriceType = 0;
_[4024].Price = 4500;
_[4024].PriceBeforeDiscount = 0;
_[4024].Time = 24;
_[4024].StorePosition = 4104;
_[4024].InfoVersion = 0;
_[4024].AddGem = 0;
_[4024].AddInteractiveItem = 0;
_[4024].AddSpeechItem = 0;
_[4024].DiscountBuyItem = 0;
_[4024].AddChip = 0;
_[4024].MinRandomChip = 0;
_[4024].MaxRandomChip = 0;
_[4027] = {};
_[4027].ID = 4027;
_[4027].Name = "吉祥物_招财猫";
_[4027].Type = 4;
_[4027].PriceType = 0;
_[4027].Price = 6500;
_[4027].PriceBeforeDiscount = 0;
_[4027].Time = 24;
_[4027].StorePosition = 4108;
_[4027].InfoVersion = 0;
_[4027].AddGem = 0;
_[4027].AddInteractiveItem = 0;
_[4027].AddSpeechItem = 0;
_[4027].DiscountBuyItem = 0;
_[4027].AddChip = 0;
_[4027].MinRandomChip = 0;
_[4027].MaxRandomChip = 0;
_[4029] = {};
_[4029].ID = 4029;
_[4029].Name = "吉祥物_忠犬";
_[4029].Type = 4;
_[4029].PriceType = 0;
_[4029].Price = 6500;
_[4029].PriceBeforeDiscount = 0;
_[4029].Time = 24;
_[4029].StorePosition = 4109;
_[4029].InfoVersion = 0;
_[4029].AddGem = 0;
_[4029].AddInteractiveItem = 0;
_[4029].AddSpeechItem = 0;
_[4029].DiscountBuyItem = 0;
_[4029].AddChip = 0;
_[4029].MinRandomChip = 0;
_[4029].MaxRandomChip = 0;
_[4031] = {};
_[4031].ID = 4031;
_[4031].Name = "吉祥物_晴天娃娃";
_[4031].Type = 4;
_[4031].PriceType = 0;
_[4031].Price = 7500;
_[4031].PriceBeforeDiscount = 0;
_[4031].Time = 24;
_[4031].StorePosition = 4110;
_[4031].InfoVersion = 0;
_[4031].AddGem = 0;
_[4031].AddInteractiveItem = 0;
_[4031].AddSpeechItem = 0;
_[4031].DiscountBuyItem = 0;
_[4031].AddChip = 0;
_[4031].MinRandomChip = 0;
_[4031].MaxRandomChip = 0;
_[4038] = {};
_[4038].ID = 4038;
_[4038].Name = "饰品_手链";
_[4038].Type = 4;
_[4038].PriceType = 0;
_[4038].Price = 7500;
_[4038].PriceBeforeDiscount = 0;
_[4038].Time = 24;
_[4038].StorePosition = 4112;
_[4038].InfoVersion = 0;
_[4038].AddGem = 0;
_[4038].AddInteractiveItem = 0;
_[4038].AddSpeechItem = 0;
_[4038].DiscountBuyItem = 0;
_[4038].AddChip = 0;
_[4038].MinRandomChip = 0;
_[4038].MaxRandomChip = 0;
_[4039] = {};
_[4039].ID = 4039;
_[4039].Name = "饰品_铃铛";
_[4039].Type = 4;
_[4039].PriceType = 0;
_[4039].Price = 7500;
_[4039].PriceBeforeDiscount = 0;
_[4039].Time = 24;
_[4039].StorePosition = 4111;
_[4039].InfoVersion = 0;
_[4039].AddGem = 0;
_[4039].AddInteractiveItem = 0;
_[4039].AddSpeechItem = 0;
_[4039].DiscountBuyItem = 0;
_[4039].AddChip = 0;
_[4039].MinRandomChip = 0;
_[4039].MaxRandomChip = 0;
_[5001] = {};
_[5001].ID = 5001;
_[5001].Name = "VIP（白银）";
_[5001].Type = 5;
_[5001].PriceType = 0;
_[5001].Price = 0;
_[5001].PriceBeforeDiscount = 0;
_[5001].Time = 0;
_[5001].StorePosition = 0;
_[5001].InfoVersion = 0;
_[5001].AddGem = 0;
_[5001].AddInteractiveItem = 0;
_[5001].AddSpeechItem = 0;
_[5001].DiscountBuyItem = 100;
_[5001].AddChip = 0;
_[5001].MinRandomChip = 0;
_[5001].MaxRandomChip = 0;
_[5002] = {};
_[5002].ID = 5002;
_[5002].Name = "VIP（黄金）";
_[5002].Type = 5;
_[5002].PriceType = 0;
_[5002].Price = 0;
_[5002].PriceBeforeDiscount = 0;
_[5002].Time = 0;
_[5002].StorePosition = 0;
_[5002].InfoVersion = 0;
_[5002].AddGem = 0;
_[5002].AddInteractiveItem = 0;
_[5002].AddSpeechItem = 0;
_[5002].DiscountBuyItem = 95;
_[5002].AddChip = 0;
_[5002].MinRandomChip = 0;
_[5002].MaxRandomChip = 0;
_[5003] = {};
_[5003].ID = 5003;
_[5003].Name = "VIP（蓝钻）";
_[5003].Type = 5;
_[5003].PriceType = 0;
_[5003].Price = 0;
_[5003].PriceBeforeDiscount = 0;
_[5003].Time = 0;
_[5003].StorePosition = 0;
_[5003].InfoVersion = 0;
_[5003].AddGem = 0;
_[5003].AddInteractiveItem = 0;
_[5003].AddSpeechItem = 0;
_[5003].DiscountBuyItem = 90;
_[5003].AddChip = 0;
_[5003].MinRandomChip = 0;
_[5003].MaxRandomChip = 0;
_[5004] = {};
_[5004].ID = 5004;
_[5004].Name = "VIP（黑钻）";
_[5004].Type = 5;
_[5004].PriceType = 0;
_[5004].Price = 0;
_[5004].PriceBeforeDiscount = 0;
_[5004].Time = 0;
_[5004].StorePosition = 0;
_[5004].InfoVersion = 0;
_[5004].AddGem = 0;
_[5004].AddInteractiveItem = 0;
_[5004].AddSpeechItem = 0;
_[5004].DiscountBuyItem = 80;
_[5004].AddChip = 0;
_[5004].MinRandomChip = 0;
_[5004].MaxRandomChip = 0;
_[5005] = {};
_[5005].ID = 5005;
_[5005].Name = "VIP（至尊）";
_[5005].Type = 5;
_[5005].PriceType = 0;
_[5005].Price = 0;
_[5005].PriceBeforeDiscount = 0;
_[5005].Time = 0;
_[5005].StorePosition = 0;
_[5005].InfoVersion = 0;
_[5005].AddGem = 0;
_[5005].AddInteractiveItem = 0;
_[5005].AddSpeechItem = 0;
_[5005].DiscountBuyItem = 70;
_[5005].AddChip = 0;
_[5005].MinRandomChip = 0;
_[5005].MaxRandomChip = 0;
_[6001] = {};
_[6001].ID = 6001;
_[6001].Name = "互动道具";
_[6001].Type = 6;
_[6001].PriceType = 0;
_[6001].Price = 0;
_[6001].PriceBeforeDiscount = 0;
_[6001].Time = 0;
_[6001].StorePosition = 0;
_[6001].InfoVersion = 0;
_[6001].AddGem = 0;
_[6001].AddInteractiveItem = 0;
_[6001].AddSpeechItem = 0;
_[6001].DiscountBuyItem = 0;
_[6001].AddChip = 0;
_[6001].MinRandomChip = 0;
_[6001].MaxRandomChip = 0;
_[6002] = {};
_[6002].ID = 6002;
_[6002].Name = "语音聊天道具";
_[6002].Type = 6;
_[6002].PriceType = 0;
_[6002].Price = 0;
_[6002].PriceBeforeDiscount = 0;
_[6002].Time = 0;
_[6002].StorePosition = 0;
_[6002].InfoVersion = 0;
_[6002].AddGem = 0;
_[6002].AddInteractiveItem = 0;
_[6002].AddSpeechItem = 0;
_[6002].DiscountBuyItem = 0;
_[6002].AddChip = 0;
_[6002].MinRandomChip = 0;
_[6002].MaxRandomChip = 0;
_[6003] = {};
_[6003].ID = 6003;
_[6003].Name = "踢人卡";
_[6003].Type = 6;
_[6003].PriceType = 0;
_[6003].Price = 0;
_[6003].PriceBeforeDiscount = 0;
_[6003].Time = 0;
_[6003].StorePosition = 0;
_[6003].InfoVersion = 0;
_[6003].AddGem = 0;
_[6003].AddInteractiveItem = 0;
_[6003].AddSpeechItem = 0;
_[6003].DiscountBuyItem = 0;
_[6003].AddChip = 0;
_[6003].MinRandomChip = 0;
_[6003].MaxRandomChip = 0;
_[6004] = {};
_[6004].ID = 6004;
_[6004].Name = "锁房卡";
_[6004].Type = 6;
_[6004].PriceType = 0;
_[6004].Price = 0;
_[6004].PriceBeforeDiscount = 0;
_[6004].Time = 0;
_[6004].StorePosition = 0;
_[6004].InfoVersion = 0;
_[6004].AddGem = 0;
_[6004].AddInteractiveItem = 0;
_[6004].AddSpeechItem = 0;
_[6004].DiscountBuyItem = 0;
_[6004].AddChip = 0;
_[6004].MinRandomChip = 0;
_[6004].MaxRandomChip = 0;
_[6005] = {};
_[6005].ID = 6005;
_[6005].Name = "全服大喇叭";
_[6005].Type = 6;
_[6005].PriceType = 0;
_[6005].Price = 0;
_[6005].PriceBeforeDiscount = 0;
_[6005].Time = 0;
_[6005].StorePosition = 0;
_[6005].InfoVersion = 0;
_[6005].AddGem = 0;
_[6005].AddInteractiveItem = 0;
_[6005].AddSpeechItem = 0;
_[6005].DiscountBuyItem = 0;
_[6005].AddChip = 0;
_[6005].MinRandomChip = 0;
_[6005].MaxRandomChip = 0;
_[7001] = {};
_[7001].ID = 7001;
_[7001].Name = "小月卡";
_[7001].Type = 7;
_[7001].PriceType = 1;
_[7001].Price = 30;
_[7001].PriceBeforeDiscount = 0;
_[7001].Time = 720;
_[7001].StorePosition = 0;
_[7001].InfoVersion = 0;
_[7001].AddGem = 0;
_[7001].AddInteractiveItem = 0;
_[7001].AddSpeechItem = 0;
_[7001].DiscountBuyItem = 0;
_[7001].AddChip = 1e6;
_[7001].MinRandomChip = 15e4;
_[7001].MaxRandomChip = 2e5;
_[8001] = {};
_[8001].ID = 8001;
_[8001].Name = "小小兵";
_[8001].Type = 8;
_[8001].PriceType = 0;
_[8001].Price = 5e4;
_[8001].PriceBeforeDiscount = 0;
_[8001].Time = 72;
_[8001].StorePosition = 3109;
_[8001].InfoVersion = 0;
_[8001].AddGem = 0;
_[8001].AddInteractiveItem = 0;
_[8001].AddSpeechItem = 0;
_[8001].DiscountBuyItem = 0;
_[8001].AddChip = 0;
_[8001].MinRandomChip = 0;
_[8001].MaxRandomChip = 0;
_[8007] = {};
_[8007].ID = 8007;
_[8007].Name = "海盗";
_[8007].Type = 8;
_[8007].PriceType = 0;
_[8007].Price = 5e4;
_[8007].PriceBeforeDiscount = 0;
_[8007].Time = 72;
_[8007].StorePosition = 3110;
_[8007].InfoVersion = 0;
_[8007].AddGem = 0;
_[8007].AddInteractiveItem = 0;
_[8007].AddSpeechItem = 0;
_[8007].DiscountBuyItem = 0;
_[8007].AddChip = 0;
_[8007].MinRandomChip = 0;
_[8007].MaxRandomChip = 0;
_[8003] = {};
_[8003].ID = 8003;
_[8003].Name = "钢铁人";
_[8003].Type = 8;
_[8003].PriceType = 0;
_[8003].Price = 5e4;
_[8003].PriceBeforeDiscount = 0;
_[8003].Time = 72;
_[8003].StorePosition = 3111;
_[8003].InfoVersion = 0;
_[8003].AddGem = 0;
_[8003].AddInteractiveItem = 0;
_[8003].AddSpeechItem = 0;
_[8003].DiscountBuyItem = 0;
_[8003].AddChip = 0;
_[8003].MinRandomChip = 0;
_[8003].MaxRandomChip = 0;
_[8004] = {};
_[8004].ID = 8004;
_[8004].Name = "奇异博士";
_[8004].Type = 8;
_[8004].PriceType = 0;
_[8004].Price = 5e4;
_[8004].PriceBeforeDiscount = 0;
_[8004].Time = 72;
_[8004].StorePosition = 3112;
_[8004].InfoVersion = 0;
_[8004].AddGem = 0;
_[8004].AddInteractiveItem = 0;
_[8004].AddSpeechItem = 0;
_[8004].DiscountBuyItem = 0;
_[8004].AddChip = 0;
_[8004].MinRandomChip = 0;
_[8004].MaxRandomChip = 0;
_[8021] = {};
_[8021].ID = 8021;
_[8021].Name = "熊本熊";
_[8021].Type = 8;
_[8021].PriceType = 0;
_[8021].Price = 5e4;
_[8021].PriceBeforeDiscount = 0;
_[8021].Time = 72;
_[8021].StorePosition = 3108;
_[8021].InfoVersion = 0;
_[8021].AddGem = 0;
_[8021].AddInteractiveItem = 0;
_[8021].AddSpeechItem = 0;
_[8021].DiscountBuyItem = 0;
_[8021].AddChip = 0;
_[8021].MinRandomChip = 0;
_[8021].MaxRandomChip = 0;
_[8022] = {};
_[8022].ID = 8022;
_[8022].Name = "托尼乔巴";
_[8022].Type = 8;
_[8022].PriceType = 0;
_[8022].Price = 5e4;
_[8022].PriceBeforeDiscount = 0;
_[8022].Time = 72;
_[8022].StorePosition = 3103;
_[8022].InfoVersion = 0;
_[8022].AddGem = 0;
_[8022].AddInteractiveItem = 0;
_[8022].AddSpeechItem = 0;
_[8022].DiscountBuyItem = 0;
_[8022].AddChip = 0;
_[8022].MinRandomChip = 0;
_[8022].MaxRandomChip = 0;
_[8023] = {};
_[8023].ID = 8023;
_[8023].Name = "美少女战士";
_[8023].Type = 8;
_[8023].PriceType = 0;
_[8023].Price = 5e4;
_[8023].PriceBeforeDiscount = 0;
_[8023].Time = 72;
_[8023].StorePosition = 3104;
_[8023].InfoVersion = 0;
_[8023].AddGem = 0;
_[8023].AddInteractiveItem = 0;
_[8023].AddSpeechItem = 0;
_[8023].DiscountBuyItem = 0;
_[8023].AddChip = 0;
_[8023].MinRandomChip = 0;
_[8023].MaxRandomChip = 0;
_[8024] = {};
_[8024].ID = 8024;
_[8024].Name = "小兔子";
_[8024].Type = 8;
_[8024].PriceType = 0;
_[8024].Price = 5e4;
_[8024].PriceBeforeDiscount = 0;
_[8024].Time = 72;
_[8024].StorePosition = 3107;
_[8024].InfoVersion = 0;
_[8024].AddGem = 0;
_[8024].AddInteractiveItem = 0;
_[8024].AddSpeechItem = 0;
_[8024].DiscountBuyItem = 0;
_[8024].AddChip = 0;
_[8024].MinRandomChip = 0;
_[8024].MaxRandomChip = 0;
_[8025] = {};
_[8025].ID = 8025;
_[8025].Name = "猫猫";
_[8025].Type = 8;
_[8025].PriceType = 0;
_[8025].Price = 5e4;
_[8025].PriceBeforeDiscount = 0;
_[8025].Time = 72;
_[8025].StorePosition = 3106;
_[8025].InfoVersion = 0;
_[8025].AddGem = 0;
_[8025].AddInteractiveItem = 0;
_[8025].AddSpeechItem = 0;
_[8025].DiscountBuyItem = 0;
_[8025].AddChip = 0;
_[8025].MinRandomChip = 0;
_[8025].MaxRandomChip = 0;
_[8026] = {};
_[8026].ID = 8026;
_[8026].Name = "仓鼠";
_[8026].Type = 8;
_[8026].PriceType = 0;
_[8026].Price = 5e4;
_[8026].PriceBeforeDiscount = 0;
_[8026].Time = 72;
_[8026].StorePosition = 3105;
_[8026].InfoVersion = 0;
_[8026].AddGem = 0;
_[8026].AddInteractiveItem = 0;
_[8026].AddSpeechItem = 0;
_[8026].DiscountBuyItem = 0;
_[8026].AddChip = 0;
_[8026].MinRandomChip = 0;
_[8026].MaxRandomChip = 0;
_[8027] = {};
_[8027].ID = 8027;
_[8027].Name = "水灯节free";
_[8027].Type = 8;
_[8027].PriceType = 0;
_[8027].Price = 5e4;
_[8027].PriceBeforeDiscount = 0;
_[8027].Time = 168;
_[8027].StorePosition = 0;
_[8027].InfoVersion = 0;
_[8027].AddGem = 0;
_[8027].AddInteractiveItem = 0;
_[8027].AddSpeechItem = 0;
_[8027].DiscountBuyItem = 0;
_[8027].AddChip = 0;
_[8027].MinRandomChip = 0;
_[8027].MaxRandomChip = 0;
_[8028] = {};
_[8028].ID = 8028;
_[8028].Name = "水灯节";
_[8028].Type = 8;
_[8028].PriceType = 0;
_[8028].Price = 1e5;
_[8028].PriceBeforeDiscount = 0;
_[8028].Time = 72;
_[8028].StorePosition = 3113;
_[8028].InfoVersion = 0;
_[8028].AddGem = 0;
_[8028].AddInteractiveItem = 0;
_[8028].AddSpeechItem = 0;
_[8028].DiscountBuyItem = 0;
_[8028].AddChip = 0;
_[8028].MinRandomChip = 0;
_[8028].MaxRandomChip = 0;
_[8029] = {};
_[8029].ID = 8029;
_[8029].Name = "黄金";
_[8029].Type = 8;
_[8029].PriceType = 0;
_[8029].Price = 1e5;
_[8029].PriceBeforeDiscount = 0;
_[8029].Time = 72;
_[8029].StorePosition = 3114;
_[8029].InfoVersion = 0;
_[8029].AddGem = 0;
_[8029].AddInteractiveItem = 0;
_[8029].AddSpeechItem = 0;
_[8029].DiscountBuyItem = 0;
_[8029].AddChip = 0;
_[8029].MinRandomChip = 0;
_[8029].MaxRandomChip = 0;
_[8030] = {};
_[8030].ID = 8030;
_[8030].Name = "天空";
_[8030].Type = 8;
_[8030].PriceType = 0;
_[8030].Price = 1e5;
_[8030].PriceBeforeDiscount = 0;
_[8030].Time = 72;
_[8030].StorePosition = 3115;
_[8030].InfoVersion = 0;
_[8030].AddGem = 0;
_[8030].AddInteractiveItem = 0;
_[8030].AddSpeechItem = 0;
_[8030].DiscountBuyItem = 0;
_[8030].AddChip = 0;
_[8030].MinRandomChip = 0;
_[8030].MaxRandomChip = 0;
_[8031] = {};
_[8031].ID = 8031;
_[8031].Name = "魔卡小樱";
_[8031].Type = 8;
_[8031].PriceType = 0;
_[8031].Price = 1e5;
_[8031].PriceBeforeDiscount = 0;
_[8031].Time = 72;
_[8031].StorePosition = 3116;
_[8031].InfoVersion = 0;
_[8031].AddGem = 0;
_[8031].AddInteractiveItem = 0;
_[8031].AddSpeechItem = 0;
_[8031].DiscountBuyItem = 0;
_[8031].AddChip = 0;
_[8031].MinRandomChip = 0;
_[8031].MaxRandomChip = 0;
_[8032] = {};
_[8032].ID = 8032;
_[8032].Name = "可乐罐";
_[8032].Type = 8;
_[8032].PriceType = 0;
_[8032].Price = 1e5;
_[8032].PriceBeforeDiscount = 0;
_[8032].Time = 72;
_[8032].StorePosition = 3117;
_[8032].InfoVersion = 0;
_[8032].AddGem = 0;
_[8032].AddInteractiveItem = 0;
_[8032].AddSpeechItem = 0;
_[8032].DiscountBuyItem = 0;
_[8032].AddChip = 0;
_[8032].MinRandomChip = 0;
_[8032].MaxRandomChip = 0;
_[8033] = {};
_[8033].ID = 8033;
_[8033].Name = "Jinglebells";
_[8033].Type = 8;
_[8033].PriceType = 0;
_[8033].Price = 1e5;
_[8033].PriceBeforeDiscount = 0;
_[8033].Time = 72;
_[8033].StorePosition = 0;
_[8033].InfoVersion = 0;
_[8033].AddGem = 0;
_[8033].AddInteractiveItem = 0;
_[8033].AddSpeechItem = 0;
_[8033].DiscountBuyItem = 0;
_[8033].AddChip = 0;
_[8033].MinRandomChip = 0;
_[8033].MaxRandomChip = 0;
_[8034] = {};
_[8034].ID = 8034;
_[8034].Name = "圣诞帽";
_[8034].Type = 8;
_[8034].PriceType = 0;
_[8034].Price = 1e5;
_[8034].PriceBeforeDiscount = 0;
_[8034].Time = 72;
_[8034].StorePosition = 0;
_[8034].InfoVersion = 0;
_[8034].AddGem = 0;
_[8034].AddInteractiveItem = 0;
_[8034].AddSpeechItem = 0;
_[8034].DiscountBuyItem = 0;
_[8034].AddChip = 0;
_[8034].MinRandomChip = 0;
_[8034].MaxRandomChip = 0;
_[8035] = {};
_[8035].ID = 8035;
_[8035].Name = "元旦节";
_[8035].Type = 8;
_[8035].PriceType = 0;
_[8035].Price = 1e5;
_[8035].PriceBeforeDiscount = 0;
_[8035].Time = 72;
_[8035].StorePosition = 3102;
_[8035].InfoVersion = 0;
_[8035].AddGem = 0;
_[8035].AddInteractiveItem = 0;
_[8035].AddSpeechItem = 0;
_[8035].DiscountBuyItem = 0;
_[8035].AddChip = 0;
_[8035].MinRandomChip = 0;
_[8035].MaxRandomChip = 0;
_[8036] = {};
_[8036].ID = 8036;
_[8036].Name = "宋干节";
_[8036].Type = 8;
_[8036].PriceType = 0;
_[8036].Price = 1e4;
_[8036].PriceBeforeDiscount = 0;
_[8036].Time = 168;
_[8036].StorePosition = 3101;
_[8036].InfoVersion = 0;
_[8036].AddGem = 0;
_[8036].AddInteractiveItem = 0;
_[8036].AddSpeechItem = 0;
_[8036].DiscountBuyItem = 0;
_[8036].AddChip = 0;
_[8036].MinRandomChip = 0;
_[8036].MaxRandomChip = 0;
_[8037] = {};
_[8037].ID = 8037;
_[8037].Name = "四周年";
_[8037].Type = 8;
_[8037].PriceType = 0;
_[8037].Price = 1e4;
_[8037].PriceBeforeDiscount = 0;
_[8037].Time = 1e3;
_[8037].StorePosition = 0;
_[8037].InfoVersion = 0;
_[8037].AddGem = 0;
_[8037].AddInteractiveItem = 0;
_[8037].AddSpeechItem = 0;
_[8037].DiscountBuyItem = 0;
_[8037].AddChip = 0;
_[8037].MinRandomChip = 0;
_[8037].MaxRandomChip = 0;
_[8038] = {};
_[8038].ID = 8038;
_[8038].Name = "万圣节男";
_[8038].Type = 8;
_[8038].PriceType = 0;
_[8038].Price = 1e4;
_[8038].PriceBeforeDiscount = 0;
_[8038].Time = 168;
_[8038].StorePosition = 0;
_[8038].InfoVersion = 0;
_[8038].AddGem = 0;
_[8038].AddInteractiveItem = 0;
_[8038].AddSpeechItem = 0;
_[8038].DiscountBuyItem = 0;
_[8038].AddChip = 0;
_[8038].MinRandomChip = 0;
_[8038].MaxRandomChip = 0;
_[8039] = {};
_[8039].ID = 8039;
_[8039].Name = "万圣节女";
_[8039].Type = 8;
_[8039].PriceType = 0;
_[8039].Price = 1e4;
_[8039].PriceBeforeDiscount = 0;
_[8039].Time = 168;
_[8039].StorePosition = 0;
_[8039].InfoVersion = 0;
_[8039].AddGem = 0;
_[8039].AddInteractiveItem = 0;
_[8039].AddSpeechItem = 0;
_[8039].DiscountBuyItem = 0;
_[8039].AddChip = 0;
_[8039].MinRandomChip = 0;
_[8039].MaxRandomChip = 0;
_[8040] = {};
_[8040].ID = 8040;
_[8040].Name = "dummy皮肤";
_[8040].Type = 8;
_[8040].PriceType = 0;
_[8040].Price = 1e4;
_[8040].PriceBeforeDiscount = 0;
_[8040].Time = 168;
_[8040].StorePosition = 0;
_[8040].InfoVersion = 0;
_[8040].AddGem = 0;
_[8040].AddInteractiveItem = 0;
_[8040].AddSpeechItem = 0;
_[8040].DiscountBuyItem = 0;
_[8040].AddChip = 0;
_[8040].MinRandomChip = 0;
_[8040].MaxRandomChip = 0;
_[8041] = {};
_[8041].ID = 8041;
_[8041].Name = "圣诞动态皮肤";
_[8041].Type = 8;
_[8041].PriceType = 0;
_[8041].Price = 1e4;
_[8041].PriceBeforeDiscount = 0;
_[8041].Time = 168;
_[8041].StorePosition = 0;
_[8041].InfoVersion = 0;
_[8041].AddGem = 0;
_[8041].AddInteractiveItem = 0;
_[8041].AddSpeechItem = 0;
_[8041].DiscountBuyItem = 0;
_[8041].AddChip = 0;
_[8041].MinRandomChip = 0;
_[8041].MaxRandomChip = 0;
_[8042] = {};
_[8042].ID = 8042;
_[8042].Name = "2020年";
_[8042].Type = 8;
_[8042].PriceType = 0;
_[8042].Price = 1e5;
_[8042].PriceBeforeDiscount = 0;
_[8042].Time = 72;
_[8042].StorePosition = 3100;
_[8042].InfoVersion = 0;
_[8042].AddGem = 0;
_[8042].AddInteractiveItem = 0;
_[8042].AddSpeechItem = 0;
_[8042].DiscountBuyItem = 0;
_[8042].AddChip = 0;
_[8042].MinRandomChip = 0;
_[8042].MaxRandomChip = 0;
_[8043] = {};
_[8043].ID = 8043;
_[8043].Name = "2020春节活动皮肤";
_[8043].Type = 8;
_[8043].PriceType = 0;
_[8043].Price = 1e5;
_[8043].PriceBeforeDiscount = 0;
_[8043].Time = 168;
_[8043].StorePosition = 0;
_[8043].InfoVersion = 0;
_[8043].AddGem = 0;
_[8043].AddInteractiveItem = 0;
_[8043].AddSpeechItem = 0;
_[8043].DiscountBuyItem = 0;
_[8043].AddChip = 0;
_[8043].MinRandomChip = 0;
_[8043].MaxRandomChip = 0;
t.exports = _;
cc._RF.pop();
}, {} ],
DevicesAndroid: [ function(e, t) {
"use strict";
cc._RF.push(t, "76007bwrn9IE5i9lxVbGD0F", "DevicesAndroid");
var _ = "com/casino/game/ApplicationUtil", n = {
getDevicesID: function() {
return jsb.reflection.callStaticMethod(_, "getDeviceIdentifier", "()Ljava/lang/String;");
},
getAppVersion: function() {
return jsb.reflection.callStaticMethod(_, "getApplicationVersion", "()Ljava/lang/String;");
}
};
t.exports = n;
cc._RF.pop();
}, {} ],
DevicesIos: [ function(e, t) {
"use strict";
cc._RF.push(t, "6e0f94nMBRI+ZIyjS7/Emyg", "DevicesIos");
var _ = {
getDevicesID: function() {
cc.log("TODO DevicesIos getDevicesID");
return "123";
},
getAppVersion: function() {
cc.log("TODO DevicesIos getAppVersion");
return "1.3.0";
}
};
t.exports = _;
cc._RF.pop();
}, {} ],
DevicesWeb: [ function(e, t) {
"use strict";
cc._RF.push(t, "1f7d1OvDdhKb6+AnPj2Q80P", "DevicesWeb");
var _ = {
getDevicesID: function() {
var e = new Date().getTime(), t = window.Save.get("decicesID", e);
t == e && window.Save.set("decicesID", e);
return t;
},
getAppVersion: function() {
return "1.3.0";
}
};
t.exports = _;
cc._RF.pop();
}, {} ],
Devices: [ function(e, t) {
"use strict";
cc._RF.push(t, "cd548Gn7o1Afas1wT6k6Lak", "Devices");
var _ = {
instance: void 0,
getDevicesID: function() {
return this.instance.getDevicesID();
},
getAppVersion: function() {
return this.instance.getAppVersion();
}
};
_.instance = e("DevicesWeb");
cc.sys.isBrowser ? _.instance = e("DevicesWeb") : cc.sys.isNative && cc.sys.os == cc.sys.OS_ANDROID ? _.instance = e("DevicesAndroid") : cc.sys.isNative && cc.sys.os == cc.sys.OS_IOS && (_.instance = e("DevicesIos"));
t.exports = _;
cc._RF.pop();
}, {
DevicesAndroid: "DevicesAndroid",
DevicesIos: "DevicesIos",
DevicesWeb: "DevicesWeb"
} ],
GameClient: [ function(e, t) {
"use strict";
cc._RF.push(t, "7790f7DHIlN/LJdV2QxtWlg", "GameClient");
var _ = e("OnlineWS"), n = {
initData: function() {
cc.log("GameClient initData***");
},
connect: function(e, t, n) {
this.ws = new _();
this.ws.connect(e, t);
this.ws.setConnectCall(function() {
n && n();
});
},
getConnectState: function() {
return !!this.ws && this.ws.getWsState();
}
};
t.exports = n;
cc._RF.pop();
}, {
OnlineWS: "OnlineWS"
} ],
Global: [ function(e, t) {
"use strict";
cc._RF.push(t, "b5395s9nXxHJIO9wugo2HKF", "Global");
var _ = {
sayHello: function() {
console.log("Global sayehello");
},
gSchduleFun: function(e, t, _, n, i) {
null == n && (n = cc.macro.REPEAT_FOREVER);
null == i && (i = 0);
cc.director.getScheduler().schedule(t, e, _, n, i, !1);
},
gSchduleOnce: function(e, t, _) {
e.scheduleOnce(function() {
t();
}, _);
},
gUnSchduleFun: function(e, t) {
cc.director.getScheduler().unschedule(t, e);
},
GIsArrContain: function(e, t) {
for (var _ in e) {
var n = e[_];
if (n == t || n == toString(t)) return !0;
}
return !1;
},
GgetDataFromFile: function(e) {
return cc.sys.isNative ? jsb.fileUtils.getDataFromFile(e) : null;
},
GwriteStringToFile: function(e, t) {
cc.sys.isNative && jsb.fileUtils.writeStringToFile(e, t);
},
GwriteDataToFile: function(e, t) {
cc.sys.isNative && jsb.fileUtils.writeDataToFile(new Uint8Array(e), t);
},
GcreateDir: function(e) {
cc.sys.isNative && (jsb.fileUtils.isDirectoryExist(e) || jsb.fileUtils.createDirectory(e));
},
GgetDirByUrl: function(e) {
var t = e.split("/"), _ = "";
if (t.length > 1) for (var n = 0; n < t.length - 1; n++) {
var i = t[n];
_ = 0 == n ? i : _ + "/" + i;
} else _ = t[0];
return _ + "/";
},
GgetFileNameByUrl: function(e) {
var t = e.split("/");
return t[t.length - 1];
},
GloadPic: function(e, t) {
var _ = this;
if (cc.sys.isNative) {
var n = jsb.fileUtils.getWritablePath() + "PicTemp/";
this.GcreateDir(n);
var i = n + this.GgetFileNameByUrl(e);
jsb.fileUtils.isFileExist(i) ? this.loadTexture(i, function(e) {
t && t(e);
}) : this.GDownFile(e, function(e) {
_.GwriteDataToFile(e, i);
_.loadTexture(i, function(e) {
t && t(e);
});
});
} else cc.assetManager.loadRemote(e, {
ext: ".png"
}, function(e, _) {
e ? t && t(null) : t(_);
});
},
loadTexture: function(e, t) {
cc.assetManager.loadRemote(e, {
ext: ".png"
}, function(e, _) {
e ? t && t(null) : t(_);
});
},
GDownFile: function(e, t) {
if (cc.sys.isNative) {
var _ = new XMLHttpRequest();
_.responseType = "arraybuffer";
_.open("GET", e, !0);
_.onreadystatechange = function() {
if (4 === _.readyState && _.status >= 200) {
var e = _.response;
t(e);
} else t(null);
};
_.onerror = function() {
t(null);
};
_.ontimeout = function() {
t(null);
};
_.open("GET", e, !0);
_.timeout = 5e3;
_.send();
}
},
StrTime: function(e, t) {
for (var _ = "", n = 0; n < t; n++) _ += e;
return _;
},
ConverToWorldPos: function(e) {
return e.parent.convertToWorldSpaceAR(e.getPosition());
},
ConverToNodePos: function(e, t) {
return e.convertToNodeSpaceAR(t);
},
GgetTwoV2Angle: function(e, t) {
var _ = t.x - e.x, n = t.y - e.y, i = cc.v2(_, n).signAngle(cc.v2(0, 1));
return cc.misc.radiansToDegrees(i);
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
gLoadBundle: function(e, t, _) {
cc.assetManager.loadBundle(e, t, function(e, t) {
_ && _(e, t);
});
},
gReleaseBundle: function(e) {
var t = this.gGetBundle(e);
if (t) {
t.releaseAll();
cc.assetManager.removeBundle(t);
}
},
gGetBundle: function(e) {
return cc.assetManager.getBundle(e);
},
gReBoot: function() {
cc.game.restart();
},
gExitGame: function() {
cc.sys.isNative && cc.game.end();
},
Ghotupdateurl: "xxx",
GgameType: 1
};
if (1 == _.GgameType) {
_.Ghotupdateurl = "http://lee.free.vipnps.vip/hotupversion/configrelease";
_.isDebugTest = !1;
}
if (3 == _.GgameType) {
_.Ghotupdateurl = "http://lee.free.vipnps.vip/hotupversion/configdebug";
_.isDebugTest = !0;
}
window.Global = _;
window.gg = {};
var n = e("WeChatModule");
gg.isAndroid = !1;
gg.isIOS = !1;
gg.isWindows = !1;
cc.sys.isNative && cc.sys.os == cc.sys.OS_ANDROID ? gg.isAndroid = !0 : cc.sys.isNative && cc.sys.os == cc.sys.OS_IOS ? gg.isIOS = !0 : gg.isWindows = !0;
gg.wechat = new n();
cc._RF.pop();
}, {
WeChatModule: "WeChatModule"
} ],
HttpHelper: [ function(e, t) {
"use strict";
cc._RF.push(t, "163fcvJNjZDzY673ehl7bYi", "HttpHelper");
var _ = {
sendHttpRequest: function(e, t) {
var _ = cc.loader.getXMLHttpRequest();
_.onreadystatechange = function() {
4 == _.readyState && _.status >= 200 && _.status < 300 && t && t(_.responseText);
};
_.onerror = function() {
cc.log(" xhr.onerror*******");
t(null);
};
_.ontimeout = function() {
cc.log(" xhr.ontimeout*******");
t(null);
};
_.open("GET", e, !0);
cc.sys.isNative && _.setRequestHeader("Accept-Encoding", "gzip, deflate");
_.timeout = 5e3;
_.send();
},
sendHttpPost: function(e, t, _) {
var n = cc.loader.getXMLHttpRequest();
n.onreadystatechange = function() {
4 == n.readyState && n.status >= 200 && n.status < 300 && _ && _(n.responseText);
};
n.open("POST", e);
cc.sys.isNative && n.setRequestHeader("Accept-Encoding", "gzip, deflate");
n.timeout = 5e3;
n.setRequestHeader("Content-Type", "application/json");
var i = JSON.stringify(t);
console.log("_data", i);
n.send(i);
}
};
t.exports = _;
cc._RF.pop();
}, {} ],
HttpModule: [ function(e, t) {
"use strict";
cc._RF.push(t, "a23fcYTDHVNGq+mQACXkU+h", "HttpModule");
var _ = {
quest: function(e, t) {
var _ = e.url, n = e.method, i = e.data, S = e.timeout || 0, T = new XMLHttpRequest();
S > 0 && (T.timeout = S);
T.onreadystatechange = function() {
if (4 == T.readyState) if (T.status >= 200 && T.status < 400) {
var e = T.responseText;
try {
e = JSON.parse(T.responseText);
} catch (e) {}
t && t(null, e);
} else t && t("status: " + T.status);
}.bind(this);
T.open(n, _, !0);
if ("object" == typeof i) try {
i = JSON.stringify(i);
} catch (e) {}
T.send(i);
T.ontimeout = function() {
t && t("timeout");
console.log("连接超时");
};
},
get: function(e, t) {
var _ = e.url ? e : {
url: e
};
_.method = "get";
this.quest(_, t);
},
post: function(e, t) {
var _ = e.url ? e : {
url: e
};
_.method = "post";
this.quest(_, t);
},
postData: function(e, t, _) {
var n = [], i = new XMLHttpRequest(), S = {};
S.userid = gg.userData.userId;
S.data = _;
for (var T = JSON.stringify(S), o = 0; o < T.length; o++) n.push(T.charCodeAt(o));
var E = new Uint8Array(n);
i.onreadystatechange = function() {
if (4 == i.readyState) if (i.status >= 200 && i.status < 400) {
var e = i.responseText;
try {
e = JSON.parse(i.responseText);
} catch (e) {}
t && t(null, e);
} else t && t("status: " + i.status);
}.bind(this);
i.open("post", e, !0);
i.send(E);
i.ontimeout = function() {
t && t("timeout");
console.log("连接超时");
};
},
uploadFile: function(e, t, _) {
var n = jsb.fileUtils.getDataFromFile(_), i = cc.loader.getXMLHttpRequest();
i.open("POST", e);
i.setRequestHeader("Content-Type", "application/octet-stream");
i.send(n);
i.onreadystatechange = function() {
if (4 == i.readyState) if (200 == i.status) {
var e = i.responseText;
try {
e = JSON.parse(i.responseText);
} catch (t) {
e = i.responseText;
}
t && t(null, e);
} else t && t("status: " + i.status);
};
}
};
t.exports = _;
cc._RF.pop();
}, {} ],
1: [ function(e, t) {
var _ = e("util/"), n = Array.prototype.slice, i = Object.prototype.hasOwnProperty, S = t.exports = s;
S.AssertionError = function(e) {
this.name = "AssertionError";
this.actual = e.actual;
this.expected = e.expected;
this.operator = e.operator;
if (e.message) {
this.message = e.message;
this.generatedMessage = !1;
} else {
this.message = E(this);
this.generatedMessage = !0;
}
var t = e.stackStartFunction || r;
if (Error.captureStackTrace) Error.captureStackTrace(this, t); else {
var _ = new Error();
if (_.stack) {
var n = _.stack, i = t.name, S = n.indexOf("\n" + i);
if (S >= 0) {
var T = n.indexOf("\n", S + 1);
n = n.substring(T + 1);
}
this.stack = n;
}
}
};
_.inherits(S.AssertionError, Error);
function T(e, t) {
return _.isUndefined(t) ? "" + t : _.isNumber(t) && !isFinite(t) ? t.toString() : _.isFunction(t) || _.isRegExp(t) ? t.toString() : t;
}
function o(e, t) {
return _.isString(e) ? e.length < t ? e : e.slice(0, t) : e;
}
function E(e) {
return o(JSON.stringify(e.actual, T), 128) + " " + e.operator + " " + o(JSON.stringify(e.expected, T), 128);
}
function r(e, t, _, n, i) {
throw new S.AssertionError({
message: _,
actual: e,
expected: t,
operator: n,
stackStartFunction: i
});
}
S.fail = r;
function s(e, t) {
e || r(e, !0, t, "==", S.ok);
}
S.ok = s;
S.equal = function(e, t, _) {
e != t && r(e, t, _, "==", S.equal);
};
S.notEqual = function(e, t, _) {
e == t && r(e, t, _, "!=", S.notEqual);
};
S.deepEqual = function(e, t, _) {
R(e, t) || r(e, t, _, "deepEqual", S.deepEqual);
};
function R(e, t) {
if (e === t) return !0;
if (_.isBuffer(e) && _.isBuffer(t)) {
if (e.length != t.length) return !1;
for (var n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
return !0;
}
return _.isDate(e) && _.isDate(t) ? e.getTime() === t.getTime() : _.isRegExp(e) && _.isRegExp(t) ? e.source === t.source && e.global === t.global && e.multiline === t.multiline && e.lastIndex === t.lastIndex && e.ignoreCase === t.ignoreCase : _.isObject(e) || _.isObject(t) ? c(e, t) : e == t;
}
function a(e) {
return "[object Arguments]" == Object.prototype.toString.call(e);
}
function c(e, t) {
if (_.isNullOrUndefined(e) || _.isNullOrUndefined(t)) return !1;
if (e.prototype !== t.prototype) return !1;
if (_.isPrimitive(e) || _.isPrimitive(t)) return e === t;
var i = a(e), S = a(t);
if (i && !S || !i && S) return !1;
if (i) return R(e = n.call(e), t = n.call(t));
var T, o, E = l(e), r = l(t);
if (E.length != r.length) return !1;
E.sort();
r.sort();
for (o = E.length - 1; o >= 0; o--) if (E[o] != r[o]) return !1;
for (o = E.length - 1; o >= 0; o--) if (!R(e[T = E[o]], t[T])) return !1;
return !0;
}
S.notDeepEqual = function(e, t, _) {
R(e, t) && r(e, t, _, "notDeepEqual", S.notDeepEqual);
};
S.strictEqual = function(e, t, _) {
e !== t && r(e, t, _, "===", S.strictEqual);
};
S.notStrictEqual = function(e, t, _) {
e === t && r(e, t, _, "!==", S.notStrictEqual);
};
function I(e, t) {
return !(!e || !t) && ("[object RegExp]" == Object.prototype.toString.call(t) ? t.test(e) : e instanceof t || !0 === t.call({}, e));
}
function N(e, t, n, i) {
var S;
if (_.isString(n)) {
i = n;
n = null;
}
try {
t();
} catch (e) {
S = e;
}
i = (n && n.name ? " (" + n.name + ")." : ".") + (i ? " " + i : ".");
e && !S && r(S, n, "Missing expected exception" + i);
!e && I(S, n) && r(S, n, "Got unwanted exception" + i);
if (e && S && n && !I(S, n) || !e && S) throw S;
}
S.throws = function(e, t, _) {
N.apply(this, [ !0 ].concat(n.call(arguments)));
};
S.doesNotThrow = function(e, t) {
N.apply(this, [ !1 ].concat(n.call(arguments)));
};
S.ifError = function(e) {
if (e) throw e;
};
var l = Object.keys || function(e) {
var t = [];
for (var _ in e) i.call(e, _) && t.push(_);
return t;
};
}, {
"util/": 4
} ],
2: [ function(e, t) {
"function" == typeof Object.create ? t.exports = function(e, t) {
e.super_ = t;
e.prototype = Object.create(t.prototype, {
constructor: {
value: e,
enumerable: !1,
writable: !0,
configurable: !0
}
});
} : t.exports = function(e, t) {
e.super_ = t;
var _ = function() {};
_.prototype = t.prototype;
e.prototype = new _();
e.prototype.constructor = e;
};
}, {} ],
3: [ function(e, t) {
t.exports = function(e) {
return e && "object" == typeof e && "function" == typeof e.copy && "function" == typeof e.fill && "function" == typeof e.readUInt8;
};
}, {} ],
4: [ function(e, t, _) {
(function(t, n) {
var i = /%[sdj%]/g;
_.format = function(e) {
if (!u(e)) {
for (var t = [], _ = 0; _ < arguments.length; _++) t.push(o(arguments[_]));
return t.join(" ");
}
_ = 1;
for (var n = arguments, S = n.length, T = String(e).replace(i, function(e) {
if ("%%" === e) return "%";
if (_ >= S) return e;
switch (e) {
case "%s":
return String(n[_++]);

case "%d":
return Number(n[_++]);

case "%j":
try {
return JSON.stringify(n[_++]);
} catch (e) {
return "[Circular]";
}

default:
return e;
}
}), E = n[_]; _ < S; E = n[++_]) O(E) || !f(E) ? T += " " + E : T += " " + o(E);
return T;
};
_.deprecate = function(e, i) {
if (h(n.process)) return function() {
return _.deprecate(e, i).apply(this, arguments);
};
if (!0 === t.noDeprecation) return e;
var S = !1;
return function() {
if (!S) {
if (t.throwDeprecation) throw new Error(i);
t.traceDeprecation ? console.trace(i) : console.error(i);
S = !0;
}
return e.apply(this, arguments);
};
};
var S, T = {};
_.debuglog = function(e) {
h(S) && (S = t.env.NODE_DEBUG || "");
e = e.toUpperCase();
if (!T[e]) if (new RegExp("\\b" + e + "\\b", "i").test(S)) {
var n = t.pid;
T[e] = function() {
var t = _.format.apply(_, arguments);
console.error("%s %d: %s", e, n, t);
};
} else T[e] = function() {};
return T[e];
};
function o(e, t) {
var n = {
seen: [],
stylize: r
};
arguments.length >= 3 && (n.depth = arguments[2]);
arguments.length >= 4 && (n.colors = arguments[3]);
A(t) ? n.showHidden = t : t && _._extend(n, t);
h(n.showHidden) && (n.showHidden = !1);
h(n.depth) && (n.depth = 2);
h(n.colors) && (n.colors = !1);
h(n.customInspect) && (n.customInspect = !0);
n.colors && (n.stylize = E);
return R(n, e, n.depth);
}
_.inspect = o;
o.colors = {
bold: [ 1, 22 ],
italic: [ 3, 23 ],
underline: [ 4, 24 ],
inverse: [ 7, 27 ],
white: [ 37, 39 ],
grey: [ 90, 39 ],
black: [ 30, 39 ],
blue: [ 34, 39 ],
cyan: [ 36, 39 ],
green: [ 32, 39 ],
magenta: [ 35, 39 ],
red: [ 31, 39 ],
yellow: [ 33, 39 ]
};
o.styles = {
special: "cyan",
number: "yellow",
boolean: "yellow",
undefined: "grey",
null: "bold",
string: "green",
date: "magenta",
regexp: "red"
};
function E(e, t) {
var _ = o.styles[t];
return _ ? "[" + o.colors[_][0] + "m" + e + "[" + o.colors[_][1] + "m" : e;
}
function r(e) {
return e;
}
function s(e) {
var t = {};
e.forEach(function(e) {
t[e] = !0;
});
return t;
}
function R(e, t, n) {
if (e.customInspect && t && L(t.inspect) && t.inspect !== _.inspect && (!t.constructor || t.constructor.prototype !== t)) {
var i = t.inspect(n, e);
u(i) || (i = R(e, i, n));
return i;
}
var S = a(e, t);
if (S) return S;
var T = Object.keys(t), o = s(T);
e.showHidden && (T = Object.getOwnPropertyNames(t));
if (M(t) && (T.indexOf("message") >= 0 || T.indexOf("description") >= 0)) return c(t);
if (0 === T.length) {
if (L(t)) {
var E = t.name ? ": " + t.name : "";
return e.stylize("[Function" + E + "]", "special");
}
if (D(t)) return e.stylize(RegExp.prototype.toString.call(t), "regexp");
if (p(t)) return e.stylize(Date.prototype.toString.call(t), "date");
if (M(t)) return c(t);
}
var r, A = "", O = !1, d = [ "{", "}" ];
if (C(t)) {
O = !0;
d = [ "[", "]" ];
}
L(t) && (A = " [Function" + (t.name ? ": " + t.name : "") + "]");
D(t) && (A = " " + RegExp.prototype.toString.call(t));
p(t) && (A = " " + Date.prototype.toUTCString.call(t));
M(t) && (A = " " + c(t));
if (0 === T.length && (!O || 0 == t.length)) return d[0] + A + d[1];
if (n < 0) return D(t) ? e.stylize(RegExp.prototype.toString.call(t), "regexp") : e.stylize("[Object]", "special");
e.seen.push(t);
r = O ? I(e, t, n, o, T) : T.map(function(_) {
return N(e, t, n, o, _, O);
});
e.seen.pop();
return l(r, A, d);
}
function a(e, t) {
if (h(t)) return e.stylize("undefined", "undefined");
if (u(t)) {
var _ = "'" + JSON.stringify(t).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
return e.stylize(_, "string");
}
return d(t) ? e.stylize("" + t, "number") : A(t) ? e.stylize("" + t, "boolean") : O(t) ? e.stylize("null", "null") : void 0;
}
function c(e) {
return "[" + Error.prototype.toString.call(e) + "]";
}
function I(e, t, _, n, i) {
for (var S = [], T = 0, o = t.length; T < o; ++T) y(t, String(T)) ? S.push(N(e, t, _, n, String(T), !0)) : S.push("");
i.forEach(function(i) {
i.match(/^\d+$/) || S.push(N(e, t, _, n, i, !0));
});
return S;
}
function N(e, t, _, n, i, S) {
var T, o, E;
(E = Object.getOwnPropertyDescriptor(t, i) || {
value: t[i]
}).get ? o = E.set ? e.stylize("[Getter/Setter]", "special") : e.stylize("[Getter]", "special") : E.set && (o = e.stylize("[Setter]", "special"));
y(n, i) || (T = "[" + i + "]");
o || (e.seen.indexOf(E.value) < 0 ? (o = O(_) ? R(e, E.value, null) : R(e, E.value, _ - 1)).indexOf("\n") > -1 && (o = S ? o.split("\n").map(function(e) {
return "  " + e;
}).join("\n").substr(2) : "\n" + o.split("\n").map(function(e) {
return "   " + e;
}).join("\n")) : o = e.stylize("[Circular]", "special"));
if (h(T)) {
if (S && i.match(/^\d+$/)) return o;
if ((T = JSON.stringify("" + i)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
T = T.substr(1, T.length - 2);
T = e.stylize(T, "name");
} else {
T = T.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
T = e.stylize(T, "string");
}
}
return T + ": " + o;
}
function l(e, t, _) {
return e.reduce(function(e, t) {
t.indexOf("\n");
return e + t.replace(/\u001b\[\d\d?m/g, "").length + 1;
}, 0) > 60 ? _[0] + ("" === t ? "" : t + "\n ") + " " + e.join(",\n  ") + " " + _[1] : _[0] + t + " " + e.join(", ") + " " + _[1];
}
function C(e) {
return Array.isArray(e);
}
_.isArray = C;
function A(e) {
return "boolean" == typeof e;
}
_.isBoolean = A;
function O(e) {
return null === e;
}
_.isNull = O;
_.isNullOrUndefined = function(e) {
return null == e;
};
function d(e) {
return "number" == typeof e;
}
_.isNumber = d;
function u(e) {
return "string" == typeof e;
}
_.isString = u;
_.isSymbol = function(e) {
return "symbol" == typeof e;
};
function h(e) {
return void 0 === e;
}
_.isUndefined = h;
function D(e) {
return f(e) && "[object RegExp]" === P(e);
}
_.isRegExp = D;
function f(e) {
return "object" == typeof e && null !== e;
}
_.isObject = f;
function p(e) {
return f(e) && "[object Date]" === P(e);
}
_.isDate = p;
function M(e) {
return f(e) && ("[object Error]" === P(e) || e instanceof Error);
}
_.isError = M;
function L(e) {
return "function" == typeof e;
}
_.isFunction = L;
_.isPrimitive = function(e) {
return null === e || "boolean" == typeof e || "number" == typeof e || "string" == typeof e || "symbol" == typeof e || "undefined" == typeof e;
};
_.isBuffer = e("./support/isBuffer");
function P(e) {
return Object.prototype.toString.call(e);
}
function g(e) {
return e < 10 ? "0" + e.toString(10) : e.toString(10);
}
var m = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
function V() {
var e = new Date(), t = [ g(e.getHours()), g(e.getMinutes()), g(e.getSeconds()) ].join(":");
return [ e.getDate(), m[e.getMonth()], t ].join(" ");
}
_.log = function() {
console.log("%s - %s", V(), _.format.apply(_, arguments));
};
_.inherits = e("inherits");
_._extend = function(e, t) {
if (!t || !f(t)) return e;
for (var _ = Object.keys(t), n = _.length; n--; ) e[_[n]] = t[_[n]];
return e;
};
function y(e, t) {
return Object.prototype.hasOwnProperty.call(e, t);
}
}).call(this, e("_process"), "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
}, {
"./support/isBuffer": 3,
_process: 10,
inherits: 2
} ],
5: [ function(e, t, _) {
"use strict";
_.byteLength = function(e) {
var t = r(e), _ = t[0], n = t[1];
return 3 * (_ + n) / 4 - n;
};
_.toByteArray = function(e) {
var t, _, n = r(e), T = n[0], o = n[1], E = new S(s(0, T, o)), R = 0, a = o > 0 ? T - 4 : T;
for (_ = 0; _ < a; _ += 4) {
t = i[e.charCodeAt(_)] << 18 | i[e.charCodeAt(_ + 1)] << 12 | i[e.charCodeAt(_ + 2)] << 6 | i[e.charCodeAt(_ + 3)];
E[R++] = t >> 16 & 255;
E[R++] = t >> 8 & 255;
E[R++] = 255 & t;
}
if (2 === o) {
t = i[e.charCodeAt(_)] << 2 | i[e.charCodeAt(_ + 1)] >> 4;
E[R++] = 255 & t;
}
if (1 === o) {
t = i[e.charCodeAt(_)] << 10 | i[e.charCodeAt(_ + 1)] << 4 | i[e.charCodeAt(_ + 2)] >> 2;
E[R++] = t >> 8 & 255;
E[R++] = 255 & t;
}
return E;
};
_.fromByteArray = function(e) {
for (var t, _ = e.length, i = _ % 3, S = [], T = 0, o = _ - i; T < o; T += 16383) S.push(R(e, T, T + 16383 > o ? o : T + 16383));
if (1 === i) {
t = e[_ - 1];
S.push(n[t >> 2] + n[t << 4 & 63] + "==");
} else if (2 === i) {
t = (e[_ - 2] << 8) + e[_ - 1];
S.push(n[t >> 10] + n[t >> 4 & 63] + n[t << 2 & 63] + "=");
}
return S.join("");
};
for (var n = [], i = [], S = "undefined" != typeof Uint8Array ? Uint8Array : Array, T = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", o = 0, E = T.length; o < E; ++o) {
n[o] = T[o];
i[T.charCodeAt(o)] = o;
}
i["-".charCodeAt(0)] = 62;
i["_".charCodeAt(0)] = 63;
function r(e) {
var t = e.length;
if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
var _ = e.indexOf("=");
-1 === _ && (_ = t);
return [ _, _ === t ? 0 : 4 - _ % 4 ];
}
function s(e, t, _) {
return 3 * (t + _) / 4 - _;
}
function R(e, t, _) {
for (var i, S, T = [], o = t; o < _; o += 3) {
i = (e[o] << 16 & 16711680) + (e[o + 1] << 8 & 65280) + (255 & e[o + 2]);
T.push(n[(S = i) >> 18 & 63] + n[S >> 12 & 63] + n[S >> 6 & 63] + n[63 & S]);
}
return T.join("");
}
}, {} ],
6: [ function(e, t, _) {
(function(t) {
"use strict";
var n = e("base64-js"), i = e("ieee754"), S = e("isarray");
_.Buffer = E;
_.SlowBuffer = function(e) {
+e != e && (e = 0);
return E.alloc(+e);
};
_.INSPECT_MAX_BYTES = 50;
E.TYPED_ARRAY_SUPPORT = void 0 !== t.TYPED_ARRAY_SUPPORT ? t.TYPED_ARRAY_SUPPORT : function() {
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
_.kMaxLength = T();
function T() {
return E.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
}
function o(e, t) {
if (T() < t) throw new RangeError("Invalid typed array length");
if (E.TYPED_ARRAY_SUPPORT) (e = new Uint8Array(t)).__proto__ = E.prototype; else {
null === e && (e = new E(t));
e.length = t;
}
return e;
}
function E(e, t, _) {
if (!(E.TYPED_ARRAY_SUPPORT || this instanceof E)) return new E(e, t, _);
if ("number" == typeof e) {
if ("string" == typeof t) throw new Error("If encoding is specified then the first argument must be a string");
return a(this, e);
}
return r(this, e, t, _);
}
E.poolSize = 8192;
E._augment = function(e) {
e.__proto__ = E.prototype;
return e;
};
function r(e, t, _, n) {
if ("number" == typeof t) throw new TypeError('"value" argument must not be a number');
return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer ? N(e, t, _, n) : "string" == typeof t ? c(e, t, _) : l(e, t);
}
E.from = function(e, t, _) {
return r(null, e, t, _);
};
if (E.TYPED_ARRAY_SUPPORT) {
E.prototype.__proto__ = Uint8Array.prototype;
E.__proto__ = Uint8Array;
"undefined" != typeof Symbol && Symbol.species && E[Symbol.species] === E && Object.defineProperty(E, Symbol.species, {
value: null,
configurable: !0
});
}
function s(e) {
if ("number" != typeof e) throw new TypeError('"size" argument must be a number');
if (e < 0) throw new RangeError('"size" argument must not be negative');
}
function R(e, t, _, n) {
s(t);
return t <= 0 ? o(e, t) : void 0 !== _ ? "string" == typeof n ? o(e, t).fill(_, n) : o(e, t).fill(_) : o(e, t);
}
E.alloc = function(e, t, _) {
return R(null, e, t, _);
};
function a(e, t) {
s(t);
e = o(e, t < 0 ? 0 : 0 | C(t));
if (!E.TYPED_ARRAY_SUPPORT) for (var _ = 0; _ < t; ++_) e[_] = 0;
return e;
}
E.allocUnsafe = function(e) {
return a(null, e);
};
E.allocUnsafeSlow = function(e) {
return a(null, e);
};
function c(e, t, _) {
"string" == typeof _ && "" !== _ || (_ = "utf8");
if (!E.isEncoding(_)) throw new TypeError('"encoding" must be a valid string encoding');
var n = 0 | A(t, _), i = (e = o(e, n)).write(t, _);
i !== n && (e = e.slice(0, i));
return e;
}
function I(e, t) {
var _ = t.length < 0 ? 0 : 0 | C(t.length);
e = o(e, _);
for (var n = 0; n < _; n += 1) e[n] = 255 & t[n];
return e;
}
function N(e, t, _, n) {
t.byteLength;
if (_ < 0 || t.byteLength < _) throw new RangeError("'offset' is out of bounds");
if (t.byteLength < _ + (n || 0)) throw new RangeError("'length' is out of bounds");
t = void 0 === _ && void 0 === n ? new Uint8Array(t) : void 0 === n ? new Uint8Array(t, _) : new Uint8Array(t, _, n);
E.TYPED_ARRAY_SUPPORT ? (e = t).__proto__ = E.prototype : e = I(e, t);
return e;
}
function l(e, t) {
if (E.isBuffer(t)) {
var _ = 0 | C(t.length);
if (0 === (e = o(e, _)).length) return e;
t.copy(e, 0, 0, _);
return e;
}
if (t) {
if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length" in t) return "number" != typeof t.length || (n = t.length) != n ? o(e, 0) : I(e, t);
if ("Buffer" === t.type && S(t.data)) return I(e, t.data);
}
var n;
throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
}
function C(e) {
if (e >= T()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + T().toString(16) + " bytes");
return 0 | e;
}
E.isBuffer = function(e) {
return !(null == e || !e._isBuffer);
};
E.compare = function(e, t) {
if (!E.isBuffer(e) || !E.isBuffer(t)) throw new TypeError("Arguments must be Buffers");
if (e === t) return 0;
for (var _ = e.length, n = t.length, i = 0, S = Math.min(_, n); i < S; ++i) if (e[i] !== t[i]) {
_ = e[i];
n = t[i];
break;
}
return _ < n ? -1 : n < _ ? 1 : 0;
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
E.concat = function(e, t) {
if (!S(e)) throw new TypeError('"list" argument must be an Array of Buffers');
if (0 === e.length) return E.alloc(0);
var _;
if (void 0 === t) {
t = 0;
for (_ = 0; _ < e.length; ++_) t += e[_].length;
}
var n = E.allocUnsafe(t), i = 0;
for (_ = 0; _ < e.length; ++_) {
var T = e[_];
if (!E.isBuffer(T)) throw new TypeError('"list" argument must be an Array of Buffers');
T.copy(n, i);
i += T.length;
}
return n;
};
function A(e, t) {
if (E.isBuffer(e)) return e.length;
if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)) return e.byteLength;
"string" != typeof e && (e = "" + e);
var _ = e.length;
if (0 === _) return 0;
for (var n = !1; ;) switch (t) {
case "ascii":
case "latin1":
case "binary":
return _;

case "utf8":
case "utf-8":
case void 0:
return j(e).length;

case "ucs2":
case "ucs-2":
case "utf16le":
case "utf-16le":
return 2 * _;

case "hex":
return _ >>> 1;

case "base64":
return X(e).length;

default:
if (n) return j(e).length;
t = ("" + t).toLowerCase();
n = !0;
}
}
E.byteLength = A;
function O(e, t, _) {
var n = !1;
(void 0 === t || t < 0) && (t = 0);
if (t > this.length) return "";
(void 0 === _ || _ > this.length) && (_ = this.length);
if (_ <= 0) return "";
if ((_ >>>= 0) <= (t >>>= 0)) return "";
e || (e = "utf8");
for (;;) switch (e) {
case "hex":
return F(this, t, _);

case "utf8":
case "utf-8":
return m(this, t, _);

case "ascii":
return U(this, t, _);

case "latin1":
case "binary":
return H(this, t, _);

case "base64":
return g(this, t, _);

case "ucs2":
case "ucs-2":
case "utf16le":
case "utf-16le":
return G(this, t, _);

default:
if (n) throw new TypeError("Unknown encoding: " + e);
e = (e + "").toLowerCase();
n = !0;
}
}
E.prototype._isBuffer = !0;
function d(e, t, _) {
var n = e[t];
e[t] = e[_];
e[_] = n;
}
E.prototype.swap16 = function() {
var e = this.length;
if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
for (var t = 0; t < e; t += 2) d(this, t, t + 1);
return this;
};
E.prototype.swap32 = function() {
var e = this.length;
if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
for (var t = 0; t < e; t += 4) {
d(this, t, t + 3);
d(this, t + 1, t + 2);
}
return this;
};
E.prototype.swap64 = function() {
var e = this.length;
if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
for (var t = 0; t < e; t += 8) {
d(this, t, t + 7);
d(this, t + 1, t + 6);
d(this, t + 2, t + 5);
d(this, t + 3, t + 4);
}
return this;
};
E.prototype.toString = function() {
var e = 0 | this.length;
return 0 === e ? "" : 0 === arguments.length ? m(this, 0, e) : O.apply(this, arguments);
};
E.prototype.equals = function(e) {
if (!E.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
return this === e || 0 === E.compare(this, e);
};
E.prototype.inspect = function() {
var e = "", t = _.INSPECT_MAX_BYTES;
if (this.length > 0) {
e = this.toString("hex", 0, t).match(/.{2}/g).join(" ");
this.length > t && (e += " ... ");
}
return "<Buffer " + e + ">";
};
E.prototype.compare = function(e, t, _, n, i) {
if (!E.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
void 0 === t && (t = 0);
void 0 === _ && (_ = e ? e.length : 0);
void 0 === n && (n = 0);
void 0 === i && (i = this.length);
if (t < 0 || _ > e.length || n < 0 || i > this.length) throw new RangeError("out of range index");
if (n >= i && t >= _) return 0;
if (n >= i) return -1;
if (t >= _) return 1;
if (this === e) return 0;
for (var S = (i >>>= 0) - (n >>>= 0), T = (_ >>>= 0) - (t >>>= 0), o = Math.min(S, T), r = this.slice(n, i), s = e.slice(t, _), R = 0; R < o; ++R) if (r[R] !== s[R]) {
S = r[R];
T = s[R];
break;
}
return S < T ? -1 : T < S ? 1 : 0;
};
function u(e, t, _, n, i) {
if (0 === e.length) return -1;
if ("string" == typeof _) {
n = _;
_ = 0;
} else _ > 2147483647 ? _ = 2147483647 : _ < -2147483648 && (_ = -2147483648);
_ = +_;
isNaN(_) && (_ = i ? 0 : e.length - 1);
_ < 0 && (_ = e.length + _);
if (_ >= e.length) {
if (i) return -1;
_ = e.length - 1;
} else if (_ < 0) {
if (!i) return -1;
_ = 0;
}
"string" == typeof t && (t = E.from(t, n));
if (E.isBuffer(t)) return 0 === t.length ? -1 : h(e, t, _, n, i);
if ("number" == typeof t) {
t &= 255;
return E.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(e, t, _) : Uint8Array.prototype.lastIndexOf.call(e, t, _) : h(e, [ t ], _, n, i);
}
throw new TypeError("val must be string, number or Buffer");
}
function h(e, t, _, n, i) {
var S, T = 1, o = e.length, E = t.length;
if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
if (e.length < 2 || t.length < 2) return -1;
T = 2;
o /= 2;
E /= 2;
_ /= 2;
}
function r(e, t) {
return 1 === T ? e[t] : e.readUInt16BE(t * T);
}
if (i) {
var s = -1;
for (S = _; S < o; S++) if (r(e, S) === r(t, -1 === s ? 0 : S - s)) {
-1 === s && (s = S);
if (S - s + 1 === E) return s * T;
} else {
-1 !== s && (S -= S - s);
s = -1;
}
} else {
_ + E > o && (_ = o - E);
for (S = _; S >= 0; S--) {
for (var R = !0, a = 0; a < E; a++) if (r(e, S + a) !== r(t, a)) {
R = !1;
break;
}
if (R) return S;
}
}
return -1;
}
E.prototype.includes = function(e, t, _) {
return -1 !== this.indexOf(e, t, _);
};
E.prototype.indexOf = function(e, t, _) {
return u(this, e, t, _, !0);
};
E.prototype.lastIndexOf = function(e, t, _) {
return u(this, e, t, _, !1);
};
function D(e, t, _, n) {
_ = Number(_) || 0;
var i = e.length - _;
n ? (n = Number(n)) > i && (n = i) : n = i;
var S = t.length;
if (S % 2 != 0) throw new TypeError("Invalid hex string");
n > S / 2 && (n = S / 2);
for (var T = 0; T < n; ++T) {
var o = parseInt(t.substr(2 * T, 2), 16);
if (isNaN(o)) return T;
e[_ + T] = o;
}
return T;
}
function f(e, t, _, n) {
return J(j(t, e.length - _), e, _, n);
}
function p(e, t, _, n) {
return J(z(t), e, _, n);
}
function M(e, t, _, n) {
return p(e, t, _, n);
}
function L(e, t, _, n) {
return J(X(t), e, _, n);
}
function P(e, t, _, n) {
return J(q(t, e.length - _), e, _, n);
}
E.prototype.write = function(e, t, _, n) {
if (void 0 === t) {
n = "utf8";
_ = this.length;
t = 0;
} else if (void 0 === _ && "string" == typeof t) {
n = t;
_ = this.length;
t = 0;
} else {
if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
t |= 0;
if (isFinite(_)) {
_ |= 0;
void 0 === n && (n = "utf8");
} else {
n = _;
_ = void 0;
}
}
var i = this.length - t;
(void 0 === _ || _ > i) && (_ = i);
if (e.length > 0 && (_ < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
n || (n = "utf8");
for (var S = !1; ;) switch (n) {
case "hex":
return D(this, e, t, _);

case "utf8":
case "utf-8":
return f(this, e, t, _);

case "ascii":
return p(this, e, t, _);

case "latin1":
case "binary":
return M(this, e, t, _);

case "base64":
return L(this, e, t, _);

case "ucs2":
case "ucs-2":
case "utf16le":
case "utf-16le":
return P(this, e, t, _);

default:
if (S) throw new TypeError("Unknown encoding: " + n);
n = ("" + n).toLowerCase();
S = !0;
}
};
E.prototype.toJSON = function() {
return {
type: "Buffer",
data: Array.prototype.slice.call(this._arr || this, 0)
};
};
function g(e, t, _) {
return 0 === t && _ === e.length ? n.fromByteArray(e) : n.fromByteArray(e.slice(t, _));
}
function m(e, t, _) {
_ = Math.min(e.length, _);
for (var n = [], i = t; i < _; ) {
var S = e[i], T = null, o = S > 239 ? 4 : S > 223 ? 3 : S > 191 ? 2 : 1;
if (i + o <= _) {
var E, r, s, R;
switch (o) {
case 1:
S < 128 && (T = S);
break;

case 2:
128 == (192 & (E = e[i + 1])) && (R = (31 & S) << 6 | 63 & E) > 127 && (T = R);
break;

case 3:
E = e[i + 1];
r = e[i + 2];
128 == (192 & E) && 128 == (192 & r) && (R = (15 & S) << 12 | (63 & E) << 6 | 63 & r) > 2047 && (R < 55296 || R > 57343) && (T = R);
break;

case 4:
E = e[i + 1];
r = e[i + 2];
s = e[i + 3];
128 == (192 & E) && 128 == (192 & r) && 128 == (192 & s) && (R = (15 & S) << 18 | (63 & E) << 12 | (63 & r) << 6 | 63 & s) > 65535 && R < 1114112 && (T = R);
}
}
if (null === T) {
T = 65533;
o = 1;
} else if (T > 65535) {
T -= 65536;
n.push(T >>> 10 & 1023 | 55296);
T = 56320 | 1023 & T;
}
n.push(T);
i += o;
}
return y(n);
}
var V = 4096;
function y(e) {
var t = e.length;
if (t <= V) return String.fromCharCode.apply(String, e);
for (var _ = "", n = 0; n < t; ) _ += String.fromCharCode.apply(String, e.slice(n, n += V));
return _;
}
function U(e, t, _) {
var n = "";
_ = Math.min(e.length, _);
for (var i = t; i < _; ++i) n += String.fromCharCode(127 & e[i]);
return n;
}
function H(e, t, _) {
var n = "";
_ = Math.min(e.length, _);
for (var i = t; i < _; ++i) n += String.fromCharCode(e[i]);
return n;
}
function F(e, t, _) {
var n, i = e.length;
(!t || t < 0) && (t = 0);
(!_ || _ < 0 || _ > i) && (_ = i);
for (var S = "", T = t; T < _; ++T) S += (n = e[T]) < 16 ? "0" + n.toString(16) : n.toString(16);
return S;
}
function G(e, t, _) {
for (var n = e.slice(t, _), i = "", S = 0; S < n.length; S += 2) i += String.fromCharCode(n[S] + 256 * n[S + 1]);
return i;
}
E.prototype.slice = function(e, t) {
var _, n = this.length;
(e = ~~e) < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n);
(t = void 0 === t ? n : ~~t) < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n);
t < e && (t = e);
if (E.TYPED_ARRAY_SUPPORT) (_ = this.subarray(e, t)).__proto__ = E.prototype; else {
var i = t - e;
_ = new E(i, void 0);
for (var S = 0; S < i; ++S) _[S] = this[S + e];
}
return _;
};
function w(e, t, _) {
if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
if (e + t > _) throw new RangeError("Trying to access beyond buffer length");
}
E.prototype.readUIntLE = function(e, t, _) {
e |= 0;
t |= 0;
_ || w(e, t, this.length);
for (var n = this[e], i = 1, S = 0; ++S < t && (i *= 256); ) n += this[e + S] * i;
return n;
};
E.prototype.readUIntBE = function(e, t, _) {
e |= 0;
t |= 0;
_ || w(e, t, this.length);
for (var n = this[e + --t], i = 1; t > 0 && (i *= 256); ) n += this[e + --t] * i;
return n;
};
E.prototype.readUInt8 = function(e, t) {
t || w(e, 1, this.length);
return this[e];
};
E.prototype.readUInt16LE = function(e, t) {
t || w(e, 2, this.length);
return this[e] | this[e + 1] << 8;
};
E.prototype.readUInt16BE = function(e, t) {
t || w(e, 2, this.length);
return this[e] << 8 | this[e + 1];
};
E.prototype.readUInt32LE = function(e, t) {
t || w(e, 4, this.length);
return (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3];
};
E.prototype.readUInt32BE = function(e, t) {
t || w(e, 4, this.length);
return 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
};
E.prototype.readIntLE = function(e, t, _) {
e |= 0;
t |= 0;
_ || w(e, t, this.length);
for (var n = this[e], i = 1, S = 0; ++S < t && (i *= 256); ) n += this[e + S] * i;
n >= (i *= 128) && (n -= Math.pow(2, 8 * t));
return n;
};
E.prototype.readIntBE = function(e, t, _) {
e |= 0;
t |= 0;
_ || w(e, t, this.length);
for (var n = t, i = 1, S = this[e + --n]; n > 0 && (i *= 256); ) S += this[e + --n] * i;
S >= (i *= 128) && (S -= Math.pow(2, 8 * t));
return S;
};
E.prototype.readInt8 = function(e, t) {
t || w(e, 1, this.length);
return 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e];
};
E.prototype.readInt16LE = function(e, t) {
t || w(e, 2, this.length);
var _ = this[e] | this[e + 1] << 8;
return 32768 & _ ? 4294901760 | _ : _;
};
E.prototype.readInt16BE = function(e, t) {
t || w(e, 2, this.length);
var _ = this[e + 1] | this[e] << 8;
return 32768 & _ ? 4294901760 | _ : _;
};
E.prototype.readInt32LE = function(e, t) {
t || w(e, 4, this.length);
return this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
};
E.prototype.readInt32BE = function(e, t) {
t || w(e, 4, this.length);
return this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
};
E.prototype.readFloatLE = function(e, t) {
t || w(e, 4, this.length);
return i.read(this, e, !0, 23, 4);
};
E.prototype.readFloatBE = function(e, t) {
t || w(e, 4, this.length);
return i.read(this, e, !1, 23, 4);
};
E.prototype.readDoubleLE = function(e, t) {
t || w(e, 8, this.length);
return i.read(this, e, !0, 52, 8);
};
E.prototype.readDoubleBE = function(e, t) {
t || w(e, 8, this.length);
return i.read(this, e, !1, 52, 8);
};
function v(e, t, _, n, i, S) {
if (!E.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
if (t > i || t < S) throw new RangeError('"value" argument is out of bounds');
if (_ + n > e.length) throw new RangeError("Index out of range");
}
E.prototype.writeUIntLE = function(e, t, _, n) {
e = +e;
t |= 0;
_ |= 0;
n || v(this, e, t, _, Math.pow(2, 8 * _) - 1, 0);
var i = 1, S = 0;
this[t] = 255 & e;
for (;++S < _ && (i *= 256); ) this[t + S] = e / i & 255;
return t + _;
};
E.prototype.writeUIntBE = function(e, t, _, n) {
e = +e;
t |= 0;
_ |= 0;
n || v(this, e, t, _, Math.pow(2, 8 * _) - 1, 0);
var i = _ - 1, S = 1;
this[t + i] = 255 & e;
for (;--i >= 0 && (S *= 256); ) this[t + i] = e / S & 255;
return t + _;
};
E.prototype.writeUInt8 = function(e, t, _) {
e = +e;
t |= 0;
_ || v(this, e, t, 1, 255, 0);
E.TYPED_ARRAY_SUPPORT || (e = Math.floor(e));
this[t] = 255 & e;
return t + 1;
};
function B(e, t, _, n) {
t < 0 && (t = 65535 + t + 1);
for (var i = 0, S = Math.min(e.length - _, 2); i < S; ++i) e[_ + i] = (t & 255 << 8 * (n ? i : 1 - i)) >>> 8 * (n ? i : 1 - i);
}
E.prototype.writeUInt16LE = function(e, t, _) {
e = +e;
t |= 0;
_ || v(this, e, t, 2, 65535, 0);
if (E.TYPED_ARRAY_SUPPORT) {
this[t] = 255 & e;
this[t + 1] = e >>> 8;
} else B(this, e, t, !0);
return t + 2;
};
E.prototype.writeUInt16BE = function(e, t, _) {
e = +e;
t |= 0;
_ || v(this, e, t, 2, 65535, 0);
if (E.TYPED_ARRAY_SUPPORT) {
this[t] = e >>> 8;
this[t + 1] = 255 & e;
} else B(this, e, t, !1);
return t + 2;
};
function b(e, t, _, n) {
t < 0 && (t = 4294967295 + t + 1);
for (var i = 0, S = Math.min(e.length - _, 4); i < S; ++i) e[_ + i] = t >>> 8 * (n ? i : 3 - i) & 255;
}
E.prototype.writeUInt32LE = function(e, t, _) {
e = +e;
t |= 0;
_ || v(this, e, t, 4, 4294967295, 0);
if (E.TYPED_ARRAY_SUPPORT) {
this[t + 3] = e >>> 24;
this[t + 2] = e >>> 16;
this[t + 1] = e >>> 8;
this[t] = 255 & e;
} else b(this, e, t, !0);
return t + 4;
};
E.prototype.writeUInt32BE = function(e, t, _) {
e = +e;
t |= 0;
_ || v(this, e, t, 4, 4294967295, 0);
if (E.TYPED_ARRAY_SUPPORT) {
this[t] = e >>> 24;
this[t + 1] = e >>> 16;
this[t + 2] = e >>> 8;
this[t + 3] = 255 & e;
} else b(this, e, t, !1);
return t + 4;
};
E.prototype.writeIntLE = function(e, t, _, n) {
e = +e;
t |= 0;
if (!n) {
var i = Math.pow(2, 8 * _ - 1);
v(this, e, t, _, i - 1, -i);
}
var S = 0, T = 1, o = 0;
this[t] = 255 & e;
for (;++S < _ && (T *= 256); ) {
e < 0 && 0 === o && 0 !== this[t + S - 1] && (o = 1);
this[t + S] = (e / T >> 0) - o & 255;
}
return t + _;
};
E.prototype.writeIntBE = function(e, t, _, n) {
e = +e;
t |= 0;
if (!n) {
var i = Math.pow(2, 8 * _ - 1);
v(this, e, t, _, i - 1, -i);
}
var S = _ - 1, T = 1, o = 0;
this[t + S] = 255 & e;
for (;--S >= 0 && (T *= 256); ) {
e < 0 && 0 === o && 0 !== this[t + S + 1] && (o = 1);
this[t + S] = (e / T >> 0) - o & 255;
}
return t + _;
};
E.prototype.writeInt8 = function(e, t, _) {
e = +e;
t |= 0;
_ || v(this, e, t, 1, 127, -128);
E.TYPED_ARRAY_SUPPORT || (e = Math.floor(e));
e < 0 && (e = 255 + e + 1);
this[t] = 255 & e;
return t + 1;
};
E.prototype.writeInt16LE = function(e, t, _) {
e = +e;
t |= 0;
_ || v(this, e, t, 2, 32767, -32768);
if (E.TYPED_ARRAY_SUPPORT) {
this[t] = 255 & e;
this[t + 1] = e >>> 8;
} else B(this, e, t, !0);
return t + 2;
};
E.prototype.writeInt16BE = function(e, t, _) {
e = +e;
t |= 0;
_ || v(this, e, t, 2, 32767, -32768);
if (E.TYPED_ARRAY_SUPPORT) {
this[t] = e >>> 8;
this[t + 1] = 255 & e;
} else B(this, e, t, !1);
return t + 2;
};
E.prototype.writeInt32LE = function(e, t, _) {
e = +e;
t |= 0;
_ || v(this, e, t, 4, 2147483647, -2147483648);
if (E.TYPED_ARRAY_SUPPORT) {
this[t] = 255 & e;
this[t + 1] = e >>> 8;
this[t + 2] = e >>> 16;
this[t + 3] = e >>> 24;
} else b(this, e, t, !0);
return t + 4;
};
E.prototype.writeInt32BE = function(e, t, _) {
e = +e;
t |= 0;
_ || v(this, e, t, 4, 2147483647, -2147483648);
e < 0 && (e = 4294967295 + e + 1);
if (E.TYPED_ARRAY_SUPPORT) {
this[t] = e >>> 24;
this[t + 1] = e >>> 16;
this[t + 2] = e >>> 8;
this[t + 3] = 255 & e;
} else b(this, e, t, !1);
return t + 4;
};
function Y(e, t, _, n) {
if (_ + n > e.length) throw new RangeError("Index out of range");
if (_ < 0) throw new RangeError("Index out of range");
}
function W(e, t, _, n, S) {
S || Y(e, 0, _, 4);
i.write(e, t, _, n, 23, 4);
return _ + 4;
}
E.prototype.writeFloatLE = function(e, t, _) {
return W(this, e, t, !0, _);
};
E.prototype.writeFloatBE = function(e, t, _) {
return W(this, e, t, !1, _);
};
function x(e, t, _, n, S) {
S || Y(e, 0, _, 8);
i.write(e, t, _, n, 52, 8);
return _ + 8;
}
E.prototype.writeDoubleLE = function(e, t, _) {
return x(this, e, t, !0, _);
};
E.prototype.writeDoubleBE = function(e, t, _) {
return x(this, e, t, !1, _);
};
E.prototype.copy = function(e, t, _, n) {
_ || (_ = 0);
n || 0 === n || (n = this.length);
t >= e.length && (t = e.length);
t || (t = 0);
n > 0 && n < _ && (n = _);
if (n === _) return 0;
if (0 === e.length || 0 === this.length) return 0;
if (t < 0) throw new RangeError("targetStart out of bounds");
if (_ < 0 || _ >= this.length) throw new RangeError("sourceStart out of bounds");
if (n < 0) throw new RangeError("sourceEnd out of bounds");
n > this.length && (n = this.length);
e.length - t < n - _ && (n = e.length - t + _);
var i, S = n - _;
if (this === e && _ < t && t < n) for (i = S - 1; i >= 0; --i) e[i + t] = this[i + _]; else if (S < 1e3 || !E.TYPED_ARRAY_SUPPORT) for (i = 0; i < S; ++i) e[i + t] = this[i + _]; else Uint8Array.prototype.set.call(e, this.subarray(_, _ + S), t);
return S;
};
E.prototype.fill = function(e, t, _, n) {
if ("string" == typeof e) {
if ("string" == typeof t) {
n = t;
t = 0;
_ = this.length;
} else if ("string" == typeof _) {
n = _;
_ = this.length;
}
if (1 === e.length) {
var i = e.charCodeAt(0);
i < 256 && (e = i);
}
if (void 0 !== n && "string" != typeof n) throw new TypeError("encoding must be a string");
if ("string" == typeof n && !E.isEncoding(n)) throw new TypeError("Unknown encoding: " + n);
} else "number" == typeof e && (e &= 255);
if (t < 0 || this.length < t || this.length < _) throw new RangeError("Out of range index");
if (_ <= t) return this;
t >>>= 0;
_ = void 0 === _ ? this.length : _ >>> 0;
e || (e = 0);
var S;
if ("number" == typeof e) for (S = t; S < _; ++S) this[S] = e; else {
var T = E.isBuffer(e) ? e : j(new E(e, n).toString()), o = T.length;
for (S = 0; S < _ - t; ++S) this[S + t] = T[S % o];
}
return this;
};
var K = /[^+\/0-9A-Za-z-_]/g;
function Q(e) {
if ((e = k(e).replace(K, "")).length < 2) return "";
for (;e.length % 4 != 0; ) e += "=";
return e;
}
function k(e) {
return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
}
function j(e, t) {
t = t || Infinity;
for (var _, n = e.length, i = null, S = [], T = 0; T < n; ++T) {
if ((_ = e.charCodeAt(T)) > 55295 && _ < 57344) {
if (!i) {
if (_ > 56319) {
(t -= 3) > -1 && S.push(239, 191, 189);
continue;
}
if (T + 1 === n) {
(t -= 3) > -1 && S.push(239, 191, 189);
continue;
}
i = _;
continue;
}
if (_ < 56320) {
(t -= 3) > -1 && S.push(239, 191, 189);
i = _;
continue;
}
_ = 65536 + (i - 55296 << 10 | _ - 56320);
} else i && (t -= 3) > -1 && S.push(239, 191, 189);
i = null;
if (_ < 128) {
if ((t -= 1) < 0) break;
S.push(_);
} else if (_ < 2048) {
if ((t -= 2) < 0) break;
S.push(_ >> 6 | 192, 63 & _ | 128);
} else if (_ < 65536) {
if ((t -= 3) < 0) break;
S.push(_ >> 12 | 224, _ >> 6 & 63 | 128, 63 & _ | 128);
} else {
if (!(_ < 1114112)) throw new Error("Invalid code point");
if ((t -= 4) < 0) break;
S.push(_ >> 18 | 240, _ >> 12 & 63 | 128, _ >> 6 & 63 | 128, 63 & _ | 128);
}
}
return S;
}
function z(e) {
for (var t = [], _ = 0; _ < e.length; ++_) t.push(255 & e.charCodeAt(_));
return t;
}
function q(e, t) {
for (var _, n, i, S = [], T = 0; T < e.length && !((t -= 2) < 0); ++T) {
n = (_ = e.charCodeAt(T)) >> 8;
i = _ % 256;
S.push(i);
S.push(n);
}
return S;
}
function X(e) {
return n.toByteArray(Q(e));
}
function J(e, t, _, n) {
for (var i = 0; i < n && !(i + _ >= t.length || i >= e.length); ++i) t[i + _] = e[i];
return i;
}
}).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
}, {
"base64-js": 5,
ieee754: 9,
isarray: 7
} ],
7: [ function(e, t) {
var _ = {}.toString;
t.exports = Array.isArray || function(e) {
return "[object Array]" == _.call(e);
};
}, {} ],
8: [ function(e, t) {
(function(_) {
var n = e("util"), i = e("assert");
function S() {
return new Date().getTime();
}
var T, o = Array.prototype.slice, E = {};
T = "undefined" != typeof _ && _.console ? _.console : "undefined" != typeof window && window.console ? window.console : {};
for (var r = [ [ function() {}, "log" ], [ function() {
T.log.apply(T, arguments);
}, "info" ], [ function() {
T.log.apply(T, arguments);
}, "warn" ], [ function() {
T.warn.apply(T, arguments);
}, "error" ], [ function(e) {
E[e] = S();
}, "time" ], [ function(e) {
var t = E[e];
if (!t) throw new Error("No such label: " + e);
delete E[e];
var _ = S() - t;
T.log(e + ": " + _ + "ms");
}, "timeEnd" ], [ function() {
var e = new Error();
e.name = "Trace";
e.message = n.format.apply(null, arguments);
T.error(e.stack);
}, "trace" ], [ function(e) {
T.log(n.inspect(e) + "\n");
}, "dir" ], [ function(e) {
if (!e) {
var t = o.call(arguments, 1);
i.ok(!1, n.format.apply(null, t));
}
}, "assert" ] ], s = 0; s < r.length; s++) {
var R = r[s], a = R[0], c = R[1];
T[c] || (T[c] = a);
}
t.exports = T;
}).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
}, {
assert: 1,
util: 13
} ],
9: [ function(e, t, _) {
_.read = function(e, t, _, n, i) {
var S, T, o = 8 * i - n - 1, E = (1 << o) - 1, r = E >> 1, s = -7, R = _ ? i - 1 : 0, a = _ ? -1 : 1, c = e[t + R];
R += a;
S = c & (1 << -s) - 1;
c >>= -s;
s += o;
for (;s > 0; S = 256 * S + e[t + R], R += a, s -= 8) ;
T = S & (1 << -s) - 1;
S >>= -s;
s += n;
for (;s > 0; T = 256 * T + e[t + R], R += a, s -= 8) ;
if (0 === S) S = 1 - r; else {
if (S === E) return T ? NaN : Infinity * (c ? -1 : 1);
T += Math.pow(2, n);
S -= r;
}
return (c ? -1 : 1) * T * Math.pow(2, S - n);
};
_.write = function(e, t, _, n, i, S) {
var T, o, E, r = 8 * S - i - 1, s = (1 << r) - 1, R = s >> 1, a = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0, c = n ? 0 : S - 1, I = n ? 1 : -1, N = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
t = Math.abs(t);
if (isNaN(t) || Infinity === t) {
o = isNaN(t) ? 1 : 0;
T = s;
} else {
T = Math.floor(Math.log(t) / Math.LN2);
if (t * (E = Math.pow(2, -T)) < 1) {
T--;
E *= 2;
}
if ((t += T + R >= 1 ? a / E : a * Math.pow(2, 1 - R)) * E >= 2) {
T++;
E /= 2;
}
if (T + R >= s) {
o = 0;
T = s;
} else if (T + R >= 1) {
o = (t * E - 1) * Math.pow(2, i);
T += R;
} else {
o = t * Math.pow(2, R - 1) * Math.pow(2, i);
T = 0;
}
}
for (;i >= 8; e[_ + c] = 255 & o, c += I, o /= 256, i -= 8) ;
T = T << i | o;
r += i;
for (;r > 0; e[_ + c] = 255 & T, c += I, T /= 256, r -= 8) ;
e[_ + c - I] |= 128 * N;
};
}, {} ],
10: [ function(e, t) {
var _, n, i = t.exports = {};
function S() {
throw new Error("setTimeout has not been defined");
}
function T() {
throw new Error("clearTimeout has not been defined");
}
(function() {
try {
_ = "function" == typeof setTimeout ? setTimeout : S;
} catch (e) {
_ = S;
}
try {
n = "function" == typeof clearTimeout ? clearTimeout : T;
} catch (e) {
n = T;
}
})();
function o(e) {
if (_ === setTimeout) return setTimeout(e, 0);
if ((_ === S || !_) && setTimeout) {
_ = setTimeout;
return setTimeout(e, 0);
}
try {
return _(e, 0);
} catch (t) {
try {
return _.call(null, e, 0);
} catch (t) {
return _.call(this, e, 0);
}
}
}
function E(e) {
if (n === clearTimeout) return clearTimeout(e);
if ((n === T || !n) && clearTimeout) {
n = clearTimeout;
return clearTimeout(e);
}
try {
return n(e);
} catch (t) {
try {
return n.call(null, e);
} catch (t) {
return n.call(this, e);
}
}
}
var r, s = [], R = !1, a = -1;
function c() {
if (R && r) {
R = !1;
r.length ? s = r.concat(s) : a = -1;
s.length && I();
}
}
function I() {
if (!R) {
var e = o(c);
R = !0;
for (var t = s.length; t; ) {
r = s;
s = [];
for (;++a < t; ) r && r[a].run();
a = -1;
t = s.length;
}
r = null;
R = !1;
E(e);
}
}
i.nextTick = function(e) {
var t = new Array(arguments.length - 1);
if (arguments.length > 1) for (var _ = 1; _ < arguments.length; _++) t[_ - 1] = arguments[_];
s.push(new N(e, t));
1 !== s.length || R || o(I);
};
function N(e, t) {
this.fun = e;
this.array = t;
}
N.prototype.run = function() {
this.fun.apply(null, this.array);
};
i.title = "browser";
i.browser = !0;
i.env = {};
i.argv = [];
i.version = "";
i.versions = {};
function l() {}
i.on = l;
i.addListener = l;
i.once = l;
i.off = l;
i.removeListener = l;
i.removeAllListeners = l;
i.emit = l;
i.prependListener = l;
i.prependOnceListener = l;
i.listeners = function() {
return [];
};
i.binding = function() {
throw new Error("process.binding is not supported");
};
i.cwd = function() {
return "/";
};
i.chdir = function() {
throw new Error("process.chdir is not supported");
};
i.umask = function() {
return 0;
};
}, {} ],
11: [ function(e, t, _) {
arguments[4][2][0].apply(_, arguments);
}, {
dup: 2
} ],
12: [ function(e, t, _) {
arguments[4][3][0].apply(_, arguments);
}, {
dup: 3
} ],
13: [ function(e, t, _) {
arguments[4][4][0].apply(_, arguments);
}, {
"./support/isBuffer": 12,
_process: 10,
dup: 4,
inherits: 11
} ],
KeypadDispatch: [ function(e, t) {
"use strict";
cc._RF.push(t, "c37c1GBpUhDCoCJcFdLsA1S", "KeypadDispatch");
var _ = cc.Class({
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
} else UiManager.ShowAlert("exit game?", [ "yes", "no" ], function(e) {
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
_._instance = null;
_.getInstance = function() {
_._instance || (_._instance = new _());
return _._instance;
};
t.exports = _;
cc._RF.pop();
}, {} ],
LabelLocalized: [ function(e, t) {
"use strict";
cc._RF.push(t, "e4f88adp3hERoJ48DZ2PSAl", "LabelLocalized");
var _ = e("i18n");
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
return _.t(this.textKey);
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
LaunchScene: [ function(e, t) {
"use strict";
cc._RF.push(t, "a7016SMIJVNQrZxjzWJyjKM", "LaunchScene");
var _ = e("VersionManager"), n = e("SubGameManager"), i = e("BaseComponent");
cc.Class({
extends: i,
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
this.Text.string = "Updating" + Global.StrTime(".", this.count);
},
unSchduleUpdateText: function() {
Global.gUnSchduleFun(this, this.updateText);
},
start: function() {
var e = this;
cc.log("渠道号===", window.DISTRIBUTE_CHANNEL);
cc.sys.localStorage.setItem("debugId", 724001);
this.count = 0;
if (cc && cc.sys.isNative) {
if (window.DISTRIBUTE_CHANNEL == window.chanel.WIN32) {
cc.log("模拟器不热更新");
_.parseLocalCfg();
this.goLoginScene();
return;
}
cc.log("Global.isDebugTest===", Global.isDebugTest);
Global.isDebugTest ? UiManager.ShowChooseUpdate({
tips: "热更新选择",
items: [ {
text: "默认热更新地址"
}, {
text: "手动输入热更新地址"
}, {
text: "公司热更新地址"
} ]
}, function(t, _) {
console.log("点击了", t);
if (0 == t) {
e.goCheckUpdate(Global.Ghotupdateurl);
_.bClose();
} else if (1 == t) UiManager.ShowTextInput(function(t) {
if (t.length > 0) {
Global.Ghotupdateurl = t;
e.goCheckUpdate(t);
_.bClose();
} else {
console.log("请输入自定义的热更新地址");
_.bClose();
UiManager.ShowAlert("请输入正确自定义的热更新地址", [], function() {
Global.gExitGame();
});
}
}); else if (2 == t) {
Global.Ghotupdateurl = "http://192.168.65.151/hotupversion/configdebug";
e.goCheckUpdate(Global.Ghotupdateurl);
_.bClose();
}
}) : Global.gSchduleOnce(this, function() {
e.goCheckUpdate(Global.Ghotupdateurl);
}, 3);
Global.gSchduleFun(this, this.updateText, 1, cc.macro.REPEAT_FOREVER, 0);
} else {
_.getH5ScriptVersion();
this.goLoginScene();
}
},
goCheckUpdate: function(e) {
var t = this;
_.checkUpdate(e, function(e, i) {
n.parseCfgFromData(_.getSubGameCfg());
0 == e ? t.goLoginScene() : 100 == e ? t.Reboot() : 6 == e || 7 == e ? t.goLoginScene() : 8 == e ? UiManager.ShowAlert("发现新版本" + i, [], function() {
cc.sys.openURL(i);
}) : UiManager.ShowAlert("ErrorCode=====" + e, [], function() {
t.Reboot();
});
}, function(e, _, n) {
cc.log("load progress===", e);
cc.director.getScheduler().isScheduled(t.updateText, t) && t.unSchduleUpdateText();
var i = "updateing" + e + "% (" + _ + "kb/" + n + "kb)";
t.Text.string = i;
});
},
Reboot: function() {
this.scheduleOnce(function() {
Global.gReBoot();
}, 2);
},
goLoginScene: function() {
var e = this;
Global.gSchduleOnce(this, function() {
UiManager.gShowLoading(function(t) {
t.updataProgress(30);
e.scheduleOnce(function() {
UiManager.gPreloadScene("LoginScene", null, function() {
t.updataProgress(100);
});
}, 2);
}, function() {
UiManager.gLoadScene("LoginScene");
});
}, 1.5);
}
});
cc._RF.pop();
}, {
BaseComponent: "BaseComponent",
SubGameManager: "SubGameManager",
VersionManager: "VersionManager"
} ],
LoadingLayer: [ function(e, t) {
"use strict";
cc._RF.push(t, "2bf46C7+jhAWb9zRwpfreic", "LoadingLayer");
var _ = e("BaseComponent");
e("console").timeStamp;
cc.Class({
extends: _,
properties: {},
onLoad: function() {
this._super();
},
onDestroy: function() {
this._super();
},
start: function() {
this.ProgreeNode = cc.find("progress", this.node);
this.percent = 0;
this.speed = 0;
this.targetPercent = 0;
},
updataProgress: function(e, t) {
void 0 === t && (t = 1);
this.targetPercent = e;
this.speed = (this.targetPercent - this.percent) / t;
},
setPercent: function(e) {
if (this.ProgreeNode) {
this.ProgreeNode.getComponent("cc.ProgressBar").progress = e / 100;
this.percent = e;
}
},
setCallFun: function(e, t) {
this.progresscall = e;
this.endcall = t;
},
update: function(e) {
if (this.percent >= 100) {
this.percent = 100;
this.setPercent(this.percent);
this.endcall && this.endcall(this);
} else {
if (this.targetPercent > this.percent) {
var t = parseFloat((this.percent + this.speed * e).toFixed(1));
this.setPercent(t);
}
if (this.progresscall) {
this.progresscall(this);
this.progresscall = null;
}
}
}
});
cc._RF.pop();
}, {
BaseComponent: "BaseComponent",
console: 8
} ],
LoginScene: [ function(e, t) {
"use strict";
cc._RF.push(t, "43150sdB6ZHSKFTTRw2QZE7", "LoginScene");
var _ = e("VersionManager"), n = e("Devices"), i = e("BaseComponent");
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
1 == Global.GgameType && (this.VersionText.string = n.getAppVersion() + "(R" + _.getScriptVersion() + ")");
3 == Global.GgameType && (this.VersionText.string = n.getAppVersion() + "(D" + _.getScriptVersion() + ")");
var t = cc.find("uipanel/gotest", this.node), i = cc.find("uipanel/wechat", this.node), S = (cc.find("uipanel/label", this.node), 
cc.find("uipanel/wechatShare", this.node));
ua.darkButton(i, function() {
gg.wechat.login(function(e) {
1 == e.ret ? console.log("WeChatModule login success----" + JSON.stringify(e)) : console.log("WeChatModule login Faild----" + JSON.stringify(e));
});
});
ua.darkButton(S, function() {
gg.wechat.shareTextWx("666", 0, function(e, t) {
1 == e ? console.log("WeChatModule share success----" + t) : console.log("WeChatModule share Faild----" + t);
});
});
ua.darkButton(t, function() {
e.goTestScene();
});
ua.darkButton(this.node, function(e) {
console.log("getLocation=====", e.getLocation().x, e.getLocation().y);
console.log("getLocationInView=====", e.getLocationInView().x, e.getLocationInView().y);
});
cc.director.on("test", function(e) {
cc.log("test event", e);
});
},
goTestScene: function() {
var e = this;
UiManager.gShowLoading(function(t) {
t.updataProgress(30);
e.scheduleOnce(function() {
UiManager.gPreloadScene("TestScene", null, function() {
t.updataProgress(100);
});
}, 2);
}, function() {
UiManager.gLoadScene("TestScene");
});
}
});
cc._RF.pop();
}, {
BaseComponent: "BaseComponent",
Devices: "Devices",
VersionManager: "VersionManager"
} ],
MainScene: [ function(e, t) {
"use strict";
cc._RF.push(t, "280c3rsZJJKnZ9RqbALVwtK", "MainScene");
e("Base64Tool");
var _ = e("Devices");
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
cc.director.getScene().getChildByName("Canvas").getChildByName("label").getComponent(cc.Label).string = "设备版本号：" + _.getAppVersion() + "\nchanle" + window.DISTRIBUTE_CHANNEL;
},
launchFullScreen: function(e) {
if (e.requestFullScreen) e.requestFullScreen(); else if (e.mozRequestFullScreen) e.mozRequestFullScreen(); else if (e.webkitRequestFullScreen) e.webkitRequestFullScreen(); else {
if (!e.msRequestFullscreen) return !0;
e.msRequestFullscreen();
}
},
onLoad: function() {},
update: function() {}
});
cc._RF.pop();
}, {
Base64Tool: "Base64Tool",
Devices: "Devices",
GameClient: "GameClient",
HttpHelper: "HttpHelper"
} ],
OnlineWS: [ function(e, t) {
"use strict";
cc._RF.push(t, "88503myvH9CnIObyoxlBC25", "OnlineWS");
var _ = e("buffer").Buffer;
cc.Class({
ctor: function() {
this.bclientClose = !1;
},
connect: function(t, n) {
this.netData = new Array();
this.callbackMap = new Map();
var i = e("Onlinedef"), S = this;
this._wsiSendBinary = null == t ? new WebSocket("ws://" + i.hos + ":" + i.port + "//") : new WebSocket("ws://" + t + ":" + n + "//");
cc.log("-连接--------", t + ":" + n);
this._wsiSendBinary.binaryType = "arraybuffer";
this._wsiSendBinary.onopen = function() {
cc.log("网络连接成功");
S.reportConnectSuc();
};
this._wsiSendBinary.onmessage = function(t) {
S.arrayU8ToU16Array(new Uint8Array(t.data));
var n = new _(t.data, "utf8"), i = e("Package").ParseStrToPackage(n.toString());
cc.log("onmessage--33333333333333.........-", i);
S.callLocalFun(i.m_header_name, i.m_json);
};
this._wsiSendBinary.onerror = function() {
cc.log("网络错误");
S.reportOnlineOff("网络错误");
};
this._wsiSendBinary.onclose = function() {
S._wsiSendBinary = null;
cc.log("网络已经断开");
S.reportOnlineOff("网络已经断开");
};
this.onLoad();
},
addHead: function(e) {
return e;
},
addLocalCallback: function(e, t) {
null != e && null != t && null != t && this.callbackMap.set(e, t);
},
arrayU8ToU16Array: function(e) {
for (var t = "", _ = 0, n = 0, i = 0; i < e.length; i++) {
if (224 == (240 & e[i])) {
_ = 3;
n |= (15 & e[i]) << 12;
n |= (63 & e[i + 1]) << 6;
n |= 63 & e[i + 2];
} else if (192 == (224 & e[i])) {
_ = 2;
n |= (31 & e[i]) << 6;
n |= 63 & e[i + 1];
} else if (e[i] <= 127) {
_ = 1;
n |= 127 & e[i];
}
i += _ - 1;
t += String.fromCharCode(n);
n = 0;
_ = 0;
}
return t;
},
Uint8ArrayToString: function(e) {
for (var t = "", _ = 0; _ < e.length; _++) t += String.fromCharCode(e[_]);
return t;
},
stringToUint8Array: function(e) {
for (var t = [], _ = 0, n = e.length; _ < n; ++_) t.push(e.charCodeAt(_));
return new Uint8Array(t);
},
string2u8array: function(e) {
for (var t = new Uint8Array(3 * e.length), _ = 0, n = 0; n < e.length; n++) {
var i = e.charCodeAt(n);
if (i <= 127) {
var S = 127 & i;
t[_++] = S;
} else if (i >= 128 && i <= 2047) {
var T = 63 & i | 128;
S = i >> 6 & 31 | 192;
t[_++] = S;
t[_++] = T;
} else if (i >= 2048 && i <= 65535) {
var o = 63 & i | 128;
T = i >> 6 & 63 | 128, S = i >> 12 & 15 | 224;
t[_++] = S;
t[_++] = T;
t[_++] = o;
}
}
return new Uint8Array(t.buffer, 0, _);
},
send: function(e, t) {
e.m_header_name != window.Message.MS_PingPong && cc.log("Client send ===", e);
t && this.addLocalCallback(e.m_header_name, t);
e = e.encode();
if (this._wsiSendBinary) if (this._wsiSendBinary.readyState === WebSocket.OPEN) {
var _ = this.string2u8array(e.toString("utf-8"));
this._wsiSendBinary.send(_);
} else {
cc.log("网络已经断开", this._wsiSendBinary.readyState);
this.reportOnlineOff("网络已经断开");
}
},
getWsState: function() {
return null != this._wsiSendBinary && this._wsiSendBinary.readyState === WebSocket.OPEN;
},
onLoad: function() {},
callLocalFun: function(e, t) {
var _ = this.callbackMap.get(e);
if (null != _) {
cc.log("=========OnlineWs===heart==", e);
_(t);
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
buffer: 6
} ],
Onlinedef: [ function(e, t) {
"use strict";
cc._RF.push(t, "57b1eEV+nBLkozPyr6HImkN", "Onlinedef");
t.exports = {
host: "echo.websocket.org",
port: "80"
};
cc._RF.pop();
}, {} ],
Package: [ function(e, t) {
"use strict";
cc._RF.push(t, "328a3iqtbhCEafyBWl8EuDx", "Package");
var _ = e("buffer").Buffer;
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
biuldReq: function(t, _) {
var n;
(n = new (n = e("Package"))()).m_proto_type = "REQ";
n.m_json = _;
n.m_header_name = t;
return n;
},
biuldNotify: function(t, _) {
var n;
(n = new (n = e("Package"))()).m_proto_type = "NOTIFY";
n.m_json = _;
n.m_header_name = t;
return n;
},
ParseStrToPackage: function(t) {
var _;
(_ = new (_ = e("Package"))()).ParseProto(t);
_.ParseHeader(t);
_.ParseJson(t);
return _;
}
},
encode: function() {
var e = this.m_game_name + " " + this.m_proto_type + " " + this.m_version, t = "";
this.m_header_uid = 0;
for (var n in this) if (n.indexOf("header") > 0) {
var i = n.lastIndexOf("_"), S = n.substr(i + 1);
"m_header_ext_data" == n && (S = "ext-data");
t += S + ":" + this[n] + "\n";
}
var T = JSON.stringify(this.m_json);
1 == this.m_header_type && (T = new _(T + "\n").toString("base64"));
return e + "\n" + t + "\n" + T + "\n";
},
ParseProto: function(e) {
var t = e.indexOf(" "), _ = e.substr(0, t);
this.m_game_name = _;
var n = e.indexOf(" ", t + 1), i = e.substr(t + 1, n - t - 1);
this.m_proto_type = i;
var S = e.indexOf("\n"), T = e.substr(n + 1, S - n - 1);
this.m_version = T;
},
ParseHeader: function(e) {
for (var t = 0, _ = 0; t < e.length - 1; ) {
if ("\n" == e[t]) {
var n = e.substr(_, t - _), i = n.indexOf(":"), S = n.substr(0, i), T = n.substr(i + 1, n.length - i - 1);
"type" == S && (this.m_header_type = T);
"uid" == S && (this.m_header_uid = T);
"name" == S && (this.m_header_name = T);
"id" == S && (this.m_header_id = T);
"sign" == S && (this.m_header_sign = T);
"ext-data" == S && (this.m_header_ext_data = T);
"state" == S && (this.m_header_state = T);
_ = t + 1;
}
t++;
}
},
lastIndexOf: function(e, t, _) {
for (var n = e.lastIndexOf(t), i = 0; i < _ - 1; i++) n = e.lastIndexOf(t, n - 1);
return n;
},
ParseJson: function(e) {
var t = this.lastIndexOf(e, "\n", 2), n = e.substr(t + 1, e.length - t - 2);
1 == this.m_header_type && (n = new _(n, "base64").toString());
n = JSON.parse(n);
this.m_json = n;
},
ctor: function() {
this.bclientClose = !1;
}
});
cc._RF.pop();
}, {
Package: "Package",
buffer: 6
} ],
PhysicsCenter: [ function(e, t) {
"use strict";
cc._RF.push(t, "8b2c803BjFI/ZRhXMTnBd1H", "PhysicsCenter");
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
Save: [ function(e, t) {
"use strict";
cc._RF.push(t, "2e2b04XOU5KEb80xlTHT7LI", "Save");
window.Save = {
set: function(e, t) {
cc.sys.localStorage.setItem(e, t);
},
get: function(e, t) {
var _ = cc.sys.localStorage.getItem(e);
null === _ && (_ = t);
return _;
}
};
cc._RF.pop();
}, {} ],
SlotScene: [ function(e, t) {
"use strict";
cc._RF.push(t, "52728dRoZdOio+6APtNJstt", "SlotScene");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {
var e = this;
this.Slots = new Array();
for (var t = 1; t <= 3; t++) {
var _ = cc.find("content/slot" + t, this.node);
this.Slots.push(_);
}
var n = cc.find("UI/btn_spin", this.node);
ua.darkButton(n, function() {
cc.log("Start spin");
for (var t = 0; t < e.Slots.length; t++) {
var _ = e.Slots[t], n = _.getComponent("Slot");
if (n) {
cc.log(t, _);
n.Spin();
var i = Math.floor(8 * Math.random());
n.StopAtIndex(i, function() {
console.log("stop-");
});
}
}
});
var i = cc.find("UI/btn_back", this.node);
ua.darkButton(i, function() {
cc.director.loadScene("TestScene");
});
},
start: function() {
var e = cc.find("content/slot1", this.node), t = cc.find("content/bg", this.node);
t.height = e.height;
t.width = e.width;
}
});
cc._RF.pop();
}, {} ],
Slot: [ function(e, t) {
"use strict";
cc._RF.push(t, "5374dvKetxDEoT2sKdzOV9Z", "Slot");
e("buffer").Buffer;
window.SlotState = {
eStoped: 0,
eSpeedUp: 1,
eMaxSpeed: 2,
eWaitSpeedDown: 3,
eSpeedDown: 4,
eKickBack: 5
};
var _ = [ "stop_banana", "stop_begemot", "stop_cocktail", "stop_crocodile", "stop_kakadu", "stop_lion", "stop_man", "stop_monkey" ];
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
var e = this, t = "slots/" + _[this.stopIndex];
cc.resources.load(t, function(t, _) {
t ? cc.log("err==", t) : _ && (e.ItemArray[e.stopIndex].getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(_));
});
for (var n = this.node.children, i = 0; i < n.length; i++) i != this.stopIndex && function() {
var e = n[i], t = Math.floor(Math.random() * _.length), S = "slots/" + _[t];
cc.resources.load(S, function(t, _) {
t ? cc.log("err==", t) : _ && (e.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(_));
});
}();
},
start: function() {},
addItem: function() {
var e = this;
this.ItemArray = new Array();
for (var t = function(t) {
(i = cc.instantiate(e.item)).parent = e.node;
i.x = 0;
i.tag = t;
0 == e.movedirection ? i.y = e.node.height / 2 - i.height * t - i.height / 2 - e.space * (t + 1) : i.y = -e.node.height / 2 + i.height * t + i.height / 2 + e.space * (t + 1);
i.getChildByName("text").getComponent(cc.Label).string = t;
var n = i.getComponent(cc.Sprite);
if (n) {
S = Math.floor(Math.random() * _.length);
T = "slots/" + _[S];
cc.resources.load(T, function(e, t) {
e ? cc.log("err==", e) : t && (n.spriteFrame = new cc.SpriteFrame(t));
});
}
e.ItemArray.push(i);
}, n = 0; n < 8; n++) {
var i, S, T;
t(n);
}
this.item.height = this.ItemArray[0].height;
},
updateItem: function(e) {
if (0 != e) for (var t = this.node.children, _ = 0; _ < t.length; _++) {
var n = t[_];
if (e > 0) {
var i = this.node.height / 2 + n.height / 2;
if (n.y >= i) {
n.y = n.y + (-t.length * this.item.height - t.length * this.space);
this.curIndex += 1;
this.curIndex > 7 && (this.curIndex -= 8);
} else {
n.y = n.y + e;
if (n.y >= i) {
n.y = n.y + (-t.length * this.item.height - t.length * this.space);
this.curIndex += 1;
this.curIndex > 7 && (this.curIndex -= 8);
}
}
} else {
i = -this.node.height / 2 - n.height / 2;
if (n.y <= i) {
n.y = n.y + (t.length * this.item.height + t.length * this.space);
this.curIndex += 1;
this.curIndex > 7 && (this.curIndex -= 8);
} else {
n.y = n.y + e;
if (n.y <= i) {
n.y = n.y + (t.length * this.item.height + t.length * this.space);
this.curIndex += 1;
this.curIndex > 7 && (this.curIndex -= 8);
}
}
}
}
},
updateSlotsToDown: function(e) {
var t = e;
if (this.SlotState == window.SlotState.eSpeedUp) if (this.SpeedY > -50) {
this.SpeedY += this.Acceleration * t;
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
var _ = 3 * this.ItemArray.length * this.space + 3 * this.ItemArray.length * this.item.height + 35;
this.Acceleration = this.SpeedY * this.SpeedY / (2 * _);
}
},
updateSlotsToTop: function(e) {
var t = e;
if (this.SlotState == window.SlotState.eSpeedUp) if (this.SpeedY < 50) {
this.SpeedY += this.Acceleration * t;
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
var _ = 3 * this.ItemArray.length * this.space + 3 * this.ItemArray.length * this.item.height + 35;
this.Acceleration = -this.SpeedY * this.SpeedY / (2 * _);
}
},
Bounce: function() {
for (var e = this, t = this.node.children, _ = 0; _ < t.length; _++) {
var n = t[_];
if (n) {
var i;
i = 0 == this.movedirection ? cc.moveBy(.5, cc.Vec2(0, -10)).easing(cc.easeOut(1)) : cc.moveBy(.5, cc.Vec2(0, 10)).easing(cc.easeOut(1));
var S = cc.callFunc(function() {
if (e.StopCall) {
e.StopCall();
e.StopCall = null;
}
e.HaveCompelete = !0;
}), T = cc.sequence(i, S);
n.runAction(T);
}
}
},
resetPosY: function() {
for (var e = this.stopIndex, t = this.ItemArray[e].y, _ = this.node.children, n = 0; n < _.length; n++) {
var i = _[n];
i && (i.y = i.y - t);
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
StopAtIndex: function(e, t) {
console.log("将会停在==", e);
this.stopIndex = e;
t && (this.StopCall = t);
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
buffer: 6
} ],
Sound: [ function(e, t) {
"use strict";
cc._RF.push(t, "e3c22Dpi01Gp4EerFjvIKH0", "Sound");
window.Sound = {
audioId: {},
backGroundResPath: {},
_playEffect: function(e, t, _, n, i) {
var S = this;
if (!(i && null != S.audioId[e] && S.audioId[e].length > 0)) {
null == S.audioId[e] && (S.audioId[e] = []);
null == t && (t = !1);
null == _ && (_ = 1);
"number" != typeof _ && (_ = parseFloat(_));
var T = -1;
cc.resources.load(e, cc.AudioClip, function(e, n) {
if (e) cc.log(e); else {
T = cc.audioEngine.playEffect(n, t);
S.setEffcetVolume(_);
}
});
S.audioId[e].unshift(T);
cc.audioEngine.setFinishCallback(T, function() {
S.audioId[e].pop();
n && n();
});
return T;
}
},
playMusic: function(e, t, _, n, i) {
var S = this;
if (!(i && null != S.audioId[e] && S.audioId[e].length > 0)) {
null == S.audioId[e] && (S.audioId[e] = []);
null == t && (t = !1);
null == _ && (_ = 1);
"number" != typeof _ && (_ = parseFloat(_));
cc.resources.load(e, cc.AudioClip, function(e, n) {
if (e) cc.log(e); else {
cc.audioEngine.playMusic(n, t);
S.setBackGroundVolume(_);
}
});
}
},
playBackGround: function(e) {
var t = this.getBackGroundVolume();
if (this.curPlayBgSound) {
if (this.curPlayBgSound == e) return !1;
this.stop(this.curPlayBgSound);
}
this.curPlayBgSound = e;
this.playMusic(e, !0, t / 100);
this.backGroundResPath[e] = e;
return !0;
},
playEffect: function(e, t, _, n, i) {
var S = this.getEffectVolume();
this._playEffect(e, t, S / 100, n, i);
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
for (var t in this.backGroundResPath) if ("string" == typeof this.backGroundResPath[t] && null != this.audioId[t] && this.audioId[t].length > 0) {
this.audioId[t][0];
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
if (null != this.audioId[e] && 0 != this.audioId[e].length) {
for (var t = 0; t < this.audioId[e].length; t++) {
var _ = this.audioId[e].pop();
cc.audioEngine.stop(_);
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
SubGameManager: [ function(e, t) {
"use strict";
cc._RF.push(t, "58117jddOFO2ZIu1G2cUrFt", "SubGameManager");
var _ = e("HttpHelper"), n = {
remoteData: null
}, i = "", S = "";
if (cc && cc.sys.isNative) {
i = jsb.fileUtils.getWritablePath() + "SubGames/";
S = jsb.fileUtils.getWritablePath() + "SubGamesTemp/";
}
n.parseCfgFromData = function(e) {
this.remoteData = e;
cc.log("SubGameManager.parseCfgFromData", this.remoteData);
};
n.getSubGameState = function(e, t) {
this.curSubgameName = e;
var _ = this.getLoclSubGameCfg(e);
if (_) {
var n = this.remoteData.games[e].version, i = this.remoteData.games[e].debugVersion;
if (this.isDeugPalyer()) {
cc.log("是测试玩家");
n = i;
}
var S = _.scriptVersion;
cc.log("子包本地版本=", e, S);
cc.log("子包远程debug版本=", e, i);
cc.log("子包远程正式版本=", e, n);
t(S != n ? "need_update" : "no_need_update");
} else t("not_in_app");
};
n.getLoclSubGameCfg = function(e) {
var t = i + e + "/appinfo.json";
if (jsb.fileUtils.isFileExist(t)) {
var _ = jsb.fileUtils.getStringFromFile(t);
if (Global.isjson(_)) {
var n = JSON.parse(_);
this.localSubGameCfg = n;
return this.localSubGameCfg;
}
this.callFunWithState(1, "读取子游戏本地配置失败 json配置不合法====" + e);
this.localSubGameCfg = {
scriptVersion: -1,
files: []
};
return null;
}
this.localSubGameCfg = {
scriptVersion: -1,
files: []
};
return null;
};
n.downSubGame = function(e, t, n) {
var i = this;
this.baseUrl = this.remoteData.baseUrl;
this.downversion = this.remoteData.games[e].version;
var S = this.remoteData.games[e].debugVersion;
this.isDeugPalyer() && (this.downversion = S);
var T = this.baseUrl + e + "_" + this.downversion + "/appinfo.json";
this.progressCall = t;
this.finishCall = n;
cc.log("remoteSubGameCfgUrl=", T);
_.sendHttpRequest(T, function(t) {
if (null != t) if (Global.isjson(t)) {
i.remoteSubgameCfg = JSON.parse(t);
i.comparefile();
} else i.callFunWithState(4, "读取远程子游戏远程md5-json不合法====" + e); else i.callFunWithState(3, "读取远程子游戏配置失败====" + e);
});
};
n.comparefile = function() {
for (var e = this.localSubGameCfg.files, t = this.remoteSubgameCfg.files, _ = new Array(), n = {}, i = {}, S = 0; S < e.length; S++) {
var T = (r = e[S]).filename, o = r.md5, E = r.size;
n[T] = {
md5: o,
fileSize: E
};
}
for (S = 0; S < t.length; S++) {
var r;
T = (r = t[S]).filename, o = r.md5, E = r.size;
i[T] = {
md5: o,
fileSize: E
};
}
for (var s in i) {
var R = i[s], a = R.md5;
E = R.fileSize;
n[s] ? a != n[s].md5 && _.push({
fileName: s,
md5: a,
fileSize: E
}) : _.push({
fileName: s,
md5: a,
fileSize: E
});
}
for (var c in _) {
E = _[c].fileSize;
this.totalDownSize = this.totalDownSize + E;
}
cc.log("准备下载子游戏差异文件");
this.downFiles(_);
};
n.downFiles = function(e) {
if (0 != e.length) {
var t = this, _ = e;
t.DownIndex = 0;
var n = !1;
(function e(T) {
var o = t.baseUrl, E = _[T].fileName, r = _[T].fileSize, s = o + E.replace(t.curSubgameName, t.curSubgameName + "_" + t.downversion), R = S + E, a = i + E, c = S + Global.GgetDirByUrl(E), I = i + Global.GgetDirByUrl(E);
Global.GcreateDir(c);
Global.GcreateDir(I);
_[T].tempfile = R;
_[T].realfile = a;
cc.log("下载=====", s);
Global.GDownFile(s, function(i) {
if (i) {
Global.GwriteDataToFile(i, R);
t.downedSize = t.downedSize + r;
if (t.DownIndex < _.length - 1) {
t.DownIndex = t.DownIndex + 1;
t.progressCall && t.progressCall(Math.floor(t.DownIndex / _.length * 100), (t.downedSize / 1e3).toFixed(1), (t.totalDownSize / 1e3).toFixed(1));
cc.log("downError", n);
0 == n && e(t.DownIndex);
} else {
t.progressCall && t.progressCall(Math.floor(100), (t.downedSize / 1e3).toFixed(1), (t.totalDownSize / 1e3).toFixed(1));
t.MoveFiles(_);
}
} else {
n = !0;
t.callFunWithState(5, "子游戏下载单个文件失败=" + s);
}
});
})(t.DownIndex);
} else this.MoveDone();
}, n.MoveFiles = function(e) {
this.moveStep = 0;
var t = this;
(function _(n) {
var S = e[n].tempfile, T = e[n].realfile, o = Global.GgetDataFromFile(S);
if (o) {
Global.GwriteDataToFile(o, T);
if (t.moveStep < e.length - 1) {
t.moveStep = t.moveStep + 1;
_(t.moveStep);
} else t.MoveDone();
} else {
var E = i + t.curSubgameName;
this.removeLocalBundle(E);
t.callFunWithState(6, "移动文件失败" + S);
}
})(this.moveStep);
}, n.MoveDone = function() {
var e = JSON.stringify(this.remoteSubgameCfg, null, 4), t = i + this.curSubgameName + "/appinfo.json";
Global.GwriteStringToFile(e, t);
this.callFunWithState(0, "下载子游戏完成");
}, n.callFunWithState = function(e, t) {
cc.log(t + "====" + e);
this.finishCall && this.finishCall(e);
};
n.getLocalBundlePath = function(e) {
return i + e;
};
n.removeLocalBundle = function(e) {
var t = i + e;
jsb.fileUtils.removeDirectory(t);
jsb.fileUtils.createDirectory(t);
};
n.isDeugPalyer = function() {
var e = this.remoteData.debugUid, t = cc.sys.localStorage.getItem("debugId");
return !!Global.GIsArrContain(e, t);
};
t.exports = n;
cc._RF.pop();
}, {
HttpHelper: "HttpHelper"
} ],
TestScene: [ function(e, t) {
"use strict";
cc._RF.push(t, "43e41jtsGxORJ0f6gUlDaqj", "TestScene");
e("xxtea"), e("i18n"), e("Package"), e("Devices");
var _ = e("VoiceNative"), n = e("BaseComponent"), i = e("SubGameManager");
cc.Class({
extends: n,
properties: {},
onLoad: function() {
this._super();
_.init();
},
onDestroy: function() {
this._super();
},
start: function() {
var e = this;
cc && cc.sys.isNative && jsb.fileUtils.getSearchPaths();
var t = cc.find("uipanel/New Sprite", this.node), n = cc.find("content/sp4", this.node), S = Global.ConverToWorldPos(t), T = Global.ConverToNodePos(n.parent, S);
this.sp4OldPos = n.getPosition();
n.IsOriginPos = !0;
var o = cc.find("uipanel/btn_posconvert", this.node);
ua.darkButton(o, function() {
if (!(n.getNumberOfRunningActions() > 0)) {
if (1 == n.IsOriginPos) {
var t = cc.moveTo(1, T).easing(cc.easeSineOut());
n.runAction(t);
} else {
t = cc.moveTo(1, e.sp4OldPos).easing(cc.easeSineOut());
n.runAction(t);
}
n.IsOriginPos = !n.IsOriginPos;
}
});
t.on(cc.Node.EventType.TOUCH_START, function() {
t.opacity = 150;
});
t.on(cc.Node.EventType.TOUCH_END, function() {
t.opacity = 255;
});
t.on(cc.Node.EventType.TOUCH_CANCEL, function() {
t.opacity = 255;
});
var E = cc.find("uipanel/btn_Alert", this.node);
ua.darkButton(E, function() {
UiManager.ShowAlert("666", [ "LOL", "LOL1", "LOL#" ], function(e) {
cc.log("click==", e);
});
});
var r = cc.find("uipanel/btn_showWaiting", this.node);
ua.darkButton(r, function() {
e.showWiat(!0);
setTimeout(function() {
e.showWiat(!1);
}, 3e3);
});
var s = cc.find("uipanel/btn_EventTest", this.node);
ua.darkButton(s, function() {
EventManager.dispatchEvent(e.node, RefreshInfo, {
name: "Lee123"
});
});
var R = cc.find("uipanel/loadTex", this.node);
Global.GloadPic("http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJ1E1XEicr8vAj5o8DMT7GTfCtFyC6vok9TImPjf6BfKBKLFA8hKBS6Wiaz2GJyQQWoV5lA7fhqS4SA/96", function(e) {
e && (R.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(e));
});
var a = null, c = cc.find("uipanel/btn_Speech", this.node);
c.on(cc.Node.EventType.TOUCH_START, function() {
a = Date.now();
cc.log("开始录音");
e.SpeechFile = Date.now() + ".amr";
_.prepare(e.SpeechFile);
}, this);
c.on(cc.Node.EventType.TOUCH_END, function() {
cc.log("结束录音");
if (Date.now() - a < 1e3) {
_.cancel();
cc.log("时间小于一秒");
UiManager.ShowAlert("时间小于一秒", [ "Yes" ], function() {});
} else if (Date.now() - a > 8e3) {
_.cancel();
UiManager.ShowAlert("录音时间大于8s", [ "Yes" ], function() {});
} else if (null != a) {
_.release();
var t = Date.now() - a;
console.log("record time。。。。。  " + t);
var n = _.getVoiceData(e.SpeechFile);
console.log("sound data。。。。。  " + n);
n && setTimeout(function() {
var t = e.SpeechFile;
_.play(t);
_.writeVoice(t, n);
}, 2e3);
}
}, this);
c.on(cc.Node.EventType.TOUCH_CANCEL, function() {
_.cancel();
cc.log("取消录音");
}, this);
EventManager.on(this.node, RefreshInfo, this.EventTest);
var I = cc.find("uipanel/btn_fps", this.node);
ua.darkButton(I, function() {
console.log("setDisplayStats-", !cc.debug.isDisplayStats());
cc.debug.setDisplayStats(!cc.debug.isDisplayStats());
});
var N = cc.find("uipanel/btn_showpopLayer", this.node);
ua.darkButton(N, function() {
UiManager.gLoadPrefabRes("prefabs/poplayer", function(e) {
if (e) {
cc.director.getScene().getChildByName("Canvas").addChild(e);
var t = e.getComponent("poplayer");
t && t.show();
}
});
});
var l = cc.find("content/sp3", this.node);
l.isGray = !1;
var C = cc.find("uipanel/btn_GrayRenderCom", this.node);
ua.darkButton(C, function() {
var e = l.getComponent(cc.Sprite);
if (0 == l.isGray) {
var t = cc.MaterialVariant.createWithBuiltin("2d-gray-sprite");
e.setMaterial(0, t);
} else {
var _ = cc.MaterialVariant.createWithBuiltin("2d-sprite");
e.setMaterial(0, _);
}
l.isGray = !l.isGray;
});
var A = cc.find("uipanel/btn_bubble", this.node);
ua.darkButton(A, function() {
UiManager.gLoadScene("bubbleScene");
});
var O = cc.find("uipanel/btn_loadbundle", this.node);
ua.darkButton(O, function() {
i.getSubGameState("bundleScene", function(t) {
if ("not_in_app" == t) {
cc.log("下载子游戏===");
e.showWiat(!0);
i.downSubGame("bundleScene", function(e) {
cc.log("downSubGame progress===", e);
}, function(t) {
e.showWiat(!1);
cc.log("downSubGame return code == ", t);
0 == t ? UiManager.ShowAlert("下载成功", [], function() {
UiManager.gloadBundleScene("bundleScene", function(e) {
0 == e ? cc.log("gloadBundleScene success") : cc.log("gloadBundleScene failed=", e);
});
}) : UiManager.ShowAlert("下载失败" + t, [], function() {});
});
} else if ("need_update" == t) {
cc.log("需要更新====");
e.showWiat(!0);
i.downSubGame("bundleScene", function(e) {
cc.log("updateSubGame progress===", e);
}, function(t) {
e.showWiat(!1);
cc.log("updateSubGame return code == ", t);
0 == t ? UiManager.ShowAlert("更新成功", [], function() {
UiManager.gloadBundleScene("bundleScene", function(e) {
0 == e ? cc.log("gloadBundleScene success") : cc.log("gloadBundleScene failed=", e);
});
}) : UiManager.ShowAlert("更新失败" + t, [], function() {});
});
} else {
cc.log("子包本地和远程版本一致，直接进游戏");
UiManager.gloadBundleScene("bundleScene", function(e) {
0 == e ? cc.log("gloadBundleScene success") : cc.log("gloadBundleScene failed=", e);
});
}
});
});
var d = cc.find("uipanel/btn_goslot", this.node);
ua.darkButton(d, function() {
cc.director.loadScene("SlotScene");
});
cc.find("content/sp1", this.node).getComponent(cc.RenderComponent).getMaterial(0);
var u = cc.find("garpgicsnode", this.node), h = u.getComponent(cc.Graphics);
u.on(cc.Node.EventType.TOUCH_START, function(e) {
var _ = e.getTouches(), n = _[0].getLocation();
_[0].getLocationInView();
n = t.parent.convertToNodeSpaceAR(n);
var i = Global.GgetTwoV2Angle(t.getPosition(), n);
t.angle = -i;
h.moveTo(n.x, n.y);
t.getPosition().subSelf(n).normalizeSelf();
});
u.on(cc.Node.EventType.TOUCH_MOVE, function(e) {
var _ = e.getTouches()[0].getLocation();
_ = t.parent.convertToNodeSpaceAR(_);
var n = Global.GgetTwoV2Angle(t.getPosition(), _);
t.angle = -n;
h.lineTo(_.x, _.y);
h.stroke();
});
var D = cc.view.getVisibleSize(), f = cc.v2(-D.width / 2, D.height / 2), p = cc.v2(D.width / 2, -D.height / 2), M = Global.GgetTwoV2Angle(f, p);
cc.find("uipanel/New Sprite", this.node).angle = -M;
var L = cc.view.getVisibleSize();
(u = u.getComponent(cc.Graphics)).moveTo(-L.width / 2, L.height / 2);
u.quadraticCurveTo(0, 0, L.width / 2, L.height / 2);
u.stroke();
},
startMove: function() {
var e = this, t = (cc.find("garpgicsnode", this.node), cc.find("uipanel/btn_goslot", this.node)), _ = cc.view.getVisibleSize(), n = [ cc.v2(-_.width / 2, _.height / 2), cc.v2(0, 0), cc.v2(_.width / 2, _.height / 2) ], i = cc.bezierTo(2, n);
t.setPosition(cc.v2(-_.width / 2, _.height / 2));
var S = cc.callFunc(function() {
t.stopAllActions();
e.startMove();
}), T = cc.sequence(i, S);
t.runAction(cc.repeatForever(T));
},
EventTest: function(e) {
e.stopPropagation();
UiManager.ShowAlert("事件传来的参数" + JSON.stringify(e.detail), []);
}
});
cc._RF.pop();
}, {
BaseComponent: "BaseComponent",
Devices: "Devices",
Package: "Package",
SubGameManager: "SubGameManager",
VoiceNative: "VoiceNative",
i18n: "i18n",
xxtea: "xxtea"
} ],
Testts: [ function(e, t, _) {
"use strict";
cc._RF.push(t, "5a00cnrQ/9L/Y0QWJw10Tsi", "Testts");
Object.defineProperty(_, "__esModule", {
value: !0
});
var n = cc._decorator, i = n.ccclass, S = n.property, T = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.label = null;
t.text = "hello";
return t;
}
t.prototype.start = function() {};
t.prototype.addSum = function() {
for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
for (var _ = 0, n = 0, i = e; n < i.length; n++) {
var S = i[n];
_ += S;
}
return _;
};
t.prototype.Hello = function() {
return cc.v2(0, 0);
};
__decorate([ S(cc.Label) ], t.prototype, "label", void 0);
__decorate([ S ], t.prototype, "text", void 0);
return __decorate([ i ], t);
}(cc.Component);
_.default = T;
cc._RF.pop();
}, {} ],
UiManager: [ function(e, t) {
"use strict";
cc._RF.push(t, "cd0b2zknmFE4bimNxTJpdEG", "UiManager");
var _ = e("SubGameManager"), n = {
gShowLoading: function(e, t) {
var _ = this;
this.gLoadPrefabRes("prefabs/loadinglayer", function(n) {
if (n) {
_.gSceneAddNode(n);
var i = n.getComponent("LoadingLayer");
i && i.setCallFun(e, t);
}
});
},
gSceneAddNode: function(e) {
cc.director.getScene().getChildByName("Canvas").addChild(e);
},
gLoadScene: function(e, t) {
void 0 === t && (t = null);
cc.director.loadScene(e, t);
},
gPreloadScene: function(e, t, _) {
cc.director.preloadScene(e, function(e, _) {
var n = Math.floor(100 * (e / _).toFixed(2));
t && t(n);
}, function(t) {
_ && _(e, t);
});
},
gLoadPrefabRes: function(e, t) {
cc.resources.load(e, function(_, n) {
if (_) {
cc.error("ua.loadPrefabRes error====" + e);
t(void 0);
} else {
var i = cc.instantiate(n);
t(i);
cc.loader.setAutoRelease(e, !0);
}
});
},
ShowAlert: function(e, t, _) {
this.gLoadPrefabRes("prefabs/AlertLayer2", function(n) {
if (n) {
cc.director.getScene().getChildByName("Canvas").addChild(n);
var i = n.getComponent("AlertIII");
i && i.showAlert(e, t, function(e) {
_ && _(e);
});
}
});
},
ShowTextInput: function(e) {
this.gLoadPrefabRes("prefabs/textinput", function(t) {
if (t) {
cc.director.getScene().getChildByName("Canvas").addChild(t);
var _ = t.getComponent("textinput");
_ && _.show(e);
}
});
},
ShowChooseUpdate: function(e, t) {
this.gLoadPrefabRes("prefabs/selectupdate", function(_) {
if (_) {
cc.director.getScene().getChildByName("Canvas").addChild(_);
var n = _.getComponent("chooseupdate");
n && n.initData(e, t);
}
});
},
gloadBundleScene: function(e, t) {
n.gShowLoading(function(n) {
n.updataProgress(30);
var i = _.getLocalBundlePath(e);
Global.gLoadBundle(i, {
onFileProgress: function(e, t) {
return console.log("bundle progress==", e, t);
}
}, function(_, i) {
if (_) {
console.log("Load bundle error");
t && t(1);
return console.error(_);
}
i.loadScene(e, function(e) {
if (e) {
console.log("load bundle scene error");
t && t(2);
} else n.updataProgress(100);
});
});
}, function() {
t && t(0);
n.gLoadScene(e);
});
}
};
window.UiManager = n;
cc._RF.pop();
}, {
SubGameManager: "SubGameManager"
} ],
VersionManager: [ function(e, t) {
"use strict";
cc._RF.push(t, "5cca3EkU1NJZ4QUch/IWwni", "VersionManager");
var _ = e("HttpHelper"), n = e("Devices"), i = "", S = "", T = "";
if (cc && cc.sys.isNative) {
i = jsb.fileUtils.getWritablePath() + "packageTemp/";
S = jsb.fileUtils.getWritablePath() + "package/";
T = jsb.fileUtils.getWritablePath() + "config/appinfoiii.json";
}
var o = {
remoteCfg: null,
remoteMd5Cfg: "",
localCfg: "",
stateCode: "",
totalDownSize: 0,
downedSize: 0,
checkUpdate: function(e, t, _) {
cc.log("checkUpdate----", e);
this.downcall = t;
this.progressCall = _;
this.remoteCfg = e;
this.parseLocalCfg();
},
downRemoteMd5: function(e) {
var t = this;
cc.log("下载远程md5,", e);
_.sendHttpRequest(e, function(e) {
if (null != e) if (Global.isjson(e)) {
t.remoteMd5Cfg = JSON.parse(e);
t.comparefiles();
} else t.callFunWithState(11, "远程md5-json不合法"); else t.callFunWithState(2, "获取MD5配置文件失败");
});
},
comparefiles: function() {
for (var e = this.localCfg.files, t = this.remoteMd5Cfg.files, _ = new Array(), n = {}, i = {}, S = 0; S < e.length; S++) {
var T = (r = e[S]).filename, o = r.md5, E = r.size;
n[T] = {
md5: o,
fileSize: E
};
}
for (S = 0; S < t.length; S++) {
var r;
T = (r = t[S]).filename, o = r.md5, E = r.size;
i[T] = {
md5: o,
fileSize: E
};
}
for (var s in i) {
var R = i[s], a = R.md5;
E = R.fileSize;
n[s] ? a != n[s].md5 && _.push({
fileName: s,
md5: a,
fileSize: E
}) : _.push({
fileName: s,
md5: a,
fileSize: E
});
}
for (var c in _) {
E = _[c].fileSize;
this.totalDownSize = this.totalDownSize + E;
}
this.downFiles(_);
},
downFiles: function(e) {
if (0 != e.length) {
var t = this, _ = e;
t.DownIndex = 0;
(function e(n) {
var T = t.BaseUrl, o = _[n].fileName, E = _[n].fileSize, r = T + o, s = i + o, R = S + o, a = i + Global.GgetDirByUrl(o), c = S + Global.GgetDirByUrl(o);
Global.GcreateDir(a);
Global.GcreateDir(c);
_[n].tempfile = s;
_[n].realfile = R;
cc.log("下载=====", r);
Global.GDownFile(r, function(n) {
if (n) {
Global.GwriteDataToFile(n, s);
t.downedSize = t.downedSize + E;
if (t.DownIndex < _.length - 1) {
t.DownIndex = t.DownIndex + 1;
t.progressCall && t.progressCall(Math.floor(t.DownIndex / _.length * 100), (t.downedSize / 1e3).toFixed(1), (t.totalDownSize / 1e3).toFixed(1));
e(t.DownIndex);
} else {
t.progressCall && t.progressCall(Math.floor(100), (t.downedSize / 1e3).toFixed(1), (t.totalDownSize / 1e3).toFixed(1));
cc.log("下载完成***");
t.MoveFiles(_);
}
} else t.callFunWithState(3, "下载单个文件失败=" + r);
});
})(t.DownIndex);
} else this.MoveDone();
},
MoveFiles: function(e) {
this.moveStep = 0;
var t = this;
(function _(n) {
var i = e[n].tempfile, o = e[n].realfile, E = Global.GgetDataFromFile(i);
if (E) {
Global.GwriteDataToFile(E, o);
if (t.moveStep < e.length - 1) {
t.moveStep = t.moveStep + 1;
_(t.moveStep);
} else t.MoveDone();
} else {
jsb.fileUtils.removeDirectory(S);
jsb.fileUtils.createDirectory(S);
jsb.fileUtils.removeFile(T);
t.callFunWithState(4, "移动文件失败" + i);
}
})(this.moveStep);
},
MoveDone: function() {
cc.log("移动成功****");
var e = JSON.stringify(this.remoteMd5Cfg, null, 4);
Global.GcreateDir(jsb.fileUtils.getWritablePath() + "config");
Global.GwriteStringToFile(e, T);
this.callFunWithState(100, "更新成功");
},
ReStartGame: function() {
cc.log("重启***");
cc.audioEngine.stopAll();
cc.game.restart();
},
RemoveTemp: function() {
if (cc.sys.isNative) {
jsb.fileUtils.removeDirectory(S);
jsb.fileUtils.createDirectory(S);
jsb.fileUtils.removeFile(T);
}
},
callFunWithState: function(e, t, _) {
if (this.downcall) {
console.log(t + ": 状态码=" + e);
this.downcall(e, _);
}
},
parseLocalCfg: function() {
var e = this, t = T;
if (jsb.fileUtils.isFileExist(t)) {
console.log("读取包外配置");
var _ = jsb.fileUtils.getStringFromFile(t);
if (!Global.isjson(_)) {
e.RemoveTemp();
e.callFunWithState(9, "包外json配置不合法");
return;
}
e.localCfg = JSON.parse(_);
e.parseRemoteCfg();
} else {
console.log("读取包内配置");
cc.resources.load("appinfoiii", function(t, _) {
if (t) {
cc.log("读取包内配置失败" + t);
e.callFunWithState(5, "读取包内配置失败，请检查本地配置");
} else {
e.localCfg = _.json;
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
cc.resources.load("appinfoiii", function(t, _) {
if (t) {
cc.log("读取包内配置失败" + t);
e.callFunWithState(5, "读取包内配置失败，请检查本地配置");
} else e.localCfg = _.json;
});
},
getSubGameCfg: function() {
return this.remoteCfg.subgames;
},
parseRemoteCfg: function() {
if (0 != cc.sys.isNative && null != this.remoteCfg) {
var e = this;
_.sendHttpRequest(this.remoteCfg, function(t) {
if (null != t) if (Global.isjson(t)) {
e.remoteCfg = JSON.parse(t);
var _ = e.localCfg.scriptVersion, i = e.remoteCfg.scriptVersion, S = e.remoteCfg.debugScriptVersion, T = e.remoteCfg.supportBinarys, o = e.remoteCfg.forcedBinaryVersions, E = e.remoteCfg.channels, r = e.remoteCfg.debugUIDs, s = e.remoteCfg.binaryUrl[window.DISTRIBUTE_CHANNEL] || e.remoteCfg[0], R = cc.sys.localStorage.getItem("debugId");
if (Global.GIsArrContain(E, window.DISTRIBUTE_CHANNEL)) if (Global.GIsArrContain(T, n.getAppVersion())) if (Global.GIsArrContain(o, n.getAppVersion())) e.callFunWithState(8, "强制更新", s); else {
console.log("主包本地脚本号==" + _);
console.log("主包远程debug版本号==" + S);
console.log("主包远程版本号==" + i);
if (Global.GIsArrContain(r, R)) {
if (parseInt(_) != parseInt(S)) {
console.log("走测试玩家----热更新");
var a = e.remoteCfg.debugBaseUrl, c = (a = cc.js.formatStr(a, S)) + e.remoteCfg.debugConfigFile;
e.BaseUrl = a;
e.downRemoteMd5(c);
return;
}
e.callFunWithState(0, "测试玩家版本和远程一样，不用更新");
} else if (parseInt(_) == parseInt(i)) e.callFunWithState(0, "不用更新-本地和远程版本一致:" + _); else {
console.log("走正式----热更新");
var I = e.remoteCfg.baseUrl;
c = (I = cc.js.formatStr(I, i)) + e.remoteCfg.configFile;
e.BaseUrl = I;
e.downRemoteMd5(c);
}
} else e.callFunWithState(6, "不支持热更新的2进制版本号" + n.getAppVersion()); else e.callFunWithState(7, "不支持热更新的渠道号" + window.DISTRIBUTE_CHANNEL);
} else e.callFunWithState(10, "远程配置json不合法"); else e.callFunWithState(1, "获取版本配置文件失败");
});
}
}
};
t.exports = o;
cc._RF.pop();
}, {
Devices: "Devices",
HttpHelper: "HttpHelper"
} ],
VoiceNative: [ function(e, t) {
"use strict";
cc._RF.push(t, "6659eBg8ldPA6/b57j6ol8I", "VoiceNative");
var _ = 12, n = 128 - _;
function i(e) {
e -= n;
var t = Math.floor(e / _) + n, i = e % _ + n;
return String.fromCharCode(t) + String.fromCharCode(i);
}
for (var S = {}, T = {}, o = 0; o < 256; ++o) {
var E, r = o + 1;
E = r >= n ? i(r) : String.fromCharCode(r);
S[o] = E;
T[E] = o;
}
function s(e) {
var t = "", _ = e.length;
cc.log("encode, len=" + _ + ", data=" + e);
var n = _ >> 16 & 255, i = _ >> 8 & 255, T = 255 & _;
t += S[_ >> 24 & 255];
t += S[n];
t += S[i];
t += S[T];
for (var o = 0; o < e.length; ++o) t += S[e[o]];
return t;
}
var R = "com/casino/game/VoiceRecorder", a = cc.Class({
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
cc.sys.isNative && (cc.sys.os == cc.sys.OS_ANDROID ? jsb.reflection.callStaticMethod(R, "prepare", "(Ljava/lang/String;)V", e) : cc.sys.os == cc.sys.OS_IOS && jsb.reflection.callStaticMethod("VoiceSDK", "prepareRecord:", e));
}
},
release: function() {
if (cc.sys.isNative) {
cc.audioEngine.resumeAll();
cc.sys.isNative && (cc.sys.os == cc.sys.OS_ANDROID ? jsb.reflection.callStaticMethod(R, "release", "()V") : cc.sys.os == cc.sys.OS_IOS && jsb.reflection.callStaticMethod("VoiceSDK", "finishRecord"));
}
},
cancel: function() {
if (cc.sys.isNative) {
cc.audioEngine.resumeAll();
cc.sys.isNative && (cc.sys.os == cc.sys.OS_ANDROID ? jsb.reflection.callStaticMethod(R, "cancel", "()V") : cc.sys.os == cc.sys.OS_IOS && jsb.reflection.callStaticMethod("VoiceSDK", "cancelRecord"));
}
},
writeVoice: function(e, t) {
if (cc.sys.isNative && t && t.length > 0) {
var _ = this._voiceMediaPath + e;
this.clearCache(e);
jsb.fileUtils.writeDataToFile(t, _);
}
},
clearCache: function(e) {
if (cc.sys.isNative) {
var t = this._voiceMediaPath + e;
jsb.fileUtils.isFileExist(t) && jsb.fileUtils.removeFile(t);
jsb.fileUtils.isFileExist(t + ".wav") && jsb.fileUtils.removeFile(t + ".wav");
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
var t = this._voiceMediaPath + e;
console.log("VoiceNative getVoiceData:" + t);
var _ = jsb.fileUtils.getDataFromFile(t);
if (_) return _;
}
return null;
},
getDataString: function(e) {
return s(e);
},
setStorageDir: function(e) {
if (cc.sys.isNative) if (cc.sys.os == cc.sys.OS_ANDROID) jsb.reflection.callStaticMethod(R, "setStorageDir", "(Ljava/lang/String;)V", e); else if (cc.sys.os == cc.sys.OS_IOS) {
jsb.reflection.callStaticMethod("VoiceSDK", "setStorageDir:", e);
jsb.fileUtils.isDirectoryExist(e) || jsb.fileUtils.createDirectory(e);
}
}
});
a = new a();
t.exports = a;
cc._RF.pop();
}, {} ],
WeChatModule: [ function(e, t) {
"use strict";
cc._RF.push(t, "87018xPYahKfYfnLy3FlfhY", "WeChatModule");
var _ = "org/cocos2dx/javascript/WeChatModule", n = e("HttpModule"), i = cc.Class({
name: "WeChatModlue",
properties: {
appId: "wx05017e4a3290433a",
appSecret: "bf5bf75d9683f040907d7544f9be7735"
},
ctor: function() {
console.log("[WeChatModule][ctor]---构造函数");
this.initWx(this.appId, this.appSecret);
},
isInstallWx: function() {
return !0 === gg.isAndroid ? jsb.reflection.callStaticMethod(_, "isInstallWx", "()Z") : !0 !== gg.isIOS || jsb.reflection.callStaticMethod("WeChatModule", "isInstallWx");
},
initWx: function(e, t) {
this.appId = e;
this.appSecret = t;
return !0 === gg.isAndroid ? jsb.reflection.callStaticMethod(_, "initWx", "(Ljava/lang/String;Ljava/lang/String;)V", e, t) : !0 !== gg.isIOS || jsb.reflection.callStaticMethod("WeChatModule", "initWx:andSecret:", e, t);
},
loginWx: function() {
!0 === gg.isAndroid ? jsb.reflection.callStaticMethod(_, "loginWx", "()V") : !0 === gg.isIOS && jsb.reflection.callStaticMethod("WeChatModule", "loginWx");
},
shareImageWx: function(e, t) {
!0 === gg.isAndroid ? jsb.reflection.callStaticMethod(_, "shareImageWx", "(Ljava/lang/String;I)V", e, t) : !0 === gg.isIOS && jsb.reflection.callStaticMethod("WeChatModule", "shareImageWx:andType:", e, t);
},
shareTextWx: function(e, t, n) {
this.ShareCall = n;
!0 === gg.isAndroid ? jsb.reflection.callStaticMethod(_, "shareTextWx", "(Ljava/lang/String;I)V", e, t) : !0 === gg.isIOS && jsb.reflection.callStaticMethod("WeChatModule", "shareTextWx:andType:", e, t);
},
shareUrlWx: function(e, t, n, i) {
!0 === gg.isAndroid ? jsb.reflection.callStaticMethod(_, "shareUrlWx", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;I)V", e, t, n, i) : !0 === gg.isIOS && jsb.reflection.callStaticMethod("WeChatModule", "shareUrlWx:andTitle:andDesc:andType:", e, t, n, i);
},
login: function(e) {
this.LoginCall = e;
var t = cc.sys.localStorage.getItem("plaza_refresh_token"), _ = this;
if (t) {
var i = JSON.parse(t), S = i.appid, T = i.refresh_token, o = "https://api.weixin.qq.com/sns/oauth2/refresh_token?appid=" + S + "&grant_type=refresh_token&refresh_token=" + T;
n.get({
url: o,
timeout: 1e4
}, function(e, t) {
if (e || t.errcode) {
_.resetWx();
_.loginWx();
} else {
var n = {
ret: !0
};
n.access_token = t.access_token;
n.openid = t.openid;
var i = {};
i.refresh_token = t.refresh_token;
i.appid = S;
cc.sys.localStorage.setItem("plaza_refresh_token", JSON.stringify(i));
_.LoginCall && _.LoginCall(n);
}
}.bind(_));
return !0;
}
if (!1 === this.isInstallWx()) {
cc.log("微信登录失败，请检查是否安装微信");
return !1;
}
if (gg.isWindows) {
cc.log("WechatLoginView");
return !0;
}
return this.loginWx();
},
onWxLoginResultCallback: function(e, t) {
console.log("WeChatModule onWxLoginResultCallback");
if (!1 !== e) {
var _ = this, i = "https://api.weixin.qq.com/sns/oauth2/access_token?appid=" + this.appId + "&secret=" + this.appSecret + "&code=" + t + "&grant_type=authorization_code";
n.get({
url: i,
timeout: 1e4
}, function(e, t) {
if (e || t.errcode) {
_.resetWx();
_.LoginCall && _.LoginCall({
ret: !1,
msg: "微信登录失败,请稍后重试"
});
} else {
var n = {
ret: !0
};
n.access_token = t.access_token;
n.openid = t.openid;
var i = {};
i.refresh_token = t.refresh_token;
i.appid = _.appid;
cc.sys.localStorage.setItem("plaza_refresh_token", JSON.stringify(i));
_.getWxUserInfo(n);
}
});
} else {
var S = {
ret: !1
};
S.msg = "微信登录失败，" + t;
this.LoginCall && this.LoginCall(S);
}
},
getWxUserInfo: function(e) {
var t = this, _ = this, i = cc.js.formatStr("https://api.weixin.qq.com/sns/userinfo?access_token=%s&openid=%s", e.access_token, e.openid);
n.get({
url: i,
timeout: 1e4
}, function(n, i) {
if (n || i.errcode) {
_.resetWx();
t.LoginCall && t.LoginCall({
ret: !1,
msg: "获取玩家信息失败"
});
} else {
e.userinfo = i;
_.LoginCall && _.LoginCall(e);
}
});
},
onWxShareResultCallback: function(e, t) {
console.log("WeChatModule onWxShareResultCallback");
this.ShareCall && this.ShareCall(e, t);
},
onWxPayResultCallback: function() {},
onWindowLoginCallback: function(e, t, _) {
this.appId = e;
this.appSecret = t;
this.onWxLoginResultCallback(!0, _);
},
resetWx: function() {
cc.sys.localStorage.removeItem("plaza_refresh_token");
}
});
t.exports = i;
cc._RF.pop();
}, {
HttpModule: "HttpModule"
} ],
WsTest: [ function(e, t) {
"use strict";
cc._RF.push(t, "e5e9fObFGlLQbIbtk/t0ooz", "WsTest");
var _ = e("Ws");
cc.Class({
extends: cc.Component,
properties: {},
start: function() {
var e = new _();
e.connect("127.0.0.1", 9001);
e.setOpenCall(function() {
cc.log("连接成功");
});
e.setOnMessageCall(function() {
cc.log("消息来了");
});
},
sendText: function() {
var e = cc.find("uipanel/Edit", this.node).getComponent(cc.EditBox), t = e.string;
cc.log("txt==", t);
this._wsiSendBinary.send(JSON.stringify({
funcName: "chatText",
txt: t
}));
e.string = "";
},
addText: function(e) {
var t = cc.find("uipanel/scrollview", this.node), _ = cc.instantiate(cc.find("uipanel/item", this.node));
_.getComponent(cc.Label).string = e;
_.x = 0;
_.active = !0;
var n = t.getComponent(cc.ScrollView);
n.content.addChild(_);
n.scrollToBottom(.5);
}
});
cc._RF.pop();
}, {
Ws: "Ws"
} ],
Ws: [ function(e, t) {
"use strict";
cc._RF.push(t, "5f755kjtT1EEbid5p4qY0Vw", "Ws");
cc.Class({
connect: function(e, t) {
this._wsiSendBinary = new WebSocket("ws://" + e + ":" + t + "//");
this._wsiSendBinary.binaryType = "arraybuffer";
},
setOpenCall: function(e) {
this._wsiSendBinary && (this._wsiSendBinary.onopen = function() {
e && e();
});
},
setOnMessageCall: function(e) {
this._wsiSendBinary && (this._wsiSendBinary.onmessage = function(t) {
e && e(t);
});
},
setOnErrorCall: function(e) {
this._wsiSendBinary && (this._wsiSendBinary.onerror = function(t) {
e && e(t);
});
},
setOnCloseCall: function(e) {
this._wsiSendBinary && (this._wsiSendBinary.onclose = function(t) {
e && e(t);
});
},
send: function(e) {
this._wsiSendBinary && this._wsiSendBinary.readyState === WebSocket.OPEN ? this._wsiSendBinary.send(e) : cc.log("WS 断开连接");
}
});
cc._RF.pop();
}, {} ],
ball: [ function(e, t) {
"use strict";
cc._RF.push(t, "cf9a69rTylNR4vuXlstck3D", "ball");
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
onBeginContact: function() {
console.log("ball onBeginContact");
},
onEndContact: function() {
console.log("ball onEndContact");
},
onPreSolve: function() {
console.log("ball onPreSolve");
},
onPostSolve: function() {
console.log("ball onPostSolve");
},
update: function() {}
});
cc._RF.pop();
}, {} ],
bundleSceneTest: [ function(e, t) {
"use strict";
cc._RF.push(t, "aa93eq7R1lJppNkneqno1br", "bundleSceneTest");
var _ = e("BaseComponent");
cc.Class({
extends: _,
properties: {},
onLoad: function() {
this._super();
},
onDestroy: function() {
this._super();
},
start: function() {
var e = this, t = cc.find("uipanel/btn_exit", this.node);
ua.darkButton(t, function() {
UiManager.gShowLoading(function(t) {
t.updataProgress(30);
e.scheduleOnce(function() {
t.updataProgress(100);
}, 2);
}, function() {
cc.director.loadScene("TestScene", function() {
Global.gReleaseBundle("bundleScene");
});
});
});
}
});
cc._RF.pop();
}, {
BaseComponent: "BaseComponent"
} ],
chooseupdate: [ function(e, t) {
"use strict";
cc._RF.push(t, "5a10feVxjlCLr90Fw2jtkf1", "chooseupdate");
var _ = e("BaseComponent");
cc.Class({
extends: _,
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
initData: function(e, t) {
this.call = t;
this.initView(e);
},
initView: function(e) {
var t = this;
this.tiptext.getComponent(cc.Label).string = e.tips;
var _ = e.items, n = function(e) {
S = cc.instantiate(t.item);
t.content.addChild(S);
S.active = !0;
S.getChildByName("text").getComponent(cc.Label).string = _[e].text;
ua.darkButton(S, function() {
t.call && t.call(e, t);
});
};
for (var i in _) {
var S;
n(i);
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
ch: [ function(e, t) {
"use strict";
cc._RF.push(t, "2d2c7B6fVVH4p3u1YQFpkXF", "ch");
t.exports = {
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
en: [ function(e, t) {
"use strict";
cc._RF.push(t, "45e5cQaRXhIbLRP7QZnXbpz", "en");
t.exports = {
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
i18n: [ function(e, t) {
"use strict";
cc._RF.push(t, "93789C/shtIL6entYsZPjee", "i18n");
var _ = e("polyglot"), n = cc.sys.language;
"zh" !== n && (n = "en");
var i = e(n), S = new _({
phrases: i,
allowMissing: !0
});
t.exports = {
init: function(t) {
i = e(n = t);
S.replace(i);
},
t: function(e, t) {
return S.t(e, t);
}
};
cc._RF.pop();
}, {
polyglot: "polyglot"
} ],
polyglot: [ function(e, t, _) {
(function(e) {
"use strict";
cc._RF.push(t, "69decSgpRlE1rzEKp0RzG3V", "polyglot");
(function(e, n) {
"function" == typeof define && define.amd ? define([], function() {
return n(e);
}) : "object" == typeof _ ? t.exports = n(e) : e.Polyglot = n(e);
})("undefined" != typeof e ? e : void 0, function(e) {
var t = String.prototype.replace;
function _(e) {
e = e || {};
this.phrases = {};
this.extend(e.phrases || {});
this.currentLocale = e.locale || "en";
this.allowMissing = !!e.allowMissing;
this.warn = e.warn || I;
}
_.VERSION = "1.0.0";
_.prototype.locale = function(e) {
e && (this.currentLocale = e);
return this.currentLocale;
};
_.prototype.extend = function(e, t) {
var _;
for (var n in e) if (e.hasOwnProperty(n)) {
_ = e[n];
t && (n = t + "." + n);
"object" == typeof _ ? this.extend(_, n) : this.phrases[n] = _;
}
};
_.prototype.unset = function(e, t) {
var _;
if ("string" == typeof e) delete this.phrases[e]; else for (var n in e) if (e.hasOwnProperty(n)) {
_ = e[n];
t && (n = t + "." + n);
"object" == typeof _ ? this.unset(_, n) : delete this.phrases[n];
}
};
_.prototype.clear = function() {
this.phrases = {};
};
_.prototype.replace = function(e) {
this.clear();
this.extend(e);
};
_.prototype.t = function(e, t) {
var _, n;
"number" == typeof (t = null == t ? {} : t) && (t = {
smart_count: t
});
if ("string" == typeof this.phrases[e]) _ = this.phrases[e]; else if ("string" == typeof t._) _ = t._; else if (this.allowMissing) _ = e; else {
this.warn('Missing translation for key: "' + e + '"');
n = e;
}
if ("string" == typeof _) {
t = N(t);
n = c(n = E(_, this.currentLocale, t.smart_count), t);
}
return n;
};
_.prototype.has = function(e) {
return e in this.phrases;
};
var n = "||||", i = {
chinese: function() {
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
}, S = {
chinese: [ "fa", "id", "ja", "ko", "lo", "ms", "th", "tr", "zh" ],
german: [ "da", "de", "en", "es", "fi", "el", "he", "hu", "it", "nl", "no", "pt", "sv" ],
french: [ "fr", "tl", "pt-br" ],
russian: [ "hr", "ru" ],
czech: [ "cs", "sk" ],
polish: [ "pl" ],
icelandic: [ "is" ]
};
function T(e) {
var t, _, n, i = {};
for (t in e) if (e.hasOwnProperty(t)) {
_ = e[t];
for (n in _) i[_[n]] = t;
}
return i;
}
var o = /^\s+|\s+$/g;
function E(e, _, i) {
var S, T;
return null != i && e ? (T = (S = e.split(n))[s(_, i)] || S[0], t.call(T, o, "")) : e;
}
function r(e) {
var t = T(S);
return t[e] || t.en;
}
function s(e, t) {
return i[r(e)](t);
}
var R = /\$/g, a = "$$$$";
function c(e, _) {
for (var n in _) if ("_" !== n && _.hasOwnProperty(n)) {
var i = _[n];
"string" == typeof i && (i = t.call(_[n], R, a));
e = t.call(e, new RegExp("%\\{" + n + "\\}", "g"), i);
}
return e;
}
function I(t) {
e.console && e.console.warn && e.console.warn("WARNING: " + t);
}
function N(e) {
var t = {};
for (var _ in e) t[_] = e[_];
return t;
}
return _;
});
cc._RF.pop();
}).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
}, {} ],
poplayer: [ function(e, t) {
"use strict";
cc._RF.push(t, "a7524VdX5NCHaVy3DcwaMB3", "poplayer");
var _ = e("BaseComponent");
cc.Class({
extends: _,
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
var e = this;
this._super();
var t = this.node.getChildByName("bg").getChildByName("btn_close");
ua.darkButton(t, function() {
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
textinput: [ function(e, t) {
"use strict";
cc._RF.push(t, "0043b7TOBhKiYqrFXaldTiM", "textinput");
var _ = e("BaseComponent");
cc.Class({
extends: _,
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
var e = this;
this._super();
var t = this.node.getChildByName("uicontent").getChildByName("panel").getChildByName("btn_done");
ua.darkButton(t, function() {
if (e.call) {
var t = e.Editbox.getComponent(cc.EditBox).string;
window.Save.set("LastHoturl", t);
e.call(t);
}
e.bClose();
});
this.Editbox = this.node.getChildByName("uicontent").getChildByName("panel").getChildByName("EditBox");
},
show: function(e) {
this.call = e;
var t = window.Save.get("LastHoturl", null);
t && (this.Editbox.getComponent(cc.EditBox).string = t);
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
th: [ function(e, t) {
"use strict";
cc._RF.push(t, "8500782U4xMr4qYmU3oN13C", "th");
t.exports = {
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
use_reversed_rotateBy: [ function(e, t) {
"use strict";
cc._RF.push(t, "a261fWUgbhIiYQZHN4wUmEx", "use_reversed_rotateBy");
cc.RotateBy._reverse = !0;
cc._RF.pop();
}, {} ],
xxtea: [ function(e, t) {
"use strict";
cc._RF.push(t, "639b6ohfOFGqbHyT0ZVfBTi", "xxtea");
var _ = e("buffer").Buffer, n = 2654435769;
function i(e, t) {
var _ = e.length, n = _ << 2;
if (t) {
var i = e[_ - 1];
if (i < (n -= 4) - 3 || i > n) return null;
n = i;
}
for (var S = new Uint8Array(n), T = 0; T < n; ++T) S[T] = e[T >> 2] >> ((3 & T) << 3);
return S;
}
function S(e, t) {
var _, n = e.length, i = n >> 2;
0 != (3 & n) && ++i;
t ? (_ = new Uint32Array(i + 1))[i] = n : _ = new Uint32Array(i);
for (var S = 0; S < n; ++S) _[S >> 2] |= e[S] << ((3 & S) << 3);
return _;
}
function T(e, t, _, n, i, S) {
return (_ >>> 5 ^ t << 2) + (t >>> 3 ^ _ << 4) ^ (e ^ t) + (S[3 & n ^ i] ^ _);
}
function o(e) {
if (e.length < 16) {
var t = new Uint8Array(16);
t.set(e);
e = t;
}
return e;
}
function E(e, t) {
var _, i, S, o, E, r, s = e.length, R = s - 1;
i = e[R];
S = 0;
for (r = 0 | Math.floor(6 + 52 / s); r > 0; --r) {
o = (S += n) >>> 2 & 3;
for (E = 0; E < R; ++E) {
_ = e[E + 1];
i = e[E] += T(S, _, i, E, o, t);
}
_ = e[0];
i = e[R] += T(S, _, i, E, o, t);
}
return e;
}
function r(e, t) {
var _, i, S, o, E, r = e.length, s = r - 1;
_ = e[0];
for (S = Math.floor(6 + 52 / r) * n; 0 !== S; S -= n) {
o = S >>> 2 & 3;
for (E = s; E > 0; --E) {
i = e[E - 1];
_ = e[E] -= T(S, _, i, E, o, t);
}
i = e[s];
_ = e[0] -= T(S, _, i, E, o, t);
}
return e;
}
function s(e) {
for (var t = e.length, _ = new Uint8Array(3 * t), n = 0, i = 0; i < t; i++) {
var S = e.charCodeAt(i);
if (S < 128) _[n++] = S; else if (S < 2048) {
_[n++] = 192 | S >> 6;
_[n++] = 128 | 63 & S;
} else {
if (!(S < 55296 || S > 57343)) {
if (i + 1 < t) {
var T = e.charCodeAt(i + 1);
if (S < 56320 && 56320 <= T && T <= 57343) {
var o = 65536 + ((1023 & S) << 10 | 1023 & T);
_[n++] = 240 | o >> 18;
_[n++] = 128 | o >> 12 & 63;
_[n++] = 128 | o >> 6 & 63;
_[n++] = 128 | 63 & o;
i++;
continue;
}
}
throw new Error("Malformed string");
}
_[n++] = 224 | S >> 12;
_[n++] = 128 | S >> 6 & 63;
_[n++] = 128 | 63 & S;
}
}
return _.subarray(0, n);
}
function R(e, t) {
for (var _ = new Uint16Array(t), n = 0, i = 0, S = e.length; n < t && i < S; n++) {
var T = e[i++];
switch (T >> 4) {
case 0:
case 1:
case 2:
case 3:
case 4:
case 5:
case 6:
case 7:
_[n] = T;
break;

case 12:
case 13:
if (!(i < S)) throw new Error("Unfinished UTF-8 octet sequence");
_[n] = (31 & T) << 6 | 63 & e[i++];
break;

case 14:
if (!(i + 1 < S)) throw new Error("Unfinished UTF-8 octet sequence");
_[n] = (15 & T) << 12 | (63 & e[i++]) << 6 | 63 & e[i++];
break;

case 15:
if (!(i + 2 < S)) throw new Error("Unfinished UTF-8 octet sequence");
var o = ((7 & T) << 18 | (63 & e[i++]) << 12 | (63 & e[i++]) << 6 | 63 & e[i++]) - 65536;
if (!(0 <= o && o <= 1048575)) throw new Error("Character outside valid Unicode range: 0x" + o.toString(16));
_[n++] = o >> 10 & 1023 | 55296;
_[n] = 1023 & o | 56320;
break;

default:
throw new Error("Bad UTF-8 encoding 0x" + T.toString(16));
}
}
n < t && (_ = _.subarray(0, n));
return String.fromCharCode.apply(String, _);
}
function a(e, t) {
for (var _ = [], n = new Uint16Array(32768), i = 0, S = 0, T = e.length; i < t && S < T; i++) {
var o = e[S++];
switch (o >> 4) {
case 0:
case 1:
case 2:
case 3:
case 4:
case 5:
case 6:
case 7:
n[i] = o;
break;

case 12:
case 13:
if (!(S < T)) throw new Error("Unfinished UTF-8 octet sequence");
n[i] = (31 & o) << 6 | 63 & e[S++];
break;

case 14:
if (!(S + 1 < T)) throw new Error("Unfinished UTF-8 octet sequence");
n[i] = (15 & o) << 12 | (63 & e[S++]) << 6 | 63 & e[S++];
break;

case 15:
if (!(S + 2 < T)) throw new Error("Unfinished UTF-8 octet sequence");
var E = ((7 & o) << 18 | (63 & e[S++]) << 12 | (63 & e[S++]) << 6 | 63 & e[S++]) - 65536;
if (!(0 <= E && E <= 1048575)) throw new Error("Character outside valid Unicode range: 0x" + E.toString(16));
n[i++] = E >> 10 & 1023 | 55296;
n[i] = 1023 & E | 56320;
break;

default:
throw new Error("Bad UTF-8 encoding 0x" + o.toString(16));
}
if (i >= 32766) {
var r = i + 1;
_.push(String.fromCharCode.apply(String, n.subarray(0, r)));
t -= r;
i = -1;
}
}
i > 0 && _.push(String.fromCharCode.apply(String, n.subarray(0, i)));
return _.join("");
}
function c(e) {
var t = e.length;
return 0 === t ? "" : t < 32767 ? R(e, t) : a(e, t);
}
function I(e, t) {
"string" == typeof e && (e = s(e));
"string" == typeof t && (t = s(t));
return null == e || 0 === e.length ? e : i(E(S(e, !0), S(o(t), !1)), !1);
}
function N(e, t) {
"string" == typeof e && (e = new _(e, "base64"));
"string" == typeof t && (t = s(t));
return null == e || 0 === e.length ? e : i(r(S(e, !1), S(o(t), !1)), !0);
}
t.exports = Object.create(null, {
toBytes: {
value: s
},
toString: {
value: c
},
encrypt: {
value: I
},
encryptToString: {
value: function(e, t) {
return new _(I(e, t)).toString("base64");
}
},
decrypt: {
value: N
},
decryptToString: {
value: function(e, t) {
return c(N(e, t));
}
}
});
cc._RF.pop();
}, {
buffer: 6
} ],
zh: [ function(e, t) {
"use strict";
cc._RF.push(t, "a6b10GfdmNMvoO9FiRQgmv1", "zh");
t.exports = {
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
}, {}, [ "Bubble", "BubbleScene", "CastTest", "VoiceNative", "ball", "Chanel", "ConstantItem", "PhysicsCenter", "AdaptBg", "AdaptCanvas", "AdaptUI", "Base64Tool", "BaseComponent", "Global", "KeypadDispatch", "LoadingLayer", "Save", "SubGameManager", "UiManager", "VersionManager", "xxtea", "GameClient", "HttpHelper", "OnlineWS", "Onlinedef", "Package", "Ws", "Devices", "DevicesAndroid", "DevicesIos", "DevicesWeb", "Sound", "AlertIII", "bundleSceneTest", "chooseupdate", "LaunchScene", "LoginScene", "MainScene", "poplayer", "Slot", "SlotScene", "TestScene", "textinput", "WsTest", "HttpModule", "WeChatModule", "Testts", "LabelLocalized", "ch", "en", "th", "zh", "i18n", "polyglot", "use_reversed_rotateBy" ]);