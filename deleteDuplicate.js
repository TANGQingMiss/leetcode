/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if(head==null) return null;
    if(head.next==null) return head;
    if(head.val==head.next.val) head = deleteDuplicates(head.next);
    else head.next = deleteDuplicates(head.next);
    return head;
};