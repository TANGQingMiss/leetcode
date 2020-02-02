/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    let res = [];
    if(!root) return res;
    const findPath = (root, p) => {
        if(root.left){
            findPath(root.left, `${p}->${root.left.val}`);
            //``template literals
        }
        if(root.right){
            findPath(root.right, `${p}->${root.right.val}`);
        }
        if(!root.left && !root.right){
            res.push(`${p}`);
        }
    }
    findPath(root, root.val);
    return res;
};
