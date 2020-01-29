/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    if(s == null || s.length == 0) return true;
    if(s.indexOf('A') == s.lastIndexOf('A') && s.indexOf('LLL') == -1) return true;
    return false;
};
