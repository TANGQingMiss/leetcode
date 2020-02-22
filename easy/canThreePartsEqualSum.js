/**
 * @param {number[]} A
 * @return {boolean}
 */
var canThreePartsEqualSum = function(A) {
    let sum = 0;
    for(let i = 0; i < A.length; i++){
        sum += A[i];
    }
    if(sum % 3 != 0) return false;
    let sumAverage = sum / 3;
    let sum1 = 0;
    let sum3 = 0;
    let i = 0;
    let j = A.length - 1;
    while(i < j){
        if(sum1 != sumAverage){
            sum1 += A[i];
            i++;
        }
        if(sum3 != sumAverage){
            sum3 += A[j];
            j--;
        }
        if(sum1 == sumAverage && sum3 == sumAverage){
            return true;
        }
    }
    return false;
};
