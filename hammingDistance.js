/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    let z = x ^ y;
    let res = 0;
    while(z){
        res += z & 1;
        z = z>>1;
    }
    return res;
};
