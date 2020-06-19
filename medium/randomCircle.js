/**
 * @param {number} radius
 * @param {number} x_center
 * @param {number} y_center
 */
//给定圆的半径和圆心的 x、y 坐标，写一个在圆中产生均匀随机点的函数 randPoint
function Solution(radius, x, y) {
  const square = radius * radius;
  /**
   * @return {number[]}
   */
  const randPoint = () => {
    const dx = radius - radius * 2 * Math.random(); 
    const dy = radius - radius * 2 * Math.random(); 
    if (dx * dx + dy * dy > square) return randPoint();
    
    return [x + dx, y + dy];
  };

  return { randPoint };
}
