/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    let a = 0;
    let b = 0;
    let c = 0;
    let arr = new Array(n);
    arr[0] = 1;
    for(let i = 1; i < n; i++){
        let ugly = Math.min(arr[a]*2,Math.min(arr[b]*3,arr[c]*5));
        arr[i] = ugly;
        if(arr[i] == arr[a]*2) a++;
        if(arr[i] == arr[b]*3) b++;
        if(arr[i] == arr[c]*5) c++;
    }
    return arr[n-1];
};
