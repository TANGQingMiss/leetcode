/**
 * @param {number[]} A
 * @return {number}
 */
// 给定一个整数数组 A，坡是元组 (i, j)，其中  i < j 且 A[i] <= A[j]。这样的坡的宽度为 j - i。
// 找出 A 中的坡的最大宽度，如果不存在，返回 0
var maxWidthRamp = function(A) {
    let res = 0;
    for(let i = 0; i < A.length; i++){
        for(let j = A.length - 1; j > i; j--){
            if(A[j] >= A[i] && j - i > res){
                res = j - i;
                break;
            }
        }
    }
    return res;
};
