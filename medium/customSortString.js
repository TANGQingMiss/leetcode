/**
 * @param {string} S
 * @param {string} T
 * @return {string}
 */
//字符串S和 T 只包含小写字符。在S中，所有字符只会出现一次。
//S 已经根据某种规则进行了排序。我们要根据S中的字符顺序对T进行排序。更具体地说，如果S中x在y之前出现，那么返回的字符串中x也应出现在y之前。
//如果S中有n个元素，那么只需要把T中包含S的这n个元素，逐个交换到T的前n个索引。cnt表示的是当前T中前cnt个元素都包含于S
var customSortString = function(S, T) {
    T = T.split("");
    let cnt = 0;
    for(let i = 0; i < S.length; i++){
        for(let j = cnt; j < T.length; j++){
            if(T[j] == S[i]){
                let tmp = T[j];
                T[j] = T[cnt];
                T[cnt] = tmp;
                cnt++;
            }
        }
    }
    return T.join("");
};
