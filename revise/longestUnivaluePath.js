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
var longestUnivaluePath = function(root) {
    if(root == null) return 0;
    let max = 0;

    function getMax(root,val){
        if(root == null) return 0;
        let left = getMax(root.left, root.val);
        let right = getMax(root.right,root.val);
        max = Math.max(max,left+right);
        if(root.val == val){
            return Math.max(left,right)+1;
        }else return 0;
    }

    getMax(root,root.val);
    return max;
};
