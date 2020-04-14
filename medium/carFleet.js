/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
    if(speed.length == 0) return 0;
    let time = new Array(speed.length);
    for(let i = 0; i < speed.length; i++){
        time[i] = [position[i],(target - position[i]) / speed[i]];
        //position near while time longer - must meet other team
    }
    time.sort(function(x,y){return y[0] - x[0];});//position decreases -> distance longer
    let num = 1;
    let sign = time[0][1];
    for(let i = 0; i < time.length; i++){
        if(time[i][1] > sign){
            num++;
            sign = time[i][1];
        }
    }
    return num;
};
