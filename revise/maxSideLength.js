/**
 * @param {number[][]} mat
 * @param {number} threshold
 * @return {number}
 */
//请你返回元素总和小于或等于阈值的正方形区域的最大边长；
var maxSideLength = function(mat, threshold) {
    let m = mat.length;
    let n = mat[0].length;
    let res = 0;
    let sum = new Array(m+1);
    for(let i = 0; i <= m; i++){
        sum[i] = new Array(n+1).fill(0);
    }
    for(let i = 1; i <= m; i++){
        for(let j = 1; j <= n; j++){
            sum[i][j] = mat[i-1][j-1]+sum[i][j-1]+sum[i-1][j]-sum[i-1][j-1];
            //计算前缀和
        }
    }
    for(let i = 1; i <= m; i++){
        for(let j = 1; j <= n; j++){
            for(let k = 1; k <= i && k <= j; k++){
                let ans = sum[i][j] - sum[i-k][j] - sum[i][j-k] + sum[i-k][j-k];
                if(ans > threshold){
                    break;
                }
                res = Math.max(res,k);
            }
        }
    }
    return res;
};
