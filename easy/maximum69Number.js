/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    let res = num.toString().split('');
    for(let i = 0; i < res.length; i++){
        if(res[i] == 6){
            res[i] = 9;
            break;
        }
    }
    return parseInt(res.join(''));
};
