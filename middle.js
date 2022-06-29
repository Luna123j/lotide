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

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`${String.fromCodePoint(0x1F600)}The two array are equal.`);
  } else {
    console.log(`${String.fromCodePoint(0x274E)}The two array are not equal.`);
  }

};

const middle = function(arr) {
  let middleValue = [];
  if (arr.length > 2) {
    if (arr.length % 2 === 0) {
      middleValue.push(arr[arr.length / 2 - 1]);
      middleValue.push(arr[arr.length / 2]);
    } else {
      middleValue.push(arr[(arr.length - 1) / 2]);
    }
  }
  return middleValue;
};

let test = middle([1, 2, 3, 4, 5]);

assertArraysEqual(test, [3]);
test = middle([1, 2, 3, 4]);
assertArraysEqual(test, [2, 3]);
test = middle([]);
assertArraysEqual(test, []);
test = middle([1, 2]);
assertArraysEqual(test, []);