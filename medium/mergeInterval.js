/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    let res = [];
    //bubble sort for the first number
    let sorted;
    for(let i = 0; i < intervals.length; i++){
        sorted = true;
        for(let j = 0; j < intervals.length - i - 1; j++){
            if(intervals[j][0] > intervals[j+1][0]){
                let tmp = intervals[j];
                intervals[j] = intervals[j+1];
                intervals[j+1] = tmp;
                sorted = false;
            }
        }
        if(sorted) break;
    }

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
