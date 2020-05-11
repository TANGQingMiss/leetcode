/**
 * @param {number} maxSize
 */
//请你设计一个支持下述操作的栈。实现自定义栈类 CustomStack
var CustomStack = function(maxSize) {
    this.s = [];
    this.cnt = 0;
    this.n = maxSize;
};

/** 
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function(x) {
    if(this.cnt < this.n){
        this.s.push(x);
        this.cnt++;
    }
};

/**
 * @return {number}
 */
CustomStack.prototype.pop = function() {
    if(this.cnt > 0){
        this.cnt--;
        return this.s.pop();
    }
    return -1;
};

/** 
 * @param {number} k 
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function(k, val) {
    if(this.s.length <= k){
        for(let i = 0; i < this.s.length; i++){
            this.s[i] += val;
        }
    }else{
        for(let i = 0; i < k; i++){
            this.s[i] += val;
        }
    }
};

/**
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */
