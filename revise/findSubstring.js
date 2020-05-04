/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
//给定一个字符串 s 和一些长度相同的单词 words。找出 s 中恰好可以由 words 中所有单词串联形成的子串的起始位置
var findSubstring = function(s, words) {
if (!words || !words.length || !s || !s.length) return[];
    let wordLen = words[0].length;
    let allWordsLen = wordLen * words.length;
    let ans = [], wordMap = {};
    for (let w of words) {
        wordMap[w] ? wordMap[w]++ :wordMap[w] = 1
    }
    for (let i = 0; i < s.length - allWordsLen + 1; i++) {
        let wm = Object.assign({}, wordMap);
        for (let j = i; j < i + allWordsLen - wordLen + 1; j += wordLen) {
            let w = s.slice(j, j + wordLen);
            if (wm[w]) {
                wm[w]--
            } else {
                break;
            }
        }
        if (Object.values(wm).every(n => n === 0)) ans.push(i);
    }
    return ans;
};
