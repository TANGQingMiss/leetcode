/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    if(!root1 && !root2) return true;
    if(!root1 || !root2) return false;
    function getLeaf(root,res){
        if(root == null) return res;
        if(root.left == null && root.right == null){
            res += root.val;
            return res;
        }
        return getLeaf(root.left,res) + getLeaf(root.right,res);
    }
    let res1 = getLeaf(root1,"");
    let res2 = getLeaf(root2,"");
    return res1 == res2;
};
