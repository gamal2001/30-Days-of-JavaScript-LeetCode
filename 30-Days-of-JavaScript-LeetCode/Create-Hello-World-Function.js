//solution 1

/**
 * @return {Function}
 */
var createHelloWorld = function() {
    return function(...args) {
        return "Hello World"
    }
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */
//###############################################

//solution 2  () =>

/**
 * @return {Function}
 */
var createHelloWorld = () =>{
    return (...args) => {
        return "Hello World"
    }
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */
