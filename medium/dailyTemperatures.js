/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
    let res = new Array(T.length);
    res[T.length-1] = 0;
    for(let i = T.length - 2; i >= 0; i--){
        for(let j = i + 1; j < T.length; j += res[j]){
            if(T[i] < T[j]){
                res[i] = j - i;
                break;
            }else if(res[j] == 0){
                res[i] = 0;
                break;
            }
        }
    }
    return res;
};
