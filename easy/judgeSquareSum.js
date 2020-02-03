/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
    let max = Math.floor(Math.sqrt(c));
    let min = 0;
    while(min <= max){
        if(min*min + max*max < c){
            min++;
        }else if(min*min + max*max > c){
            max--;
        }else return true;
    }
    return false;
};
