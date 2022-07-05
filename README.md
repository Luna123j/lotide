# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @shenglun/lotide`

**Require it:**

`const _ = require('@shenglun/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: return index 0 of an array
* `tail(array)`: return an array without index 0
* `middle(array)`: return middle value of an array
* `flatten (array)`: return flatten array 
* `countOnly(allItems, itemsToCount)`: return count number of item(obj) in the given items(obj)
* `letterPositions(sentence)`: return letter position in an sentence
* `findKeyByValue(object,objectKeyValue)`: return key from an given key value
* `eqObjects(obj,obj)`: return true if two objects are same
* `eqArrays(arr,arr)`: return true if two arrays are same
