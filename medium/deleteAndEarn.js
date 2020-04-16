/**
 * @param {number[]} nums
 * @return {number}
 */
//每次操作中，选择任意一个 nums[i] ，删除它并获得 nums[i] 的点数。之后，你必须删除每个等于 nums[i] - 1 或 nums[i] + 1 的元素。
var deleteAndEarn = function(nums) {
    let arr = new Array(10001).fill(0);
    for(let i = 0; i < nums.length; i++){
        arr[nums[i]] += nums[i];
    }
    let dp = new Array(10001);
    dp[0] = 0;
    dp[1] = arr[1];
    for(let i = 2; i < arr.length; i++){
        dp[i] = Math.max(dp[i-1],dp[i-2]+arr[i]);
    }
    return dp[10000];
};
