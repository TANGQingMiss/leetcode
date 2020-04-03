/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
// 给定一个整数数组 A，对于每个整数 A[i]，我们可以选择 x = -K 或是 x = K，并将 x 加到 A[i] 中。

// 在此过程之后，我们得到一些数组 B。

// 返回 B 的最大值和 B 的最小值之间可能存在的最小差值。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/smallest-range-ii
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
var smallestRangeII = function(A, K) {
    A.sort(function(x,y){return x - y;});
    let n = A.length;
    let res = A[n-1] - A[0];
    for(let i = 1; i < n; i++){
        let min = Math.min(A[0]+K,A[i]-K);
        let max = Math.max(A[n-1]-K,A[i-1]+K);
        res = Math.min(max-min,res);
    }
    return res;
};
