/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
    let len = Math.floor(arr.length / 4) + 1;
    for(let i = 0; i < arr.length - len + 1; i++){
        if(arr[i] == arr[i+len-1]) return arr[i];
    }
};
