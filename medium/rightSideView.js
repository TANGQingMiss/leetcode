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
var rightSideView = function(root) {
    let res = [];
    if(!root) return res;
    let queue = [];
    queue.push(root);
    while(queue.length>0){
        let size = queue.length;
        for(let i = 0; i < size; i++){
            let tmp = queue.shift();
            if(i == size - 1){
                res.push(tmp.val);
            }
            if(tmp.left) queue.push(tmp.left);
            if(tmp.right) queue.push(tmp.right);
        }
    }
    return res;
};
