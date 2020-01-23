/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    s += ' ';
    let res = 0;
    for(let i = 0; i < s.length - 1; i++){
        if(s[i] != ' ' && s[i+1] == ' '){
            res++;
        }
    }
    return res;
};
