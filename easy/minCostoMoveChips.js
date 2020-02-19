/**
 * @param {number[]} chips
 * @return {number}
 */
var minCostToMoveChips = function(chips) {
    let odd = 0;
    let even = 0;
    for(let i = 0; i < chips.length; i++){
        if(chips[i] % 2 == 0) even++;
        else odd++;
    }
    return Math.min(odd,even);
};
