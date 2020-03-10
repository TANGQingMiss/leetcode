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
var largestValues = function(root) {
    //level traserve
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
    let result = [];
    for(let i = 0; i < res.length; i++){
        result.push(Math.max.apply(null,res[i]));
    }
    return result;
};
