/**
 * @param {number[]} A
 * @return {number}
 */
//如果一个数列至少有三个元素，并且任意两个相邻元素之差相同，则称该数列为等差数列
//返回数组 A 中所有为等差数组的子数组个数
var numberOfArithmeticSlices = function(A) {
    if(A == null || A.length <= 2) return 0;
    let res = 0;
    let add = 0;
    for(let i = 2; i < A.length; i++){
        if(A[i-1] - A[i] == A[i-2] - A[i-1]){
            res += ++add;
        }else add = 0;
    }
    return res;
};
