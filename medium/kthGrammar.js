/**
 * @param {number} N
 * @param {number} K
 * @return {number}
 */
var kthGrammar = function(N, K) {
    let str = '0';
    if(N == 1) return '0';
    if(kthGrammar(N-1,Math.floor((K+1)/2)) == 0){
        return (K + 1) % 2;
    }else return 1 - (K + 1) % 2;
};
