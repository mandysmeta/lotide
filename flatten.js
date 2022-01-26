const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false
  } 
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false
    }
  }
  return true
};
const assertArraysEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};
//take in array with elements-nested arrays, return flattened version
const flatten = function(elements) {
  let flatArray = [];
  for (let element of elements) {
    if (!Array.isArray(element)){
      flatArray.push(element)
    } else {
      for (let item of element) {
        flatArray.push(item) 
      }
    }
  }
  return flatArray 
};

console.log(flatten([1, 2, [3, 4], 5, [6]]))