/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function(S) {
    let res = "";
    let left = 0;
    for(let i = 0; i < S.length; i++){
        if(S[i] == '(' && left++ > 0){
            res += '(';
        }
        if(S[i] == ')' && --left > 0){
            res += ')';
        }
    }
    return res;
};
