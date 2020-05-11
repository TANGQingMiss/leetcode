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
//返回给定树中最长 交错路径 的长度
var longestZigZag = function(root) {
    let max = 0;
    dfs(root,true);
    return max;

    function dfs(root,isLeft){
        if(root == null) return 0;
        let r = dfs(root.right,false);
        let l = dfs(root.left,true);
        let big = l > r ? l : r;
        if(big > max) max = big;
        if(isLeft){
            return r + 1;
        }else{
            return l + 1;
        }
    }
};
