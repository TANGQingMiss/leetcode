/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function(dominoes) {
    let res = 0;
    for(let i = 0 ; i < dominoes.length - 1; i++){
        for(let j = i + 1; j < dominoes.length; j++){
            if((dominoes[i][0] == dominoes[j][0] && dominoes[i][1] == dominoes[j][1])
            || (dominoes[i][0] == dominoes[j][1] && dominoes[i][1] == dominoes[j][0])){
                res++;
            }
        }
    }
    return res;
};
