/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
//合并 k 个排序链表，返回合并后的排序链表
var mergeKLists = function(lists) {
    if(lists.length == 0) return null;
    if(lists.length == 1) return lists[0];
    if(lists.length == 2) return mergeTwoLists(lists[0],lists[1]);
    let mid = Math.floor(lists.length / 2);
    let l1 = new Array(mid);
    let l2 = new Array(lists.length - mid);
    for(let i = 0; i < mid; i++){
        l1[i] = lists[i];
    }
    for(let i = mid, j = 0; i < lists.length; i++,j++){
        l2[j] = lists[i];
    }
    return mergeTwoLists(mergeKLists(l1),mergeKLists(l2));

    function mergeTwoLists(l1,l2){
        if(l1 == null) return l2;
        if(l2 == null) return l1;
        let head = null;
        if(l1.val <= l2.val){
            head = l1;
            head.next = mergeTwoLists(l1.next,l2);
        }else{
            head = l2;
            head.next = mergeTwoLists(l1,l2.next);
        }
        return head;
    }
};
