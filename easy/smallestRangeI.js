/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var smallestRangeI = function(A, K) {
    if(A.length == 1) return 0;
    let max = Math.max.apply(null,A);
    let min = Math.min.apply(null,A);
    if(max - min <= 2 * K) return 0;
    else return max - min - 2 * K;
};
