/**
 * @param {string[]} words
 * @return {number}
 */
// 给定一个单词列表，我们将这个列表编码成一个索引字符串 S 与一个索引列表 A。
// 例如，如果这个列表是 ["time", "me", "bell"]，我们就可以将其表示为 S = "time#bell#" 和 indexes = [0, 2, 5]。
// 对于每一个索引，我们可以通过从字符串 S 中索引的位置开始读取字符串，直到 "#" 结束，来恢复我们之前的单词列表
var minimumLengthEncoding = function(words) {
    //先按长度倒叙，长的在前面，保证能够框住后面的字符
    words.sort(function(x,y){return y.length - x.length;});
    let res = "";
    res += words[0] + "#";
    let total = res.length;
    for(let i = 0; i < words.length; i++){
        //如果前面的字符包含了后面的字符，则个数不变，否则加上后面字符长度
        if(res.indexOf(words[i]+"#") < 0){
            res += words[i] + "#";
            total = total + 1 + words[i].length;
        }
    }
    return total;
};
