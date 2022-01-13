const eqObjects = function(object1, object2) {
  // comparing lengths of object key arrays
  const objOneKeys = Object.keys(object1);
  const objTwoKeys = Object.keys(object2);
  if (objOneKeys.length !== objTwoKeys.length) {
    return false;
  }
  // checks diff obj(object2) for all keys in main(object1)
  for (let key in object1) {
    if (!object2.hasOwnProperty(key)) {
      return false;
    }
    // checks if value is an array on each
    if (Array.isArray(object1[key])) {
      if (Array.isArray(object2[key])) {
        if (!eqArrays(object1[key], object2[key])) {
          console.log('hello world');
          return false;
        }
      }
    } else {
      //compares values if they are primitives
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};
console.log(`Example label: ${inspect(actual)}`);