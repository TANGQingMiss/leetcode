/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
    let dp = new Array(target+1);
    //[1,2,3] target = 4 -> dp[4] = (1 + dp[3]) + (2 + dp[2]) + (3 + dp[1])
    dp.fill(0);
    dp[0] = 1;
    for(let i = 1; i <= target; i++){
        for(let j = 0; j < nums.length; j++){
            if(i >= nums[j]){
                dp[i] += dp[i-nums[j]];
            }
        }
    }
    return dp[target];
};
