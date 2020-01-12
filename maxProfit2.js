/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var res = 0;
    for(let i = 0; i < prices.length; i++){
        if(prices[i+1]>prices[i]) res = res + prices[i+1] - prices[i];
    }
    return res;
};
