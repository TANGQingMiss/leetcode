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
//给你两个 非空 链表来代表两个非负整数。数字最高位位于链表开始位置。它们的每个节点只存储一位数字。将这两数相加会返回一个新的链表
var addTwoNumbers = function(l1, l2) {
    let stack1 = [];
    let stack2 = [];
    while(l1 != null){
        stack1.push(l1.val);
        l1 = l1.next;
    }
    while(l2 != null){
        stack2.push(l2.val);
        l2 = l2.next;
    }
    let carry = 0;
    let head = null;
    while(stack1.length > 0 || stack2.length > 0 || carry > 0){
        let sum = carry;
        sum += stack1.length == 0 ? 0 : stack1.pop();
        sum += stack2.length == 0 ? 0 : stack2.pop();
        let node = new ListNode(sum % 10);
        node.next = head;
        head = node;
        carry = Math.floor( sum / 10);
    }
    return head;
};
