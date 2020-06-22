/**
 * @param {number} n
 * @return {string[]}
 */
var simplifiedFractions = function(n) {
    function gcd(a,b){
        if(b == 0) return a;
        return gcd(b,a%b);
    }
    let res = [];
    if(n < 2) return res;
    for(let i = 2; i <= n; i++){
        for(let j = 1; j < i; j++){
            if(gcd(i,j) == 1) res.push(""+j+"/"+i);
        }
    }
    return res;
};
