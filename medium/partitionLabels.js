/**
 * @param {string} S
 * @return {number[]}
 */
// 字符串 S 由小写字母组成。我们要把这个字符串划分为尽可能多的片段，同一个字母只会出现在其中的一个片段。返回一个表示每个字符串片段的长度的列表。
var partitionLabels = function(S) {
    if(S == null || S.length == 0) return [0];
    let res = [];
    let start = 0, end = 0;
    let map = new Map();
    for(let i = 0; i < S.length; i++){
        map.set(S.charAt(i),i);
    }
    for(let i = 0; i < S.length; i++){
        end = Math.max(end,map.get(S.charAt(i)));
        if(i == end){
            res.push(end - start + 1);
            start = i + 1;
        }
    }
    return res;
};
