var cancellable = function (fn, args, t) {
  // create a variable to store the interval id
  var intervalId = null;
  // create a variable to store the cancellation flag
  var cancelled = false;
  // create a function to cancel the execution of fn
  var cancelFn = function () {
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
  intervalId = setInterval(function () {
    // check if the cancellation flag is false
    if (!cancelled) {
      // call fn with args as parameters
      fn(...args);
    }
  }, t);
  // return the cancel function
  return cancelFn;
};
