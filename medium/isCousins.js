/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
//如果二叉树的两个节点深度相同，但父节点不同，则它们是一对堂兄弟节点
var isCousins = function(root, x, y) {
    let xParent, yParent, xDep, yDep;
    dfs(root.left, 1, x, y, root.val);
    dfs(root.right, 1, x, y, root.val);
    return (xpar != ypar) && (xdep == ydep);
    
    function dfs(node, dep, x, y, par) {
        if (node == null) {
            return;
        }
        if (node.val == x) {
            xpar = par;
            xdep = dep;
        } else if (node.val == y) {
            ypar = par;
            ydep = dep;
        } else {
            dfs(node.left, dep+1, x, y, node.val);
            dfs(node.right, dep+1, x, y, node.val);
        }
    }
};
