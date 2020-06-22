/**
 * @param {string} s
 * @return {number}
 */
//给你一个字符串 s ，字符串的「能量」定义为：只包含一种字符的最长非空子字符串的长度
var maxPower = function(s) {
    let ans = 0;
    let i = 0, j = 0;
    let n = s.length;
    let len = 0;
    while(i < n && j < n){
        if(s[i] == s[j]){
            j++;
            len++;
        }else{
            i = j;
            len = 0;
        }
        ans = Math.max(ans,len);
    }
    return ans;
};
