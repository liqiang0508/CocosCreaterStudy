

import UITool from "./core/UITool"
const AIM_LINE_MAX_LENGTH = 1440;
cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
        _cur_length: 0,
        graphic_line: {
            type: cc.Graphics,
            default: null,
        }
    },

    // LIFE-CYCLE CALLBACKS:
    onEnable() {

        // console.log("rayCast--------")
        // var p1 = cc.Vec2(0,0)
        // var p2 = cc.Vec2(50,50)
        // var results = cc.director.getPhysicsManager().rayCast(p1, p2, cc.RayCastType.Closest);

        // for (var i = 0; i < results.length; i++) {
        //     var result = results[i];
        //     console.log(i,result)
        //     var collider = result.collider;
        //     var point = result.point;
        //     var normal = result.normal;
        //     var fraction = result.fraction;
        // }

    },
    onLoad() {

        // this.graphic_line.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        // this.graphic_line.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        // this.graphic_line.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        // this.graphic_line.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
        var self = this
        this.img = cc.find("img", this.node)
        this.img.setPosition(cc.v2(0, 0))
        // this.img.getComponent(cc.RigidBody).linearVelocity = cc.v2(0,-200)

        window.EventManager.on(this.node, "gameover", function () {
            console.log("game over====")
        })
        var firebtn = cc.find("uipanel/firebtn", this.node)
        UITool.addBtnClick(firebtn, (event) => {
            cc.log("firebtn*****vec", self.forceVec)
            var force = cc.v2(self.forceVec.x, self.forceVec.y).mul(600000)
            cc.log("firebtn*****force", force)
            this.img.getComponent(cc.RigidBody).applyForceToCenter(force)
        })
        UITool.addBtnClick(this.node, function (event) {

            // var node = cc.instantiate(self.img)
            // self.node.addChild(node)

            var touches = event.getTouches();
            var touchLoc = touches[0].getLocation();//opengL坐标系。 原点在左下角
            // var touch2 = touches[0].getLocationInView();//屏幕坐标系  原点在左上角
            // touchLoc = node.parent.convertToNodeSpaceAR(touchLoc);
            // node.setPosition(touchLoc)
            touchLoc = self.img.parent.convertToNodeSpaceAR(touchLoc);
            var v = self.img.getPosition().subSelf(touchLoc).normalizeSelf()
            cc.log("v===", v)
            self.forceVec = v



        })

    },

    onTouchStart(event) {
        this.graphic_line.clear();
    },


    onTouchMove(touch) {
        this.graphic_line.clear();
        this._cur_length = 0;
        const startLocation = touch.getStartLocation();
        const location = touch.getLocation();
        // 计算射线
        this.drawRayCast(startLocation, location.subSelf(startLocation).normalizeSelf());
        this.graphic_line.stroke();
    },

    onTouchEnd(touch) {
        this.graphic_line.clear();
    },

    /**
    * @description 计算射线
    * @param startLocation 起始位置 世界坐标系
    * @param vector_dir 单位方向向量
    */
    drawRayCast(startLocation, vector_dir) {
        // 剩余长度
        const left_length = AIM_LINE_MAX_LENGTH - this._cur_length;
        if (left_length <= 0) return;
        // 计算线的终点位置
        const endLocation = startLocation.add(vector_dir.mul(left_length));
        // 射线测试
        // 检测给定的线段穿过哪些碰撞体，可以获取到碰撞体在线段穿过碰撞体的那个点的法线向量和其他一些有用的信息。 
        const results = cc.director.getPhysicsManager().rayCast(startLocation, endLocation, cc.RayCastType.Closest);
        if (results.length > 0) {
            const result = results[0];
            // 指定射线与穿过的碰撞体在哪一点相交。
            const point = result.point;
            // 画入射线段
            this.drawAimLine(startLocation, point);
            // 计算长度
            const line_length = point.sub(startLocation).mag();
            // 计算已画长度
            this._cur_length += line_length;
            // 指定碰撞体在相交点的表面的法线单位向量。
            const vector_n = result.normal;
            // 入射单位向量
            const vector_i = vector_dir;
            // 反射单位向量
            const vector_r = vector_i.sub(vector_n.mul(2 * vector_i.dot(vector_n)));
            // 接着计算下一段
            this.drawRayCast(point, vector_r);
        } else {
            // 画剩余线段
            this.drawAimLine(startLocation, endLocation);
        }
    },

    /**
     * @description 画瞄准线
     * @param startLocation 起始位置 世界坐标系
     * @param endLocation 结束位置 世界坐标系
     */
    drawAimLine(startLocation, endLocation) {
        // 转换坐标
        const graphic_startLocation = this.graphic_line.node.convertToNodeSpaceAR(startLocation);
        this.graphic_line.moveTo(graphic_startLocation.x, graphic_startLocation.y);
        this.graphic_line.strokeColor = new cc.Color().fromHEX('#ffffff');
        this.graphic_line.lineWidth = 2;
        // 画小圆圆
        // 间隔
        const delta = 35;
        // 方向
        const vector_dir = endLocation.sub(startLocation);
        // 数量
        const total_count = Math.round(vector_dir.mag() / delta);
        // 每次间隔向量​
        vector_dir.normalizeSelf().mulSelf(delta);
        for (let index = 0; index < total_count; index++) {
            graphic_startLocation.addSelf(vector_dir)
            this.graphic_line.circle(graphic_startLocation.x, graphic_startLocation.y, 6);
        }
    },

    start() {





    },

    update(dt) {


    },

    // 只在两个碰撞体开始接触时被调用一次
    onBeginContact(contact, selfCollider, otherCollider) {
        console.log("onBeginContact")
    },

    // 只在两个碰撞体结束接触时被调用一次
    onEndContact(contact, selfCollider, otherCollider) {
        console.log("onEndContact")
    },

    // 每次将要处理碰撞体接触逻辑时被调用
    onPreSolve(contact, selfCollider, otherCollider) {
        console.log("onPreSolve")

    },

    // 每次处理完碰撞体接触逻辑时被调用
    onPostSolve(contact, selfCollider, otherCollider) {
        console.log("onPostSolve")
    },

    onCollisionEnter: function (other, self) {
        console.log("onCollisionEnter")
    }


});
