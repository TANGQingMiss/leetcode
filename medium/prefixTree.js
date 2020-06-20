//实现一个 MapSum 类里的两个方法，insert 和 sum。
//对于方法 insert，你将得到一对（字符串，整数）的键值对。字符串表示键，整数表示值。如果键已经存在，那么原来的键值对将被替代成新的键值对。
//对于方法 sum，你将得到一个表示前缀的字符串，你需要返回所有以该前缀开头的键的值的总和

var MapSum = function() {
  this.root = {};
};

/**
 * @param {string} key
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function(key, val) {
  let obj = this.root;
  for (let char of key) {
    if (!obj[char]) {
      obj[char] = {};
    }
    obj = obj[char];
  }
  obj.val = val;
};

/**
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function(prefix) {
  let obj = this.root;
  for (let char of prefix) {
    if (obj[char]) {
      obj = obj[char];
    } else {
      return 0; //没有匹配的前缀,直接返回
    }
  }
  return objSum(obj);
};

//递归计算该节点以下的所有带有值的节点之和
function objSum(obj) {
  let res = 0;
  //中途碰上的带有值的节点
  if (obj.val !== undefined) {
    res += obj.val;
  }
  for (let key in obj) {
    res += objSum(obj[key]);
  }
  return res;
}
