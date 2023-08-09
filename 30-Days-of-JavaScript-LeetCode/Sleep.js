//to solve this problem is to use the setTimeout function,
//which takes a callback function and a delay in milliseconds
//as arguments and executes the callback function after the delay.
//We can wrap the setTimeout function in a promise constructor,
//which takes an executor function that receives two arguments: resolve and reject.
//The resolve function is used to resolve the promise with a value,
//and the reject function is used to reject the promise with a reason.



/**
 * @param {number} millis
 */
async function sleep(millis) {
  // Return a new promise that resolves after the given delay
  return new Promise((resolve, reject) => {
    // Use setTimeout to execute the resolve function after the delay
    setTimeout(resolve, millis);
  });
}
