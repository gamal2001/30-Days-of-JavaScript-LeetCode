/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit =  (fn, t)=> {
  return async  (...args) => {
    // create a variable to store the promise of fn
    const promise = fn(...args);
    // create a variable to store the timeout promise
    const timeout = new Promise((_, reject) => {
      // set a timeout to reject with "Time Limit Exceeded" after t milliseconds
      setTimeout(() => reject("Time Limit Exceeded"), t);
    });
    // use Promise.race to return the first promise that resolves or rejects
    return Promise.race([promise, timeout]);
  };
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */
