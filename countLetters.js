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
const histogram = {};

for (let i = 0; i < sentence.length; i++) {
  const letter = sentence[i];
  if (!histogram[letter]) {
    histogram[letter] = 0;
  }
  histogram[letter]++;
}
return histogram;
}
console.log(countLetters("i love oaklan"));
  