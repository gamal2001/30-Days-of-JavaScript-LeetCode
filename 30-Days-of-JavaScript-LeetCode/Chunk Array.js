/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function(arr, size) {
    // initialize an empty array to store the chunks
    var result = [];
    // loop through the input array
    for (var i = 0; i < arr.length; i += size) {
        // slice a subarray of length size from the current index
        var subarray = arr.slice(i, i + size);
        // push the subarray to the result array
        result.push(subarray);
    }
    // return the result array
    return result;
};
