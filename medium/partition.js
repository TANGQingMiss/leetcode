/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    let s = new ListNode(0);
    let l = new ListNode(0);
    let node1 = s;
    let node2 = l;
    while(head != null){
        if(head.val < x){
            node1.next = head;
            head = head.next;
            node1 = node1.next;
            node1.next = null;
        }else{
            node2.next = head;
            head = head.next;
            node2 = node2.next;
            node2.next = null;
        }
    }
    node1.next = l.next;
    return s.next;
};
