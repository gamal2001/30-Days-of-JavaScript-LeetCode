/**
 * @param {Object} obj
 * @return {Object}
 */
var compactObject = function (obj) {
  // If obj is an array, filter out the falsy elements
  if (Array.isArray(obj)) {
    return obj.filter(Boolean).map(compactObject);
  }
  // If obj is an object, create a new object with only truthy values
  if (typeof obj === "object" && obj !== null) {
    let result = {};
    for (let key in obj) {
      // Recursively compact the value of each key
      let value = compactObject(obj[key]);
      // If the value is truthy, add it to the result object
      if (value) {
        result[key] = value;
      }
    }
    return result;
  }
  // Otherwise, return obj as it is
  return obj;
};
