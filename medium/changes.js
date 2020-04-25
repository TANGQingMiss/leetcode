/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
//给定不同面额的硬币和一个总金额。写出函数来计算可以凑成总金额的硬币组合数。假设每一种面额的硬币有无限个
var change = function(amount, coins) {
    coins.sort(function(x,y){return x - y;});
    let dp = new Array(amount+1).fill(0);
    dp[0] = 1;
    for(const coin of coins){
        for(let j = 1; j <= amount; j++){
            if(j >= coin){
                dp[j] = dp[j] + dp[j - coin];
            }
        }
    }
    return dp[amount];
};
