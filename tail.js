// FUNCTION IMPLEMENTATION
const assertEqual = require('../assertEqual');

const tail = function(list) {
  let answer = list.splice(1);
  return (answer);
};
// TEST CODE
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);

module.exports = tail