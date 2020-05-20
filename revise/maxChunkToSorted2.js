/**
 * @param {number[]} arr
 * @return {number}
 */
//arr是一个可能包含重复元素的整数数组，我们将这个数组分割成几个“块”，并将这些块分别进行排序。之后再连接起来，使得连接的结果和按升序排序后的原数组相同
var maxChunksToSorted = function(arr) {
    let res = arr.slice(0);
    res.sort(function(x,y){return x - y;});
    let num = 0;
    let sum1 = 0, sum2 = 0;
    for(let i = 0; i < arr.length; i++){
        sum1 += res[i];
        sum2 += arr[i];
        if(sum1 == sum2) num++;
    }
    return num;
};
