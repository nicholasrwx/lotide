const assert = require("chai").assert;
const eqArrays = require("./eqArrays");
const middle = require("./middle");

describe("#Middle Function", () => {
  it("returns true if array length is 2, and middle item returns undefined", () => {
    assert.strictEqual(eqArrays(middle([1, 2]), []), true); //true
  });

  it("returns false if array length is 2, and a middle item other than undefined is returned", () => {
    assert.strictEqual(eqArrays(middle([1, 2]), [1, 2]), false); //false
  });

  it("returns the middle item of an array with a lenght of 3", () => {
    assert.strictEqual(eqArrays(middle([1, 2, 3]), [2]), true); //true
  });

  it("returns false if middle item is compared to a string type", () => {
    assert.strictEqual(eqArrays(middle([1, 2, 3]), ["2"]), false); //false
  });

  it("returns true, if middle two items are returned from an array of even length >= 4", () => {
    assert.strictEqual(eqArrays(middle([1, 2, 3, 4]), [2, 3]), true); //true
  });

  it("returns false if middle two items are compared to a string type", () => {
    assert.strictEqual(eqArrays(middle([1, 2, 3, 4]), ["two", "three"]), false); //false
  });

  it("returns true if middle item is returned from an array of odd length >= 3", () => {
    assert.strictEqual(eqArrays(middle([1, 2, 3, 4, 5]), [3]), true); //true
  });

  it("returns false if two middle items are returned from an array of odd length", () => {
    assert.strictEqual(eqArrays(middle([1, 2, 3, 4, 5]), [3, 4]), false); //false
  });

  it("returns true if two middle items are return from an array of even length >= 4", () => {
    assert.strictEqual(eqArrays(middle([1, 2, 3, 4, 5, 6]), [3, 4]), true); //true
  });

  it("returns false if more than two middle items are returned from an array of even length >= 4", () => {
    assert.strictEqual(
      eqArrays(middle([1, 2, 3, 4, 5, 6]), [2, 3, 4, 5]),
      false
    ); //false
  });
});
