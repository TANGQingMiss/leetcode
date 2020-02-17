/**
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function(A) {
    if(A == null || A.length < 3) return false;
    let max = Math.max.apply(null,A);
    let index = A.indexOf(max);
    if(index == A.length - 1 || index == 0) return false;
    let i = 0;
    let j = A.length - 1;
    for(let i = 0; i < A.length; i++){
        if(i < index){
            if(A[i] >= A[i+1]) return false;
        }else if(i > index){
            if(A[i] >= A[i-1]) return false;
        }
    }
    return true;
};
