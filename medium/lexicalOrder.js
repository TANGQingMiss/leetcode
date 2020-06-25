/**
 * @param {number} n
 * @return {number[]}
 */
// 给定一个整数 n, 返回从 1 到 n 的字典顺序。
// 例如给定 n =1 3，返回 [1,10,11,12,13,2,3,4,5,6,7,8,9] 。
var lexicalOrder = function(n) {
    let res = [];
    for(let i = 1; i <= 9; i++){
        dfs(i,n);
    }
    return res;

    function dfs(i,n){
        if(i > n) return;
        res.push(i);
        for(let j = 0; j <= 9; j++){
            dfs(i*10+j,n);
        }
    }
};
