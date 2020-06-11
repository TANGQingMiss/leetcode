/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
// 给出整数数组 A，将该数组分隔为长度最多为 K 的几个（连续）子数组。分隔完成后，每个子数组的中的值都会变为该子数组中的最大值。
// 返回给定数组完成分隔后的最大和
var maxSumAfterPartitioning = function(A, K) {
    let len = A.length;
    let dp = new Array(len).fill(0);
    for (let i = 0; i < len; i++) {
        /* 分别计算最后一段区间长度 j ∈[1, K]时的解，并更新位置i时的最优解 */
        let domainMax = A[i];
        for (let j = 1; j <= K && i - j + 1 >= 0; j++) {
            domainMax = Math.max(domainMax, A[i-j+1]);
            if (i - j >= 0) {
                dp[i] = Math.max(dp[i], dp[i-j] + j*domainMax);
            } else {
                dp[i] = Math.max(dp[i], j*domainMax);
            }
        }
    }
    return dp[len-1];
};
