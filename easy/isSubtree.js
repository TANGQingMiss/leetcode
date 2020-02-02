/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function(s, t) {
    if(s == null && t == null) return true;
    if(s == null || t == null) return false;
    if(isSameTree(s,t)) return true;
    return isSubtree(s.left,t) || isSubtree(s.right,t);
    
    function isSameTree(s,t){
        if(s == null) return t == null;
        if(t == null) return s == null;
        if(s.val != t.val) return false;
        return isSameTree(s.left,t.left) && isSameTree(s.right, t.right);
    }
};
