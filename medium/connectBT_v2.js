/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if(root == null) return null;
    let queue = [];
    queue.push(root);//use queue to realize level traverse
    while(queue.length > 0){
        let len = queue.length;
        while(len--){
            let node = queue.shift();
            if(len>0){
                node.next = queue[0];
            }
            if(node.left != null) queue.push(node.left);
            if(node.right != null) queue.push(node.right);
        }
    }
    return root;
};
