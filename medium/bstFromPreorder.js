/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function(preorder) {
    if(preorder.length == 0) return null;
    let root = new TreeNode(preorder[0]);
    if(preorder.length == 1) return root;
    let left = [],right = [];
    for(let i = 1; i < preorder.length; i++){
        if(preorder[i] < preorder[0]) left.push(preorder[i]);
        else right.push(preorder[i]);
    }
    root.left = bstFromPreorder(left);
    root.right = bstFromPreorder(right);
    return root;
};
