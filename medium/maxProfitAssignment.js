/**
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 */
var maxProfitAssignment = function(difficulty, profit, worker) {
    let tmp;
    for(let i = 0; i < difficulty.length; i++){
        for(let j = 0; j < difficulty.length; j++){
            if(profit[i] > profit[j]){
                tmp = profit[i];
                profit[i] = profit[j];
                profit[j] = tmp;

                tmp = difficulty[i];
                difficulty[i] = difficulty[j];
                difficulty[j] = tmp;
            }
        }
    }
    let res = 0;
    for(let i = 0; i < worker.length; i++){
        for(let j = 0; j < difficulty.length; j++){
            if(worker[i] >= difficulty[j]){
                res += profit[j];
                break;
            }
        }
    }
    return res;
};
