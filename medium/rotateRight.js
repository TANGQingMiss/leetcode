/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if(head == null || k == 0) return head;
    let countLength = head;
    let len = 1;
    while(countLength.next){
        countLength = countLength.next;
        len++;
    }//get total length of list
    k %= len;
    if(k == 0) return head;
    let first = head;
    let pointer1 = first;
    let second = new ListNode(0);
    second.next = head;
    let pointer2 = second;
    let time = len - k;
    while(time > 1){
        pointer1 = pointer1.next;
        time--;
    }
    pointer2.next = pointer1.next;
    pointer1.next = null; //finish first part
    while(pointer2.next){
        pointer2 = pointer2.next;
    }
    pointer2.next = first;
    return second.next;


};
