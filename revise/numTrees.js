/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    if(n == 0 || n == 1){
        return n;
    }//special case
    let total = new Array(n+1);//dynamic programming
    total.fill(0);
    total[0] = 1;
    //total[i] -> 1...i BST
    for(let i = 1; i <= n; i++){
        //when i is root
        for(let j = 0; j < i; j++){
            total[i] += total[j]*total[i-j-1];
        }
    }
    return total[n];
};
