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
module.exports = middle;