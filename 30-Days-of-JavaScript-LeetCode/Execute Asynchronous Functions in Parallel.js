/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = async function (functions) {
  // return a new promise object
  return new Promise((resolve, reject) => {
    // declare an empty array to store the results
    const results = [];
    // declare a counter to track the number of completed functions
    let completed = 0;

    // check if the parameter array is empty
    if (!functions.length) {
      // resolve the promise with the empty array
      resolve(results);
    }

    // loop through the parameter array
    functions.forEach((asyncFunc, index) => {
      // call each function and expect it to return a promise
      asyncFunc()
        // attach a then handler to the promise
        .then((result) => {
          // store the result in the corresponding index of the results array
          results[index] = result;
          // increment the counter by one
          completed++;
          // check if all functions have completed
          if (completed === functions.length) {
            // resolve the promise with the results array
            resolve(results);
          }
        })
        // attach a catch handler to the promise
        .catch(reject); // reject the promise with the error
    });
  });
};
