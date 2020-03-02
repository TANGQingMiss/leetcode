/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    candidates.sort(function(x,y){return x - y;});
    let res = [];
    function helper(target,index,list){
        for( ; index < candidates.length; index++){
            let _target = target - candidates[index];
            if(_target == 0){
                res.push([...list, candidates[index]]);
            }else if(_target > 0){
                helper(_target,index,[...list,candidates[index]]);
            }else{
                break;
            }
        }
    }
    helper(target,0,[]);
    return res;
};
