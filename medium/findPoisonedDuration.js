/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
    if(timeSeries.length == 0) return 0;
    let res = 0;
    for(let i = 0; i < timeSeries.length - 1; i++){
        if(timeSeries[i] + duration <= timeSeries[i+1]){
            res += duration;
        }else{
            res += timeSeries[i+1] - timeSeries[i];
        }
    }
    return res + duration;
};
