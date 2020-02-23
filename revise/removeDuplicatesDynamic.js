/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function(S) {
    let res = S.split('');
    let index = 0;
    for(let i = 0; i < S.length; i++){
        if(index != 0 && S.charAt(i) == res[index - 1]){
            index--;
        }else{
            res[index++] = S.charAt(i);
        }
    }
    return res.slice(0,index).join('');
};
