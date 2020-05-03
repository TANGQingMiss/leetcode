/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
//给定一个非负整数数组，a1, a2, ..., an, 和一个目标数，S。现在你有两个符号 + 和 -。对于数组中的任意一个整数，你都可以从 + 或 -中选择一个符号添加在前面
var findTargetSumWays = function(nums, S) {
    let sum = 0;
    for(let i = 0; i < nums.length; i++){
        sum += nums[i];
    }
    if(sum < S || (sum + S) % 2 == 1){
        return 0;
    }
    let w = Math.floor((sum + S) / 2);
    let dp = new Array(w+1).fill(0);
    dp[0] = 1;
    for(let i = 0; i < nums.length; i++){
        for(let j = w; j >= nums[i]; j--){
            dp[j] += dp[j - nums[i]];
        }
    }
    return dp[w];
};
