const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

assertArraysEqual((middle([1, 2])), []); //less than 3 -empty
assertArraysEqual((middle([1, 2, 3, 4])), [2, 3]); //even -2,3
assertArraysEqual((middle([1, 2, 3, 4, 5])), [3]); //odd -3