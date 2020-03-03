/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    let res = new Array(n);
    for(let i = 0; i < n; i++){
        res[i] = new Array(n);
    }
    let i = 1;
    let j = 0;
    while(i <= n * n){
        for(let k = j; k < n - j; k++){
            res[j][k] = i++;
        }
        for(let k = j + 1; k < n - j; k++){
            res[k][n - j - 1] = i++;
        }
        for(let k = n - j - 2; k >= j; k--){
            res[n - j - 1][k] = i++;
        }
        for(let k = n - j - 2; k > j; k--){
            res[k][j] = i++;
        }
        j++;
    }
    return res;
};
