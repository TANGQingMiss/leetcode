/**
 * @param {number[]} weights
 * @param {number} D
 * @return {number}
 */
// 传送带上的包裹必须在 D 天内从一个港口运送到另一个港口。
// 传送带上的第 i 个包裹的重量为 weights[i]。每一天，我们都会按给出重量的顺序往传送带上装载包裹。我们装载的重量不会超过船的最大运载重量。
// 返回能在 D 天内将传送带上的所有包裹送达的船的最低运载能力
var shipWithinDays = function(weights, D) {
	let right = 0,maxWidget = 0,len = weights.length
	for(let i = 0;i<len;i++){
		maxWidget = Math.max(maxWidget,weights[i])
		right += weights[i]
	}
	//每日最低运载量取平均运载量和单个物品最大运载量的最大值
	let left = Math.max(Math.ceil(right/D),maxWidget)
	
	while(left < right){
		let mid = (left + right) >> 1 //即(left + right)/2¹
		verifyMaxWeight(mid,D)?(left = mid + 1):(right = mid)
	}
	return left
	
	function verifyMaxWeight(mid,day){
		let sum = 0
		for(let i = 0;i<len;){
			sum += weights[i]
			if(sum > mid){
				day--;
				sum = 0
				continue;
			}
			i++
		}
		return day < 1
	}
}
