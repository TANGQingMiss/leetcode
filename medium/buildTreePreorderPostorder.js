/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} pre
 * @param {number[]} post
 * @return {TreeNode}
 */
var constructFromPrePost = function(pre, post) {
    if(pre.length == 0 || post.length == 0) return null;
    let root = new TreeNode(pre[0]);
    if(pre.length == 1) return root;
    let pre_left = [],pre_right = [],post_left = [],post_right = [];
    let value = pre[1];
    let idx = 0;
    while(post[idx] != value) idx++;
    for(let i = 0; i <= idx; i++){
        pre_left.push(pre[i+1]);
        post_left.push(post[i]);
    }
    for(let i = idx + 1; i < pre.length - 1; i++){
        pre_right.push(pre[i+1]);
        post_right.push(post[i]);
    }
    root.left = constructFromPrePost(pre_left,post_left);
    root.right = constructFromPrePost(pre_right,post_right);
    return root;
};
