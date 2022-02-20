const assertEqual = require('./assertEqual');

const eqArrays = require('./eqArrays');

const compare = function(value1, value2) {
  if (Array.isArray(value1)) {
    return eqArrays(value1, value2);
  }

  return value1 === value2;
};

const eqObjects = function(object1, object2) {

  // comparing lengths of object key arrays
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  // checks diff obj for all keys in main
  for (const key of keys1) {
    const value1 = object1[key];
    const value2 = object2[key];
    if (!compare(value1, value2)) {
      return false;
    }
  }
  return true;
};


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
// console.log(eqObjects(ab, abc)); // => false
assertEqual(eqObjects(ab, abc), false);

// const object1 = { a: '1', b: [1, 2, 3] };
// const object2 = { a: '1', b: [1, 2, 3, 4] };
// assertEqual(eqObjects(object1, object2), false);
// assertEqual(eqArrays(object1.b, object2.b), false);

module.exports = eqObjects;
