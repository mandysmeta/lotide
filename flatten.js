//const eqArrays = require('./eqArrays');
//const assertArraysEqual = require('./assertArraysEqual');

//take in array with elements-nested arrays, return flattened version
const flatten = function(elements) {
  let flatArray = [];
  for (let element of elements) {
    if (!Array.isArray(element)) {
      flatArray.push(element);
    } else {
      for (let item of element) {
        flatArray.push(item);
      }
    }
  }
  return flatArray;
};

console.log(flatten([1, 2, [3, 4], 5, [6]]));