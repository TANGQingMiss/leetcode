/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let nums = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101];
    let alphs = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r',
    's','t','u','v','w','x','y','z'];
    let res = [];
    let tmp = [];
    //store each total value of a word in tmp
    for(let i = 0; i < strs.length; i++){
        let value = 1;
        for(let j = 0; j < strs[i].length; j++){
            value *= nums[alphs.indexOf(strs[i].charAt(j))];
        }
        tmp.push(value);
    }

    let map = new Map();
    for(let k = 0; k < tmp.length; k++){
        map.set(tmp[k],map.has(tmp[k])?map.get(tmp[k]).concat(strs[k]):[strs[k]]);
    }
    for(let value of map.values()){
        res.push(value);
    }
    return res;
};
