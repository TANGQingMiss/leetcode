/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param head The linked list's head.
        Note that the head is guaranteed to be not null, so it contains at least one node.
 * @param {ListNode} head
 */
//给定一个单链表，随机选择链表的一个节点，并返回相应的节点值。保证每个节点被选的概率一样
var Solution = function (head) {
    this.head = head
};

/**
 * Returns a random node's value.
 * @return {number}
 */
Solution.prototype.getRandom = function () {
    let num = 0
    let res = null
    let head = this.head
    while (head != null) {
        num++
        if (!Math.floor(Math.random() * num)) res = head.val
        head = head.next
    }
    return res
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */
