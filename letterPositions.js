const assertArraysEqual = require('./assertArraysEqual');

const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i];
    
    if (letter in results) {
      results[letter].push(i);
    } else {
      results[letter] = [i];
    }
  }

  return results;
};

assertArraysEqual(letterPositions("hello"));

module.exports = letterPositions;