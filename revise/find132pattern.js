/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function(nums) {
    let last = -Infinity;
    let stack = [];
    if(nums.length < 3) return false;
    for(let i = nums.length - 1; i >= 0; i--){
        if(nums[i] < last) return true; //find '1'
        while(stack.length != 0 && stack[stack.length-1] < nums[i]){
            last = stack.pop(); //set '2'
        }
        stack.push(nums[i]); //set '3'
    }
    return false;
};
