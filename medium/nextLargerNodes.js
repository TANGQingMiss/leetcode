/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nextLargerNodes = function(head) {
    if(head == null) return [];
    let stack = [];
    while(head != null){
        stack.push(head.val);
        head = head.next;
    }
    for(let i = 0; i < stack.length - 1; i++){
        let find = false;
        for(let j = i + 1; j < stack.length; j++){
            if(stack[i] < stack[j]){
                stack[i] = stack[j];
                find = true;
                break;
            }
        }
        if(find == false) stack[i] = 0;
    }
    stack[stack.length - 1] = 0;
    return stack;
};
