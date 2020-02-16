/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
    let row = A.length;
    let col = A[0].length;

    for(let i = 0; i < row; i++){
        let j = col - 1;
        let k = 0;
        while(k < j){
            let tmp = A[i][j];
            A[i][j] = A[i][k] == 0 ? 1 : 0;
            A[i][k] = tmp == 0 ? 1 : 0;
            k++;
            j--;
        }
        if(k == j){
            if(A[i][j] == 0) A[i][j] = 1;
            else A[i][j] = 0;
        }
    }
    return A;

};
