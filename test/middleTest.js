const expect = require('chai').expect;
const middle = require("../middle");

describe("middle.js test",()=>{
  it("should return an array with one middle number if input array length is an odd number",()=>{
    const arr = [1, 2, 3, 4, 5];
    expect(middle(arr)).to.deep.equal([3]);
  });

  it("should return an array with two middle number if input array length is an even number",()=>{
    const arr = [1, 2, 3, 4];
    expect(middle(arr)).to.deep.equal([2,3]);
  });

  it("should return an empty array if input array is empty array",()=>{
    const arr = [];
    expect(middle(arr)).to.deep.equal([]);
  });

  it("should return an empty array if input array length less than 3",()=>{
    const arr = [1, 2];
    expect(middle(arr)).to.deep.equal([]);
  });

});
