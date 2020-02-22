/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function(grid, k) {
    let arr = [];

    for(let i = 0; i < grid.length; i++){
        arr.push(...grid[i]);
    }//2D to 1D array

    let tmp = arr.splice(0,arr.length - k % arr.length);
    arr.push(...tmp);

    let res = [];
    for(let i = 0; i < arr.length; i++){
        if(i % grid[0].length == 0) res.push([]);
        res[res.length-1].push(arr[i]);
    }
    return res;
}; 
