const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};
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
}
console.log(countLetters("hello world"));
  