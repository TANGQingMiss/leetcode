/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
// 给你一个整数数组 nums 和一个正整数 k，请你判断是否可以把这个数组划分成一些由 k 个连续数字组成的集合。
// 如果可以，请返回 True；否则，返回 False。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/divide-array-in-sets-of-k-consecutive-numbers
var isPossibleDivide = function(nums, k) {
    if(nums.length % k != 0) return false;
    if(k == 1) return true;
    nums.sort(function(x,y){return x - y;});
    let map = new Map();
    for(let i = 0; i < nums.length; i++){
        map.set(nums[i],map.has(nums[i])?map.get(nums[i])+1:1);
    }
    for(let i = 0; i < nums.length; i++){
        if(map.get(nums[i]) == 0) continue;
        for(let j = 0; j < k; j++){
            if(map.get(nums[i]+j) == 0 || !map.has(nums[i]+j)) return false;
            map.set(nums[i]+j,map.get(nums[i]+j)-1);
        }
    }
    return true;
};
