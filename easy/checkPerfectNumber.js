/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    if(num == 0) return false;
    if(num % 2 != 0) return false;
    let count = 0;
    for(let i = 2; i * i < num; i++){
        count += num % i == 0? i + num / i : 0;
    }
    return count + 1 == num;
};
