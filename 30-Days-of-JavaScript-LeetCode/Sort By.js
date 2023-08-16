/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function(arr, fn) {
    // Copy the array to avoid mutating the original
    const newArr = arr.slice();
    // Use a custom compare function that applies fn to the elements
    const compare = function(a, b) {
        return fn(a) - fn(b);
    };
    // Sort the array using the compare function
    newArr.sort(compare);
    // Return the sorted array
    return newArr;
};
