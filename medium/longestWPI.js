/**
 * @param {number[]} hours
 * @return {number}
 */
var longestWPI = function(hours) {
    //check longest period where days>8hours > days<8hours
    let sums = new Array(hours.length);
    let sum = 0;
    for(let i = 0; i < hours.length; i++){
        sum += ((hours[i] > 8) ? 1 : -1);
        sums[i] = sum;
    }
    let len = 0;
    for(let i = 0; i < (sums.length - len); i++){
        for(let j = i + len; j < sums.length; j++){
            if(i == 0){
                if(sums[j] > 0){
                    len = Math.max(len, j+1);
                }
            }else{
                if(sums[j] - sums[i-1] > 0){
                    len = Math.max(len,j-i+1);
                }
            }
        }
    }
    return len;
};
