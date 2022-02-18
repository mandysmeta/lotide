//const assertEqual = require('./assertEqual');

//function goal: provide tail of array - every element excluding the first(head)
const tail = function(arr) {
  console.log(arr);
  let answer = arr.slice(1);
  //should return new array without changing original (use slice NOT splice)
  return answer;
};

module.exports = tail;