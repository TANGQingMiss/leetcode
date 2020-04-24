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
//给定一个链表，返回链表开始入环的第一个节点。 如果链表无环，则返回 null
var detectCycle = function(head) {
    if(head == null || head.next == null) return null;
    let p = head;
    let p2 = head;
    let hasCycle = false;
    while(p2.next != null && p2.next.next != null){
        p = p.next;
        p2 = p2.next.next;
        if(p == p2){
            hasCycle = true;
            break;
        }
    }
    if(hasCycle){
        let q = head;
        while(p != q){
            p = p.next;
            q = q.next;
        }
        return q;
    }else return null;
};
