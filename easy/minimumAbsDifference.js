/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    //order arr
    arr = arr.sort(function(x,y){return x - y;});
    //find smallest abs and update element pairs
    let val = arr[1] - arr[0];
    let res = [[arr[0],arr[1]]];
    for(let i = 1; i < arr.length - 1; i++){
        if(val == arr[i+1] - arr[i]){
            res.push([arr[i],arr[i+1]]);
        }else if(val > arr[i+1] - arr[i]){
            val = arr[i+1] - arr[i];
            res = [[arr[i],arr[i+1]]];
        }
    }
    return res;
};
