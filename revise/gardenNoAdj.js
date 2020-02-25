/**
 * @param {number} N
 * @param {number[][]} paths
 * @return {number[]}
 */
var gardenNoAdj = function(N, paths) {
    //stock near index
    let arr = new Array(N);
    for(let i = 0; i < arr.length; i++){
        arr[i] = [];
    }

    for(let i = 0; i < paths.length; i++){
        if(paths[i][0] > paths[i][1]){
            arr[paths[i][0]-1].push(paths[i][1]-1);
        }else{
            arr[paths[i][1]-1].push(paths[i][0]-1);
        }
    }

    let res = new Array(N);
    res[0] = 1;//initialize the first garden
    for(let i = 1; i < N; i++){
        res[i] = 1;
        let idx = 0;
        while(idx < arr[i].length){
            if(res[arr[i][idx]] == res[i]){
                res[i]++;
                idx = 0;
                if(res[i] > 4){
                    res[i] = 1;
                }
            }else{
                idx++;
            }
        }
    }
    return res;
};
