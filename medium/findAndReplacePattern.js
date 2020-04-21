/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
//你有一个单词列表 words 和一个模式  pattern，你想知道 words 中的哪些单词与模式匹配
var findAndReplacePattern = function(words, pattern) {
    let res = [];
    for(let i = 0; i < words.length; i++){
        if(check(words[i],pattern)) res.push(words[i]);
    }
    return res;

    function check(word,pattern){
        if(word.length != pattern.length) return false;
        for(let i = 0; i < pattern.length; i++){
            if(word.indexOf(word[i]) != pattern.indexOf(pattern[i])) return false;
        }
        return true;
    }
};
