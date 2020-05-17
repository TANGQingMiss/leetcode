/**
 * @param {number[]} A
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
//给定一个元素都是正整数的数组A ，正整数 L 以及 R (L <= R)。
//求连续、非空且其中最大元素满足大于等于L 小于等于R的子数组个数
//最大元素满足大于等于L小于等于R的子数组个数 = 最大元素小于等于R的子数组个数 - 最大元素小于L的子数组个数
var numSubarrayBoundedMax = function(A, L, R) {
    function numSubarrayBoundedMax(A, max){
        let res = 0;
        let numSubarray = 0;
        for(let i = 0; i < A.length; i++){
            if(A[i] <= max){
                numSubarray++;
                res += numSubarray;
            }else{
                numSubarray = 0;
            }
        }
        return res;
    }

    return numSubarrayBoundedMax(A,R) - numSubarrayBoundedMax(A,L-1);
};
