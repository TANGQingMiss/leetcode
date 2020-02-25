/**
 * @param {number[]} A
 * @return {string}
 */
var largestTimeFromDigits = function(A) {
    if(Math.min.apply(null,A) >= 3) return "";
    let res = "";
    A = A.sort(function(x,y){return x - y;});
    for(let i = 3; i >= 0; i--){
        if(A[i] > 2) continue;
        for(let j = 3; j >= 0; j--){
            if(j == i || (A[i] == 2 && A[j] > 3)) continue;
            for(let k = 3; k >= 0; k--){
                if(k == i || k == j || A[k] > 5) continue;
                for(let l = 3; l >= 0; l--){
                    if(l == i || l == j || l == k) continue;
                    return res + A[i] + A[j] + ":" + A[k] + A[l];
                    
                }
            }
        }
    }
    return "";
};
