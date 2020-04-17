/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
//我们有一个由平面上的点组成的列表 points。需要从中找出 K 个距离原点 (0, 0) 最近的点。
var kClosest = function(points, K) {
    let distance = new Map();
    function getDistance(point){
        return point[0]*point[0] + point[1]*point[1];
    }
    for(let i = 0; i < points.length; i++){
        distance.set(points[i],getDistance(points[i]));
    }
    let arr = Array.from(distance);
    arr.sort(function(x,y){return x[1] - y[1];});
    let res = [];
    for(let i = 0; i < K; i++){
        res.push(arr[i][0]);
    }
    return res;
};
