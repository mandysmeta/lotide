//const assertArraysEqual = require('../assertArraysEqual');
const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns '[]' for [1, 2]", () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  it("returns '[2, 3]' for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

  it("returns '[3]' for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

});

// assertArraysEqual((middle([1, 2])), []); //less than 3 -empty
// assertArraysEqual((middle([1, 2, 3, 4])), [2, 3]); //even -2,3
// assertArraysEqual((middle([1, 2, 3, 4, 5])), [3]); //odd -3