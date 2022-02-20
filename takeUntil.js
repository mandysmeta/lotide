//const eqArrays = require('./eqArrays');
//const assertArraysEqual = require('./assertArraysEqual');

const takeUntil = function(array, callback) {
  let newArray = [];
  for (let i of array) {
    if (!callback(i)) {
      newArray.push(i);
    } else {
      break;
    }
  }
  return newArray;
};

const data = [1, 2, 3, 4, 5];
const result = takeUntil(data, (x) => x === 4);
console.log(result);

module.exports = takeUntil;


/*compass ex:
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);*/
