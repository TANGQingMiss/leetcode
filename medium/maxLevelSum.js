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
//给你一个二叉树的根节点 root。设根节点位于二叉树的第 1 层，而根节点的子节点位于第 2 层，依此类推。
//请你找出层内元素之和 最大 的那几层（可能只有一层）的层号，并返回其中 最小 的那个
var maxLevelSum = function(root) {
    if(root == null) return null;
    let queue = [];
    queue.push(root);
    let res = [];
    while(queue.length > 0){
        let len = queue.length;
        let cnt = 0;
        for(let i = 0; i < len; i++){
            let tmp = queue.shift();
            cnt += tmp.val;
            if(tmp.left) queue.push(tmp.left);
            if(tmp.right) queue.push(tmp.right);
        }
        res.push(cnt);
    }
    let max = Math.max.apply(null,res);
    return res.indexOf(max)+1;
};
