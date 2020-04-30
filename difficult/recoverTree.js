/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
//二叉搜索树中的两个节点被错误地交换。请在不改变其结构的情况下，恢复这棵树
var recoverTree = function(root) {
    let t1,t2,pre;
    inorder(root);
    let tmp = t1.val;
    t1.val = t2.val;
    t2.val = tmp;
    function inorder(root){
        if(root == null) return;
        inorder(root.left);
        if(pre != null && pre.val > root.val){
            if(t1 == null) t1 = pre;
            t2 = root;
        }
        pre = root;
        inorder(root.right);
    }
};
