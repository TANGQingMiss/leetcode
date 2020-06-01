/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function(target, n) {
    let start = 1;
    let res = [];
    for(let i = 0; i < target.length; i++){
        while(start < target[i]){
            res.push('Push');
            res.push('Pop');
            start++;
        }
        if(start == target[i]){
            res.push('Push');
            start++;
        }
    }
    return res;
};
