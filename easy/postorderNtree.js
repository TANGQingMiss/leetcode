/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function(root) {
    let res = [];
    function pos(root){
        if(!root) return;
        for(let i = 0; root.children && i < root.children.length; i++){
            pos(root.children[i]);
        }
        res.push(root.val);
    }
    pos(root);
    return res;

};
