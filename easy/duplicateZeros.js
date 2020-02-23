/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    let len = arr.length;
    for(let i = 0; i < arr.length - 1; i++){
        if(arr[i] == 0){
            for(let j = arr.length - 1; j > i; j--){
                arr[j] = arr[j-1];
            }
            i++;
        }
    }
};
