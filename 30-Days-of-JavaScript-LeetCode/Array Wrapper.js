/**
 * @param {number[]} nums
 */
var ArrayWrapper = function (nums) {
  // store the array as a property of the instance
  this.nums = nums;
};

ArrayWrapper.prototype.valueOf = function () {
  // return the sum of all the elements in the array
  return this.nums.reduce((a, b) => a + b, 0);
};

ArrayWrapper.prototype.toString = function () {
  // return a comma separated string surrounded by brackets
  return "[" + this.nums.join(",") + "]";
};

/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */
