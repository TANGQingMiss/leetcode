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
var rob = function(root) {
    if(root == null) return 0;
    postorder(root);
    return root.val;

    function postorder(root){
        if(root.left != null){
            postorder(root.left);
        }
        if(root.right != null){
            postorder(root.right);
        }
        let res1 = 0;
        let res2 = root.val;
        if(root.left){
            res1 += root.left.val;
            if(root.left.left) res2 += root.left.left.val;
            if(root.left.right) res2 += root.left.right.val;
        }
        if(root.right){
            res1 += root.right.val;
            if(root.right.left) res2 += root.right.left.val;
            if(root.right.right) res2 += root.right.right.val;
        }
        root.val = Math.max(res1,res2);
    }
};
