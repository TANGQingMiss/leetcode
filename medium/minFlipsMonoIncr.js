/**
 * @param {string} S
 * @return {number}
 */
//如果一个由 '0' 和 '1' 组成的字符串，是以一些 '0'（可能没有 '0'）后面跟着一些 '1'（也可能没有 '1'）的形式组成的，那么该字符串是单调递增的。
//我们给出一个由字符 '0' 和 '1' 组成的字符串 S，我们可以将任何 '0' 翻转为 '1' 或者将 '1' 翻转为 '0'。
//返回使 S 单调递增的最小翻转次数
var minFlipsMonoIncr = function(S) {
    if(S == null || S.length <= 1) return 0;
    let res = Number.MAX_VALUE;
    let count0 = 0;
    for(let i = 0; i < S.length; i++){
        if(S.charAt(i) == '0') count0++;
    }
    let l = 0, r = count0;
    //l是左边的1的数量，r是右边的0的数量
    for(let i = 0; i < S.length; i++){
        res = Math.min(res,l+r);
        if(S.charAt(i) == '1') l++;
        else r--;
    }
    return Math.min(res,Math.min(count0,S.length-count0));
};
