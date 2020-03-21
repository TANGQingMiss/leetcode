/**
 * @param {number} n
 * @return {number}
 */
var integerReplacement = function(n) {
    function replacement(n){
        if(n == 1) return 0;
        if(n % 2 == 0) return 1 + replacement(n / 2);
        else return 1 + Math.min(replacement(n+1),replacement(n-1));
    }
    return replacement(n);
};
