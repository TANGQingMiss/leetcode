/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function(m, n, ops) {
    if(ops == null || ops.length == 0) return m * n;
    let len = ops.length;
    let row = 40000;
    let col = 40000;
    for(let i = 0; i < len; i++){
        row = Math.min(row,ops[i][0]);
        col = Math.min(col,ops[i][1]);
    }
    return row * col;
};
