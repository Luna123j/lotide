const expect = require("chai").expect;
const eqObjects = require("../eqObjects");

describe("Test eqObjects.js", () => {
  it("should return true if two object have same key and same values", () => {
    const ab = { a: "1", b: "2" };
    const ba = { b: "2", a: "1" };
    expect(eqObjects(ab, ba)).to.equal(true);
    const cd = { c: "1", d: ["2", 3] };
    const dc = { d: ["2", 3], c: "1" };
    expect(eqObjects(cd, dc)).to.equal(true);
  });

  it("should return false if two object don't have same key", () => {
    const ab = { a: "1", b: "2" };
    const ba = { c: "2", a: "1" };
    expect(eqObjects(ab, ba)).to.equal(false);
  });

  it("should return false if two object have same key but not the same value", () => {
    const ab = { a: "1", b: "2" };
    const ba = { a: "1", b: "6" };
    expect(eqObjects(ab, ba)).to.equal(false);
  });

  it("should return true if two nested object have same key and same values", () => {
    const ab = { a: { z: 1 }, b: 2 };
    const ba = { a: { z: 1 }, b: 2 };
    expect(eqObjects(ab, ba)).to.equal(true);
  });

  it("should return false if two nested object are not the same", () => {
    const ab = { a: { y: 0, z: 1 }, b: 2 };
    const ba = { a: { y: 0 }, b: 2 };
    expect(eqObjects(ab, ba)).to.equal(true);
  });

});
