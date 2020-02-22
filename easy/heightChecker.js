/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    let tmp = [];
    for(let i = 0; i < heights.length; i++){
        tmp.push(heights[i]);
    }
    tmp.sort(function(x,y){return x - y;});
    let res = 0;
    for(let i = 0; i < heights.length; i++){
        if(heights[i] != tmp[i]) res++;
    }
    return res;
};
