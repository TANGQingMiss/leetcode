/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
    if(nums == null || nums.length < 2) return 0;
    nums.sort(function(x,y){return y - x;});
    let res = 0;
    for(let i = 0; i < nums.length - 1; i++){
        res = Math.max(res,nums[i] - nums[i+1]);
    }
    return res;
};
