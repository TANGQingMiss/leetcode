/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function(n) {
    // f(0)=1 
    // f(1)=10
    // f(2)=9*9+f(1)
    // f(3)=9*9*8+f(2)
    // f(4)=9*9*8*7+f(3)
    if(n == 0) return 1;
    let dp = new Array(n+1);
    dp.fill(0);
    dp[0] = 1;
    dp[1] = 10;
    for(let i = 2; i <= n; i++){
        dp[i] = dp[i-1]+(dp[i-1]-dp[i-2])*(10-(i-1));
    }
    return dp[n];
};
