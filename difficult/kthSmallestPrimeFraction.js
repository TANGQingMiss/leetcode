/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
//一个已排序好的表 A，其包含 1 和其他一些素数.  当列表中的每一个 p<q 时，我们可以构造一个分数 p/q 。
//那么第 k 个最小的分数是多少呢?  以整数数组的形式返回你的答案, 这里 answer[0] = p 且 answer[1] = q
var kthSmallestPrimeFraction = function(A, K) {
    let left = 0, right = 1, mid;
    let p = 0, q = 1, len = A.length, cnt;
    while(true){
        let mid = (left + right) / 2;
        cnt = 0, p = 0;
         //A[i]为分子，A[j]为分母，寻找比mid小的分数个数
        for(let i = 0, j = 0; i < len; i++){
            while(j < len && A[i] > mid * A[j]){
                j++;
            }
            cnt += len-j;//以A[i]为分子，比mid小的分数个数
            if(j < len && p * A[j] < q*A[i]){
                p= A[i];
                q = A[j];
            }
        }
        if(cnt == K) return [p,q];//当前mid正好是所寻找的结果
        else if(cnt < K) left = mid;
        else right = mid;
    }
};
