/**
 * @param {number[][]} events
 * @return {number}
 */
var maxEvents = function(events) {
    if(events.length == 1) return 1;
    events.sort(function(x,y){
        if(x[1] != y[1]){
            return x[1] - y[1];
        }else return x[0] - y[0];
    });//sort by endtime -> if the same,by start time
    let cnt = 0;
    let visited = new Array(100010).fill(false);
    for(let i = 0; i < events.length; i++){
        for(let j = events[i][0]; j <= events[i][1]; j++){
            if(visited[j] == false){
                visited[j] = true;
                cnt++;
                break;
            }
        }
    }
    return cnt;
};
