const expect = require('chai').expect;

const tail = require('../tail');

describe("tail.js test", () => {

  it("should remove index 0 and return new array", () => {
    const arr = ["Hello", "Lighthouse", "Labs"];
    const expectResult = ["Lighthouse", "Labs"];
    expect(tail(arr)).to.deep.equal(expectResult);
  });

  it("should not change the original array", () => {
    const arr = ["Hello", "Lighthouse", "Labs"];
    tail(arr);
    expect(arr.length).to.equal(3);
  });

});
