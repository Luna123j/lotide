const expect = require("chai").expect;
const countLetters = require("../countLetters");

describe("Test countLetter.js", () => {
  it("should return number of each letter of the given string", () => {
    const str = "strLHLST";
    const expectStr = {
      s: 2,
      t: 2,
      r: 1,
      l: 2,
      h: 1,
    };
    expect(countLetters(str)).to.deep.equal(expectStr);
  });

  it("should return an empty object if the input string is empty", () => {
    expect(countLetters("")).to.deep.equal({});
  });

});
