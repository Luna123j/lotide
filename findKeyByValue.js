const findKeyByValue = function(obj, findKey) {
  let result;
  for (const key in obj) {
    if (obj[key] === findKey) {
      result = key;
      return result;
    }
  }
  return result;
};

module.exports = findKeyByValue;