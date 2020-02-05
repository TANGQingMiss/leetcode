/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    // let f0 = 0;
    // let f1 = 0;
    // for(let i = 0; i < cost.length; i++){
    //     let cur = cost[i] + Math.min(f0,f1);
    //     f0 = f1;
    //     f1 = cur;
    // }
    // return Math.min(f0,f1);

    let n = cost.length;
    if(n == 0) return 0;
    if(n == 1) return cost[0];
    if(n == 2) return Math.min(cost[0],cost[1]);
    for(let i = n - 3; i >= 0; i--){
        cost[i] += Math.min(cost[i+1],cost[i+2]);
    }
    return Math.min(cost[0],cost[1]);

};
