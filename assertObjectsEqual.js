const eqObjects = require('./eqObjects');

//function goal: compare two objects, pass or fail if equal or not
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};
//console.log(`Example label: ${inspect(actual)}`);

assertObjectsEqual({ a: '1', b: 2 },{ b: 2, a: '1' });

module.exports = assertObjectsEqual;