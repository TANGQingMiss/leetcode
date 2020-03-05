/**
 * @param {string} S
 * @return {number}
 */
var minAddToMakeValid = function(S) {
    let cnt = 0;
    let res = 0;
    for(let i = 0; i < S.length; i++){
        if(S.charAt(i) == '('){
            cnt++;
        }else if(S.charAt(i) == ')' && cnt > 0){
            cnt--;
        }else{
            res++;
        }
    }
    return res + cnt;
};
