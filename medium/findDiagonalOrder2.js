/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
//给定一个含有 M x N 个元素的矩阵（M 行，N 列），请以对角线遍历的顺序返回这个矩阵中的所有元素，对角线遍历如下图所示
var findDiagonalOrder = function(matrix) {
    if(matrix == null || matrix.length == 0) return [];
    let r = 0, c = 0;
    let row = matrix.length, col = matrix[0].length;
    let res = new Array(row * col);
    for(let i = 0; i < res.length; i++){
        res[i] = matrix[r][c];
        if((r + c) % 2 == 0){
            if(c == col - 1){
                //往下移动
                r++;
            }else if(r == 0){
                //往右移动
                c++;
            }else{
                //往上移动
                r--;
                c++;
            }
        }else{
            if(r == row - 1){
                c++;
            }else if(c == 0){
                r++;
            }else{
                r++;
                c--;
            }
        }
    }
    return res;
};
