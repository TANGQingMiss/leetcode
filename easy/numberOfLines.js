/**
 * @param {number[]} widths
 * @param {string} S
 * @return {number[]}
 */
var numberOfLines = function(widths, S) {
    let count = 1;
    let sum = 0;
    for(let i = 0; i < S.length; i++){
        let code = S.charCodeAt(i);
        sum += widths[code - 97];
        //charcode of a is 97
        if(sum > 100){
            count++;
            sum = widths[code - 97];
        }
    }
    return [count,sum];
};
