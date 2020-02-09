/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    num = num.toString(2);
    num = num.replace(/1/g,'2');
    num = num.replace(/0/g,'1');
    num = num.replace(/2/g,'0');
    return parseInt(num,2);
};
