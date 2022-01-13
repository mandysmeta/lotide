const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

console.log(letterPositions("hello"));
