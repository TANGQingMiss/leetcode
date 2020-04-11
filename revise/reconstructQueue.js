/**
 * @param {number[][]} people
 * @return {number[][]}
 */
//假设有打乱顺序的一群人站成一个队列。 每个人由一个整数对(h, k)表示，其中h是这个人的身高，k是排在这个人前面且身高大于或等于h的人数。 编写一个算法来重建这个队列。
var reconstructQueue = function(people) {
    people.sort(function(x,y){
        if(x[0] != y[0]) return y[0] - x[0];//h decreases
        else return x[1] - y[1];//k increases
    });
    let res = [];
    for(let i = 0; i < people.length; i++){
        insert(res,[people[i][1]],people[i]);
    }
    return res;

    function insert(res,idx,tmp){
        if(res.length == 0 || idx == res.length) res.push(tmp);
        else{
            res.push(tmp);
            for(let j = res.length - 2; j >= idx; j--){
                res[j+1] = res[j];
            }
            res[idx] = tmp;
        }
    }
};
