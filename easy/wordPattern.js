/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    let p = pattern.split('');
    let s = str.split(' ');
    if(p.length != s.length) return false;
    for(let i = 0; i < pattern.length; i++){
        if(p.indexOf(p[i]) != s.indexOf(s[i])) return false;
    }
    return true;
};
