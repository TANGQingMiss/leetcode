/**
 * // Definition for a QuadTree node.
 * function Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *    this.val = val;
 *    this.isLeaf = isLeaf;
 *    this.topLeft = topLeft;
 *    this.topRight = topRight;
 *    this.bottomLeft = bottomLeft;
 *    this.bottomRight = bottomRight;
 * };
 */
/**
 * @param {Node} quadTree1
 * @param {Node} quadTree2
 * @return {Node}
 */
var intersect = function(quadTree1, quadTree2) {
    if(quadTree1.isLeaf && quadTree2.isLeaf){
        var node = new Node(quadTree1.val || quadTree2.val, true,null,null,null,null);
        return node;
    }
    if(quadTree1.isLeaf && quadTree1.val){
        return quadTree1;
    }else if(quadTree2.isLeaf && quadTree2.val){
        return quadTree2;
    }else if(quadTree1.isLeaf && !quadTree1.val){
        return quadTree2;
    }else if(quadTree2.isLeaf && !quadTree2.val){
        return quadTree1;
    }else{
        var node = new Node(false,false,null,null,null,null);
        node.topLeft = intersect(quadTree1.topLeft,quadTree2.topLeft);
        node.topRight = intersect(quadTree1.topRight,quadTree2.topRight);
        node.bottomLeft = intersect(quadTree1.bottomLeft,quadTree2.bottomLeft);
        node.bottomRight = intersect(quadTree1.bottomRight,quadTree2.bottomRight);
        if(node.topLeft.isLeaf && node.bottomRight.isLeaf && 
        node.topRight.isLeaf && node.bottomLeft.isLeaf   && 
        node.bottomRight.val == node.bottomLeft.val && 
        node.topLeft.val == node.bottomLeft.val && 
        node.topRight.val == node.bottomLeft.val){
            node.val = node.topLeft.val;
            node.isLeaf = true;
        }
        return node;
    }
};
