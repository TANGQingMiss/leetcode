//实现一个 MyCalendar 类来存放你的日程安排。如果要添加的时间内没有其他安排，则可以存储这个新的日程安排。

var MyCalendar = function () {
  this.data = []
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function (start, end) {
  let low = 0, high = this.data.length
  while (low < high) {
    let mid = low + ((high - low) >> 1)
    if (this.data[mid][0] >= end) {
      high = mid
    }
    else {
      low = mid + 1
    }
  }

  if (low - 1 < 0||start >= this.data[low - 1][1]) {
    this.data.splice(low, 0, [start, end])
    
    return true
  }

  else {
      return false
  }
}
/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */
