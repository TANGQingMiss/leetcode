/**
 * @param {number[][]} points
 * @return {number}
 */
//给定在 xy 平面上的一组点，确定由这些点组成的矩形的最小面积，其中矩形的边平行于 x 轴和 y 轴。
//如果没有任何矩形，就返回 0
var minAreaRect = function(points) {
  let minArea = Infinity
  // string 格式的 points 数组，方便查找
  const StringPoints = []
  for (const point of points) {
    StringPoints.push(point.join(','))
  }
  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      const leftTop = points[i]
      const rightBottom = points[j]
      // 判断对角线是否与x轴y轴平行，不判断会超时
      if (leftTop[0] !== rightBottom[0] && leftTop[1] !== rightBottom[1]) {
        const rightTop = rightBottom[0] + ',' + leftTop[1]
        const leftBottom = leftTop[0] + ',' + rightBottom[1]
        // 判断另一条对角线是否在 points 中
        if (StringPoints.includes(rightTop) && StringPoints.includes(leftBottom)) {
          let area = Math.abs(leftTop[1] - rightBottom[1]) * Math.abs(leftTop[0] - rightBottom[0])
          minArea = area < minArea ? area : minArea
        }
      }
    }
  }
  return minArea === Infinity ? 0 : minArea
};
