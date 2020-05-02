/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
//找到给定字符串（由小写字符组成）中的最长子串 T ， 要求 T 中的每一字符出现次数都不少于 k 
var longestSubstring = function(s, k) {
    if(k <= 1) return s.length;
    if(s.length == 0 || s.length < k) return 0;
    let hash = new Array(26).fill(0);
    for(let i = 0; i < s.length; i++){
        hash[s.charCodeAt(i) - 97]++;
    }
    let i = 0;
    while(i < s.length && hash[s.charCodeAt(i) - 97] >= k) i++;
    if(i == s.length) return s.length;
    let l = longestSubstring(s.substring(0,i),k);
    while(i < s.length && hash[s.charCodeAt(i) - 97] < k) i++;
    let r = longestSubstring(s.substring(i),k);
    return Math.max(l,r);
};
