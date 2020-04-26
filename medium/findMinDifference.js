/**
 * @param {string[]} timePoints
 * @return {number}
 */
//给定一个 24 小时制（小时:分钟）的时间列表，找出列表中任意两个时间的最小时间差并以分钟数表示
var findMinDifference = function(timePoints) {
    if(timePoints.length > 1440) return 0;
    let min = Number.MAX_VALUE;
    for(let i = 0; i < timePoints.length; i++){
        let item = timePoints[i];
        item = item.split(":");
        timePoints[i] = parseInt(item[0])*60+parseInt(item[1]);
    }
    timePoints.sort(function(x,y){return x - y;});
    for(let i = 0; i < timePoints.length; i++){
        for(let j = i + 1; j < timePoints.length; j++){
            let tmp = Math.abs(timePoints[i] - timePoints[j]);
            if(tmp > 720) tmp = 1440 - tmp;
            min = Math.min(min,tmp);
        }
    }
    return min;
};
