// Explanation
/*
One possible way to write a
function that will never be called twice with the same inputs is to use
a technique called memoization.
Memoization is a method of caching the results of previous function calls,
so that if the same inputs are given again,
the function can return the cached value instead of recomputing it.
This can improve the performance and efficiency of the function,
especially if it is computationally expensive or involves recursion.
 */

/**
 * @param {Function} fn
 */
function memoize(fn) {
  const memo = {};

  return function (...args) {
    const key = JSON.stringify(args);
    if (key in memo) {
      return memo[key];
    }
    memo[key] = fn(...args);
    return memo[key];
  };
}

/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */
