/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {TreeNode} root
 * @return {boolean}
 */
//给你一棵以 root 为根的二叉树和一个 head 为第一个节点的链表。
//如果在二叉树中，存在一条一直向下的路径，且每个点的数值恰好一一对应以 head 为首的链表中每个节点的值，那么请你返回 True ，否则返回 False
var isSubPath = function(head, root) {
    if(head == null) return true;
    if(root == null) return false;
    if(dfs(head,root)) return true;
    return isSubPath(head,root.left) || isSubPath(head,root.right);

    function dfs(head,root){
        if(head == null) return true;
        if(root == null) return false;
        if(root.val != head.val) return false;
        return dfs(head.next,root.left) || dfs(head.next,root.right);
    }
};
