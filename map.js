//const assertArraysEqual = require('./assertArraysEqual');
//const eqArrays = require('./eqArrays');

const map = function(array, callback) {
  //map function takes in: 1. array to map & 2. callback func
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
console.log(results1);

const results2 = map(words, word => word[0]);
console.log(results2);