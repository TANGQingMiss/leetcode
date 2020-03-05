/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    let res = [];
    if(asteroids == null || asteroids.length == 0) return res;
    res.push(asteroids[0]);//push first
    for(let i = 1; i < asteroids.length; i++){
        //case 1:opposite signs, push
        if(asteroids[i] * res[res.length-1] > 0){
            res.push(asteroids[i]);
        }else{
            //case 2: the same sign, check with res[res.length-1]
            //case 2-1: if - + push
            if(asteroids[i] > 0 && res[res.length-1] < 0){
                res.push(asteroids[i]);
            }else{//case 2-2: if + -
            //case 2-2-1: abs(+) > abs(-)
            //case 2-2-2: abs(+) == abs(-) pop
            //case 2-2-3: abs(+) < abs(-) check until 2-2-1 or 2-2-2
                while(res.length > 0 && Math.abs(asteroids[i]) > Math.abs(res[res.length-1])
                    && res[res.length-1] > 0){
                    res.pop();
                }
                if(res.length == 0) res.push(asteroids[i]);
                else if(res[res.length-1] + asteroids[i] == 0){
                    res.pop();
                }else if(res[res.length-1] < 0) res.push(asteroids[i]);
            }
        }
    }
    return res;
};
