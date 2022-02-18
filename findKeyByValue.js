const assertEqual = require('./assertEqual');

const findKeyByValue = function(object, value) {
  const keys = Object.keys(object);
  for (const movies of keys) {
    if (object[movies] === value) {
      return movies;
    }
  }

};
const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const provinces = {
  west: "BC",
  prairies: "Sask",
  east:  "Ontario"
};
//console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(provinces, "Sask"), "prairies");

//Object.keys function
//for...of to loop over keys (for(let property of array))
//write more test cases
