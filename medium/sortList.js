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
//在 O(n log n) 时间复杂度和常数级空间复杂度下，对链表进行排序
var sortList = function(head) {
    return head == null ? null : mergeSort(head);
    function mergeSort(head){
        if(head.next == null) return head;
        let p = head;
        let q = head;
        let pre = null;
        while(q != null && q.next != null){
            pre = p;
            p = p.next;
            q = q.next.next;
        }
        pre.next = null;
        let l = mergeSort(head);
        let r = mergeSort(p);
        return merge(l,r);
    }
    function merge(l,r){
        let dummy = new ListNode(0);
        let cur = dummy;
        while(l != null & r != null){
            if(l.val <= r.val){
                cur.next = l;
                cur = cur.next;
                l = l.next;
            }else{
                cur.next = r;
                cur = cur.next;
                r = r.next;
            }
        }
        if(l != null) cur.next = l;
        if(r != null) cur.next = r;
        return dummy.next;
    }
};
