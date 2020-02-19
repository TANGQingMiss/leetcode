/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
var distanceBetweenBusStops = function(distance, start, destination) {
    let res = 0;
    let sum = 0;
    for(let i = 0; i < distance.length; i++){
        sum += distance[i];
    }
    if(start == destination) return 0;
    if(start < destination){
        let i = start;
        while(i < destination){
            res += distance[i];
            i++;
        }
        res = Math.min(res, sum - res);
    }
    if(start > destination){
        let i = destination;
        while(i < start){
            res += distance[i];
            i++;
        }
        res = Math.min(res, sum - res);
    }
    return res;

};
