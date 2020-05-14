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
//给你一个链表的头节点 head，请你编写代码，反复删去链表中由 总和 值为 0 的连续节点组成的序列，直到不存在这样的序列为止。
//删除完毕后，请你返回最终结果链表的头节点
var removeZeroSumSublists = function(head) {
    let aHead = new ListNode(-1);
    let h = aHead;
    h.next = head;
    let q = h.next;
    while(h.next != null){
        let sum = 0;
        while(q != null){
            sum += q.val;
            if(sum == 0){
                break;
            }
            q = q.next;
        }
        if(sum == 0){ 
            // h.next至q之间的的连续子链表和等于0，那么删除这段子链表，亦即将h.next和q指针都指向q.next，进入下一层循环
            q = q.next;
            h.next = q;
        }else{
             // h.next开头的所有连续子链表累加和都不等于0，那么h.next节点应该保留，并继续从h.next.next开始检测
            h = h.next;
            q = h.next;
        }
    }
    return aHead.next;
};
