/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
    let n = prices.length;
    if(n < 2) return 0;
    let dp1 = new Array(n).fill(0);//i day has stocks
    let dp2 = new Array(n).fill(0);//i day sells stocks
    dp1[0] = -prices[0];
    for(let i = 1; i < prices.length; i++){
        dp1[i] = Math.max(dp1[i-1],dp2[i-1]-prices[i]);
        dp2[i] = Math.max(dp1[i-1]+prices[i]-fee,dp2[i-1]);
    }
    return dp2[n-1];
};
