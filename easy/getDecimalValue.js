/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
    //method 1: use stack
    // if(head == null) return 0;
    // let value = [];
    // while(head != null){
    //     value.push(head.val);
    //     head = head.next;
    // }
    // let res = 0;
    // for(let i = 0; i < value.length; i++){
    //     if(value[i] == 1){
    //         res += Math.pow(2,value.length - 1 - i);
    //     }
    // }
    // return res;

    //method 2: use <<
    if(head == null) return 0;
    let res = 0;
    while(head != null){
        res = (res<<1)+head.val;
        head = head.next;
    }
    return res;
};
