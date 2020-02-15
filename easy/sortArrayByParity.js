/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
    let len = A.length;
    let j = len - 2;//index of pair
    for(let i = len - 1; i >= 0; i -= 2){//index of odd
        if(A[i] % 2 != i % 2){
            while(A[j] % 2 == j % 2){
                j -= 2;
            }
            let tmp = A[j];
            A[j] = A[i];
            A[i] = tmp;
        }
    }
    return A;
};
