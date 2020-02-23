/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var largestSumAfterKNegations = function(A, K) {
    //step 1: range array A, from low to high
    A.sort(function(x,y){return x - y;});
    let sum = 0;

    //step 2: reverse all negative numbers while K > 0
    for(let i = 0; i < A.length; i++){
        if(A[i] < 0 && K > 0){
            A[i] = -A[i];
            K--;
        }
    }

    //step 3: sort again, and then if K > 0, reverse the smallest number
    A.sort(function(x,y){return x - y;});
    if(K % 2 != 0){
        A[0] = -A[0];
    }
    for(let i = 0; i < A.length; i++){
        sum += A[i];
    }
    return sum;
};
