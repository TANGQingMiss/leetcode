/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    var res = [];//create an empty array
    for(let i = 1; i<=numRows;i++){
        var row = [];//every row of triangle
        for(let j = 0; j<i;j++){
            if(j==0 || j==i-1){
                row.push(1);
            }else{
                row.push(res[i-2][j-1]+res[i-2][j]);
            }
        }
        res.push(row);
    }
    return res;
};
