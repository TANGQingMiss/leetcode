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
var getMinimumDifference = function(root) {
    let pre = null;
    let min = Number.MAX_VALUE;

    function middleOrderTraverse(root){
        if(root == null) return;
        middleOrderTraverse(root.left);
        if(pre != null){
            min = Math.min(Math.abs(root.val - pre.val),min);
        }
        pre = root;
        middleOrderTraverse(root.right);
    }

    middleOrderTraverse(root);
    return min;

};
