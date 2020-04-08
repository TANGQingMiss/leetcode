/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    candidates.sort(function(x,y){return x - y;});
    let tmp = [];
    let res = [];
    backtrack(candidates,0,target,tmp,res);
    return res;

    function backtrack(candidates,start, target, tmp ,res){
        if(target == 0){
            let tmp2 = tmp.slice(0);
            res.push(tmp2);
            return;
        }
        if(target < 0) return;
        for(let i = start; i < candidates.length; i++){
            if(i > start && candidates[i] == candidates[i-1]) continue;
            tmp.push(candidates[i]);
            backtrack(candidates,i+1,target-candidates[i],tmp,res);
            tmp.pop();
        }
    }
};
