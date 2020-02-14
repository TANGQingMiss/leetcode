/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
    //use map to store mode
    let map = new Map();
    for(let i = 0; i < A.length; i++){
        if(map.has(A[i])) return A[i];
        else{
            map.set(A[i],1);
        }
    }
};
