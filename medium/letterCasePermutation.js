/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function(S){
    S = S.split('');
    function dfs(res,S,i){
       if(i >= S.length){
           res.push(S.join(''));
           return;
       }
       if(S[i] >= 'A' && S[i] <= 'Z'){
           S[i] = String.fromCharCode(S[i].charCodeAt(0)+32);
           //S[i] += 32;
           dfs(res,S,i+1);
           S[i] = String.fromCharCode(S[i].charCodeAt(0)-32);
           //S[i] -= 32;
           dfs(res,S,i+1);
       }else if(S[i] >= 'a' && S[i] <= 'z'){
           //S[i] -= 32;
           S[i] = String.fromCharCode(S[i].charCodeAt(0)-32);
           dfs(res,S,i+1);
           //S[i] += 32;
           S[i] = String.fromCharCode(S[i].charCodeAt(0)+32);
           dfs(res,S,i+1);
       }else dfs(res,S,i+1);
   }

   let res = [];
   dfs(res,S,0);
   return res;
};
