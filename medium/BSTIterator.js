/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 */
let stack = [];

var BSTIterator = function(root) {
    while(root){
        stack.push(root);
        root = root.left;
    }
     
};

/**
 * @return the next smallest number
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    let tmp = stack.pop();
    let val = tmp.val;
    tmp = tmp.right;
    while(tmp){
        stack.push(tmp);
        tmp = tmp.left;
    }
    return val;
};

/**
 * @return whether we have a next smallest number
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    return stack.length != 0;
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
