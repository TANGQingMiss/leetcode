/**
 * @param {number[]} values
 * @param {number[]} labels
 * @param {number} num_wanted
 * @param {number} use_limit
 * @return {number}
 */
//leetcode 1090
var largestValsFromLabels = function(values, labels, num_wanted, use_limit) {
    let arr = [];
    let hash = {};
    let res = 0;
    for(let i = 0; i < values.length; i++){
        arr.push({v:values[i],l:labels[i]});
    }
    arr.sort((a,b)=>b.v - a.v);//sort decreases
    for(let i = 0; i < arr.length; i++){
        if(hash[arr[i].l] != undefined){
            hash[arr[i].l] += 1;
            if(hash[arr[i].l] > use_limit){
                arr.splice(i,1);
                i--;
            }
        }
        else{
            hash[arr[i].l] = 1;
        }
    }
    arr.splice(num_wanted);
    for(let i = 0; i < arr.length; i++){
        res += arr[i].v;
    }
    return res;
};
