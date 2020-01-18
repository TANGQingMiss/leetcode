/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
//previous DFS
// var invertTree = function(root) {
//     if(root==null) return null;
//     let rightTree = root.right;
//     root.right = invertTree(root.left);
//     root.left = invertTree(rightTree);
//     return root;
// };

//medium DFS
var invertTree = function(root) {
    if(root==null) return null;
    invertTree(root.left);
    let rightTree = root.right;
    root.right = root.left;
    root.left = rightTree;
    invertTree(root.left);
    return root;
};
