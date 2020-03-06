/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
let last = -Infinity;
var isValidBST = function(root) {
    //method 1: in order traverse and check increasing order
    // let res = [];
    // function inorder(root){
    //     if(root == null) return;
    //     inorder(root.left);
    //     res.push(root.val);
    //     inorder(root.right);
    // }
    // inorder(root);
    // for(let i = 0; i < res.length - 1; i++){
    //     if(res[i] >= res[i+1]) return false;
    // }
    // return true;

    //method 2:
    if(root == null) return true;
    if(isValidBST(root.left)){
        if(last < root.val){
            last = root.val;
            return isValidBST(root.right);
        }
    }
    return false;
};
