/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function (fn, t) {
  // A variable to store the timer id
  var timer = null;
  // A function that wraps the original function with debounce logic
  return function (...args) {
    // Clear the previous timer if it exists
    if (timer) {
      clearTimeout(timer);
    }
    // Set a new timer to execute the original function after t milliseconds
    timer = setTimeout(() => {
      // Call the original function with the passed arguments
      fn(...args);
      // Reset the timer to null
      timer = null;
    }, t);
  };
};

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */
