/**
 * @param {number[]} A
 * @return {number[]}
 */
// 给你一个正整数的数组 A（其中的元素不一定完全不同），请你返回可在 一次交换（交换两数字 A[i] 和 A[j] 的位置）后得到的、按字典序排列小于 A 的最大可能排列。
// 如果无法这么操作，就请返回原数组。
// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/previous-permutation-with-one-swap
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
var prevPermOpt1 = function(A) {
    if(A.length <= 1) return A;
    for(let i = A.length - 1; i >= 1; i--){
        if(A[i-1] > A[i]){
            let j = A.length - 1;
            while(A[j] >= A[i-1] || A[j] == A[j-1]){
                j--;
            }
            let tmp = A[i-1];
            A[i-1] = A[j];
            A[j] = tmp;
            break;
        }
    }
    return A;
};
