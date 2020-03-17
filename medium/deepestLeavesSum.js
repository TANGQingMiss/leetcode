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
var deepestLeavesSum = function(root) {
    //use level traverse
    let res = [];
    let queue = [];
    queue.push(root);
    while(queue.length > 0){
        let len = queue.length;
        let sum = 0;
        for(let i = 0; i < len; i++){
            let tmp = queue.shift();
            sum += tmp.val;
            if(tmp.left) queue.push(tmp.left);
            if(tmp.right) queue.push(tmp.right);
        }
        res.push(sum);
    }
    return res[res.length-1];
};
