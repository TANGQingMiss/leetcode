/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    if(!s) return 0;
    let alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q',
    'R','S','T','U','V','W','X','Y','Z'];
    let res = 0;
    for(let i = 0; i < s.length; i++){
        res += (alphabet.indexOf(s.charAt(i)) + 1) * Math.pow(26,s.length - 1 - i);
    }
    return res;
};
