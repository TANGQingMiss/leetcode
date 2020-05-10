/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
//如果某个 连续 子数组中恰好有 k 个奇数数字，我们就认为这个子数组是「优美子数组」
var numberOfSubarrays = function(nums, k) {
    if(nums.length < k) return 0;
    let cnt = 0;
    let odd = [];
    for(let i = 0; i < nums.length; i++){
        if(nums[i] % 2 != 0) odd.push(i);
    }
    if(odd.length < k) return 0;
    odd.unshift(-1);
    odd.push(nums.length);
    for(let i = 1; i + k < odd.length; i++){
        cnt += ((odd[i] - odd[i-1]) * (odd[i+k] - odd[i+k-1]) );
    }
    return cnt;
};
