/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = (fn, args, t) => {
  // create a variable to store the timeout id
  let timeoutId = null;
  // create a variable to store the cancellation flag
  let cancelled = false;
  // create a function to cancel the execution of fn
  const cancelFn = () => {
    // set the cancellation flag to true
    cancelled = true;
    // clear the timeout if it exists
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  };
  // set a timeout to execute fn after t milliseconds
  timeoutId = setTimeout(() => {
    // check if the cancellation flag is false
    if (!cancelled) {
      // call fn with args as parameters
      fn(...args);
    }
  }, t);
  // return the cancel function
  return cancelFn;
};

/**
 *  const result = []
 *
 *  const fn = (x) => x * 5
 *  const args = [2], t = 20, cancelT = 50
 *
 *  const start = performance.now()
 *
 *  const log = (...argsArr) => {
 *      const diff = Math.floor(performance.now() - start);
 *      result.push({"time": diff, "returned": fn(...argsArr))
 *  }
 *
 *  const cancel = cancellable(log, args, t);
 *
 *  const maxT = Math.max(t, cancelT)
 *
 *  setTimeout(() => {
 *     cancel()
 *  }, cancelT)
 *
 *  setTimeout(() => {
 *     console.log(result) // [{"time":20,"returned":10}]
 *  }, maxT + 15)
 */
