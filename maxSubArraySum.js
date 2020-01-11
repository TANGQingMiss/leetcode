/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if(nums.length==1) return nums;
    let res = nums[0];
    let tmp = 0;
    for(let j = 0; j < nums.length; j++){
        if(tmp > 0) tmp += nums[j];
        else tmp = nums[j];
        res = Math.max(res,tmp);
    }
    return res;
};
