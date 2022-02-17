/*
 * @Descripttion: 单例基类
 * @version: 
 * @Author: liqiang
 * @email: 497232807@qq.com
 * @Date: 2022-02-17 12:54:23
 * @LastEditTime: 2022-02-17 14:29:02
 */

export default class Singleton {
    static getInstance<T extends {}>(this: new () => T): T {
        if (!(<any>this).instance) {
            (<any>this).instance = new this();
        }
        return (<any>this).instance;
    }
}