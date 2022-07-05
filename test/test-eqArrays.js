const eqArrays = require("../eqArrays");
const expect = require("chai").expect;

describe("Test eqArrays.js", () => {

  it("should return true if two arrays are equal", () => {
    const arr1 = [1, 2, 3];
    const arr2 = [1, 2, 3];
    expect(eqArrays(arr1, arr2)).to.equal(true);
  });

  it("should return false if two arrays are not equal", () => {
    const arr1 = [1, 2, 3];
    const arr2 = [1, 2, 4];
    const arr3 = [1, 2, 3, 4];
    expect(eqArrays(arr1, arr2)).to.equal(false);
    expect(eqArrays(arr1, arr3)).to.equal(false);
  });

  it("should return true if two arrays are both empty", () => {
    const arr1 = [];
    const arr2 = [];
    expect(eqArrays(arr1, arr2)).to.equal(true);
  });

  it("should return true if two nested arrays are equal", () => {
    const arr1 = [1, [2], 2, 3];
    const arr2 = [1, [2], 2, 3];
    expect(eqArrays(arr1, arr2)).to.equal(true);
  });

  it("should return false if two nested arrays are not equal", () => {
    const arr1 = [1, [2], 2, 3];
    const arr2 = [1, [2, 5], 2, 3];
    expect(eqArrays(arr1, arr2)).to.equal(false);
  });

  it("should return false if two arrays contain same value but different type of value", () => {
    const arr1 = [1, 2, 3];
    const arr2 = ["1", "2", "3"];
    expect(eqArrays(arr1, arr2)).to.equal(false);
  });


});
