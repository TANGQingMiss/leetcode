/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    if(str1+str2 != str2+str1) return "";
    function greatestCommonDivisor(a,b){
        return b == 0 ? a : greatestCommonDivisor(b, a % b);
    }
    return str1.substr(0,greatestCommonDivisor(str1.length,str2.length));
};
