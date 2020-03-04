/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

var inorderTraversal = function(root) {
    //recursion version
    // let res = [];
    // function inorder(root){
    //     if(root){
    //         inorder(root.left);
    //         res.push(root.val);
    //         inorder(root.right);
    //     }
    // }
    // inorder(root);
    // return res;

    //iteration version
    let res = [];
    if (root) {
        let stack = [];
        while (stack.length > 0 || root != null) {
            if (root != null) {
                stack.push(root);
                root = root.left;
            } else {
                let node = stack.pop();
                res.push(node.val);
                root = node.right;
            }
        }
    }
    return res;
};
