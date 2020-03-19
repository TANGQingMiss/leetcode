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
var maxAncestorDiff = function(root) {
    if(root == null) return 0;
    let res = 0;
    function dfs(root,min,max){
        if(root == null) return;
        max = Math.max(root.val,max);
        min = Math.min(root.val,min);
        res = Math.max(res,max-min);
        dfs(root.left,min,max);
        dfs(root.right,min,max);
    }
    dfs(root,Number.MAX_VALUE,-Number.MAX_VALUE);
    return res;
};
