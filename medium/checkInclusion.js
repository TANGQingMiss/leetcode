/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
//第一个字符串的排列之一是第二个字符串的子串
var checkInclusion = function(s1, s2) {
    if(s1.length > s2.length) return false;
    let len = s1.length;
    let hash1 = new Array(26).fill(0);
    let hash2 = new Array(26).fill(0);
    for(let i = 0; i < len; i++){
        hash1[s1.charCodeAt(i)-97]++;
        hash2[s2.charCodeAt(i)-97]++;
    }
    for(let i = len; i < s2.length; i++){
        if(hash1.join('') == hash2.join('')) return true;
        hash2[s2.charCodeAt(i-len)-97]--;
        hash2[s2.charCodeAt(i)-97]++;
    }
    return hash1.join('') == hash2.join('');
};
