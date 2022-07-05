const countOnly = require("../countOnly");
const expect = require("chai").expect;

describe("Test countOnly.js", () => {

  it("should return count for specific word if the word occurs", () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    const countThisObj = { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false };
    const result = countOnly(firstNames, countThisObj);
    const expectResult = { "Jason": 1, "Fang": 2 };
    expect(result).to.deep.equal(expectResult);
    
  });
});
