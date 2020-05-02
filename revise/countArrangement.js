/**
 * @param {number} N
 * @return {number}
 */
//给定一个整数 N，请问可以构造多少个优美的排列
var countArrangement = function(N) {
    let visited = new Array(N+1).fill(0);
    let cnt = 0;
    countArrangement(1,N,visited);
    return cnt;

    function countArrangement(step, N, visited){
        if(step == N + 1){
            cnt++;
            return;
        }
        for(let i = 1; i <= N; i++){
            if(visited[i] == 0){
                visited[i] = 1;
                if(i % step == 0 || step % i == 0){
                    countArrangement(step+1,N,visited);
                }
                visited[i] = 0;
            }
        }
    }
};
