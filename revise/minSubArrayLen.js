/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
    let i = 0;
    let sum = 0;
    let len = 0;
    for(let j = 0; j < nums.length; j++){
        sum += nums[j];
        while(sum >= s){
            len = len == 0 ? j - i + 1 : Math.min(len, j - i + 1);
            sum -= nums[i++];
        }
    }
    return len;
};
