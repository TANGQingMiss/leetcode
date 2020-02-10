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
 * @return {number}
 */

var pathSum = function(root, sum) {
    if(root == null) return 0;
    return pathSum(root.left,sum) + pathSum(root.right,sum) + dfs(root,sum);

    function dfs(root,sum){
        if(root == null) return 0;
        let count = 0;
        if(root.val == sum){
            count = 1;
        }
        return count + dfs(root.left,sum - root.val) + dfs(root.right,sum-root.val);
    }
};
