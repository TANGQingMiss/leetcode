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
var sumEvenGrandparent = function(root) {
    if(root == null) return 0;
    let tmp = 0;
    if(root.val % 2 == 0){
        if(root.left){
            if(root.left.left) tmp += root.left.left.val;
            if(root.left.right) tmp += root.left.right.val;
        }
        if(root.right){
            if(root.right.right) tmp += root.right.right.val;
            if(root.right.left) tmp += root.right.left.val;
        }
    }
    return tmp + sumEvenGrandparent(root.left) + sumEvenGrandparent(root.right);
};
