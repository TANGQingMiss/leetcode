/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let cur = 0;
    let max = 0;
    for(let i = 0; i < nums.length; i++){
        if(i < k){
            cur += nums[i];
            max = cur;
            continue;
        }
        cur = cur + nums[i] - nums[i - k];
        max = cur > max ? cur : max;
    }
    return max / k;
};
