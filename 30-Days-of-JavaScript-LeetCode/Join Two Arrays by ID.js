/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {
  // create a map to store the merged objects by id
  var map = new Map();
  // iterate over the first array and add each object to the map
  for (var obj1 of arr1) {
    var id = obj1.id;
    map.set(id, obj1);
  }
  // iterate over the second array and merge each object with the existing one in the map
  for (var obj2 of arr2) {
    var id = obj2.id;
    // if the id already exists in the map, merge the properties
    if (map.has(id)) {
      var obj1 = map.get(id);
      // iterate over the keys of obj2 and override or add them to obj1
      for (var key in obj2) {
        obj1[key] = obj2[key];
      }
      // update the map with the merged object
      map.set(id, obj1);
    } else {
      // otherwise, just add the object to the map
      map.set(id, obj2);
    }
  }
  // create an array to store the result
  var result = [];
  // iterate over the values of the map and push them to the result array
  for (var value of map.values()) {
    result.push(value);
  }
  // sort the result array by id in ascending order
  result.sort((a, b) => a.id - b.id);
  // return the result array
  return result;
};
