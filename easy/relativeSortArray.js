/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    let bucket = new Array(1001);
    for(let i = 0; i < 1001; i++){
        bucket[i] = 0;
    }
    for(let i = 0; i < arr1.length; i++){
        bucket[arr1[i]]++;
    }
    let idx = 0;
    for(let i = 0; i < arr2.length; i++){
        while(bucket[arr2[i]] > 0){
            bucket[arr2[i]]--;
            arr1[idx++] = arr2[i];
        }
    }
    for(let i = 0; i < bucket.length; i++){
        while(bucket[i] > 0){
            bucket[i]--;
            arr1[idx++] = i;
        }
    }
    return arr1;
};
