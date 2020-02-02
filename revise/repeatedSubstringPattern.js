/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    //method1: regular expression
    //return /^(\w+)\1+$/.test(s);
    //reg is included in / /
    //^ (\w+) - A-Za-z0-9_
    // \1+ referes to (\w+)

    //method 2: string match
    if(s.length <= 1) return false;
    let len = s.length;
    let i = 1;
    while(i <= len / 2){
        if(len % i == 0 && s.slice(0,i).repeat(len/i) == s) return true;
        i++;
    }
    return false;
    

};
