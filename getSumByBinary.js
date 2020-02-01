/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    while(b != 0){
        let tmp = a ^ b;
        b = (a&b)<<1;
        a = tmp;
    }
    return a;

};
