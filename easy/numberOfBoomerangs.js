/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function(points) {
   let res = 0;
   for(let i = 0; i < points.length; i++){
       let map = new Map();
       for(let j = 0; j < points.length; j++){
           if(i == j) continue;
           let x = points[i][0] - points[j][0];
           let y = points[i][1] - points[j][1];
           let distance = x*x + y*y;
           map.set(distance,map.has(distance)?map.get(distance)+1:1);
       }
       for(let [key,value] of map){
           res += value*(value-1);
       }
   }
   return res;
};
