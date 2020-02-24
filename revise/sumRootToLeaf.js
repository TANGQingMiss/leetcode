/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumRootToLeaf = function(root) {
    function sumRootToLeaf(root,total){
        let value = total * 2 + root.val;
        if(root.left == null && root.right == null){
            return value;
        }else{
            let sum = 0;
            if(root.left){
                sum += sumRootToLeaf(root.left,value);
            }if(root.right){
                sum += sumRootToLeaf(root.right,value);
            }
            return sum;
        }
    }

    return sumRootToLeaf(root,0);
};
