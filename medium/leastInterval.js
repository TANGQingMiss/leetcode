/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
//然而，两个相同种类的任务之间必须有长度为 n 的冷却时间，因此至少有连续 n 个单位时间内 CPU 在执行不同的任务，或者在待命状态。
var leastInterval = function(tasks, n) {
    let cnt = new Array(26).fill(0);
    for(let i = 0; i < tasks.length; i++){
        cnt[tasks[i].charCodeAt(0) - 65]++;
    }
    cnt.sort(function(x,y){return x - y;});
    let max = 0;
    for(let i = 25; i >= 0; i--){
        if(cnt[i] != cnt[25]) break;
        max++;
    }
    return Math.max((cnt[25]-1)*(n+1) + max, tasks.length);
};
