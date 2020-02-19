/**
 * @param {string} S
 * @return {number[]}
 */
var diStringMatch = function(S) {
    let len = S.length;
    let numi = 0;
    let numd = len;
    let res = [];
    for(let i = 0; i < len; i++){
        if(S[i] == 'I'){
            res.push(numi++);
        }else if(S[i] == 'D'){
            res.push(numd--);
        }
    }
    res.push(numd);
    return res;
};
