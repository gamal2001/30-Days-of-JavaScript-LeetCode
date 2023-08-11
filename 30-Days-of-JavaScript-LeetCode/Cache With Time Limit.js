var TimeLimitedCache = function () {
  // A map to store the key-value pairs
  this.map = new Map();
  // A map to store the expiration time for each key
  this.expire = new Map();
};

/**
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
  // Check if the key already exists and is not expired
  var existed = this.map.has(key) && Date.now() < this.expire.get(key);
  // Set the value and the expiration time for the key
  this.map.set(key, value);
  this.expire.set(key, Date.now() + duration);
  // Return the boolean flag
  return existed;
};

/**
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
  // Check if the key exists and is not expired
  if (this.map.has(key) && Date.now() < this.expire.get(key)) {
    // Return the value
    return this.map.get(key);
  } else {
    // Return -1 to indicate invalid key
    return -1;
  }
};

/**
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
  // Initialize the count to zero
  var count = 0;
  // Iterate over the keys in the map
  for (var key of this.map.keys()) {
    // Check if the key is not expired
    if (Date.now() < this.expire.get(key)) {
      // Increment the count
      count++;
    }
  }
  // Return the count
  return count;
};

/**
 * Your TimeLimitedCache object will be instantiated and called as such:
 * var obj = new TimeLimitedCache()
 * obj.set(1, 42, 1000); // false
 * obj.get(1) // 42
 * obj.count() // 1
 */
