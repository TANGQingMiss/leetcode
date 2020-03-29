/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function(trips, capacity) {
    if(trips.length == 0) return true;
    let location = new Array(1001);
    location.fill(0);
    let cnt = 0;
    let start = 0;
    let end = 0;
    for(let i = 0; i < trips.length; i++){
        cnt = trips[i][0];
        start = trips[i][1];
        end = trips[i][2];
        location[start] = location[start] + cnt;
        location[end] = location[end] - cnt;
    }
    cnt = 0;
    for(let i = 0; i < 1001; i++){
        cnt += location[i];
        if(cnt > capacity) return false;
    }
    return true;
};
