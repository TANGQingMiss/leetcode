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
var zigzagLevelOrder = function(root) {
    let res = [];
    function traversal(root,res,level){
        if(root == null) return;
        if(res.length == level){
            res.push([]);
        }
        if((level & 1) == 1){
            res[level].unshift(root.val);
        }else{
            res[level].push(root.val);
        }

        traversal(root.left,res,level+1);
        traversal(root.right,res,level+1);
    }

    traversal(root,res,0);
    return res;

};
