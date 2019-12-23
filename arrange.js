/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    return fac(m+n-2)/(fac(m-1)*fac(n-1));
};

function fac(n){
    var res = 1;
    while(n>1){
        res = res*n;
        n--;
    }
    return res;
}
