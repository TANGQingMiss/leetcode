/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    if(inorder.length == 0 || postorder.length == 0) return null;
    let value = postorder[postorder.length-1];
    let root = new TreeNode(value);//post last element is root
    if(postorder.length == 1) return root;
    //find root in inorder traversal
    let idx = 0;
    while(inorder[idx] != value) idx++;
    let in_left = [],in_right = [],post_left = [],post_right = [];
    for(let i = 0; i < idx; i++){
        in_left.push(inorder[i]);
        post_left.push(postorder[i]);
    }
    for(let i = idx + 1; i < inorder.length; i++){
        in_right.push(inorder[i]);
        post_right.push(postorder[i-1]);
    }
    root.left = buildTree(in_left,post_left);
    root.right = buildTree(in_right,post_right);
    return root;

};
