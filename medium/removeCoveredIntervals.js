/**
 * @param {number[][]} intervals
 * @return {number}
 */
//给你一个区间列表，请你删除列表中被其他区间所覆盖的区间。
//只有当 c <= a 且 b <= d 时，我们才认为区间 [a,b) 被区间 [c,d) 覆盖。
var removeCoveredIntervals = function(intervals) {
    if(intervals.length <= 1) return intervals.length;
    //sort by start time increasing and end time increasing
    intervals.sort(function(x,y){
        if(x[0] == y[0]){
            return x[1] - y[1];
        }else return x[0] - y[0];
    });
    let cnt = intervals.length;
    for(let i = 0, j = 0; i < intervals.length; i = j){
        for(j = i + 1; j < intervals.length && intervals[j][1] <= intervals[i][1]; j++){
            cnt--;
        }
    }
    return cnt;
};
