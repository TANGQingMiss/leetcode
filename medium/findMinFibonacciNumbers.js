/**
 * @param {number} k
 * @return {number}
 */
//给你数字 k ，请你返回和为 k 的斐波那契数字的最少数目，其中，每个斐波那契数字都可以被使用多次
var findMinFibonacciNumbers = function(k) {
    if(k <= 3) return 1;
    let arr = new Array(46);
    arr[0] = 1;
    arr[1] = 1;
    for(let i = 2; i < arr.length; i++){
        arr[i] = arr[i-1] + arr[i-2];
    }//构建数列
    let cnt = 0;
    let i = arr.length - 1;
    while(k > 0 && i >= 0){
        if(k - arr[i] >= 0){
            let num = Math.floor(k / arr[i]);
            k -= (arr[i]*num);
            cnt += num;
        }
        i--;
    }
    return cnt;
};
