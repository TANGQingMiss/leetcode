/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
//对于每个查询 i，请你计算从 Li 到 Ri 的 XOR 值（即 arr[Li] xor arr[Li+1] xor ... xor arr[Ri]）作为本次查询的结果
//a ^ b = b ^ a
//0 ^ x = x
//x ^ x = 0
//d ^ e ^ f = 0 ^ (d ^ e ^ f) = ((a ^ a) ^ (b ^ b) ^ (c ^ c)) ^ (d ^ e ^ f) = (a ^ b ^ c)^(a ^ b ^ c ^ d ^ e ^ f)
var xorQueries = function(arr, queries) {
    let pre = new Array(arr.length+1).fill(0);
    let res = [];
    for(let i = 0; i < arr.length; i++){
        pre[i+1] = pre[i] ^ arr[i];
    }
    for(let i = 0; i < queries.length; i++){
        res.push(pre[queries[i][1]+1] ^ pre[queries[i][0]]);
    }
    return res;
};
