// index.js
const head = require('./head');
const tail = require('./tail');
const middle = require('./middle');
const countOnly = require("./countOnly");
const letterPositions = require("./letterPositions");
const flatten = require("./flatten");
const findKeyByValue = require("./findKeyByValue");
const eqArrays = require("./eqArrays");
const eqObjects = require("./eqObjects");

module.exports = {
  head,
  tail,
  middle,
  flatten,
  countOnly,
  letterPositions,
  findKeyByValue,
  eqObjects,
  eqArrays,
};