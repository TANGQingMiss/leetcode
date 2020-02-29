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
    let pre = new ListNode(0);
    pre.next = head;
    head = pre;
    let left = new ListNode();
    let right = new ListNode();
    while(pre.next != null){
        left = pre.next;
        right = left;
        while(right.next && right.next.val == left.val){
            right = right.next;
        }
        if(left == right) pre = pre.next;
        else pre.next = right.next;
    }
   return head.next;
};
