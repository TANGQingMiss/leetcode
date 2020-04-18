/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
//给出一个非抢占单线程CPU的 n 个函数运行日志，找到函数的独占时间。
//每个函数都有一个唯一的 Id，从 0 到 n-1，函数可能会递归调用或者被其他函数调用。
var exclusiveTime = function(n, logs) {
    let stack = [];
    let res = new Array(n).fill(0);
    for(let i = 0; i < logs.length; i++){
        let split = logs[i].split(":");
        let id = parseInt(split[0]);
        let time = parseInt(split[2]);
        if(split[1] == 'start'){
            stack.push([id,time]);
        }else{
            let pop = stack.pop();
            let interval = time - pop[1] + 1;
            res[pop[0]] += interval;
            if(stack.length > 0){
                res[stack[stack.length-1][0]] -= interval;
            }
        }
    }
    return res;
};
