/**
 * @param {number[]} nums
 * @return {number}
 */
//现在要求你戳破所有的气球。每当你戳破一个气球 i 时，你可以获得 nums[left] * nums[i] * nums[right] 个硬币。 这里的 left 和 right 代表和 i 相邻的两个气球的序号。注意当你戳破了气球 i 后，气球 left 和气球 right 就变成了相邻的气球

//dp[i][j]表示第i至第j个元素这个区间能获得的最大硬币数，k表示在i,j这个区间内最后戳破的气球，状态转移方程dp[i][j]=max(dp[i][j],dp[i][k]+dp[k][j]+nums[i]*nums[k]*nums[j
var maxCoins = function(nums) {
    nums.unshift(1);
    nums.push(1);
    let n = nums.length;
    let dp = new Array(n);
    for(let i = 0; i < n; i++){
        dp[i] = new Array(n).fill(0);
    }
    for(let r = 2; r < n; r++){//区间长度
        for(let i = 0; i < n - r ; i ++){
            let j = i + r;
            for(let k = i + 1; k < j; k++){
                dp[i][j] = Math.max(dp[i][j],dp[i][k]+dp[k][j]+nums[i]*nums[k]*nums[j]);
            }
        }
    }
    return dp[0][n-1];
};
