/**
 * @param {number[]} A
 * @return {number}
 */
var largestPerimeter = function(A) {
    let res = 0;
    A = A.sort(function(x,y){return y - x;});//decreasing sort
    for(let i = 0; i < A.length - 2; i++){
        if(A[i] < A[i+1]+A[i+2]){
            res = A[i]+A[i+1]+A[i+2];
            break;
        }
    }
    return res;
};
