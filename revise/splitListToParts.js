/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} root
 * @param {number} k
 * @return {ListNode[]}
 */
//给定一个头结点为 root 的链表, 编写一个函数以将链表分隔为 k 个连续的部分。
var splitListToParts = function(root, k) {
    let len = 0;
    let tmp = root;
    while(tmp){
        len++;
        tmp = tmp.next;
    }
    let avg = Math.floor(len / k);
    let remainder = len % k;
    let res = new Array(k);
    let head = root;
    let pre = null;
    for(let i = 0; i < k; i++){
        res[i] = head;
        let tmpLen = remainder > 0 ? avg + 1 : avg;
        for(let j = 0; j < tmpLen; j++){
            pre = head;
            head = head.next;
        }
        if(pre) pre.next = null;
        if(remainder) remainder--;
    }
    return res;
};
