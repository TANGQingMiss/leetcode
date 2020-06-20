/**
 * @param {number[]} row
 * @return {number}
 */
//N 对情侣坐在连续排列的 2N 个座位上，想要牵到对方的手。 计算最少交换座位的次数，以便每对情侣可以并肩坐在一起。 一次交换可选择任意两人，让他们站起来交换座位
var minSwapsCouples = function(row) {
    let res = 0;
    for(let i = 0; i < row.length; i += 2){
        let t = row[i] ^ 1;
        if(row[i+1] == t) continue;

        res++;
        for(let j = i + 1; j < row.length; j++){
            if(row[j] == t){
                row[j] = row[i+1];
                row[i+1] = t;
                break;
            }
        }
    }
    return res;
};
