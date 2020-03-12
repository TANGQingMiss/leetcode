/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    if(root == null) return root;
    if(root.val < key){
        root.right = deleteNode(root.right,key);
        return root;
    }else if(root.val > key){
        root.left = deleteNode(root.left,key);
        return root;
    }
    else{
        if(root.left == null) return root.right;
        else if(root.right == null) return root.left;
        else{
            let prev = root.left;
            while(prev.right) prev = prev.right;
            root.val = prev.val;
            root.left = deleteNode(root.left,prev.val);
        }
    }
    return root;
};
