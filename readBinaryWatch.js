/**
 * @param {number} num
 * @return {string[]}
 */
var readBinaryWatch = function(num) {
    if(num == 0) return ['0:00'];
    let res = [];
    for(let hour = 0; hour < 12; hour++){
        for(let min = 0; min < 60; min++){
            if(getOne(hour)+getOne(min) == num){
                if(min < 10){
                    var tmp = '' + hour + ':0' + min;
                }
                else{
                    var tmp = '' + hour + ':' + min;
                }
                res.push(tmp);
            }
        }
    }
    return res;

    function getOne(n){
        let c = 0;
        while(n){
            if(n&1){
                c++;
            }
            n >>= 1;
        }
        return c;
    }

};
