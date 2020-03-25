/**
 * @param {number} target
 * @return {number}
 */
// 在一根无限长的数轴上，你站在0的位置。终点在target的位置。

// 每次你可以选择向左或向右移动。第 n 次移动（从 1 开始），可以走 n 步。

// 返回到达终点需要的最小移动次数。
var reachNumber = function(target) {
    target = Math.abs(target);
    let sum = 0;
    let i = 1;
    while(true){
        sum += i;
        if(sum >= target && (sum - target) % 2 == 0) return i;
        i++;
    }
};
