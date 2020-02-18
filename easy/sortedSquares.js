/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
    //method1: direct sort
    // const map = A.map(x => {
    //     return x * x;
    // });
    // return map.sort(function(x,y){ return x-y;});

    //method 2: use double pointers
    let i = 0;
    let j = A.length - 1;
    let res = new Array(A.length);
    let k = A.length - 1;
    while(i <= j){
        if(Math.abs(A[i]) > Math.abs(A[j])){
            res[k] = A[i]*A[i];
            k--;
            i++;
        }else{
            res[k] = A[j]*A[j];
            k--;
            j--;
        }
    }
    return res;
};
