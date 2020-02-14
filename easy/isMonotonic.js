/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {
    if(A == null || A.length <= 2) return true;
    let small = 0;
    let big = 0;
    for(let i = 0; i < A.length; i++){
        if(A[i] < A[i+1]) small = 1;
        if(A[i] > A[i+1]) big = 1;
        if(small && big) return false;
    }
    return true;
};
