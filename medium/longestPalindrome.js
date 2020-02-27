/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let len = s.length;
    if(len < 2) return s;
    let res = "";
    let max = 0
    for(let i = 0, j = i; i < s.length; i++){
        while(j < s.length){
            if(isPalindrome(s,i,j) && j - i + 1 > max){
                max = j - i + 1;
                res = s.substring(i,j+1);
            }
            j++;
        }
        if(i + max - 1 >= s.length){
            return res;
        }else{
            j = i + max;
        }
    }
    return res;


    function isPalindrome(s,i,j){
        while(i < j){
            if(s.charAt(i++) != s.charAt(j--)) return false;
        }
        return true;
    }
};
