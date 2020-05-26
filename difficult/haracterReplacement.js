/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let alpha = new Array(26).fill(0);
    let left = 0, res = 0, maxCnt = 0;
    for(let i = 0; i < s.length; i++){
        alpha[s.charCodeAt(i)-65]++; //记录当前窗口字母出现的个数
        maxCnt = Math.max(maxCnt,alpha[s.charCodeAt(i)-65]);// maxCnt记录字符出现次数最多那个字符 的次数
        while(i - left + 1 - maxCnt > k){// 比较之前记录的最大数 和 当前字符的数量
            alpha[s.charCodeAt(left)-65]--;// 若当前窗口大小 减去 窗口中最多相同字符的个数 大于 k 
            left++;// 将窗口最左边的字符 在计数数组中减1, 滑动窗口
        }
        res = Math.max(res,i-left+1);
    }
    return res;
};
