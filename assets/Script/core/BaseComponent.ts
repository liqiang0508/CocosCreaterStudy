
const { ccclass, property } = cc._decorator;
@ccclass
export default class BaseComponent extends cc.Component {

    mStarted: boolean = false;
    onLoad() {

    }

    start() {
        this.mStarted = true
    }
    onDestroy() {

    }

    isStarted() {
        return this.mStarted
    }
}