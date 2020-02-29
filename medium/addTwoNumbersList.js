/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    if(l1 == null) return l2;
    if(l2 == null) return l1;
    if(l1.val + l2.val < 10){
        let t = new ListNode(l1.val + l2.val);
        t.next = addTwoNumbers(l1.next,l2.next);
        return t;
    }
    let t = new ListNode((l1.val + l2.val) % 10);
    let tn = new ListNode(Math.floor((l1.val + l2.val) / 10));
    let addres = addTwoNumbers(l1.next,l2.next);
    t.next = addTwoNumbers(tn,addres);
    return t;
};
