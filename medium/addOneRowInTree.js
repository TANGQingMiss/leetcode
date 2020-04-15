/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} v
 * @param {number} d
 * @return {TreeNode}
 */
//给定一个二叉树，根节点为第1层，深度为 1。在其第 d 层追加一行值为 v 的节点。
var addOneRow = function(root, v, d) {
    if(d == 0 || d == 1){
        let t = new TreeNode(v);
        if(d == 1) t.left = root;
        else t.right = root;
        return t;
    }
    if(root != null && d > 1){
        root.left = addOneRow(root.left,v, d > 2 ? d - 1 : 1);
        root.right = addOneRow(root.right,v,  d > 2 ? d - 1 : 0);
    }
    return root;
};
