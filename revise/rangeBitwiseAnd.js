/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var rangeBitwiseAnd = function(m, n) {
//  0与任意数的位与&结果均为0
    let offset = 0;
    for(; m != n; offset++){
        m >>= 1;
        n >>= 1;
    }
    return n << offset;
};
