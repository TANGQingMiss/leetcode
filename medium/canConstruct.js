/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
//给你一个字符串 s 和一个整数 k 。请你用 s 字符串中 所有字符 构造 k 个非空 回文串 
var canConstruct = function(s, k) {
    let len = s.length;
    if(len < k) return false;
    if(len == k) return true;
    //count appearing times for each character
    let h = new Array(26).fill(0);
    for(let i = 0; i < len; i++){
        h[s.charCodeAt(i)-97]++;
    }
    for(let i = 0; i < 26; i++){
        if(h[i]&1 == 1){ //if i is odd number
            k--;
            if(k < 0) return false;
        }
    }
    return true;
};
