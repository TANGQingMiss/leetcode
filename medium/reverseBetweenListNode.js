/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
    if(head == null || m == n) return head;
    let first = new ListNode(0);
    first.next = head;
    let pre = first;
    for(let i = 1; i < m; i++){
        pre = pre.next;
    }
    head = pre.next;
    for(let i = m; i < n; i++){
        let nex = head.next;
        head.next = nex.next;
        nex.next = pre.next;
        pre.next = nex;
    }
    return first.next;
    
    
};
