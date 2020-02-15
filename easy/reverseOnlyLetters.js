/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function(S) {
    if(S == null || S.length == 0) return S;
    let  res = S.split('');
    let alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let i = 0;
    let j = S.length - 1;
    while(i < j){
        if(alpha.indexOf(S.charAt(i)) != -1 && alpha.indexOf(S.charAt(j)) != -1){
            let tmp = S.charAt(i);
            res[i] = S.charAt(j);
            res[j] = tmp;
            i++;
            j--;
        }
        if(alpha.indexOf(S.charAt(i)) == -1){
            i++;
        }
        if(alpha.indexOf(S.charAt(j)) == -1){
            j--;
        }
    }
    return res.join('');
};
