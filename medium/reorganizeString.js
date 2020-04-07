/**
 * @param {string} S
 * @return {string}
 */
var reorganizeString = function(S) {
    if(S.length <= 1) return S;
    S = S.split('');
    for(let i = 1; i < S.length; i++){
        if(S[i] == S[i-1]){
            for(let j = i + 1; j < S.length; j++){
                if(S[j] != S[i]){
                    let tmp = S[j];
                    S[j] = S[i];
                    S[i] = tmp;
                    break;
                }
            }
        }
    }
    for(let i = S.length - 1; i >= 1; i--){
        if(S[i] == S[i-1]){
            for(let j = i - 2; j >= 0; j--){
                if(S[j] != S[i-1]){
                    let tmp = S[i-1];
                    S[i-1] = S[j];
                    S[j] = tmp;
                    break;
                }
            }
        }
    }
    for(let i = 0; i < S.length - 1; i++){
        if(S[i] == S[i+1]) return "";
    }
    return S.join('');
};
