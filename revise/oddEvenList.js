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
//给定一个单链表，把所有的奇数节点和偶数节点分别排在一起。请注意，这里的奇数节点和偶数节点指的是节点编号的奇偶性，而不是节点的值的奇偶性
var oddEvenList = function(head) {
    if(head == null || head.next == null) return head;
    let o = head;
    let p = head.next;
    let e = p;
    while(o.next != null && e.next != null){
        o.next = e.next;
        o = o.next;
        e.next = o.next;
        e = e.next;
    }
    o.next = p;
    return head;
};
