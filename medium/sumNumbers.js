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
var sumNumbers = function(root) {
    function calculate(root,sum){
        if(!root) return 0;
        else if(!root.left && !root.right){
            return 10*sum + root.val;
        }
        return calculate(root.left,10*sum + root.val) + calculate(root.right,10*sum+root.val);
    }  
    return calculate(root,0);
};
