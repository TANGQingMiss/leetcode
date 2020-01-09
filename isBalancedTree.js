/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    return height(root) >= 0;
};

function height(root){
    if(root==null) return 0;
    let left = height(root.left);
    let right = height(root.right);
    if(left >= 0 && right >= 0 && Math.abs(left-right) <= 1){
        return 1 + Math.max(left,right);
    }else{
        return -1;
    }
}
