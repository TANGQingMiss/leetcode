/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
//给定一个单链表 L：L0→L1→…→Ln-1→Ln ，
//将其重新排列后变为： L0→Ln→L1→Ln-1→L2→Ln-2→
var reorderList = function(head) {
    if(head == null || head.next == null) return head;
    let slow = head;
    let fast = head;
    //find middle node
    while(fast.next && fast.next.next){
        slow = slow.next;
        fast = fast.next.next;
    }
    let right = slow.next;
    slow.next = null;
    right = reverse(right);//reverse right part

    function reverse(list){
        let p1 = null;
        let p2 = list;
        let p3 = p2;
        while(p2){
            p3 = p2.next;
            p2.next = p1;
            p1 = p2;
            p2 = p3;
        }
        return p1;
    }

    let cur = head;
    while(cur && right){//insert right node one by one
        let curSecond = right;
        right = right.next;
        let nextCur = cur.next;
        curSecond.next = cur.next;
        cur.next = curSecond;
        cur = nextCur;
    }
};
