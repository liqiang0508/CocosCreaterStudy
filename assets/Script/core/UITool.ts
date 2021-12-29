/*
 * @Description: 
 * @Author: li qiang
 * @Date: 2021-12-29 14:56:57
 * @LastEditTime: 2021-12-29 15:10:11
 */
var UITool = {

    getChildNode:function(nodeObject:object,node:cc.Node){
        var childNode:cc.Node[] = node.children
        for(var i = 0;i<childNode.length;i++){
            var name = childNode[i].name
            nodeObject[name] = childNode[i]
            this.getChildNode(nodeObject,childNode[i])
        }
    }

}



globalThis.UITool = UITool;
