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
}
const assertArraysEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
}
const takeUntil = function(array, callback) {
  newArray = []
  for (let i of array) {
    if (!callback(i)) {
      newArray.push(i)
    } else {
      break;
    }
  }
  return newArray
}

const data = [1, 2, 3, 4, 5];
const result = takeUntil(data, (x) => x === 4);
console.log(result);

/*compass ex:
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);*/
