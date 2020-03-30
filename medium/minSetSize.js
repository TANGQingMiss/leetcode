/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function(arr) {
    if(arr.length == 0) return 0;
    if(arr.length <= 2) return 1;
    let minimum = Math.ceil(arr.length / 2);
    let min = Math.min.apply(null,arr);
    let max = Math.max.apply(null,arr);
    let bucket = new Array(max - min + 1);
    bucket.fill(0);
    for(let i = 0; i < arr.length; i++){
        bucket[arr[i] - min]++;
    } 
    bucket.sort(function(x,y){return y -x;});
    let sum = 0;
    let cnt = 0;
    for(let i = 0; i < bucket.length && bucket[i] != 0; i++){
        sum += bucket[i];
        cnt++;
        if(sum >= minimum){
            return cnt;
        }
    }
};
