const assertEqual = require('./assertEqual');

//take in sentence(string)
//return count of each letter of sentence
const countLetters = function(sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i];
    if (!results[letter]) {
      results[letter] = 0;
    }
    results[letter]++;
  }
  return results;
};
assertEqual((countLetters("hello world")));

module.exports = countLetters;
  