/**
 * @param {string} S
 * @param {string[]} words
 * @return {number}
 */
//对于一个给定的字符串 S ，如果另一个单词能够通过将一些字母组扩张从而使其和 S 相同，我们将这个单词定义为可扩张的（stretchy）。扩张操作定义如下：选择一个字母组（包含字母 c ），然后往其中添加相同的字母 c 使其长度达到 3 或以上
var expressiveWords = function(S, words) {
    let cnt = 0;
    for(const w of words){
        let i = 0, j = 0;
        if(w.length <= S.length){
            for(i,j; j < S.length; j++){
                if(i < w.length && w[i] == S[j]) i++;
                else if(S[j] == S[j-1] && (S[j]==S[j+1]||S[j]==S[j-2])) continue;
                //判断是否连续的字符，如果是则什么都不做
                else break;
            }
        }
        if(i == w.length && j == S.length) cnt++;
    }
    return cnt;
};
