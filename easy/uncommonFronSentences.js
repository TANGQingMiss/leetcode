/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
var uncommonFromSentences = function(A, B) {
    let tmp = (A+' '+B).split(' ');
    let res = [];
    for(let i = 0; i < tmp.length; i++){
        if(tmp.indexOf(tmp[i]) == tmp.lastIndexOf(tmp[i])) res.push(tmp[i]);
    }
    return res;
};
