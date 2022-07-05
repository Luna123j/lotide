const letterPositions = require("../letterPositions");
const expect = require("chai").expect;

describe("Test letterPositon.js", () => {

  it("should return letter position in a sentence", () => {
    expect(letterPositions("hello").e).to.deep.equal([1]);
  });
  
});