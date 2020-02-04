/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    let res = 0;
    function depthBinaryTree(root){
        if(!root) return -1;
        let left = root.left?depthBinaryTree(root.left)+1:0;
        let right = root.right?depthBinaryTree(root.right)+1:0;
        res = Math.max(left+right,res);
        return Math.max(left,right);
    }
    depthBinaryTree(root);
    return res;
};
