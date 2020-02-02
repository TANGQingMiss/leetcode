/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    function sortNumber(x,y){
        return x - y;
    }
    let orderG = g.sort(sortNumber);
    let orderS = s.sort(sortNumber);
    let i = 0;
    let j = 0;
    let len1 = orderG.length;
    let len2 = orderS.length;
    let res = 0;
    while(i < len1 && j < len2){
        if(orderS[j] >= orderG[i]){
            res += 1;
            i++;
            j++;
        }else{
            j++;
        }
    }
    return res;
};
