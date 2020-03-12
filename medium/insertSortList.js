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
var insertionSortList = function(head) {
    let res = new ListNode(0);
    res.next = head;
    let pre;
    while(head != null && head.next != null){
        if(head.val <= head.next.val){
            head = head.next;
            continue;
        }
        pre = res;
        while(pre.next.val <  head.next.val) pre = pre.next;
        let current = head.next;
        head.next = current.next;
        current.next = pre.next;
        pre.next = current;
    }
    return res.next;
};
