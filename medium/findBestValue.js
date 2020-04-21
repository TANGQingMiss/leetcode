/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
//给你一个整数数组 arr 和一个目标值 target ，请你返回一个整数 value ，使得将数组中所有大于 value 的值变成 value 后，数组的和最接近  target （最接近表示两者之差的绝对值最小）
var findBestValue = function(arr, target) {
    arr.sort(function(x,y){return x - y;});
    let n = arr.length;
    let sum = 0;
    if(n == target) return 1;
    if(n > target) return 0;
    for(let i = 0; i < n; i++){
        let estimate = sum + arr[i] * (n - i);
        if(estimate == target) return arr[i];
        else if(estimate > target){
            let idx = 1;
            while(sum + (arr[i] - idx) * (n - i) > target) idx++;
            if(Math.abs(sum + (arr[i] - idx + 1) * (n - i) - target) 
            < Math.abs(sum + (arr[i]-idx)*(n-i)- target)) return arr[i]-idx+1;
            return arr[i] - idx;
        }else sum += arr[i];
    }
    return arr[n-1];
};
