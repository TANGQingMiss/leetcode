/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    if(!root) return [];
    let res = [];

    let functionAdd = (r,i) =>{
        if(r){
            res[i] = res[i] || [];
            res[i].push(r.val);
            functionAdd(r.left,i+1);
            functionAdd(r.right,i+1);
        }
    };

    functionAdd(root,0);
    return res.reverse();
    

};
