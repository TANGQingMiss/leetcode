/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
//最深叶子节点的公共祖先的左右子树高度相同，也就是最深叶子节点的深度一定相同。 如果左右子树不等高，高度小的那个子树节点的叶子节点的深度肯定不是最深的（因为比高度大的子树深度小）。 所以，最深叶子节点肯定在深度较大的子树当中，采用深度优先遍历，每次只要继续往深度更大的子树进行递归即可。 如果左右子树深度相同，表示获取到了最深叶子节点的最近公共祖先
var lcaDeepestLeaves = function(root) {
    if(root == null){
        return null;
    }
    let left = depth(root.left);
    let right = depth(root.right);
    if(left == right){
        return root;
    }else if(left > right){
        return lcaDeepestLeaves(root.left);
    }else return lcaDeepestLeaves(root.right);

    function depth(root){
        if(root == null) return 0;
        let left = depth(root.left);
        let right = depth(root.right);
        return 1 + Math.max(left,right);
    }
};
