/**
 * @param {number} lo
 * @param {number} hi
 * @param {number} k
 * @return {number}
 */
// 我们将整数 x 的 权重 定义为按照下述规则将 x 变成 1 所需要的步数：
// 如果 x 是偶数，那么 x = x / 2
// 如果 x 是奇数，那么 x = 3 * x + 1
// 比方说，x=3 的权重为 7 。因为 3 需要 7 步变成 1 （3 --> 10 --> 5 --> 16 --> 8 --> 4 --> 2 --> 1）。
// 给你三个整数 lo， hi 和 k 。你的任务是将区间 [lo, hi] 之间的整数按照它们的权重 升序排序 ，如果大于等于 2 个整数有 相同 的权重，那么按照数字自身的数值 升序排序 。
// 请你返回区间 [lo, hi] 之间的整数按权重排序后的第 k 个数

// 1、判断当前值是奇数还是偶数；
// 2、然后用一个对象来存储当前值的处理步数；
// 3、对该对象按照,处理步数进行排序，在处理步数相同的情况下，按照数值本身进行排序
var getKth = function(lo, hi, k) {
     const res={};
    for(let x=lo;x<=hi;x++){
        let count=0;
        let original=x;
        while(original!=1){
            original=original%2?(3*original+1):(original / 2)
            count++  
        }
        res[x]=count;
    }
    return Object.keys(res).sort((a,b)=>res[a]===res[b]?a-b:res[a]-res[b])[k-1]
};
