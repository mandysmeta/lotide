//const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

//function goal: get middle index, middle two if even array

const middle = function(array) {
  let middleArray = [];
  //if array is less than 3, return empty
  if (array.length < 3) {
    return middleArray;
    //if even, give middle two by dividing length in half 
  } else if (array.length % 2 === 0) {
    middleArray.push(array[(array.length / 2) - 1]);
    middleArray.push(array[(array.length / 2)]);
  } else {
    //or if odd
    middleArray.push(array[(array.length - 1) / 2]);
  }
  return middleArray;
};
assertArraysEqual((middle([1, 2])), []); //less than 3 -empty
assertArraysEqual((middle([1, 2, 3, 4])), [2, 3]); //even -2,3
assertArraysEqual((middle([1, 2, 3, 4, 5])), [3]); //odd -3