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
var minDiffInBST = function(root) {
    let pre = null;
    let res = Number.MAX_VALUE;
    middleOrderTraverse(root);
    return res;

    function middleOrderTraverse(root){
        if(!root) return;
        middleOrderTraverse(root.left);
        if(pre != null){
            res = Math.min(root.val - pre.val, res);
        }
        pre = root;
        middleOrderTraverse(root.right);
    }
};
