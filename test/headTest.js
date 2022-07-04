const assert = require('chai').assert;
const expect = require('chai').expect;
const head = require('../head');

describe("head.js test", () => {
  it('should return 5 for [5, 6, 7]', () => {
    assert(head([5, 6, 7]), 5);
  });

  it('should return Hello for ["Hello", "Lighthouse", "Labs"]', () => {
    assert(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });

  it('should return undefined for []', () => {
    expect(head([])).to.equal(undefined);
  });

});


