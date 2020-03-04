/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
    if(n == 0) return [0];
    if(n == 1) return [0,1];
    let res = [];
    for(let i = 0; i < 1<<n; ++i){
        res.push(i ^ i>>1);
    }
    return res;
};
