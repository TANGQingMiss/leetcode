/**
 * @param {number[]} cont
 * @return {number[]}
 */
var fraction = function(cont) {
    let res = [1,0];
    for(let i = cont.length - 1; i >= 0; i--){
        let tmp = res[1];
        res[1] = res[0];
        res[0] = cont[i] * res[1] + tmp;
    }
    return res;
};
