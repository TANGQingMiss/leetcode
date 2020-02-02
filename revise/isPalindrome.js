/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if(s==null) return true;
    s = s.toLowerCase();//treat upper case and lower case in the same way
    var len = s.length;
    var str = [];
    var strOrigin = [];
    for(let i = 0; i < len; i++){
        if((s[i]>='0'&&s[i]<='9')||(s[i]>='a'&&s[i]<='z')){
            str.push(s[i]);
            strOrigin.push(s[i]);
        }
    }
    var strRev = str.reverse();
    if(strOrigin.toString()==strRev.toString()){
        return true;
    }else{
        return false;
    }
};
