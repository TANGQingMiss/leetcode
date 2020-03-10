/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let res = [];
    if(root == null) return res;
    let stack = [];
    stack.push(root);
    while(stack.length > 0){
        let len = stack.length;
        let tmp = [];
        while(len--){
            let p = stack.shift();
            tmp.push(p.val);
            if(p.children){
                for(let i = 0; i < p.children.length; i++){
                    stack.push(p.children[i]);
                }
            }
        }
        res.push(tmp);
    }
    return res;
};
