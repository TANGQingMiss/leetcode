/**
 * @param {number[][]} A
 * @return {number}
 */
// 有一个二维矩阵 A 其中每个元素的值为 0 或 1 。
// 移动是指选择任一行或列，并转换该行或列中的每一个值：将所有 0 都更改为 1，将所有 1 都更改为 0。
// 在做出任意次数的移动后，将该矩阵的每一行都按照二进制数来解释，矩阵的得分就是这些数字的总和。
// 返回尽可能高的分数
// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/score-after-flipping-matrix
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
var matrixScore = function(A) {
    function flipRow(idx){
        for(let i = 0; i < A[0].length; i++){
            A[idx][i] = (A[idx][i] == 0) ? 1 : 0;
        }
    }
    function flipCol(idx){
        for(let i = 0; i < A.length; i++){
            A[i][idx] = (A[i][idx] == 0) ? 1 : 0;
        }
    }
    //make the first col == 1
    for(let i = 0; i < A.length; i++){
        if(A[i][0] == 0) flipRow(i);
    }
    //make col have more than 1/2 == 1
    for(let i = 1; i < A[0].length; i++){
        let total = 0;
        for(let j = 0; j < A.length; j++){
            total += A[j][i];
        }
        if(total < A.length / 2){
            flipCol(i);
        }
    }
    let res = 0;
    for(let i = 0; i < A.length; i++){
        for(let j = 0; j < A[0].length; j++){
            if(A[i][j] == 1){
                res += Math.pow(2,A[0].length - j - 1);
            }
        }
    }
    return res;
};
