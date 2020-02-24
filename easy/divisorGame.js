/**
 * @param {number} N
 * @return {boolean}
 */
var divisorGame = function(N) {
    //if N is odd, all divisors are odd,the second person - 1
    //if N is even, -1, let the second have the odd number
    return N%2 == 0;
};
