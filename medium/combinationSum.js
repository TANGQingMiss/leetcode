/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    let res = [];
    let tmp = [];
    dfs(n,res,k,tmp,0);
    return res;

    function dfs(n,res,k,tmp,i){
        if(n < 0) return;
        if(k == 0){
            if(n == 0){
                let help = [];
                for(let p = 0; p < tmp.length; p++){
                    help[p] = tmp[p];
                }
                res.push(help);
            }
            return;
        }
        for(let j = i + 1; j <= 9; j++){
            tmp.push(j);
            dfs(n-j,res,k-1,tmp,j);
            tmp.pop();
        }
        return;
    }
};
