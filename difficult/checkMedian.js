/**
 * initialize your data structure here.
 */
var MedianFinder = function() {
    this.data = [];
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    if (!this.data.length) {
        this.data.push(num);
        return;
    }

    let left = 0,
        right = this.data.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (this.data[mid] === num) {
            this.data.splice(mid, 0, num);
            return;
        } else if (this.data[mid] < num) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    this.data.splice(right + 1, 0, num);
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    let len = this.data.length;
    let left = Math.floor((len - 1) / 2);
    let right = Math.floor(len / 2);
    return (this.data[left] + this.data[right]) / 2;
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
