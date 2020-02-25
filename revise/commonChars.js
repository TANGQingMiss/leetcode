/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function(A) {
    let bucket = new Array(26);
    let bucketOrigin = new Array(26);
    for(let i = 0; i < 26; i++){
        bucket[i] = 0;
        bucketOrigin[i] = 0;
    }
    let first = A[0];
    for(let i = 0; i < first.length; i++){
        bucket[first.charCodeAt(i) - 97]++;//charCodeAt('a') = 97
    }
    for(let i = 1; i < A.length; i++){
        let tmp = bucketOrigin.slice(0);
        for(let j = 0; j < A[i].length; j++){
            tmp[A[i].charCodeAt(j) - 97]++;
        }
        for(let k = 0; k < 26; k++){
            bucket[k] = Math.min(bucket[k],tmp[k]);
        }
    }
    let res = [];
    for(let i = 0; i < 26; i++){
        while(bucket[i] > 0){
            res.push(String.fromCharCode(i + 97));
            bucket[i]--;
        }
    }
    return res;
};
