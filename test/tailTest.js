const assertEqual = require('../assertEqual');
const tail = require('../tail');

const wordsTail = tail(["Yo Yo", "Lighthouse", "Labs"]);
assertEqual(wordsTail.length, 2);
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3); //original array should return 3