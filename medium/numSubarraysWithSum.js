/**
 * @param {number[]} A
 * @param {number} S
 * @return {number}
 */
//在由若干 0 和 1  组成的数组 A 中，有多少个和为 S 的非空子数组
var numSubarraysWithSum = function(A, S) {
    let res = 0;
    let arr = new Array(A.length+1).fill(0);
    arr[0] = 1;
    let sum = 0;
    for(let i = 0; i < A.length; i++){
        sum += A[i];
        if(sum >= S){
            res += arr[sum-S];
        }
        arr[sum]++;
    }
    return res;
};
