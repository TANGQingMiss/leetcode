/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    let res = [];
    dfs(res,[],root,sum);
    return res;
};

function dfs(res,tmp,root,sum){
    if(root==null) return;
    tmp.push(root.val);
    if(!root.left && !root.right){
        if(root.val == sum){
            let pushIn = [];
            for(let i = 0; i < tmp.length; i++){
                pushIn[i] = tmp[i];
            }
            res.push(pushIn);
            return;
        }
    }
    if(root.left){
        dfs(res,tmp,root.left,sum-root.val);
        tmp.pop();
    }
    if(root.right){
        dfs(res,tmp,root.right,sum-root.val);
        tmp.pop();
    }
}
