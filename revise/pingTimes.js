var RecentCounter = function() {
    this.result = [];
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    this.result.push(t);
    this.result = this.result.filter(value => t - 3000 <= value);
    return this.result.length;
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
