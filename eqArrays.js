const eqArrays = function(arr1, arr2) {
  let result = true;
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
        result = eqArrays(arr1[i], arr2[i]);
        return result;
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
module.exports = eqArrays;