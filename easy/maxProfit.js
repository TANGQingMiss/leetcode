/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var res = 0;
    for(let i = 0; i < prices.length-1; i++){
        for(let j = i+1; j < prices.length;j++){
            if((prices[j]-prices[i]) > res){
                res = prices[j]-prices[i];
            }
        }
    }
    return res;
};
