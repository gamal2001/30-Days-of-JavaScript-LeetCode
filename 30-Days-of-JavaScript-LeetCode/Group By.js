/**
 * @param {Function} fn
 * @return {Array}
 */
Array.prototype.groupBy = function (fn) {
  // create an empty object to store the grouped result
  let result = {};
  // loop through each item in the array
  for (let item of this) {
    // apply the callback function to get the key
    let key = fn(item);
    // check if the key already exists in the result object
    if (result.hasOwnProperty(key)) {
      // if yes, push the item to the corresponding value array
      result[key].push(item);
    } else {
      // if no, create a new key-value pair with the item as an array
      result[key] = [item];
    }
  }
  // return the result object
  return result;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */
