/**
 * @param {number} A
 * @param {number} B
 * @return {string}
 */
//arrange a and b to avoid aaa or bbb
var strWithout3a3b = function(A, B) {
    let res = "";
    while(A > 0 || B > 0){
        let len = res.length;
        if(A > B){
            if(len < 2){
                res += 'a';
                A--;
            }
            else if(res.charAt(len-1) == 'a' && res.charAt(len-2) == 'a'){
                res += 'b';
                B--;
            }else{
                res += 'a';
                A--;
            }
        }
        else{
            if(len < 2){
                res += 'b';
                B--;
            }
            else if(res.charAt(len-1) == 'b' && res.charAt(len-2) == 'b'){
                res += 'a';
                A--;
            }else{
                res += 'b';
                B--;
            }
        }
    }
    return res;
};
