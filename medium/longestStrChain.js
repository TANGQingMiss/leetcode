/**
 * @param {string[]} words
 * @return {number}
 */
// 给出一个单词列表，其中每个单词都由小写英文字母组成。
// 如果我们可以在 word1 的任何地方添加一个字母使其变成 word2，那么我们认为 word1 是 word2 的前身。例如，"abc" 是 "abac" 的前身。
// 从给定单词列表 words 中选择单词组成词链，返回词链的最长可能长度

var longestStrChain = function(words) {
    words.sort((a,b) => a.length - b.length);

    let dp = new Array(words.length).fill(1);
    let max = 1;

    for(let i = 1; i < words.length; i++) {
        for(let j = 0; j < i; j++) {
            if(isValid(i, j)) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
                max = Math.max(max, dp[i]);
            }
        }
    }

    return max;

    function isValid(i, j) {
        if(words[i].length !== words[j].length+1) return false;

        let a = 0;
        let b = 0;
        while(a < words[i].length) {
            if(words[i][a] === words[j][b]) {
                a++;
                b++;
            } else {
                a++;
            }
        }

        return b === words[j].length;
    }
};
