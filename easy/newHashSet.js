/**
 * Initialize your data structure here.
 */
var MyHashSet = function() {
    this.res = [];
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
    if(this.res.indexOf(key) == -1){
        this.res.push(key);
    }
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
    if(this.res.indexOf(key) != -1){
        let index = this.res.indexOf(key);
        for(let i = index; i < this.res.length - 1; i++){
            this.res[i] = this.res[i+1];
        }
        this.res[this.res.length - 1] = key;
        this.res.pop();
    }
};

/**
 * Returns true if this set contains the specified element 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
    if(this.res.indexOf(key) != -1) return true;
    return false;
};

/** 
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
