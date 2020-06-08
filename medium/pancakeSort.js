/**
 * @param {number[]} A
 * @return {number[]}
 */
//给定数组 A，我们可以对其进行煎饼翻转：我们选择一些正整数 k <= A.length，然后反转 A 的前 k 个元素的顺序。我们要执行零次或多次煎饼翻转（按顺序一次接一次地进行）以完成对数组 A 的排序
//获取一个数组最大值的下标
function getMaxIndex(nums){
    let max = 0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]>nums[max]){
            max = i;
        }
    }
    return max;
}

//翻转一个数组的0-index项
function reverseNums(nums,index){
    if(index<1){
        return;
    }
    let i = 0;
    let j = index;
    while(i<j){
        [nums[i],nums[j]] = [nums[j],nums[i]];
        i++;
        j--;
    }
}
var pancakeSort = function(A) {
   let ans = [];
   let max;
   while(A.length>1){
        max = getMaxIndex(A);
        //如果第一个数是最大的，那么只翻转第一个，没什么意义，所以判断max>0
        max>0&&(ans.push(max+1))
        reverseNums(A,max)
        reverseNums(A,A.length-1)
        ans.push(A.length);
        A.pop();
   }
   return ans;
};
