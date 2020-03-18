/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoMaxTree = function(root, val) {
    let node = new TreeNode(val);
    if(root == null || root.val < val){//root is null || root maximum value < val
        node.left = root;
        return node;
    } 
    let tmp = root;
    while(tmp.right && tmp.right.val > val){
        tmp = tmp.right;
    }
    node.left = tmp.right;
    tmp.right = node;
    return root;
};
