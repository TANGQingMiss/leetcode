/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
var findRadius = function(houses, heaters) {
    let numHouse = houses.length;
    let numHeater = heaters.length;
    let res = 0;
    for(let i = 0; i < numHouse; i++){
        let tmp = Math.pow(2,31) - 1;
        for(let j = 0; j < numHeater; j++){
            if( houses[i] != heaters[j]) {
                tmp = Math.min(tmp,Math.abs(houses[i] - heaters[j]));
            }else{
                tmp = 0;
            };
        }
        res = Math.max(res,tmp);
    }
    return res;
};
