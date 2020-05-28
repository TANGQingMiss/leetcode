/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
//在仅包含 0 和 1 的数组 A 中，一次 K 位翻转包括选择一个长度为 K 的（连续）子数组，同时将子数组中的每个 0 更改为 1，而每个 1 更改为 0。
//返回所需的 K 位翻转的次数，以便数组没有值为 0 的元素。如果不可能，返回 -1
var minKBitFlips = function(A, K) {
    let res = 0;
    let idx = 0;
    while(idx + K <= A.length){
        if(A[idx] == 1){
            idx++;
            continue;
        }
        for(let i = idx; i < idx + K; i++){
            A[i] ^= 1;
        }
        idx++;
        res++;
    }
    return A.includes(0) ? -1 : res;
};
