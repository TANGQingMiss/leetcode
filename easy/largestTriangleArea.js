/**
 * @param {number[][]} points
 * @return {number}
 */
var largestTriangleArea = function(points) {
    let n = points.length;
    let s = 0;
    for(let i = 0; i < n - 2; i++){
        for(let j = i + 1; j < n - 1; j++){
            let x1 = points[j][0] - points[i][0];
            let y1 = points[j][1] - points[i][1];
            for(let k = j + 1; k < n; k++){
                let x2 = points[k][0] - points[i][0];
                let y2 = points[k][1] - points[i][1];
                s = Math.max(s,Math.abs(x1*y2 - x2*y1));
            }
        }
    }
    return s/2;
};
