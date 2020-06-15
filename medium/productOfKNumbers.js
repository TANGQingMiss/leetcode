var ProductOfNumbers = function() {
    // 采用前缀积，注意对0的处理
    this.preProduct=[];
    this.lastZero=-1;
  };
  
  /** 
   * @param {number} num
   * @return {void}
   */
  ProductOfNumbers.prototype.add = function(num) {
    const len=this.preProduct.length;

    if(num===0){
      this.lastZero=len;
      for(let i=len;i>=0;i--){
          this.preProduct[i]=0;
      }
    }else {
        if(this.lastZero===len-1) this.preProduct[len]=num;
        else this.preProduct[len]=this.preProduct[len-1]*num
    }
  };
  
  /** 
   * @param {number} k
   * @return {number}
   */
  ProductOfNumbers.prototype.getProduct = function(k) {
       const len=this.preProduct.length;

       if(this.lastZero+k===len-1) return this.preProduct[len-1]
       else if(this.lastZero+k<len-1) return this.preProduct[len-1]/this.preProduct[len-1-k]
       else return 0;
  };
  
  /**
   * Your ProductOfNumbers object will be instantiated and called as such:
   * var obj = new ProductOfNumbers()
   * obj.add(num)
   * var param_2 = obj.getProduct(k)
   */
