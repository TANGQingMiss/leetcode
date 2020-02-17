/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var fairCandySwap = function(A, B) {
    function getSum(nums){
        let sum = 0;
        for(let i = 0; i < nums.length; i++){
            sum += nums[i];
        }
        return sum;
    }

    let sumA = getSum(A);
    let sumB = getSum(B);
    let dif = sumA - sumB;
    for(let i = 0; i < A.length; i++){
        const num1 = A[i];
        const num2 = num1 - dif / 2;
        if(B.includes(num2)){
            return [num1,num2];
        }
    }
};
