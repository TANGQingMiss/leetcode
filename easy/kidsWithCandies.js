/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
//对每一个孩子，检查是否存在一种方案，将额外的 extraCandies 个糖果分配给孩子们之后，此孩子有 最多 的糖果。注意，允许有多个孩子同时拥有 最多 的糖果数目
var kidsWithCandies = function(candies, extraCandies) {
    let res = new Array();
    let max = Math.max.apply(null,candies);
    for(let i = 0; i < candies.length; i++){
        if(candies[i] + extraCandies >= max) res.push(true);
        else res.push(false);
    }
    return res;
};
