//const assertEqual = require('./assertEqual');

//function goal: provide tail of array - every element excluding the first(head)
const tail = function(arr) {
  console.log(arr);
  let answer = arr.slice(1);
  //should return new array without changing original (use slice NOT splice)
  return answer;
};

// Remove/Move to test file - TEST CODE
// const wordsTail = tail(["Yo Yo", "Lighthouse", "Labs"]);
// assertEqual(wordsTail.length, 2);
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words);
// assertEqual(words.length, 3); //original array should return 3

module.exports = tail;