//function goal: compares actual value to expected outcome
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    return console.log(`Assertion Passed: ${actual} === ${expected}`)
  }

  console.log(`Assertion Failed: ${actual} !== ${expected}`);
};

//example test code:
//assertEqual("Lighthouse Labs", "Bootcamp"); - prints failed

module.exports = assertEqual;