/**
 * @param {string} tiles
 * @return {number}
 */
// 你有一套活字字模 tiles，其中每个字模上都刻有一个字母 tiles[i]。返回你可以印出的非空字母序列的数目。
// 注意：本题中，每个活字字模只能使用一次。
var numTilePossibilities = function(tiles) {
    let counter = new Array(26).fill(0);
    for(let i = 0; i < tiles.length; i++){
        counter[tiles.charCodeAt(i) - 65]++;
    }
    return dfs(counter);

    function dfs(counter){
        let sum = 0;
        for(let i = 0; i < 26; i++){
            if(counter[i] > 0){
                sum++;
                counter[i]--;
                sum += dfs(counter);
                counter[i]++;
            }
        }
        return sum;
    }
};
