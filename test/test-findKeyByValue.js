const findKeyByValue = require("../findKeyByValue");
const expect = require("chai").expect;

describe("Test findKeyByValue.js", () => {

  it("should return its key for specific key value", () => {
    const bestTVShowsByGenre = {
      // eslint-disable-next-line camelcase
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama: "The Wire"
    };
    const result = findKeyByValue(bestTVShowsByGenre, "The Wire");
    const expectResult = "drama";
    expect(result).to.equal(expectResult);
  });

  it("should return undefined if the specific key value not exist", () => {
    const bestTVShowsByGenre = {
      // eslint-disable-next-line camelcase
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama: "The Wire"
    };
    const result = findKeyByValue(bestTVShowsByGenre, "That '70s Show");
    const expectResult = undefined;
    expect(result).to.equal(expectResult);
  });

});
