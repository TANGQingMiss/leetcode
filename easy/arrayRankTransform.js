/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
    let tmp = new Array(arr.length);
    for(let i = 0; i < arr.length; i++){
        tmp[i] = arr[i];
    }
    tmp = tmp.sort(function(x,y){return x - y;});
    let map = new Map();
    for(let i = 0,p = 1; i < tmp.length; i++){
        map.set(tmp[i],map.has(tmp[i])?map.get(tmp[i]):p++);
    }
    for(let i = 0; i < arr.length; i++){
        arr[i] = map.get(arr[i]);
    }
    return arr;
};
