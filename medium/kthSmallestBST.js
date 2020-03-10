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
 * @return {number}
 */
var kthSmallest = function(root, k) {
    function findChild(root){
        if(root == null) return 0;
        return findChild(root.left) + findChild(root.right) + 1;
    }

    let left = findChild(root.left);
    if(left+1 == k) return root.val;
    else if(k <= left){
        return kthSmallest(root.left,k);
    }else return kthSmallest(root.right,k-left-1);
};
