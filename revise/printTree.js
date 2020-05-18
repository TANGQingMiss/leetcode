/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[][]}
 */
//在一个 m*n 的二维字符串数组中输出二叉树，并遵守以下规则：
//行数 m 应当等于给定二叉树的高度。
//列数 n 应当总是奇数。
//每个未使用的空间应包含一个空的字符串""
var printTree = function(root) {
    function dep(root){
        if(root == null) return 0;
        return 1 + Math.max(dep(root.left),dep(root.right));
    }

    function helper(root,cur,de,loc){
        if(root == null) return;
        cur[de][loc] = "" + root.val;
        if(root.left == null && root.right == null) return;
        let dis = 1 << (d - de - 2);
        if(root.left) helper(root.left,cur,de+1,loc-dis);
        if(root.right) helper(root.right,cur,de+1,loc+dis);
        return;
    }

    let d = dep(root);
    let ans = new Array(d);
    for(let i = 0; i < ans.length; i++){
        ans[i] = new Array(Math.pow(2,d)-1).fill("");
    }
    helper(root,ans,0,ans[0].length >> 1);
    return ans;
};
