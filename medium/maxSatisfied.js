/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} X
 * @return {number}
 */
//首先 找到不改变的时候客人就满意的数量和 同时更新数组,这样问题就转变为 求数组指定长度最大和的问题
var maxSatisfied = function(customers, grumpy, X) {
    let sum = 0;
    let len = customers.length;
    for(let i = 0; i < len; i++){
        if(grumpy[i] == 0){
            sum += customers[i];
            customers[i] = 0;
        }
    }
    let num = customers[0];
    let max = customers[0];
    for(let i = 1; i < len; i++){
        if(i < X) num = num + customers[i];
        else num = num + customers[i] - customers[i-X];
        max = Math.max(max,num);
    }
    return sum + max;
};
