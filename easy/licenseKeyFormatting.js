/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var licenseKeyFormatting = function(S, K) {
    if(S == null || S.length == 0) return S;
    let res = [];
    let check = 0;
    for(let i = S.length - 1; i >= 0; i--){
        if(S.charAt(i) != '-'){
           if(check < K){
                res.unshift(S.charAt(i));
                check++;
            }else{
                res.unshift('-');
                res.unshift(S.charAt(i));
                check = 1;
            }
        }
    }

    return res.join('').toUpperCase();
    

};
