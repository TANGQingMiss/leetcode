/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    if(stones.length == 2) return Math.abs(stones[0]-stones[1]);
    if(stones.length == 1) return stones[0];
    stones.sort(function(x,y){return x - y;});
    if(stones[stones.length - 3] == 0){
        return stones[stones.length - 1] - stones[stones.length - 2];
    }
    stones[stones.length - 1] = stones[stones.length - 1] - stones[stones.length - 2];
    stones[stones.length - 2] = 0;
    return lastStoneWeight(stones);
};
