/**
 * @param {number[][]} points
 * @return {number}
 */
// 在二维空间中有许多球形的气球。对于每个气球，提供的输入是水平方向上，气球直径的开始和结束坐标。由于它是水平的，所以y坐标并不重要，因此只要知道开始和结束的x坐标就足够了。开始坐标总是小于结束坐标。平面内最多存在104个气球。

// 一支弓箭可以沿着x轴从不同点完全垂直地射出。在坐标x处射出一支箭，若有一个气球的直径的开始和结束坐标为 xstart，xend， 且满足  xstart ≤ x ≤ xend，则该气球会被引爆。可以射出的弓箭的数量没有限制。 弓箭一旦被射出之后，可以无限地前进。我们想找到使得所有气球全部被引爆，所需的弓箭的最小数量。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/minimum-number-of-arrows-to-burst-balloons
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
var findMinArrowShots = function(points) {
    if(points.length < 1) return 0;
    if(points.length == 1) return 1;
    points.sort(function(x,y){return x[1] - y[1];});//sort by Xend
    let cnt = 1;
    let curEnd = points[0][1];
    for(let i = 1; i < points.length; i++){
        if(curEnd < points[i][0]){
            cnt++;
            curEnd = points[i][1];
        }
    }
    return cnt;
};
