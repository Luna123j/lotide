const flatten = require("../flatten");
const expect = require("chai").expect;

describe("Test flattens.js", () => {

  it("should flatten an nested array", () => {
    let test = [1, 2, 3, [2], 1, [2, 5, 6, 3]];
    let expectR = [1, 2, 3, 2, 1, 2, 5, 6, 3];
    expect(flatten(test)).to.deep.equal(expectR);
  });

});
