//const assertEqual = require('./assertEqual');

//goal: compare two arrays(arr1 & arr2)
const eqArrays = function (arr1, arr2) {
  //if arrays are not the same, return false
  if (arr1.length !== arr2.length) {
    return false;
  }
  //true
  for (let i = 0; i < arr2.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
};

module.exports = eqArrays;

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true) // => true
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false) // => false
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true) // => true
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false) // => false
