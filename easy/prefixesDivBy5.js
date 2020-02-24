/**
 * @param {number[]} A
 * @return {boolean[]}
 */
var prefixesDivBy5 = function(A) {
    let res = [];
    let val = 0;
    for(let i = 0; i < A.length; i++){
        val = (val * 2 + A[i]) % 5;
        res.push(val == 0);
    }
    return res;
};
