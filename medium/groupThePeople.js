/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
// 有 n 位用户参加活动，他们的 ID 从 0 到 n - 1，每位用户都 恰好 属于某一用户组。给你一个长度为 n 的数组 groupSizes，其中包含每位用户所处的用户组的大小，请你返回用户分组情况（存在的用户组以及每个组中用户的 ID）。

// 你可以任何顺序返回解决方案，ID 的顺序也不受限制。此外，题目给出的数据保证至少存在一种解决方案。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/group-the-people-given-the-group-size-they-belong-to

var groupThePeople = function(groupSizes) {
    if(groupSizes.length == 1) return [[0]];
    let res = [];
    let map = new Map();
    for(let i = 0; i < groupSizes.length; i++){
        let size = groupSizes[i];
        if(map.has(size)){
            map.set(size,map.get(size).concat([i]));
        }else{
            map.set(size,[i]);
        }
        if(map.get(size).length == size){
            res.push(map.get(size));
            map.set(size,[]);
        }
    }
    return res;
};
