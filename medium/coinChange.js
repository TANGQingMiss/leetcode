/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    if(coins.length == 0 && amount == 0) return 0;
    if(coins.length == 0 && amount != 0) return -1;
    coins = coins.sort(function(x,y){return x - y;});
    let dp = new Array(amount+1);
    dp.fill(0x3f3f3f3f);
    dp[0] = 0;
    for(let i = 1; i <= amount; i++){
        for(let j = 0; j < coins.length && coins[j] <= i; j++){
            dp[i] = Math.min(dp[i],dp[i-coins[j]]+1);
        }
    }
    if(dp[amount] == 0x3f3f3f3f) return -1;
    return dp[amount];
};
