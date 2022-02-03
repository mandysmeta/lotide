const eqObjects = function(object1, object2) {
  // comparing lengths of object key arrays
  const objOneKeys = Object.keys(object1);
  const objTwoKeys = Object.keys(object2);
  if (objOneKeys.length !== objTwoKeys.length) {
    return false;
  }
  // checks diff obj(object2) for all keys in main(object1)
  for (let key in object1) {
    // checks if value is an array on each
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if (!eqArrays(object1[key], object2[key])) {
          //console.log('hello world');
          return false;
      }
    } else if (object1[key] !== object2[key]) {

      //compares values if they are primitives
        return false;
    }
  }
  return true;
};


const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};
assertObjectsEqual({ a: '1', b: 2 },{ b: 2, a: '1' })