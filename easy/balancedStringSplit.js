/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let res = 0;
    let n = 0;
    for(let i = 0; i < s.length; i++){
        if(s.charAt(i) == 'R'){
            n++;
        }
        if(s.charAt(i) == 'L'){
            n--;
        }
        if(n == 0){
            res++;
        }
    }
    return res;
};
