/**
 * @param {number[]} ratings
 * @return {number}
 */
//老师想给孩子们分发糖果，有 N 个孩子站成了一条直线，老师会根据每个孩子的表现，预先给他们评分。
//你需要按照以下要求，帮助老师给这些孩子分发糖果：
//每个孩子至少分配到 1 个糖果。
//相邻的孩子中，评分高的孩子必须获得更多的糖果

//两次遍历
var candy = function(ratings) {
    if(ratings == null || ratings.length == 0) return 0;
    let nums = new Array(ratings.length).fill(0);
    nums[0] = 1;
    for(let i = 1; i < ratings.length; i++){
        if(ratings[i] > ratings[i-1]){
            nums[i] = nums[i-1]+1;
        }else{
            nums[i] = 1;
        }
    }

    for(let i = ratings.length - 2; i >= 0; i--){
        if(ratings[i] > ratings[i+1] && nums[i] <= nums[i+1]){
            nums[i] = nums[i+1]+1;
        }
    }
    let res = 0;
    for(let i = 0; i < nums.length; i++){
        res += nums[i];
    }
    return res;
};
