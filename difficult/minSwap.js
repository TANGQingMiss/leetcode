/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
//我们有两个长度相等且不为空的整型数组 A 和 B 。
//我们可以交换 A[i] 和 B[i] 的元素。注意这两个元素在各自的序列中应该处于相同的位置。
//在交换过一些元素之后，数组 A 和 B 都应该是严格递增的
var minSwap = function(A, B) {
    let dp_s = 1, dp_ns = 0;//dp_s表示i位置交换,dp_ns同理
    for(let i = 1; i < A.length; i++){
        let t1 = dp_s, t2 = dp_ns;
        if(A[i] > A[i-1] && B[i] > B[i-1]){
            if(A[i] > B[i-1] && B[i] > A[i-1]){//换不换无所谓,取上一步两种情况最小值
                dp_ns = Math.min(t1,t2);
                dp_s = dp_ns + 1;
            }else dp_s += 1;//否则,上一步换了这一步也要换
        }else{//否则,一定要换
            dp_s = dp_ns + 1;
            dp_ns = t1;
        }
    }
    return Math.min(dp_ns,dp_s);
};
