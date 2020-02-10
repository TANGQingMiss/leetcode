/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {
    if(bits.length == 1) return true;
    let continousOne = 0;
    for(let i = bits.length - 2; i >= 0; i--){
        if(bits[i] == 1){
            continousOne++;
        }else{
            return continousOne % 2 == 0;
        }
    }
    return continousOne % 2 == 0;
};
