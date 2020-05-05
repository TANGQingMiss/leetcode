/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */
//使用hash存储原结点和克隆结点的映射关系，通过映射关系处理克隆结点的random指针
var copyRandomList = function(head) {
    if (!head) return null
    let node = new Node(),temp = node,map = new Map()
    let curr = head
    // 第一次循环，赋值和存map
    while (curr) {
        temp.val = curr.val
        temp.next = curr.next ? new Node() : null
        map.set(curr, temp)
        curr = curr.next
        temp = temp.next
    }
    // 临时节点重新指向头节点
    curr = head
    temp = node
    // 走第二次，处理random
    while (curr) {
        temp.random = curr.random ? map.get(curr.random) : null
        temp = temp.next
        curr = curr.next
    }
    return node;
};
