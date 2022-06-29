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




//TEST CODE
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 6], [1, 2, 3]);
assertArraysEqual(['1', '2', '3'], [1, 2, 3]);
assertArraysEqual([1, 2], [1, 2, 3]);


