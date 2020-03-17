/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isCompleteTree = function(root) {
       if (root == null) return true;
        let queue = [];
        queue.push(root);
        let temp = new TreeNode();
        let flag = false;
        while (queue.length > 0) {
            temp = queue.shift();
            if (temp == null){
                flag = true;
                continue;
            }
            if (flag) return false;
            queue.push(temp.left);
            queue.push(temp.right);
        }
        return true;
};
