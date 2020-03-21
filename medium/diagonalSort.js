/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var diagonalSort = function(mat) {
    if(mat.length == 0) return mat;
    let row = mat.length;
    let col = mat[0].length;
    for(let i = 0; i < col; i++){
        let tmp = [];
        let k = i;
        let j = 0;
        while(k < col && j < row){
            tmp.push(mat[j][k]);
            k++;
            j++;
        }
        tmp.sort(function(x,y){return x - y;});
        let kk = i;
        let jj = 0;
        let len = 0;
        while(kk < col && jj < row){
            mat[jj][kk] = tmp[len++];
            kk++;
            jj++;
        }
    }

    for(let i = 1; i < row; i++){
        let tmp = [];
        let k = i;
        let j = 0;
        while(k < row && j < col){
            tmp.push(mat[k][j]);
            k++;
            j++;
        }
        tmp.sort(function(x,y){return x - y;});
        let kk = i;
        let jj = 0;
        let len = 0;
        while(kk < row && jj < col){
            mat[kk][jj] = tmp[len++];
            kk++;
            jj++;
        }
    }
    return mat;
};
