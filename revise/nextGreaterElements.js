/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    let n = nums.length;
    let res = new Array(nums.length);
    res.fill(-1);
    //use stack to store index, res to store value
    let stack = [];
    for(let i = 0; i < 2 * n; i++){
        let tmp = nums[i % n];
        //while stack is not empty and the last element is < tmp
        //record value and pop
        while(stack.length > 0 && tmp > nums[stack[stack.length-1]]){
            res[stack.pop()] = tmp;
        }//else >= tmp push tmp
        if(i < n) stack.push(i);
    }
    return res;
};
