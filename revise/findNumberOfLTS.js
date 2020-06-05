/**
 * @param {number[]} nums
 * @return {number}
 */
//给定一个未排序的整数数组，找到最长递增子序列的个数
var findNumberOfLIS = function(nums) {
    if(nums == null || nums.length == 0) return 0;
    if(nums.length == 1) return 1;
    let dp = new Array(nums.length).fill(1);
    let cnt = new Array(nums.length).fill(1);
    //对于nums[i]结尾的序列，length[i]表示最长序列的长度，count[i]表示具有该长度的序列
    let max = 1, res = 0;
    for(let i = 1; i < nums.length; i++){
        for(let j = 0; j < i; j++){
            if(nums[j] < nums[i]){
                if(dp[j] + 1 > dp[i]){
                    dp[i] = dp[j] + 1;
                    cnt[i] = cnt[j];
                }else if(dp[j]+1 == dp[i]){
                    cnt[i] += cnt[j];
                }
            }
            max = Math.max(max,dp[i]);
        }
    }
    for(let i = 0; i < nums.length; i++){
        if(max == dp[i]){
            res += cnt[i];
        }
    }
    return res;
};
