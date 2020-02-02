/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if(head == null || head.next == null) return true;
    let fast = head;
    let slow = head;
    while(fast.next != null && fast.next.next != null){
        fast = fast.next.next;
        slow = slow.next;
    }
    function reverse(head){
        var pNode = head; 
        var pPre = null; 
        var pNext;
        while(pNode){
            pNext = pNode.next;   
            pNode.next = pPre;       
            pPre = pNode;             
            pNode = pNext;             
        }
        return pPre;
    }
    slow = reverse(slow.next);
    while(slow != null){
        if(head.val != slow.val) return false;
        head = head.next;
        slow = slow.next;
    }
    return true;
};
