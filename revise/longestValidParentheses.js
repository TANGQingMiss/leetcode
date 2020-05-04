/**
 * @param {string} s
 * @return {number}
 */
//给定一个只包含 '(' 和 ')' 的字符串，找出最长的包含有效括号的子串的长度
var longestValidParentheses = function(s) {
    let res = 0;
    let dp = new Array(s.length).fill(0);
    //dp[i - 1]记录的就是以i为结尾的长为n的最长有效括号序列
    //i - dp[i - 1] - 1就是与之匹配且没有被匹配的(所在的位置
    for(let i = 1; i < s.length; i++){
        if(s[i] == ')'){
            let j = i - dp[i - 1] - 1;
            if(j >= 0 && s[j] == '('){
                dp[i] = (i - j + 1) + ((j - 1) >= 0 ? dp[j - 1] : 0);
            }
        }
        res = Math.max(res,dp[i]);
    }
    return res;
};
