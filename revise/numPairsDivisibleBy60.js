/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function(time) {
    let count = 0;
    let map = new Map();
    for(let i = 0; i < time.length; i++){
        let tmp = time[i] % 60;
        let need = tmp == 0 ? 0 : 60 - tmp;
        let value = map.get(need);
        if(value) count += value;
        map.set(tmp,(map.get(tmp)||0)+1);
    }
    return count;
};
