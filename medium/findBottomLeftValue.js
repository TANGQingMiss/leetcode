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
var findBottomLeftValue = function(root) {
    //level traserve, the last level, the first element
    let res = [];
    if(root == null) return res;
    let stack = [];
    stack.push(root);
    while(stack.length > 0){
        let len = stack.length;
        let tmp = [];
        while(len--){
            let p = stack.shift();
            tmp.push(p.val);
            if(p.left) stack.push(p.left);
            if(p.right) stack.push(p.right);
        }
        res.push(tmp);
    }
    return res[res.length-1][0];
};
