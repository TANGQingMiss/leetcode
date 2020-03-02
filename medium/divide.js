/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    if(divisor == 1) return dividend;
    if(divisor == -1){
        if(dividend == -Math.pow(2,31)){
            return Math.pow(2,31)-1;
        }else{
            return -dividend;
        }
    }
    if(dividend == 0) return 0;
    let sign = true;
    if(dividend * divisor < 0) sign = false;
    let abs1 = Math.abs(dividend);
    let abs2 = Math.abs(divisor);
    if(abs2 > abs1) return 0;

    let low = 0;
    let high = Math.pow(2,31);
    while(low < high){
        let mid = low + Math.floor((high - low) / 2);
        if(mid * abs2 === abs1) return sign==true?mid : -mid;
        else if(mid * abs2 > abs1){
            high = mid;
        }else{
            low = mid + 1;
        }
    }
    if(!sign) return -low+1;
    else return low - 1;
};
