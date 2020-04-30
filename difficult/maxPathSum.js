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
//给定一个非空二叉树，返回其最大路径和。
//本题中，路径被定义为一条从树中任意节点出发，达到任意节点的序列。该路径至少包含一个节点，且不一定经过根节点
var maxPathSum = function(root) {
    let res = -Number.MAX_VALUE;
    getMax(root);
    return res;

    function getMax(root){
        if(root == null) return 0;
        let left = Math.max(0,getMax(root.left));
        let right = Math.max(0,getMax(root.right));
        res = Math.max(res,root.val + left + right);
        return Math.max(left,right) + root.val;
    }
};
