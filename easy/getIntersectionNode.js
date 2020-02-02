/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    if(headA == null || headB == null) return null;
    var pa = headA;
    var pb = headB;
    while(pa != pb){
        if(pa == null) pa = headB;
        else pa = pa.next;

        if(pb == null) pb = headA;
        else pb = pb.next;
    }
    return pa;
};
