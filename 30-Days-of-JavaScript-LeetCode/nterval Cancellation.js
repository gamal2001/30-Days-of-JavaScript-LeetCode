/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function(fn, args, t) {
    // create a variable to store the interval id
  let intervalId = null;
  // create a variable to store the cancellation flag
  let cancelled = false;
  // create a function to cancel the execution of fn
  const cancelFn = function() {
    // set the cancellation flag to true
    cancelled = true;
    // clear the interval if it exists
    if (intervalId) {
      clearInterval(intervalId);
    }
  };
  // call fn with args immediately
  fn(...args);
  // set an interval to execute fn every t milliseconds
  intervalId = setInterval(() => {
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
 *  const fn = (x) => x * 2
 *  const args = [4], t = 20, cancelT = 110
 *
 *  const start = performance.now()
 *
 *  const log = (...argsArr) => {
 *      const diff = Math.floor(performance.now() - start)
 *      result.push({"time": diff, "returned": fn(...argsArr)})
 *  }
 *       
 *  const cancel = cancellable(log, args, t);
 *
 *  setTimeout(() => {
 *     cancel()
 *  }, cancelT)
 *   
 *  setTimeout(() => {
 *    console.log(result)  // [
 *                         //      {"time":0,"returned":8},
 *                         //      {"time":20,"returned":8},
 *                         //      {"time":40,"returned":8},           
 *                         //      {"time":60,"returned":8},
 *                         //      {"time":80,"returned":8},
 *                         //      {"time":100,"returned":8}
 *                         //  ]
 *  }, cancelT + t + 15)    
 */