/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    //use dp, dp[i] means whether i characters could de divided to wordDict
    let dp = new Array(s.length+1).fill(false);
    dp[0] = true;
    for(let i = 1; i <= s.length; i++){
        for(let j = 0; j < i; j++){
            if(dp[j] && wordDict.indexOf(s.substring(j,i)) != -1){
                dp[i] = true;
                break;
            }
        }
    }
    return dp[s.length];
};
