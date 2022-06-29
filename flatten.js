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

const flatten = function(arrs) {
  let newArray = [];
  for (const arr of arrs) {
    if (Array.isArray(arr)) {
      for (let i = 0; i < arr.length; i++) {
        newArray.push(arr[i]);
      }
    } else {
      newArray.push(arr);
    }
  }
  return newArray;
};

let test = [1, 2, 3, [2], 1, [2, 5, 6, 3]];
console.log(flatten([1, 2, 3, [2], 1, [2, 5, 6, 3]]));
assertArraysEqual(flatten(test), test);


test = [1, 2, 3, 4];
console.log(flatten([1, 2, 3,4]));
assertArraysEqual(flatten(test), test);
