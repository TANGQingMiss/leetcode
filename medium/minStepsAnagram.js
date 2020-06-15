/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
//给你两个长度相等的字符串 s 和 t。每一个步骤中，你可以选择将 t 中的 任一字符 替换为 另一个字符。
//返回使 t 成为 s 的字母异位词的最小步骤数
var minSteps = function(s, t) {
    let m = new Array(26).fill(0);
    let n = new Array(26).fill(0);
    for(let i = 0; i < s.length; i++){
        m[s.charCodeAt(i)-97]++;
        n[t.charCodeAt(i)-97]++;
    }
    let res = 0;
    for(let i = 0; i < 26; i++){
        res += (m[i] > n[i]) ? m[i] - n[i] : 0;
    }
    return res;
};
