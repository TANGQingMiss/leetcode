/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let count = 1;
    while(num > 0){
        num -= count;
        count += 2;
    }
    return num == 0;
};
