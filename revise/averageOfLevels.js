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
var averageOfLevels = function(root) {
    let res = [];
    if(root == null) return res;
    let list = [];
    list.push(root);
    while(list.length != 0){
        let len = list.length;
        let sum = 0;
        for(let i = 0; i < len; i++){
            let node = list.shift();
            sum += node.val;
            if(node.left != null) list.push(node.left);
            if(node.right != null) list.push(node.right);
        }
        res.push(sum/len);
    }
    return res;
};
