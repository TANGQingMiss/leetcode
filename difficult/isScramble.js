/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
//给出两个长度相等的字符串 s1 和 s2，判断 s2 是否是 s1 的扰乱字符串。
var isScramble = function(s1, s2) {
    if(s1 == s2) return true;
    if(s1.length != s2.length) return false;
    let n = s1.length;
    let arr = new Array(26).fill(0);
    for(let i = 0; i < n; i++){
        arr[s1.charCodeAt(i)-97]++;
        arr[s2.charCodeAt(i)-97]--;
    }
    for(let i = 0; i < 26; i++){
        if(arr[i] != 0) return false;
    }
    for (let i = 1; i < n; ++i) {
           if ((isScramble(s1.substring(0, i), s2.substring(0, i)) && isScramble(s1.substring(i), s2.substring(i))) 
           || (isScramble(s1.substring(0, i), s2.substring(n - i)) && isScramble(s1.substring(i), s2.substring(0, n - i)))) {
               return true;
           }
        }
        return false;
};
