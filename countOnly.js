const assertEqual = require('./assertEqual');

//countOnly will be given an array and an object
//(object should contain counts of everything in input)
const countOnly = function(allItems, itemsToCount) {
  let result = {};
  for (let item of allItems) {
    //console.log(item);
    if (itemsToCount[item]) {
      if (result[item]) {
        result[item]++;
      } else {
        result[item] = 1;
      }
    }
  }
  return result;
};
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);

module.exports = countOnly;