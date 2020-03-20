/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    if(s.length == 0 || s.charAt(0) == '0') return 0;
    let dp = new Array(s.length+1);
    dp[0] = 1;
    for(let i = 0; i < s.length; i++){
        dp[i+1] = s.charAt(i) == '0' ? 0 : dp[i];//s[i] == 0 -> '10'
        if(i > 0 && (s.charAt(i-1) == '1' || (s.charAt(i-1) == '2' && s.charAt(i) <= '6'))){
            dp[i+1] += dp[i-1];
        }
    }
    return dp[s.length];
};
