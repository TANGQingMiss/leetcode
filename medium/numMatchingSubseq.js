/**
 * @param {string} S
 * @param {string[]} words
 * @return {number}
 */
//给定字符串 S 和单词字典 words, 求 words[i] 中是 S 的子序列的单词个数
var numMatchingSubseq = function(S, words) {

    let isSubsequence = function(s, word) {
      let ix = -1;
      for (let i = 0; i < word.length; i++) {
        ix = s.indexOf(word[i], ix + 1);
        if (ix == -1) return false;
      }
      return true;
    };

    let count = 0;
    words.forEach((val) => {
      if (isSubsequence(S, val)) {
        count++;;
      }
    });

    return count;
  };
