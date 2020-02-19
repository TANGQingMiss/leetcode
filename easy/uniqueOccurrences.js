/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    //use map to record apprearing times
    let map = new Map();
    for(let i = 0; i < arr.length; i++){
        map.set(arr[i],map.has(arr[i])?map.get(arr[i])+1:1);
    }
    //verify whether values are unique
    let set = new Set();
    for(let [key,value] of map){
        set.add(value);
    }
    return map.size == set.size;
};
