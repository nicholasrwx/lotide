# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @nicholasrwx/lotide`

**Require it:**

`const _ = require('@nicholasrwx/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function1(head)`: compare the first element in an array
* `function2(middle)`: return the middle value of an array
* `function3(tail)`: return the tail of an array
* `function4(assertArraysEqual)`: determine if two arrays are identical by using eqArrays
* `function5(assertEqual)`: strict comparison of two values that are not objects/arrays 
* `function6(eqArrays)`: compares two arrays, and returns true if identical
