/**
 * @param {string[]} A
 * @param {string[]} B
 * @return {string[]}
 */
//现在，如果 b 中的每个字母都出现在 a 中，包括重复出现的字母，那么称单词 b 是单词 a 的子集。 例如，“wrr” 是 “warrior” 的子集，但不是 “world” 的子集
var wordSubsets = function(A, B) {
    let check = new Array(26).fill(0),
        res = [];
    for(let i = 0; i < B.length; i++){
        let temp = new Array(26).fill(0);
        for(let j = 0; j < B[i].length; j++){
            temp[B[i][j].charCodeAt() - 97]++;
        }
        for(let j = 0; j < 26; j++){
            check[j] = Math.max(check[j], temp[j]);
        }
    }
    for(let i = 0; i < A.length; i++){
        let temp = new Array(26).fill(0),
            isRight = true;
        for(let j = 0; j < A[i].length; j++){
            temp[A[i][j].charCodeAt() - 97]++;
        }
        for(let j = 0; j < 26; j++){
            if(temp[j] < check[j]){
                isRight = false;
                break ;
            }
        }
        isRight && res.push(A[i]);
    }
    return res;
};
