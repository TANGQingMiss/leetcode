/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    if(s == null || s.length == 0) return true;
    let i = 0;
    let j = s.length - 1;
    while(i < j){
        if(s.charAt(i) != s.charAt(j)){
            return isValid(s,i+1,j) || isValid(s,i,j - 1);
        }
        i++;
        j--;
    }
    return true;

    function isValid(s,i,j){
        while(i < j){
            if(s.charAt(i) != s.charAt(j)){
                return false;
            }
            i++;
            j--;
        }
        return true;
    }
};
