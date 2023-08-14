// Define the last method on the Array prototype
Array.prototype.last = function () {
  // Check if the array is empty
  if (this.length === 0) {
    // Return -1 as specified
    return -1;
  } else {
    // Return the last element of the array
    return this[this.length - 1];
  }
};
