/**
 * @param {string} A
 * @param {string} B
 * @return {number}
 */
var repeatedStringMatch = function(A, B) {
    if(A.length >= B.length && A.indexOf(B) != -1) return 1;
    let count = 1;
    let times = Math.floor(B.length / A.length) + 2;
    let tmp = A;
    while(count <= times){
        if(tmp.indexOf(B) != -1){
            return count;
            break;
        }else{
            tmp += A;
            count++;
        }
    }
    return -1;
};
