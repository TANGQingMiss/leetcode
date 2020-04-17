/**
 * @param {number[]} barcodes
 * @return {number[]}
 */
//请你重新排列这些条形码，使其中两个相邻的条形码 不能 相等。 你可以返回任何满足该要求的答案，此题保证存在答案
var rearrangeBarcodes = function(barcodes) {
    if(barcodes.length <= 1) return barcodes;
    let map = new Map();
    for(let i = 0; i < barcodes.length; i++){
        let item = barcodes[i];
        map.has(item)? map.set(item,map.get(item)+1) : map.set(item,1);
    }
    let arr = Array.from(map);
    arr.sort(function(x,y){return y[1] - x[1];});
    let res = new Array(barcodes.length);
    for(let i = 0; i < barcodes.length; ){
        res[i++] = arr[0][0];
        arr[0][1]--;
        if(i < barcodes.length){
            res[i++] = arr[1][0];
            arr[1][1]--;
        }
        arr.sort(function(x,y){return y[1] - x[1];});
    }
    return res;
};
