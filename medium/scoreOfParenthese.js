/**
 * @param {string} S
 * @return {number}
 */
var scoreOfParentheses = function(S) {
    let depth = 0;
    let res = 0;
    for(let i = 0; i < S.length; i++){
        if(S[i] == '(') depth++;
        else{
            depth--;
        }
        if(S[i] == ')' && S[i-1] == '(') res += 1 << depth;
    }
    return res;
};
