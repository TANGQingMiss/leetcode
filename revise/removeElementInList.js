/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    if(head==null) return head;
    head.next = removeElements(head.next,val);
    return head.val == val? head.next : head;
};

var removeElements = function(head,val){
    let header = new ListNode('header');
    header.next = head;
    let cur = header;
    while(cur.next != null){
        if(cur.next.val == val){
            cur.next = cur.next.next;
        }else{
            cur = cur.next;
        }
    }
    return header.next;
}
