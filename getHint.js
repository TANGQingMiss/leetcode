/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    let len = secret.length;
    let rr = [0,0,0,0,0,0,0,0,0,0];
    let rw = [0,0,0,0,0,0,0,0,0,0];
    let a,b;
    let A = 0;
    let B = 0;
    for(let i = 0; i < len; i++){
        a = secret.charAt(i) - '0';
        b = guess.charAt(i) - '0';
        if(a == b){
            A++;
        }
        rr[a]++;
        rw[b]++;
    }
    for(let j = 0; j < 10; j++){
        B += Math.min(rr[j],rw[j]);
    }

    B -= A;
    return A + 'A' + B + 'B';
};
