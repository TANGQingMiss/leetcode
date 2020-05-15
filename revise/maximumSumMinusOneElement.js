/**
 * @param {number[]} arr
 * @return {number}
 */
//给你一个整数数组，返回它的某个 非空 子数组（连续元素）在执行一次可选的删除操作后，所能得到的最大元素总和。
//f[i]：表示以第i个位置的元素结尾，且不删除元素的最大子数组和
//g[i]：表示以第i个位置的元素结尾，且删除过元素的最大子数组和
//ans = max(f[i], g[i]) i: 0 ~ n-1
var maximumSum = function(arr) {
    let n = arr.length;
    if(n == 1) return arr[0];
    let f = new Array(n).fill(0), g = new Array(n).fill(0);
    f[0] = arr[0];
    g[0] = arr[0];
    let ans = -Number.MAX_VALUE;
    for(let i = 1; i < n; i++){
        f[i] = Math.max(f[i-1]+arr[i],arr[i]);
        g[i] = Math.max(g[i-1]+arr[i],f[i-1]);
        ans = Math.max(ans, Math.max(f[i],g[i]));
    }
    return ans;
};
