/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    if(s == null || s.length == 0){
        return s;
    }
    let tmp = s.split(' ');
    let res = [];
    for(let i = 0; i < tmp.length; i++){
        if(tmp[i] != ''){
            res.push(tmp[i]);
        }
    }
    return res.reverse().join(' ');
};
