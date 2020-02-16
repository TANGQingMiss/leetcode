/**
 * @param {string} S
 * @return {number[][]}
 */
var largeGroupPositions = function(S) {
    let res = [];
    if(S == null || S.length < 3) return res;
    let i = 0;
    let j = 0;
    while(i < S.length && j < S.length){
        if(S.charAt(j) == S.charAt(i)){
            if(j == S.length - 1){
                if(j - i + 1 >= 3){
                let tmp = [i,j];
                res.push(tmp);
            }
        }
            j++;
        }else {
            if(j - i >= 3){
                let tmp = [i,j - 1];
                res.push(tmp);
            }
            i = j;
        }
    }
    return res;
};
