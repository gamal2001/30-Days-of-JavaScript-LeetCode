class Calculator {
  // The constructor takes a number as the initial value of result
  constructor(value) {
    // Store the result as a property of the Calculator object
    this.result = value;
  }

  // The add method adds the given value to the result and returns the updated Calculator
  add(value) {
    this.result += value;
    return this;
  }

  // The subtract method subtracts the given value from the result and returns the updated Calculator
  subtract(value) {
    this.result -= value;
    return this;
  }

  // The multiply method multiplies the result by the given value and returns the updated Calculator
  multiply(value) {
    this.result *= value;
    return this;
  }

  // The divide method divides the result by the given value and returns the updated Calculator
  divide(value) {
    // If the passed value is 0, throw an error
    if (value === 0) {
      throw new Error("Division by zero is not allowed");
    }
    this.result /= value;
    return this;
  }

  // The power method raises the result to the power of the given value and returns the updated Calculator
  power(value) {
    this.result = Math.pow(this.result, value);
    return this;
  }

  // The getResult method returns the result
  getResult() {
    return this.result;
  }
}
