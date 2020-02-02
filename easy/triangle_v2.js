/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    var res = [];
    for(let i = 1; i <= rowIndex+1;i++){
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
    return res[rowIndex];
};
