/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let res = 0;
    for(let i = 0; i < s.length; i++){
        res += (t[i].charCodeAt() - s[i].charCodeAt());
    }
    res += t[s.length].charCodeAt();
    return String.fromCharCode(res);

};
