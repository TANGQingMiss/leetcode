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
var countNodes = function(root) {
    //check depth for complete binary tree
    function getDepth(root){
        let depth = 0;
        while(root != null){
            depth++;
            root = root.left;
        }
        return depth;
    }

    if(root == null) return 0;
    let left = getDepth(root.left);
    let right = getDepth(root.right);
    //if left == right -> left part is full
    if(left == right) return 1 + (1<<left) - 1 + countNodes(root.right);
    //root + left + count(right)
    else return 1+ (1<<right) - 1 + countNodes(root.left);
};
