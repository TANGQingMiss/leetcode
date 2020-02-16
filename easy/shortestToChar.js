/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToChar = function(S, C) {
    let res = [];
    let left,right,leftIdx,rightIdx;
    for(let i = 0; i < S.length; i++){
        if(S[i] == C) res.push(0);
        else{
            left = S.slice(0,i);
            right = S.slice(i);
            leftIdx = left.lastIndexOf(C);
            rightIdx = right.indexOf(C);
            if(leftIdx > -1 && rightIdx > -1){
                res.push(Math.min(Math.abs(i-leftIdx),Math.abs(rightIdx)));
            }else if(leftIdx == -1 && rightIdx > -1){
                res.push(Math.abs(rightIdx));
            }else if(leftIdx > -1 && rightIdx == -1){
                res.push(Math.abs(i-leftIdx));
            }
        }
    }
    return res;
};
