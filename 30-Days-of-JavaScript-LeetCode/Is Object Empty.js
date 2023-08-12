/**
 * @param {Object | Array} obj
 * @return {boolean}
 */
var isEmpty = function (obj) {
  // Check if obj is an object or an array
  if (typeof obj === "object" && obj !== null) {
    // Get the keys of the object or the length of the array
    var keys = Object.keys(obj);
    // Return true if there are no keys or false otherwise
    return keys.length === 0;
  } else {
    // Return false for invalid input
    return false;
  }
};
