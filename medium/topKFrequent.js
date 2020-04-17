/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map = new Map();
    for(const n of nums){
        !map.has(n) && map.set(n,0);
        map.set(n, map.get(n)+1);
    }
    let arr = Array.from(map);//map to 2D array
    arr.sort(function(x,y){return y[1] - x[1];});
    let res = [];
    for(let i = 0; i < k; i++){
        res.push(arr[i][0]);
    }
    return res;
};
