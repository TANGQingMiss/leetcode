/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {TreeNode}
 */
var removeLeafNodes = function(root, target) {
    if(root == null) return root;
    root.left = removeLeafNodes(root.left,target);
    root.right = removeLeafNodes(root.right,target);
    if(root.left == null && root.right == null && root.val == target) root = null;
    return root;
};
