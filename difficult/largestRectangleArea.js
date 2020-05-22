/**
 * @param {number[]} heights
 * @return {number}
 */
//给定 n 个非负整数，用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1 。
//求在该柱状图中，能够勾勒出来的矩形的最大面积
var largestRectangleArea = function(heights) {
    let max = 0;
    for(let i = 0; i < heights.length; i++){
        let l = i;
        let r = i;
        while(l >= 0 && heights[l] >= heights[i]){
            l--;
        }
        while(r < heights.length && heights[r] >= heights[i]){
            r++;
        }
        max = Math.max(max,(r-l-1)*heights[i]);
    }
    return max;
};
