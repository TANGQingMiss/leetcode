/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    flowerbed.unshift(0);
    flowerbed.push(0);
    let numTree = 0;
    for(i = 1; i < flowerbed.length - 1; i++){
        if(flowerbed[i-1] == 0 && flowerbed[i] == 0 && flowerbed[i+1] == 0){
            flowerbed[i] = 1;
            numTree++;
        }
    }
    if(n <= numTree) return true;
    return false;
};
