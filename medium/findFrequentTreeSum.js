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

var findFrequentTreeSum = function(root) {
    let max = 0;
    if(root == null) return [];
    let map = new Map();

    function postOrder(root,map){
        if(root == null) return 0;
        let left = postOrder(root.left,map);
        let right = postOrder(root.right,map);
        let value = left + right + root.val;
        map.set(value,map.has(value)?map.get(value)+1:1);
        max = Math.max(max,map.get(value));
        return value;
    }

    postOrder(root,map);
    let res = [];
    for(let [key,value] of map){
        if(value == max) res.push(key);
    }
    return res;
};
