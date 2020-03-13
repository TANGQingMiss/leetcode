/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let res = [];
    find(res,[],n,k,1);
    return res;
};

    function find(res,tmp,n,k,i){
        if(k == 0){
            let pushInRes = [];
            for(let i = 0; i < tmp.length; i++){
                pushInRes[i] = tmp[i];
            }
            res.push(pushInRes);
        }
        else{
            for(let j = i; j <= n; j++){
                tmp.push(j);
                find(res,tmp,n,k-1,j+1);
                tmp.pop();
            }
        }
    }
