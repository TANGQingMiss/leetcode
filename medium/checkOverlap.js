/**
 * @param {number} radius
 * @param {number} x_center
 * @param {number} y_center
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @return {boolean}
 */
//check whether circle and rectangle have overlap part
var checkOverlap = function(radius, x_center, y_center, x1, y1, x2, y2) {
    if(x_center+radius < x1 || x_center-radius>x2 || y_center+radius < y1 || y_center-radius > y2){
        return false;
    }
    let s = Math.sqrt(Math.pow(x_center-(x2+x1)/2,2) + Math.pow(y_center-(y2+y1)/2,2));
    let l = Math.sqrt(Math.pow(x2-x1,2)+Math.pow(y2-y1,2))/2 + radius;
    return s <= l;
};
