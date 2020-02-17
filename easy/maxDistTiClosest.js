/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function(seats) {
    let start = -1;
    let max = 0;
    for (let i = 0; i < seats.length; i++) {
        if (seats[i] == 1) {
            if (start == -1) {
                max = i;//considering first 1
            } else {
                max = Math.max(Math.floor((i + start) / 2) - start, max);
            }//considering next ones
            start = i;
        }
    }
    max = Math.max(seats.length - 1 - start, max);
    //considering last zeros
    return max;
};
