// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqArrays = require("./eqArrays");

const eqObjects = function(object1, object2) {
  const key1 = Object.keys(object1);
  const key2 = Object.keys(object2);
  let result = true;

  if (key1.length === key2.length) {
    for (const obj in object1) {
      if (!object2[obj]) {
        return false;
      }
      if (!Array.isArray(object1[obj]) && !Array.isArray(object2[obj]) && typeof (object1[obj]) === 'object' && typeof (object2[obj]) === 'object') {
        result = eqObjects(object1[obj], object2[obj]);
        return result;
      }
      if (typeof (object1[obj]) === typeof (object2[obj])) {
        if (eqArrays(object2[obj], object1[obj])) {
          result = true;
        } else {
          result = false;
        }
      } else {
        return result;
      }
    }
  }
  return result;
};

module.exports = eqObjects;