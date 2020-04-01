/**
 * @param {number} X
 * @param {number} Y
 * @return {number}
 */
// 在显示着数字的坏计算器上，我们可以执行以下两种操作：

// 双倍（Double）：将显示屏上的数字乘 2；
// 递减（Decrement）：将显示屏上的数字减 1 。
// 最初，计算器显示数字 X。

// 返回显示数字 Y 所需的最小操作数

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/broken-calculator

var brokenCalc = function(X, Y) {
    let res = 0;
    if(X == Y) return res;
    while(X < Y){
        if((Y % 2) == 0){
            Y /= 2;
            res++;
        }else{
            Y = (Y + 1) / 2;
            res += 2;
        }
    }
    return res + X - Y;
};
