/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    if(intervals.length <= 1) return 0; 
    //similar to schedule arrangement
    //sort lectures by end time
    function bubbleSort(arr,n){
        let sorted;
        for(let i = 0; i < n; i++){
            sorted = true;
            for(let j = 0; j < n - i - 1; j++){
                if(arr[j][1] > arr[j+1][1]){
                    let tmpS = arr[j][0];
                    let tmpE = arr[j][1];
                    arr[j][0] = arr[j+1][0];
                    arr[j][1] = arr[j+1][1];
                    arr[j+1][0] = tmpS;
                    arr[j+1][1] = tmpE;
                    sorted = false;
                }
            }
            if(sorted) break;
        }
    }
    bubbleSort(intervals,intervals.length);
    let cnt = 1;
    let end = intervals[0][1];
    for(let i = 0; i < intervals.length; i++){
        if(intervals[i][0] < end){
            continue;
        }
        end = intervals[i][1];
        cnt++;
    }
    return intervals.length - cnt;
};
