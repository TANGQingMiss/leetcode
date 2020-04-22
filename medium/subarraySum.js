/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
//给定一个整数数组和一个整数 k，你需要找到该数组中和为 k 的连续的子数组的个数
var subarraySum = function(nums, k) {
    let cul = new Array(nums.length + 1).fill(0);
    let res = 0;
    for(let i = 1; i <= nums.length; i++){
        cul[i] = cul[i-1] + nums[i-1];
    }
    for(let i = 0; i < cul.length; i++){
        for(let j = i + 1; j < cul.length; j++){
            res += cul[j] - cul[i] == k;
        }
    }
    return res;
};
