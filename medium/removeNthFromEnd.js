/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let first = head;
    let second = head;
    for(let i = n; i > 0; i--){
        first = first.next;
    }
    if(first == null) return head.next;
    while(first.next != null){
        first = first.next;
        second = second.next;
    }
    second.next = second.next.next;
    return head;
};
