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
var preorderTraversal = function(root) {
    //recursion version
    // let res = [];
    // function preorder(root){
    //     if(root){
    //         res.push(root.val);
    //         preorder(root.left);
    //         preorder(root.right);
    //     }
    // }
    // preorder(root);
    // return res;

    //iteration version
    let res = [];
    if (root) {
        let stack = [];
        stack.push(root);
        while (stack.length > 0) {
            let node = stack.pop();
            res.push(node.val);
            if(node.right) stack.push(node.right);
            if(node.left) stack.push(node.left);
        }
    }
    return res;
};
