// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
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


const eqObjects = function(object1, object2) {
  const key1 = Object.keys(object1);
  const key2 = Object.keys(object2);
  let result = false;
  if (key1.length === key2.length) {
    for (const obj in object1) {
      //console.log(eqArrays(object2[obj],object1[obj]));
      if (eqArrays(object2[obj], object1[obj])) {
        result = true;
      } else {
        result = false;
      }
    }
  } else {
    result = false;
  }
  return result;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false