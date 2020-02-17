/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
    var afterS = [];
    var afterT = [];
    for(let i = 0; i < S.length; i++){
        if(S[i] != '#') afterS.push(S[i]);
        else if(S[i] == '#' && afterS.length > 0){
            afterS.pop();
        }
    }

    for(let j = 0; j < T.length; j++){
        if(T[j] != '#') afterT.push(T[j]);
        else if(T[j] == '#' && afterT.length > 0){
            afterT.pop();
        }
    }

    if(afterS.join('') === afterT.join('')) return true;
    return false;
};
