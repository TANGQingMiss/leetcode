/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
// 在一条环路上有 N 个加油站，其中第 i 个加油站有汽油 gas[i] 升。
// 你有一辆油箱容量无限的的汽车，从第 i 个加油站开往第 i+1 个加油站需要消耗汽油 cost[i] 升。你从其中的一个加油站出发，开始时油箱为空。
// 如果你可以绕环路行驶一周，则返回出发时加油站的编号，否则返回 -1。
// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/gas-station
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
var canCompleteCircuit = function(gas, cost) {
    let res = 0;
    let run = 0;
    let start = 0;
    for(let i = 0; i < gas.length; i++){
        run += gas[i] - cost[i];
        res += gas[i] - cost[i];
        if(run < 0){
            start = i + 1;
            run = 0;
        }
    }
    return res < 0 ? -1 : start;
};
