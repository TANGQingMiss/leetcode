/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(N, trust) {
    if(N == 1) return 1;
    let arr = new Array(N);
    for(let i = 0; i < N; i++){
        arr[i] = [0,0];
    }

    for(let i = 0; i < trust.length; i++){
        arr[trust[i][0] - 1][0]++;//time you believe in others
        arr[trust[i][1] - 1][1]++;//times others believe in you
    }

    for(let i = 0; i < N; i++){
        if(arr[i][0] == 0 && arr[i][1] == N - 1){
            return i + 1;
        }
    }
    return -1;
};
