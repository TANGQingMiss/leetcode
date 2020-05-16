/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
//给定一个由若干 0 和 1 组成的数组 A，我们最多可以将 K 个值从 0 变成 1 。
//返回仅包含 1 的最长（连续）子数组的长度
var longestOnes = function(A, K) {
    let l = 0, r = 0, ans = 0;
    while(r < A.length){
        if(A[r] == 1){
            r++;
            ans = Math.max(ans,r-l);
        }else{
            if(K > 0){
                K--;
                r++;
                ans = Math.max(ans,r-l);
            }else{
                if(A[l] == 0){
                    r++;
                    l++;
                }else{
                    l++;
                }
            }
        }
    }
    return ans;
};
