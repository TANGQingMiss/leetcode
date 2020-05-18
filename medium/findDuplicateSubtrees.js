/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode[]}
 */
//给定一棵二叉树，返回所有重复的子树。对于同一类的重复子树，你只需要返回其中任意一棵的根结点即可。
//两棵树重复是指它们具有相同的结构以及相同的结点值。
//同样采用将二叉树序列化的形式，建立哈希表，统计每次出现的次数，添加到结果集当中
var findDuplicateSubtrees = function(root) {
    let res = [];
    let map = new Map();
    helper(root,res,map);
    return res;

    function helper(root,res,map){
        let str;
        if(root == null) return "#";
        str = root.val.toString() + " " + helper(root.left,res,map) + " " + helper(root.right,res,map);
        if(map.get(str) == 1) res.push(root);
        map.set(str,map.has(str) ? map.get(str)+1 : 1);
        return str;
    }
};
