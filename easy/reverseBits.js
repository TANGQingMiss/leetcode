/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let res = n.toString(2);
    while(res.length < 32){
        res = '0'+res;
    }
    res = res.split('').reverse().join('');
    return parseInt(res,2);
};
