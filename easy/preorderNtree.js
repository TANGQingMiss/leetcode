/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
    // let res = [];
    // if(root == null) return res;
    // let queue = [root];
    // while(queue.length){
    //     let cur = queue.shift();
    //     res.push(cur.val);
    //     queue = cur.children.concat(queue);
    // }
    //return res;

    let res = [];
    function pre(root){
        if(!root) return;
        res.push(root.val);
        for(let i = 0; root.children && i < root.children.length; i++){
            pre(root.children[i]);
        }
    }
    pre(root);
    return res;
};
