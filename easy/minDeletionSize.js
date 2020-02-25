/**
 * @param {string[]} A
 * @return {number}
 */
var minDeletionSize = function(A) {
    let res = 0;
    let row = A.length;
    let col = A[0].length;
    for(let j = 0; j < col; j++){
        for(let i = 0; i < row - 1; i++){
            if(A[i].charCodeAt(j) > A[i+1].charCodeAt(j)){
                res++;
                break;
            }
        }
    }
    return res;
};
