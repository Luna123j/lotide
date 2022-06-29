const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`${String.fromCodePoint(0x1F600)} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${String.fromCodePoint(0x274E)} Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(obj, findKey) {
  let result;
  for (const item in obj) {
    if (obj[item] === findKey) {
      result = item;
    }
  }
  return result;
};

const bestTVShowsByGenre = {
  // eslint-disable-next-line camelcase
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);