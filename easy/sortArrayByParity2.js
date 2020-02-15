/**
 * @param {number[]} A
 * @return {number[]}
 */
//all pairs are before the odds
var sortArrayByParity = function(A) {
    let i = 0;
    let j = A.length - 1;
    while(i < j){
        if(A[i] % 2 != 0 && A[j] % 2 == 0){
            let tmp = A[j];
            A[j] = A[i];
            A[i] = tmp;
            i++;
            j--;
        }
        if(A[i] % 2 == 0) i++;
        if(A[j] % 2 != 0) j--;
    }
    return A;
};
