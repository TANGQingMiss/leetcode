/**
 * @param {number[]} nums
 * @return {boolean}
 */
//给定一个只包含正整数的非空数组。是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。
var canPartition = function(nums) {
    let ans = false
    const sum = nums.reduce((a, b) => a + b, 0)
    if(sum % 2) return false
    nums.sort((a, b) => b - a)
    function backTrack(arr, i, sum1, target) {
        if(sum1 == target) ans = true
        if(sum1 - arr[i] == target) ans = true
        if(sum1 < target) return
        if (!ans) {
            for(let j = i + 1; j < arr.length; j++) {
                backTrack(arr, j, sum1 - arr[i], target)
            }
        }
    }
    backTrack(nums, 0, sum, sum / 2)
    return ans
};
