/**
 * @param {number[]} A
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function(A, queries) {
    //get original sum of pair number
    let sum = 0;
    for(let i = 0; i < A.length; i++){
        if(A[i] % 2 == 0) sum += A[i];
    }
    
    let res = [];
    for(let i = 0; i < queries.length; i++){
        let val = queries[i][0];
        let index = queries[i][1];
        //case 1: pair - pair
        if(A[index] % 2 == 0 && (A[index] + val) % 2 == 0){
            sum += val;
        }
        //case 2: odd - pair
        else if(A[index] % 2 != 0 && (A[index] + val) % 2 == 0){
            sum += A[index]+val;
        }
        //case 3: pair - odd
        else if(A[index] % 2 == 0 && (A[index] + val) % 2 != 0){
            sum -= A[index];
        }
        A[index] += val;
        res.push(sum);
    }
    return res;
};
