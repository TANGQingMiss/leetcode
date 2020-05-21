/**
 * @param {string} s
 * @return {number}
 */
//给你一个字符串 s ，它只包含三种字符 a, b 和 c 。请你返回 a，b 和 c 都 至少 出现过一次的子字符串数目
//以索引 i 遍历字符串 s ，考虑子串 (k, i) 满足条件的最大 k，那么此时子串(0, i), ...(k-1, i) 也是符合条件的子串
var numberOfSubstrings = function(s) {
    let res = 0;
    let record = [-1,-1,-1];
    for(let i = 0; i < s.length; i++){
        if(s.charAt(i) == 'a'){
            res += Math.min(record[1],record[2])+1;
        }else if(s.charAt(i) == 'b'){
            res += Math.min(record[0],record[2])+1;
        }else{
            res += Math.min(record[0],record[1])+1;
        }
        record[s.charCodeAt(i) - 97] = i;
    }
    return res;
};
