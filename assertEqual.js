// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`${String.fromCodePoint(0x1F600)} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${String.fromCodePoint(0x274E)} Assertion Failed: ${actual} !== ${expected}`);
  }
};
module.exports = assertEqual;
// TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual("aaa", 1);
// assertEqual(1, 5);
// assertEqual("1", "1");
