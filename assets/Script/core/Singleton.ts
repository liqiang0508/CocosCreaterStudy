/*
 * @Descripttion: 单例基类
 * @version: 
 * @Author: liqiang
 * @email: 497232807@qq.com
 * @Date: 2022-02-17 12:54:23
 * @LastEditTime: 2022-02-17 13:15:30
 */

export default class Singleton<T> {

    private static instance: any;
    public static getInstance<T>(): T {
        if (!this.instance) {
            this.instance = new this();
        }
        return this.instance;
    }
}