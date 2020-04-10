/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 */
//如果字符串中不含有任何 'aaa'，'bbb' 或 'ccc' 这样的字符串作为子串，那么该字符串就是一个「快乐字符串」。
var longestDiverseString = function(a, b, c) {
    let map = [[a,'a'],[b,'b'],[c,'c']];
    let res = "";
    let len = -1;
    while(len != res.length){
        map.sort(function(x,y){return y[0] - x[0];});
        len = res.length;
        if(len >= 2 && res[len-1] == res[len-2] && res[len-1] == map[0][1]){
            if(map[1][0]){
                res += map[1][1];
                map[1][0] -= 1;
            }
        }else{
            if(map[0][0]){
                res += map[0][1];
                map[0][0] -= 1;
            }
        }
    }
    return res;
};
