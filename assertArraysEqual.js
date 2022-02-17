const eqArrays = require('./eqArrays');

//function goal: take in two arrays and log appropiate message
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    return console.log(`Assertion Passed: ${actual} === ${expected}`);
  }
  console.log(`Assertion Failed: ${actual} !== ${expected}`);
};

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [1, 2, "3"]);

//no test code