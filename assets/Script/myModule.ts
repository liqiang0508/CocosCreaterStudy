
var myModule = {} as any

myModule.say = function (text: string) {

    console.log("mymodule say==" + text)
}

globalThis.myModule = myModule;