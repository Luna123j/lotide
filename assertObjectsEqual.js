const eqArrays = function(arr1, arr2) {
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};


const eqObjects = function(object1, object2) {
  const key1 = Object.keys(object1);
  const key2 = Object.keys(object2);
  let result = false;
  if (key1.length === key2.length) {
    for (const obj in object1) {
      //console.log(eqArrays(object2[obj],object1[obj]));
      if (eqArrays(object2[obj], object1[obj])) {
        result = true;
      } else {
        result = false;
      }
    }
  } else {
    result = false;
  }
  return result;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`${String.fromCodePoint(0x1F600)} Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`${String.fromCodePoint(0x274E)} Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

assertObjectsEqual({},{});





