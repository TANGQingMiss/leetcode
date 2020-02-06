/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    if(!J || !S) return 0;
    //use map
    let map = new Map();
    for(let i = 0; i < S.length; i++){
        map.set(S.charAt(i),map.has(S.charAt(i))?map.get(S.charAt(i))+1:1);
    }
    let res = 0;
    for(let j = 0; j < J.length; j++){
        res += map.has(J.charAt(j))?map.get(J.charAt(j)):0;
    }
    return res;
};
