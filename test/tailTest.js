//const assertEqual = require('../assertEqual');
const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns 'Lighthouse', 'Labs' for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

  it("returns '2', for wordsTail.length", () => {
    const wordsTail = tail(["Yo Yo", "Lighthouse", "Labs"]);
    assert.deepEqual(wordsTail.length, 2);
  });

  it("returns '3', for wordsTail.length", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words);
    assert.deepEqual(words.length, 3);
  });
});
//const wordsTail = tail(["Yo Yo", "Lighthouse", "Labs"]);
//assertEqual(wordsTail.length, 2);
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words);
// assertEqual(words.length, 3); //original array should return 3