/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {boolean}
 */
var canMeasureWater = function(x, y, z) {
    function greatestCommonDivisor(x,y){
        if(x == 0) return y;
        return greatestCommonDivisor(y%x,x);
    }
    if(x+y<z) return false;
    if(x == z || y == z || x + y == z) return true;
    return z % greatestCommonDivisor(x,y) == 0;
};
