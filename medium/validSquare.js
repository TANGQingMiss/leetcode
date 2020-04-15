/**
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p3
 * @param {number[]} p4
 * @return {boolean}
 */
//给定二维空间中四点的坐标，返回四点是否可以构造一个正方形。
//一个点的坐标（x，y）由一个有两个整数的整数数组表示
var validSquare = function(p1, p2, p3, p4) {
    function getDistance(pa,pb){
        return (pa[0]-pb[0])*(pa[0]-pb[0]) + (pa[1]-pb[1])*(pa[1]-pb[1]);
    }
    let dist = new Array(6);
    dist[0] = getDistance(p1,p2);
    dist[1] = getDistance(p1,p3);
    dist[2] = getDistance(p1,p4);
    dist[3] = getDistance(p2,p3);
    dist[4] = getDistance(p2,p4);
    dist[5] = getDistance(p3,p4);
    dist.sort(function(x,y){return x - y;});
    if(dist[0] == dist[1] && dist[0] == dist[2] && dist[0] == dist[3] 
        && dist[4] == dist[5]  && dist[0] < dist[4]) return true;
    else return false;
}; 
