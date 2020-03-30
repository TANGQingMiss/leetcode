/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
// 编写一段程序来查找第 n 个超级丑数。
// 超级丑数是指其所有质因数都是长度为 k 的质数列表 primes 中的正整数。
var nthSuperUglyNumber = function(n, primes) {
    let pos = new Array(primes.length).fill(0);
    let res = [1];
    for(let i = 1; i < n; i++){
        let tmp = new Array(primes.length);
        let min = Number.MAX_VALUE;
        for(let j = 0; j < tmp.length; j++){
            tmp[j] = res[pos[j]]*primes[j];
            if(tmp[j] < min) min = tmp[j];
        }
        res.push(min);
        for(let j = 0; j < tmp.length; j++){
            if(res[pos[j]]*primes[j] == res[res.length-1]) pos[j]++;
        }
    }
    return res[res.length-1];
};
