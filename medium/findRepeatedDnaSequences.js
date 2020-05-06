/**
 * @param {string} s
 * @return {string[]}
 */
//编写一个函数来查找 DNA 分子中所有出现超过一次的 10 个字母长的序列
var findRepeatedDnaSequences = function(s) {
    if (s.length < 11) return [];
    let n = s.length, map = new Map(), left = 0, right = 10, res= [];

    while (right <= n) {
        let cur = s.substring(left, right);

        map.set(cur, map.has(cur) ? map.get(cur) + 1 : 1);
        left++;
        right++;
    }

    for (let [k, v] of map) {
        if (v > 1) res.push(k);
    }
    return res;
};
