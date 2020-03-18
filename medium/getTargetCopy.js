/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

var getTargetCopy = function(original, cloned, target) {
    if(original == null) return null;
    if(cloned == target) return cloned;
    let queue1 = [];
    let queue2 = [];
    queue1.push(original);
    queue2.push(cloned);
    while(queue1.length > 0){
        let len = queue1.length;
        for(let i = 0; i < len; i++){
            let tmp1 = queue1.shift();
            let tmp2 = queue2.shift();
            if(tmp1 == target) return tmp2;
            if(tmp1.left) queue1.push(tmp1.left);
            if(tmp1.right) queue1.push(tmp1.right);
            if(tmp2.left) queue2.push(tmp2.left);
            if(tmp2.right) queue2.push(tmp2.right);
        }

    }
    return null;
};
