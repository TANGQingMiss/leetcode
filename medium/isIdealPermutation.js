/**
 * @param {number[]} A
 * @return {boolean}
 */
// 数组 A 是 [0, 1, ..., N - 1] 的一种排列，N 是数组 A 的长度。全局倒置指的是 i,j 满足 0 <= i < j < N 并且 A[i] > A[j] ，局部倒置指的是 i 满足 0 <= i < N 并且 A[i] > A[i+1]
// 当数组 A 中全局倒置的数量等于局部倒置的数量时，返回 true
//如果第i个数距离它自己本身应在的位置（理想排列时）大于1，那么全局倒置一定大于局部倒
var isIdealPermutation = function(A) {
    for(let i = 0; i < A.length; i++){
        if(Math.abs(A[i] - i) > 1) return false;
    }
    return true;
};
