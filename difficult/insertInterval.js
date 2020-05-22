/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
//给出一个无重叠的 ，按照区间起始端点排序的区间列表。
//在列表中插入一个新的区间，你需要确保列表中的区间仍然有序且不重叠（如果有必要的话，可以合并区间
var insert = function(intervals, newInterval) {
    if(newInterval == null || newInterval.length == 0) return intervals;
    intervals.push(newInterval);
    intervals.sort(function(x,y){
        if(x[0] == y[0]){
            return x[1] - y[1];
        }else return x[0] - y[0];
    });
    let res = [];
    for(let i = 0; i < intervals.length; i++){
        let len = res.length;
        if(len == 0) res.push(intervals[i]);
        else{
            let num1 = res[len-1][0];
            let num2 = res[len-1][1];
            if(intervals[i][0] <= num2 && num2 < intervals[i][1]){
                let tmp = [num1,intervals[i][1]];
                res.pop();
                res.push(tmp);
            }else if(num2 < intervals[i][0]){
                res.push(intervals[i]);
            }
        }
    }
    return res;
};
