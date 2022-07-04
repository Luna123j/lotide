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
    console.log(`😃 The two array are equal.`);
  } else {
    console.log(`❌ The two array are not equal.`);
  }

};

module.exports = assertArraysEqual;


//TEST CODE
// assertArraysEqual([1, 2, 3], [1, 2, 3]);
// assertArraysEqual([1, 2, 6], [1, 2, 3]);
// assertArraysEqual(['1', '2', '3'], [1, 2, 3]);
// assertArraysEqual([1, 2], [1, 2, 3]);



