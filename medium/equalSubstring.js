/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
//将 s 中的第 i 个字符变到 t 中的第 i 个字符需要 |s[i] - t[i]| 的开销（开销可能为 0），也就是两个字符的 ASCII 码值的差的绝对值。
//用于变更字符串的最大预算是 maxCost。在转化字符串时，总开销应当小于等于该预算，这也意味着字符串的转化可能是不完全的
var equalSubstring = function(s, t, maxCost) {
    let left = 0, right = 0, cost = 0, result = 0
    while (right < s.length) {
        cost += Math.abs(t[right].charCodeAt() - s[right].charCodeAt())
        if (cost > maxCost) {
            cost -= Math.abs(t[left].charCodeAt() - s[left].charCodeAt())
            left ++
        }
        result = Math.max(result, right - left + 1)
        right ++
    }
    return result
}
