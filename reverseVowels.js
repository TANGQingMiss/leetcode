/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let flag = 'aeiouAEIOU';
    s = s.split('');
    //from two ends to th center
    let i = 0;
    let j = s.length - 1;
    while(i < j){
        while(flag.indexOf(s[i])==-1&&i<j){
            i++;
        }
        while(flag.indexOf(s[j])==-1&&i<j){
            j--;
        }
        if(i>=j) break;
        let tmp = s[i];
        s[i] = s[j];
        s[j] = tmp;
        i++;
        j--;
    }
    return s.join('');

};
