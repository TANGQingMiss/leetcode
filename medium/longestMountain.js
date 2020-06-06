/**
 * @param {number[]} A
 * @return {number}
 */
//先找到比左右两侧大的数 然后以这个数为中心 依次找到左右的长度
var longestMountain = function(A) {
    if(A == null || A.length <= 2) return 0;
    let res = 0;
    for(let i = 1; i < A.length - 1; i++){
        if(A[i-1] < A[i] && A[i+1] < A[i]){
        let l = i - 1;
        let r = i + 1;
        while(l > 0 && A[l - 1] < A[l]){
            l--;
        }
        while(r < A.length && A[r + 1] < A[r]){
            r++;
        }
        res = Math.max(res,r-l+1);
    }
    }
    return res;
};
