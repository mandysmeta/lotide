//const assertEqual = require('./assertEqual');

const findKey = function(object, callback) {
  const keys = Object.keys(object);
  for (const restaurants of keys) {
    if (callback(object[restaurants])) {
      return restaurants;
    }
  }
};

console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)); // => "noma"

module.exports = findKey;
