/**
 * @param {string} s
 * @return {number}
 */
//给定一个字符串，你的任务是计算这个字符串中有多少个回文子串
var countSubstrings = function(s) {
    if(s == null || s.length == 0) return 0;
    if(s.length == 1) return 1;
    let dp = new Array(s.length).fill(0);
    //动态规划 dp[j]表示从j位置到当前遍历到的字符位置i是否为回文字符串
    let cnt = 0;
    for(let i = 0; i < s.length; i++){
        dp[i] = 1;
        cnt++;
        for(let j = 0; j < i; j++){
            if(s[j] == s[i] && dp[j+1] == 1){
                dp[j] = 1;
                cnt++;
            }else dp[j] = 0;
        }
    }
    return cnt;
};
