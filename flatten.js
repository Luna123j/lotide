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

module.exports = flatten;
