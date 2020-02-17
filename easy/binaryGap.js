/**
 * @param {number} N
 * @return {number}
 */
var binaryGap = function(N) {
    let str = N.toString(2);
    let max = 0;
    let index = str.indexOf(1);
    for(let i = index + 1; i < str.length; i++){
        if(str.charAt(i) == 1){
            max = Math.max(i - index,max);
            index = i;
        }
    }
    return max;
};
