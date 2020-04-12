/**
 * @param {number[][]} intervals
 * @return {number[]}
 */
//给定一组区间，对于每一个区间 i，检查是否存在一个区间 j，它的起始点大于或等于区间 i 的终点，这可以称为 j 在 i 的“右侧”。
//对于任何区间，你需要存储的满足条件的区间 j 的最小索引，这意味着区间 j 有最小的起始点可以使其成为“右侧”区间。如果区间 j 不存在，则将区间 i 存储为 -1。最后，你需要输出一个值为存储的区间值的数组。
var findRightInterval = function(intervals) {
    if(intervals.length == 0) return [];
    if(intervals.length == 1) return [-1];
    let len = intervals.length;
    let res = new Array(len).fill(-1);
    for(let i = 0; i < len; i++){
        let curEnd = intervals[i][1];
        let curStart = Number.MAX_VALUE;;
        for(let j = 0; j < len; j++){
            if(j == i) continue;
            if(intervals[j][0] >= curEnd){
                res[i] = intervals[j][0] < curStart ? j : res[i];
                curStart = Math.min(intervals[j][0],curStart);
            }
        }
    }
    return res;
};
