/**
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var countPrimeSetBits = function(L, R) {
    let prime = [2,3,5,7,11,13,17,19,23,29,31];
    let res = 0;

    for(let i = L ; i <= R; i++){
        let tmp = i.toString(2);
        if(prime.indexOf(countOne(tmp)) != -1){
            res++;
        }
    }
    function countOne(num){
        let one = 0;
        for(let i = 0; i < num.length; i++){
            if(num[i] == 1) one++;
        }
        return one;
    }
    return res;
};
