/**
 * @param {number} tomatoSlices
 * @param {number} cheeseSlices
 * @return {number[]}
 */
var numOfBurgers = function(tomatoSlices, cheeseSlices) {
    if(tomatoSlices == 0 && cheeseSlices == 0) return [0,0];
    if(tomatoSlices == 0 || cheeseSlices == 0) return [];
    let maxBig = Math.floor(tomatoSlices / 4);
    for(let i = maxBig; i >= 0; i--){
        let numBig = i;
        let numSmall = cheeseSlices - numBig;
        if(numBig * 4 + numSmall * 2 == tomatoSlices){
            return [numBig,numSmall];
        }
    }
    return [];
};
