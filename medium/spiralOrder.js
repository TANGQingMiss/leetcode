/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let res = [];
    if(matrix == null || matrix.length == 0) return res;
    let m = matrix.length;
    let n = matrix[0].length;
    let u = 0;
    let d = m - 1;
    let l = 0;
    let r = n - 1;
    while(true) {
            for(let i = l; i <= r; i++) res.push(matrix[u][i]);
            if(++u > d) break;
            
            for(let i = u; i <= d; i++) res.push(matrix[i][r]);
            if(--r < l) break;
            
            for(let i = r; i >= l; i--) res.push(matrix[d][i]);
            if(--d < u) break;
            
            for(let i = d; i >= u; i--) res.push(matrix[i][l]);
            if(++l > r) break;
        }
        
        return res;
};
