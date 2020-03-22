/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
    let dp = new Array(s.length);
    for(let i = 0; i < s.length; i++){
        dp[i] = new Array(s.length);
        dp[i].fill(0);
    }
    for(let i = 0; i < s.length; i++){
        dp[i][i] = 1;
    }
    for(let i = s.length - 1; i >= 0; i--){
        for(let j = i + 1; j < s.length; j++){
            if(s[i] == s[j]){
                dp[i][j] = 2 + dp[i+1][j-1];
            }else{
                dp[i][j] = Math.max(dp[i+1][j],dp[i][j-1]);
            }
        }
    }
    return dp[0][s.length-1]; 
};
