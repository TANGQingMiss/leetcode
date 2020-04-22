/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
//给定一个包含非负数的数组和一个目标整数 k，编写一个函数来判断该数组是否含有连续的子数组，其大小至少为 2，总和为 k 的倍数，即总和为 n*k，其中 n 也是一个整数
var checkSubarraySum = function(nums, k) {
    if(nums.length < 2) return false;
    for(let i = 0; i < nums.length - 1; i++){
        if(nums[i] == 0 && nums[i + 1] == 0) return true;
    }
    if(k == 0) return false;
    if(k < 0) k = -k;
    let map = new Map();
    map.set(0,-1);
    let sum = 0;
    for(let i = 0; i < nums.length; i++){
        sum += nums[i];
        let mod = sum % k;
        if(map.has(mod)){
            if(i - map.get(mod) > 1) return true;
        }else map.set(mod,i);
    }
    return false;
};
