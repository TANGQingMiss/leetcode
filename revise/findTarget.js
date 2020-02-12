/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
    var findTargetFromHash = function(root, k, hash){
        if(root == null) return false;
        let remainder = k - root.val;
        if(hash.hasOwnProperty(remainder)) return true;
        else hash[root.val] = true;
        return findTargetFromHash(root.left,k,hash) || findTargetFromHash(root.right,k,hash);
    }
    return findTargetFromHash(root,k,{});

};
