/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
//给你字符串 s 和整数 k 。
//请返回字符串 s 中长度为 k 的单个子字符串中可能包含的最大元音字母数。
//英文中的 元音字母 为（a, e, i, o, u）
var maxVowels = function(s, k) {
    if(s == null || s.length == 0 || k <= 0) return 0;
    let vowels = "aeiou";
    let cnt = 0;
    let max = 0;
    for(let i = 0; i < k && i < s.length; i++){
        if(vowels.indexOf(s.charAt(i)) != -1){
            cnt++;
        }
        max = Math.max(max,cnt);
    }
    for(let i = k; i < s.length; i++){
        if(vowels.indexOf(s.charAt(i)) != -1){
            cnt++;
        }
        if(vowels.indexOf(s.charAt(i-k)) != -1){
            cnt--;
        }
        max = Math.max(max,cnt);
    }
    return max;
};
