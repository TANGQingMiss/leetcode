/**
 * @param {number[][]} M
 * @return {number[][]}
 */
var imageSmoother = function(M) {
    let row = M.length;
    let col = M[0].length;
    let res = new Array(row);
    for(let i = 0; i < row; i++){
        res[i] = new Array(col);
    }
    for(let i = 0; i < row; i++){
        for(let j = 0; j < col; j++){
            let sum = 0;
            let count = 0;
            for(let m = Math.max(0,i-1); m <= Math.min(row - 1, i + 1); m++){
                for(let n = Math.max(0, j - 1); n <= Math.min(col - 1, j + 1); n++){
                    sum += M[m][n];
                    count++;
                }
            }
            res[i][j] = Math.floor(sum / count);
        }
    }
    return res;
};
