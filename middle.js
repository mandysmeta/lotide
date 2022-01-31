const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } 
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

const middle = function(array) {
  let middleArray = [];
  if (array.length < 3) {
  return middleArray
  } else if (array.length % 2 === 0) {
    middleArray.push(array[(array.length / 2) -1])
    middleArray.push(array[(array.length / 2)]);
  } else {
    middleArray.push(array[(array.length -1) / 2])
  }
 return middleArray 
}
console.log(middle([1, 2])) //less than 3
console.log(middle([1, 2, 3, 4])) //even
console.log(middle([1, 2, 3, 4, 5])) //odd