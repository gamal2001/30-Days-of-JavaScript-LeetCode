
/**
 * @param {Function} fn
 * @return {Function}
 */
var once = (fn) => {
  let isCalled = false;
  return (...args) => {
    if (isCalled) {
      return undefined;
    }
    
    isCalled = true;
    return fn(...args);
  };
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */