const assertEqual = require('/vagrant/lotide/assertEqual');

//function
const eqArrays = function(arr1, arr2) {
  let result = true;
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
        result = eqArrays(arr1[i], arr2[i]);
      } else if (Array.isArray(arr1[i]) !== Array.isArray(arr2[i])) {
        result = false;
      } else if (arr1[i] !== arr2[i]) {
        result = false;
      } else {
        result = true;
      }
    }
  } else {
    result = false;
  }
  return result;
};

//TEST CODE
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);// => false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 3]), false);
assertEqual(eqArrays([1, 2, 5], [1, 2, 3]), false);
assertEqual(eqArrays([], []), true);

assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true) // => true

assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false)// => false
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false) // => false
assertEqual(eqArrays([[2, 3], [4]], [[2, 5], 4]), false) 
