/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
//给定一个整数数组 A，返回其中元素之和可被 K 整除的（连续、非空）子数组的数目。
var subarraysDivByK = function(A, K) {
    let map = new Array(K).fill(0);//余数为0->K-1
    map[0]++;
    let prefix = 0, res = 0;
    for(const a of A){
        prefix = (a + prefix) % K;
        if(prefix < 0) prefix += K;
        res += map[prefix]++;
    }
    return res;
};
