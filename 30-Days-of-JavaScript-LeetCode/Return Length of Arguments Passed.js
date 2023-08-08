// solution 1

/**
 * @return {number}
 */
var argumentsLength = function (...args) {
  return args.length;
};

/**
 * argumentsLength(1, 2, 3); // 3
 */

// solution 2 () =>

/**
 * @return {number}
 */
var argumentsLength = (...args) => args.length;

/**
 * argumentsLength(1, 2, 3); // 3
 */
