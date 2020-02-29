/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let res = [];
    function generate(res,ans,count1,count2,n){
        if(count1 > n || count2 > n) return;
        if(count1 == n && count2 == n) res.push(ans);
        if(count1 >= count2){
            generate(res,ans+"(",count1+1,count2,n);
            generate(res,ans+")",count1,count2+1,n);
        }
    }
    generate(res,"",0,0,n);
    return res;
};
