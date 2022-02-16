const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

//goal: compare two arrays(arr1 & arr2)
const eqArrays = function(arr1, arr2) {
  //if not the same - false
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    //if the same - true
    if (arr1.length === arr2.length){
      return true;
    }
  }
}

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true) // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true) // => false
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true) // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true) // => false
