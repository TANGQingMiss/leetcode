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
var findSecondMinimumValue = function(root) {
    return traverse(root,root.val);

    function traverse(root,value){
        if(root == null) return -1;
        if(root.val > value){
            return root.val;
        }

        let left = traverse(root.left,value);
        let right = traverse(root.right,value);
        if(left >= 0 && right >= 0){
            return Math.min(left,right);
        }
        return Math.max(left,right);
    }

};
