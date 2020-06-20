/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
//给定两个整数 n 和 k，你需要实现一个数组，这个数组包含从 1 到 n 的 n 个不同整数，同时满足以下条件：
//如果这个数组是 [a1, a2, a3, ... , an] ，那么数组 [|a1 - a2|, |a2 - a3|, |a3 - a4|, ... , |an-1 - an|] 中应该有且仅有 k 个不同整数
//初始化为1到n，此时差值为1种，然后从第二位到末位开始不停翻转即可，翻转一次增加一种差值
var constructArray = function(n, k) {
    let res = new Array(n);
    let cnt = n;
    let rec = 1;
    for(let i = 0; i < n - k; i++){
        res[i] = rec++;
    }
    let flag = true;
    for(let i = n - k; i < n; i++){
        if(flag){
            res[i] = cnt--;
            flag = false;
        }else{
            flag = true;
            res[i] = rec++;
        }
    }
    return res;
};
