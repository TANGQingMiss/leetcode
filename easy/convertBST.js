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
var convertBST = function(root) {
    let num = 0;
    function rightRootLeft(root){
        if(root != null){
            //read right
            rightRootLeft(root.right);
            num += root.val;
            root.val = num;
            //read left
            rightRootLeft(root.left);
            return root;
        }
        return null;
    }
    rightRootLeft(root);
    return root;
};
