const letterPositions = require("../letterPositions");
const expect = require("chai").expect;

describe("Test eqArrays.js", () => {

  it("should return letter position in a sentence", () => {
    expect(letterPositions("hello").e).to.deep.equal([1]);
  });
  
});