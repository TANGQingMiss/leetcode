/**
 * @param {number} upper
 * @param {number} lower
 * @param {number[]} colsum
 * @return {number[][]}
 */
// 矩阵是一个二进制矩阵，这意味着矩阵中的每个元素不是 0 就是 1。
// 第 0 行的元素之和为 upper。
// 第 1 行的元素之和为 lower。
// 第 i 列（从 0 开始编号）的元素之和为 colsum[i]，colsum 是一个长度为 n 的整数数组。
var reconstructMatrix = function(upper, lower, colsum) {
    let res = new Array(2);
    let n = colsum.length;
    res[0] = new Array(n);
    res[1] = new Array(n);

    for(let i = 0; i < n; i++){
        if(colsum[i] == 2){
            res[0][i] = 1;
            res[1][i] = 1;
            upper--;
            lower--;
        }else if(colsum[i] == 0){
            res[0][i] = 0;
            res[1][i] = 0;           
        }else{
            if(upper >= lower){
                res[0][i] = 1;
                res[1][i] = 0;
                upper--;
            }else{
                res[0][i] = 0;
                res[1][i] = 1; 
                lower--;               
            }
        }
        if(lower < 0 || upper < 0) return [];
    }
    if(lower != 0 || upper != 0) return [];
    return res;
};
