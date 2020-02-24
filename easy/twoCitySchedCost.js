/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function(costs) {
    //step 1: first assuming everyone goes to A
    let sum = 0;
    //step 2: calculate costs[i][0] - costs[i][1] to find half to B
    let tmp = [];
    for(let i = 0; i < costs.length; i++){
        sum += costs[i][0];
        tmp.push(costs[i][0] - costs[i][1]);
    }
    tmp = tmp.sort(function(x,y){return y - x;});
    for(let i = 0; i < tmp.length / 2; i++){
        sum -= tmp[i];
    }
    return sum;

};
