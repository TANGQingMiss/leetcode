/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function(area) {
    let res = [];
    let width = Math.floor(Math.sqrt(area));
    while(area % width != 0){
        width--;
    }
    res.push(area/width,width);
    return res;
};
