/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    if(s==''|| s==null) return 0;
    var tmp = s.trim().split(' ');
    return tmp[tmp.length-1].length;
};
