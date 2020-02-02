/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let carry = 0;
    let res = [];
    let i = num1.length - 1;
    let j = num2.length - 1;
    while(i >= 0 || j >= 0){
        let n1 = i >= 0 ? +num1[i] : 0;
        let n2 = j >= 0 ? +num2[j] : 0;
        let num = n1 + n2 + carry;
        carry = Math.floor(num / 10);
        res.unshift(num % 10);
        i--;
        j--;
    }
    if(carry === 1) res.unshift(1);
    return res.join('');
};
