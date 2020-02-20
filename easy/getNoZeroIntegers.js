/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function(n) {
    let res = [];
    for(let i = 1; i < n; i++){
        let j = n - i;
        if(i.toString().indexOf('0') == -1 && j.toString().indexOf('0') == -1){
            res.push(i,j);
            break;
        }
    }
    return res;
};
