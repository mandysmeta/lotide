// Remove FUNCTION IMPLEMENTATION
// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`Assertion Failed: ${actual} !== ${expected}`);
//   }
// };
const assertEqual = require('./assertEqual');

const tail = function(list) {
  let answer = list.splice(1);
  return (answer);
};
// TEST CODE
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);