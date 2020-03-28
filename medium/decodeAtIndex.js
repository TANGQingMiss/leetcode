/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var decodeAtIndex = function(S, K) {
    let res = "";
    let len = 0;
    for(let i = 0; i < S.length; i++){
        let pre = len;
        if(S[i] < 'a') len *= parseInt(S[i]);
        else{
            res += S[i];
            len++;
        }
        if(len == K) return res.substring(res.length - 1);
        if(len > K) return decodeAtIndex(S,(K-1)%pre + 1);
    }
    return "";
};
