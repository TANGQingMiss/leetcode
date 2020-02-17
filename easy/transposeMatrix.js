/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function(A) {
    let row = A.length;
    let col = A[0].length;
    let res = [];
    for(let j = 0; j < col; j++){
        let tmp = [];
        for(let i = 0; i < row; i++){
            tmp.push(A[i][j]);
        }
        res.push(tmp);
    }
    return res;
};
