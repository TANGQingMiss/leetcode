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
var findMode = function(root) {
    const result = [[]];
    const numbers = [];
    const dfs = (node) => {
        if(!node) return;
        dfs(node.left);
        numbers.push(node.val);
        dfs(node.right);
    }

    dfs(root);

    const map = new Map();
    for(let number of numbers){
        map[number] = ~~(map[number]) + 1;
        const num = map[number];
        if(result[num] === undefined){
            result[num] = [];
        }
        result[num].push(number);
    }
    return result[result.length - 1];
};
