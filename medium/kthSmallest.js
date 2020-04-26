/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
//给定一个 n x n 矩阵，其中每行和每列元素均按升序排序，找到矩阵中第k小的元素
var kthSmallest = function(matrix, k) {
    let row = matrix.length;
    let col = matrix[0].length;
    let lo = matrix[0][0];
    let hi = matrix[row-1][col-1];
    while(lo <= hi){
        let cnt = 0;
        let mid = Math.floor((lo + hi) / 2);
        let i = row - 1;
        let j = 0;
        while(i >= 0 && j < col){
            if(matrix[i][j] <= mid){
                cnt += i + 1;
                j++;
            }else i--;
        }
        if(cnt < k) lo = mid + 1;
        else hi = mid - 1;
    }
    return lo;
};
