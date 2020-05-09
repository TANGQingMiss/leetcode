/**
 * @param {string} s
 * @param {number} maxLetters
 * @param {number} minSize
 * @param {number} maxSize
 * @return {number}
 */
//给你一个字符串 s ，请你返回满足以下条件且出现次数最大的 任意 子串的出现次数
//子串中不同字母的数目必须小于等于 maxLetters 。
//子串的长度必须大于等于 minSize 且小于等于 maxSize
var maxFreq = function(s, maxLetters, minSize, maxSize) {
    let count = 0
    const getLetters = (str, maxLetters) => {
        let map = new Map()
        for(let i of str) {
            let value = map.get(i)
            map.set(i, value === undefined ? 1 : ++value)
        }
        return map.size <= maxLetters
    }
    let map = new Map()
    for(let i = 0; i < s.length; i++) {
        let str = s.slice(i, i + minSize)
        if (s.length - i < minSize) {
            break
        }
        let value = map.get(str)
        
        if (getLetters(str, maxLetters)) {
            map.set(str, value === undefined ? 1 : ++value)
        }
    }
    for(let [key, value] of map) {
        if (value > count) {
            count = value
        }
    }
    return count
};
