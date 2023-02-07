/*
 * @Descripttion: 
 * @version: 
 * @Author: liqiang
 * @email: 497232807@qq.com
 * @Date: 2021-12-22 20:43:59
 * @LastEditTime: 2023-02-07 14:05:11
 */
const win = window as any
export const languages = {
	"2001": "你好",
	"2002": "中国",
	"2003": "666",
	"2004": "222",
	"2005": "5",
	"2006": "6",
	"2007": "7",
}
if (!win.languages) {
	win.languages = {};
}
win.languages.zh = languages;